import {
    MusicContext,
    MetainfoContext,
    Concurrent_blockContext,
    StavesrowContext,
    StaffContext,
    Empty_staffContext,
    Timed_elementsContext,
    Timed_elementContext,
    NotesContext,
    GroupContext,
    Scoped_groupContext,
    Unscoped_groupContext,
} from './antlr-generated/MasciiParser';
import { TimeSlot } from './musicelements/TimeSlot';
import { TICKS_PER_BEAT } from './MasciiSyntaxEventListener';

// Baseline spacing primitives
const WITHIN_BEAT_SEP = ' ';  // gap between tick columns inside a beat
const BEAT_SEP = '  ';        // gap across a beat boundary (1 base + 1 beat marker)
const BAR_SEP = ' | ';        // gap between measures (bar line)

// A rendered token. Brackets have no timing; leaves carry the tick of their onset.
interface Tok {
    kind: 'open' | 'close' | 'leaf';
    text: string;
    tick: number;
    // true when this token begins a new (space-separated) timed_element, i.e. a
    // space is permitted before it. false for tokens glued within one element.
    boundary: boolean;
}

/**
 * Formats mascii source: condenses runs of spaces/tabs to a single space, then
 * re-inserts spaces to lay notes out on a time grid (piano-roll style). Beats are
 * separated with extra space, and stacked (concurrent) parts have their bar lines
 * and beats aligned vertically. The metainfo block and comment rows are left
 * untouched.
 */
export class FormatGenerator {
    format(tree: MusicContext, source: string): string {
        const lines = source.split('\n').map(l => l.replace(/\r$/, ''));
        const rowMap = new Map<number, string>(); // 0-based line index -> formatted text

        const bars = tree.bars();
        if (bars) {
            let numerator = 4; // default time signature numerator (4/4)
            for (const block of bars.concurrent_block_list()) {
                numerator = this.formatBlock(block, numerator, rowMap);
            }
        }

        const outLines = lines.map((ln, idx) => {
            if (!rowMap.has(idx)) return ln;
            let formatted = rowMap.get(idx)!;
            // Preserve any trailing end-of-line comment that the parser skipped.
            const ci = ln.indexOf('--');
            if (ci >= 0) {
                formatted = formatted + ' ' + ln.slice(ci).replace(/\s+$/, '');
            }
            return formatted;
        });

        return outLines.join('\n');
    }

    // Formats one concurrent block in place into rowMap; returns the (possibly
    // updated) time-signature numerator to carry into following blocks.
    private formatBlock(
        block: Concurrent_blockContext,
        numeratorIn: number,
        rowMap: Map<number, string>,
    ): number {
        let numerator = numeratorIn;
        const mi = block.metainfo();
        if (mi) numerator = readTimeNumerator(mi, numerator);

        // Collect each stavesrow as a list of measures. Each measure maps an
        // onset tick -> the text that starts at that tick (notes/rests with their
        // glued brackets).
        const rows: { line: number; measures: Map<number, string>[] }[] = [];
        for (const snl of block.staves_n_lyricsrow_list()) {
            const sr = snl.stavesrow();
            if (!sr) continue;
            const startLine = sr.start?.line;
            if (startLine == null) continue;
            // A trailing "--" comment makes the lexer swallow the row-separating
            // newline, merging the next source line into this row. Reformatting
            // such a multi-line row would corrupt the text, so leave it verbatim.
            const stopLine = sr.stop?.line;
            if (stopLine != null && startLine !== stopLine) continue;
            rows.push({
                line: startLine - 1,
                measures: this.buildRowMeasures(sr, numerator),
            });
        }
        if (rows.length === 0) return numerator;

        // For each measure, the tick columns are the union of every part's onset
        // ticks; each column's width is the widest cell any part places there.
        // This lines up concurrently-starting notes vertically across the parts.
        const measureCount = Math.max(...rows.map(r => r.measures.length));
        const tickLists: number[][] = [];
        const colWidths: Map<number, number>[] = [];
        for (let m = 0; m < measureCount; m++) {
            const ticks = new Set<number>();
            for (const r of rows) {
                if (m < r.measures.length) {
                    for (const tk of r.measures[m]!.keys()) ticks.add(tk);
                }
            }
            const sorted = [...ticks].sort((a, b) => a - b);
            tickLists[m] = sorted;

            const widths = new Map<number, number>();
            for (const tk of sorted) {
                let w = 0;
                for (const r of rows) {
                    if (m < r.measures.length) {
                        const cell = r.measures[m]!.get(tk);
                        if (cell) w = Math.max(w, cell.length);
                    }
                }
                widths.set(tk, w);
            }
            colWidths[m] = widths;
        }

        for (const r of rows) {
            rowMap.set(r.line, renderRow(r.measures, tickLists, colWidths));
        }
        return numerator;
    }

    private buildRowMeasures(sr: StavesrowContext, numerator: number): Map<number, string>[] {
        const node = sr.stavesrow_first_empty() ?? sr.stavesrow_first_notempty();
        const measures: Map<number, string>[] = [];
        for (const child of node?.children ?? []) {
            if (child instanceof StaffContext) {
                measures.push(this.buildMeasureCells(child, numerator));
            } else if (child instanceof Empty_staffContext) {
                measures.push(new Map<number, string>());
            }
            // STAFF_SEPARATOR terminals and spaces are implied by structure
        }
        return measures;
    }

    private buildMeasureCells(staff: StaffContext, numerator: number): Map<number, string> {
        const barTicks = numerator * TICKS_PER_BEAT;
        const root = TimeSlot.init(0, barTicks);
        const toks: Tok[] = [];
        const tes = staff.timed_elements();
        if (tes) emitTimedElements(tes, root, toks);

        const cells = new Map<number, string>();
        let pendingOpens = '';
        let havePending = false;
        let pendingBoundary = false;
        let lastTick = -1;

        for (const t of toks) {
            if (t.kind === 'open') {
                if (!havePending) {
                    havePending = true;
                    pendingBoundary = t.boundary;
                }
                pendingOpens += t.text;
            } else if (t.kind === 'close') {
                if (lastTick >= 0) cells.set(lastTick, (cells.get(lastTick) ?? '') + t.text);
                else pendingOpens += t.text;
            } else {
                let tick = t.tick;
                if (tick < 0) tick = 0;

                const spaceAllowed = havePending ? pendingBoundary : t.boundary;
                const piece = pendingOpens + t.text;
                const prev = cells.get(tick) ?? '';
                if (prev === '') {
                    cells.set(tick, piece);
                } else if (!spaceAllowed || endsWithOpenBracket(prev)) {
                    cells.set(tick, prev + piece);
                } else {
                    cells.set(tick, prev + ' ' + piece);
                }

                pendingOpens = '';
                havePending = false;
                lastTick = tick;
            }
        }
        if (pendingOpens) {
            const tk = lastTick >= 0 ? lastTick : 0;
            cells.set(tk, (cells.get(tk) ?? '') + pendingOpens);
        }
        return cells;
    }
}

// Emits the tokens for a timed_elements node (a space-separated sequence of
// timed_element) into `out`, dividing `slot` among the children by time.
function emitTimedElements(tes: Timed_elementsContext, slot: TimeSlot, out: Tok[]): void {
    const children = tes.timed_element_list();
    if (children.length === 0) return;

    const childSizes = children.map(c => c.duration_doubled() != null);
    const slots = slot.divvy(childSizes);

    for (let i = 0; i < children.length; i++) {
        applyDots(children[i]!, slots, i);
        emitTimedElement(children[i]!, slots[i]!, out);
    }
}

// Mirrors MasciiSyntaxEventListener's dotted-note timing: a dotted element steals
// time from (normal dot) or lends time to (inverse dot) its right-hand neighbour.
function applyDots(child: Timed_elementContext, slots: TimeSlot[], i: number): void {
    const inv = child._inverse_dot;
    const norm = child._normal_dot;
    const dotToken = inv ?? norm;
    if (!dotToken) return;
    const dotCount = dotToken.text.length;
    if (dotCount === 0) return;

    const mytime = slots[i];
    const nexttime = slots[i + 1];
    if (!mytime || !nexttime) return; // no neighbour to exchange time with

    const baseTime = norm != null ? nexttime : mytime;
    let amount = Math.floor(baseTime.duration / 2);
    let lucre = amount;
    for (let d = 1; d < dotCount; d++) {
        amount = Math.floor(amount / 2);
        lucre += amount;
    }
    if (inv != null) lucre = -lucre;

    mytime.duration += lucre;
    nexttime.duration -= lucre;
    nexttime.offset += lucre;
}

function emitTimedElement(child: Timed_elementContext, slot: TimeSlot, out: Tok[]): void {
    const start = out.length;
    // Index of the first emitted token for each direct body node of this element.
    const bodyNodeStarts: number[] = [];

    const rest = child.rest();
    if (rest) {
        bodyNodeStarts.push(out.length);
        out.push({ kind: 'leaf', text: rest.getText(), tick: slot.offset, boundary: true });
    } else {
        for (const node of child.children ?? []) {
            if (node instanceof GroupContext) {
                const g = node.scoped_group() ?? node.unscoped_group();
                bodyNodeStarts.push(out.length);
                out.push({ kind: 'open', text: openChar(g), tick: 0, boundary: true });
                const inner = g!.timed_elements();
                if (inner) emitTimedElements(inner, slot, out);
                out.push({ kind: 'close', text: closeChar(g), tick: 0, boundary: false });
            } else if (node instanceof NotesContext) {
                bodyNodeStarts.push(out.length);
                out.push({ kind: 'leaf', text: node.getText(), tick: slot.offset, boundary: true });
            }
        }
    }

    if (out.length <= start) return;

    // Direct body nodes within one timed_element are glued together (no spaces),
    // so only the first keeps its boundary; nested tokens are left untouched.
    for (let k = 1; k < bodyNodeStarts.length; k++) {
        out[bodyNodeStarts[k]!]!.boundary = false;
    }

    // Glue the element's dot / double-duration decorations onto its own tokens.
    const inv = child._inverse_dot;
    const norm = child._normal_dot;
    const dd = child.duration_doubled();
    const prefix = inv ? inv.text : '';
    const suffix = (dd ? dd.getText() : '') + (norm ? norm.text : '');

    const first = out[start]!;
    first.text = prefix + first.text;
    first.boundary = true;
    const last = out[out.length - 1]!;
    last.text = last.text + suffix;
}

function openChar(g: Scoped_groupContext | Unscoped_groupContext | null): string {
    return g instanceof Scoped_groupContext ? '(' : '[';
}

function closeChar(g: Scoped_groupContext | Unscoped_groupContext | null): string {
    return g instanceof Scoped_groupContext ? ')' : ']';
}

function endsWithOpenBracket(s: string): boolean {
    return s.endsWith('[') || s.endsWith('(');
}

function renderRow(
    measures: Map<number, string>[],
    tickLists: number[][],
    colWidths: Map<number, number>[],
): string {
    const measureStrs = measures.map((cells, m) => {
        const ticks = tickLists[m] ?? [];
        const widths = colWidths[m]!;
        let s = '';
        let prevTick = -1;
        for (let i = 0; i < ticks.length; i++) {
            const tk = ticks[i]!;
            if (i > 0) {
                const crossesBeat =
                    Math.floor(tk / TICKS_PER_BEAT) !== Math.floor(prevTick / TICKS_PER_BEAT);
                s += crossesBeat ? BEAT_SEP : WITHIN_BEAT_SEP;
            }
            s += (cells.get(tk) ?? '').padEnd(widths.get(tk) ?? 0);
            prevTick = tk;
        }
        return s;
    });
    return measureStrs.join(BAR_SEP).replace(/\s+$/, '');
}

function readTimeNumerator(mi: MetainfoContext, current: number): number {
    const headers = mi.headers();
    if (!headers) return current;
    for (const h of headers.header_list()) {
        const name = h.header_name().getText().toLowerCase();
        if (name === 'time') {
            const val = h.header_values().getText();
            const n = parseInt(val.split('/')[0] ?? '', 10);
            if (!isNaN(n) && n > 0) return n;
        }
    }
    return current;
}
