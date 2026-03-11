import { writeFileSync } from 'fs';
import { ParseResult } from './ParseResult';
import { Part } from './musicelements/Part';
import { Note, NoteSpelling } from './musicelements/Note';
import { MetaInfoElement, TimeSig, KeySig, Tempo, Title, Copyright, Composer, Lyricist, Patch, Lyric } from './musicelements/MetaInfo';
import { Accidental } from './musicelements/Accidental';
import { TICKS_PER_BEAT } from './MasciiSyntaxEventListener';

// ---------------------------------------------------------------------------
// Duration → note-type resolution
// ---------------------------------------------------------------------------

interface NoteTypeResult {
    type: string;
    dots: number;
    // Set when the note belongs to a tuplet (e.g. triplet, quintuplet)
    actualNotes?: number;
    normalNotes?: number;
    normalType?: string;
    // Set by annotateTuplets() after the fact
    tupletTag?: 'start' | 'stop';
}

// Standard note types ordered largest→smallest (ticks at TICKS_PER_BEAT = 480)
const STD: Array<{ type: string; ticks: number }> = [
    { type: 'breve',   ticks: TICKS_PER_BEAT * 8 },
    { type: 'whole',   ticks: TICKS_PER_BEAT * 4 },
    { type: 'half',    ticks: TICKS_PER_BEAT * 2 },
    { type: 'quarter', ticks: TICKS_PER_BEAT },
    { type: 'eighth',  ticks: TICKS_PER_BEAT / 2 },
    { type: '16th',    ticks: TICKS_PER_BEAT / 4 },
    { type: '32nd',    ticks: TICKS_PER_BEAT / 8 },
    { type: '64th',    ticks: TICKS_PER_BEAT / 16 },
    { type: '128th',   ticks: TICKS_PER_BEAT / 32 },
];

// Expanded table: standard + dotted + double-dotted, sorted largest→smallest
interface DurEntry { type: string; ticks: number; dots: number }
const ALL_DURS: DurEntry[] = [];
for (const { type, ticks } of STD) {
    ALL_DURS.push({ type, ticks, dots: 0 });
    if (ticks % 2 === 0) ALL_DURS.push({ type, ticks: ticks * 3 / 2, dots: 1 });  // dotted
    if (ticks % 4 === 0) ALL_DURS.push({ type, ticks: ticks * 7 / 4, dots: 2 }); // double-dotted
}
ALL_DURS.sort((a, b) => b.ticks - a.ticks);

/** Map a tick duration to a NoteTypeResult.  Returns null if ticks <= 0. */
function ticksToNoteType(ticks: number): NoteTypeResult | null {
    if (ticks <= 0) return null;

    // 1. Standard / dotted / double-dotted (exact integer match)
    for (const { type, ticks: t, dots } of ALL_DURS) {
        if (ticks === t) return { type, dots };
    }

    // 2. Tuplets – check common ratios: 3:2, 5:4, 7:4, 9:8, 3:4
    const TUPLETS: Array<[number, number]> = [[3, 2], [5, 4], [7, 4], [9, 8], [3, 4]];
    for (const [actual, normal] of TUPLETS) {
        for (const { type, ticks: base } of STD) {
            // ticks = base * normal / actual  →  ticks * actual === base * normal
            if (ticks * actual === base * normal) {
                return { type, dots: 0, actualNotes: actual, normalNotes: normal, normalType: type };
            }
        }
    }

    // 3. Nearest approximation (avoid crashing on unusual divisions)
    let best = STD[STD.length - 1]!;
    let bestDiff = Math.abs(ticks - best.ticks);
    for (const nt of ALL_DURS) {
        const diff = Math.abs(ticks - nt.ticks);
        if (diff < bestDiff) { bestDiff = diff; best = nt; }
    }
    return { type: best.type, dots: 0 };
}

/**
 * Greedily decompose `ticks` into a sequence of representable durations
 * (standard, dotted, double-dotted).  Used to fill rests.
 */
function splitIntoRests(ticks: number): NoteTypeResult[] {
    const out: NoteTypeResult[] = [];
    let remaining = ticks;
    while (remaining > 0) {
        let matched = false;
        for (const { type, ticks: t, dots } of ALL_DURS) {
            if (t <= remaining) {
                out.push({ type, dots });
                remaining -= t;
                matched = true;
                break;
            }
        }
        if (!matched) break; // shouldn't happen, but guard against infinite loop
    }
    return out;
}

// ---------------------------------------------------------------------------
// Measure-event model
// ---------------------------------------------------------------------------

type MeasureEvent =
    | { kind: 'note'; notes: Note[]; ticks: number; tr: NoteTypeResult }
    | { kind: 'rest'; ticks: number; tr: NoteTypeResult };

/**
 * Build the ordered sequence of events (notes + implicit rests) for one
 * measure of one part.
 *
 * `notes` must all start within [measureStart, measureStart+measureTicks).
 */
function buildEvents(
    notes: Note[],
    measureStart: number,
    measureTicks: number,
): MeasureEvent[] {
    const events: MeasureEvent[] = [];

    // Sort by start tick, then group simultaneous notes into chords
    const sorted = [...notes].sort((a, b) => a.getStart() - b.getStart());
    const chords: Note[][] = [];
    for (const n of sorted) {
        if (n.getDuration() <= 0) continue;
        const last = chords[chords.length - 1];
        if (last && last[0]!.getStart() === n.getStart()) last.push(n);
        else chords.push([n]);
    }

    let cursor = measureStart;
    for (const chord of chords) {
        const start = chord[0]!.getStart();
        const dur   = chord[0]!.getDuration();

        // Fill any gap before this chord with rests
        if (start > cursor) {
            for (const tr of splitIntoRests(start - cursor)) {
                events.push({ kind: 'rest', ticks: tr.dots === 0 ? tickDur(tr) : tickDurDotted(tr), tr });
            }
        }

        const tr = ticksToNoteType(dur);
        if (tr) events.push({ kind: 'note', notes: chord, ticks: dur, tr });
        cursor = start + dur;
    }

    // Fill trailing gap
    const end = measureStart + measureTicks;
    if (cursor < end) {
        for (const tr of splitIntoRests(end - cursor)) {
            events.push({ kind: 'rest', ticks: tr.dots === 0 ? tickDur(tr) : tickDurDotted(tr), tr });
        }
    }

    return events;
}

/** Recover the tick value of a NoteTypeResult (for rest display). */
function tickDur(tr: NoteTypeResult): number {
    return STD.find(s => s.type === tr.type)?.ticks ?? TICKS_PER_BEAT;
}
function tickDurDotted(tr: NoteTypeResult): number {
    const base = tickDur(tr);
    if (tr.dots === 1) return base * 3 / 2;
    if (tr.dots === 2) return base * 7 / 4;
    return base;
}

/**
 * Walk the events list and add tupletTag 'start'/'stop' to groups of
 * consecutive events that share the same time-modification signature.
 * Groups are capped at `actualNotes` to produce well-formed tuplet brackets.
 */
function annotateTuplets(events: MeasureEvent[]): void {
    let i = 0;
    while (i < events.length) {
        const tr = events[i]!.tr;
        if (tr.actualNotes == null) { i++; continue; }

        const key = `${tr.actualNotes}:${tr.normalNotes}:${tr.normalType}`;
        const groupSize = tr.actualNotes;
        let count = 0;

        while (i < events.length) {
            const trj = events[i]!.tr;
            const keyJ = trj.actualNotes != null
                ? `${trj.actualNotes}:${trj.normalNotes}:${trj.normalType}`
                : null;
            if (keyJ !== key) break;

            count++;
            if (count === 1) trj.tupletTag = 'start';
            if (count === groupSize) {
                trj.tupletTag = 'stop';
                count = 0;
            }
            i++;
        }

        // Close a partial group (measure ran out before groupSize notes)
        if (count > 0) events[i - 1]!.tr.tupletTag = 'stop';
    }
}

// ---------------------------------------------------------------------------
// XML helpers
// ---------------------------------------------------------------------------

function esc(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
}

class Xml {
    private buf: string[] = [];
    private depth = 0;

    indent(): string { return '  '.repeat(this.depth); }

    open(tag: string, attrs = ''): this {
        this.buf.push(`${this.indent()}<${tag}${attrs ? ' ' + attrs : ''}>`);
        this.depth++;
        return this;
    }

    close(tag: string): this {
        this.depth--;
        this.buf.push(`${this.indent()}</${tag}>`);
        return this;
    }

    leaf(tag: string, value: string | number, attrs = ''): this {
        this.buf.push(`${this.indent()}<${tag}${attrs ? ' ' + attrs : ''}>${value}</${tag}>`);
        return this;
    }

    selfClose(tag: string, attrs = ''): this {
        this.buf.push(`${this.indent()}<${tag}${attrs ? ' ' + attrs : ''}/>`);
        return this;
    }

    raw(line: string): this { this.buf.push(line); return this; }

    toString(): string { return this.buf.join('\n'); }
}

// ---------------------------------------------------------------------------
// Clef resolution
// ---------------------------------------------------------------------------

interface ClefSpec { sign: string; line: number }

function resolveClef(name: string): ClefSpec {
    switch (name.toLowerCase()) {
        case 'treble':         return { sign: 'G', line: 2 };
        case 'bass':           return { sign: 'F', line: 4 };
        case 'alto':           return { sign: 'C', line: 3 };
        case 'tenor':          return { sign: 'C', line: 4 };
        case 'soprano':        return { sign: 'C', line: 1 };
        case 'mezzo-soprano':  return { sign: 'C', line: 2 };
        case 'baritone':       return { sign: 'F', line: 3 };
        case 'percussion':     return { sign: 'percussion', line: 2 };
        default:               return { sign: 'G', line: 2 }; // default to treble
    }
}

// ---------------------------------------------------------------------------
// MusicXmlGenerator
// ---------------------------------------------------------------------------

export class MusicXmlGenerator {
    save(result: ParseResult, filename: string): string | null {
        const parts = result.getParts();
        if (!parts || parts.length === 0) return null;
        writeFileSync(filename, this.generate(result), 'utf-8');
        return filename;
    }

    generate(result: ParseResult): string {
        const parts = result.getParts() ?? [];

        // Extract global meta
        let timeSig = new TimeSig(); timeSig.setRawValue('4/4');
        let keySig: KeySig | null = null;
        let tempo: Tempo | null = null;
        let title: string | undefined;
        let copyright: string | undefined;
        let composer: string | undefined;
        let lyricist: string | undefined;

        for (const me of result.getGlobalMetas()) {
            if (me instanceof TimeSig)        timeSig   = me;
            else if (me instanceof KeySig)    keySig    = me;
            else if (me instanceof Tempo)     tempo     = me;
            else if (me instanceof Title)     title     = me.getRawValue();
            else if (me instanceof Copyright) copyright = me.getRawValue();
            else if (me instanceof Composer)  composer  = me.getRawValue();
            else if (me instanceof Lyricist)  lyricist  = me.getRawValue();
        }

        const barCount    = parts[0]?.getBarCount() ?? 0;
        const measureTicks = timeSig.timeNumerator * TICKS_PER_BEAT;

        const x = new Xml();
        x.raw('<?xml version="1.0" encoding="UTF-8"?>');
        x.raw('<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN"');
        x.raw('  "http://www.musicxml.org/dtds/partwise.dtd">');
        x.open('score-partwise', 'version="3.1"');

        if (title) {
            x.open('work').leaf('work-title', esc(title)).close('work');
        }

        x.open('identification');
        if (composer) x.leaf('creator', esc(composer), 'type="composer"');
        if (lyricist) x.leaf('creator', esc(lyricist), 'type="lyricist"');
        if (copyright) x.leaf('rights', esc(copyright));
        x.open('encoding').leaf('software', 'mascii2-typescript').close('encoding');
        x.close('identification');

        // part-list
        x.open('part-list');
        parts.forEach((part, i) => {
            const pid = `P${i + 1}`;
            const patchMeta = part.getMetaInfoChanges().find(m => m instanceof Patch) as Patch | undefined;
            const patchNum  = patchMeta?.getPatch() ?? 1;
            const chanNum   = (part.getChannel() < 0 ? i : part.getChannel()) + 1;
            x.open(`score-part`, `id="${pid}"`);
            x.leaf('part-name', `Part ${i + 1}`);
            x.open('score-instrument', `id="${pid}-I1"`);
            x.leaf('instrument-name', `Part ${i + 1}`);
            x.close('score-instrument');
            x.open('midi-instrument', `id="${pid}-I1"`);
            x.leaf('midi-channel', chanNum);
            x.leaf('midi-program', patchNum);
            x.close('midi-instrument');
            x.close('score-part');
        });
        x.close('part-list');

        // parts
        parts.forEach((part, i) => {
            const pid = `P${i + 1}`;
            // Build tick → verse-texts map for this part's lyrics
            const lyricsByTick = new Map<number, string[]>();
            for (const me of part.getMetaInfoChanges()) {
                if (me instanceof Lyric) {
                    const verses = (me.getRawValue() ?? '').split('\n').filter(v => v.length > 0);
                    if (verses.length > 0) lyricsByTick.set(me.getStartingAt(), verses);
                }
            }

            x.open('part', `id="${pid}"`);
            const clef = resolveClef(part.getClef());
            for (let m = 0; m < barCount; m++) {
                const mStart = m * measureTicks;
                const notesInMeasure = part.getNoteStream().filter(
                    n => n.getStart() >= mStart && n.getStart() < mStart + measureTicks,
                );
                this.writeMeasure(x, m + 1, notesInMeasure, mStart, measureTicks,
                    m === 0, timeSig, keySig, tempo, lyricsByTick, clef);
            }
            x.close('part');
        });

        x.close('score-partwise');
        return x.toString() + '\n';
    }

    private writeMeasure(
        x: Xml,
        num: number,
        notes: Note[],
        measureStart: number,
        measureTicks: number,
        isFirst: boolean,
        timeSig: TimeSig,
        keySig: KeySig | null,
        tempo: Tempo | null,
        lyricsByTick: Map<number, string[]>,
        clef: ClefSpec,
    ): void {
        x.open('measure', `number="${num}"`);

        if (isFirst) {
            x.open('attributes');
            x.leaf('divisions', TICKS_PER_BEAT);
            if (keySig) {
                x.open('key');
                x.leaf('fifths', keySig.keySignature.code);
                x.leaf('mode', keySig.isMinor ? 'minor' : 'major');
                x.close('key');
            } else {
                x.open('key').leaf('fifths', 0).close('key');
            }
            x.open('time');
            x.leaf('beats', timeSig.timeNumerator);
            x.leaf('beat-type', timeSig.timeDenominator);
            x.close('time');
            x.open('clef').leaf('sign', clef.sign).leaf('line', clef.line).close('clef');
            x.close('attributes');

            if (tempo) {
                x.open('direction', 'placement="above"');
                x.open('direction-type');
                x.open('metronome', 'parentheses="no"');
                x.leaf('beat-unit', 'quarter');
                x.leaf('per-minute', tempo.getTempo());
                x.close('metronome');
                x.close('direction-type');
                x.selfClose('sound', `tempo="${tempo.getTempo()}"`);
                x.close('direction');
            }
        }

        // Build events and annotate tuplets
        const events = buildEvents(notes, measureStart, measureTicks);
        annotateTuplets(events);

        for (const ev of events) {
            if (ev.kind === 'note') {
                const [first, ...chordRest] = ev.notes;
                this.writeNote(x, first!.spelling, first!.getStart(), ev.ticks, ev.tr, false, lyricsByTick);
                for (const cn of chordRest) {
                    this.writeNote(x, cn.spelling, cn.getStart(), ev.ticks, ev.tr, true, lyricsByTick);
                }
            } else {
                this.writeRest(x, ev.ticks, ev.tr);
            }
        }

        x.close('measure');
    }

    private writeNote(
        x: Xml,
        sp: NoteSpelling,
        startTick: number,
        ticks: number,
        tr: NoteTypeResult,
        isChord: boolean,
        lyricsByTick: Map<number, string[]>,
    ): void {
        x.open('note');
        if (isChord) x.selfClose('chord');
        x.open('pitch');
        x.leaf('step', sp.degree.toUpperCase());
        if (sp.accidentals !== Accidental.NATURAL) x.leaf('alter', sp.accidentals);
        x.leaf('octave', sp.octaveRangeBasis + sp.octaveAdjusts);
        x.close('pitch');
        x.leaf('duration', ticks);
        this.writeTypeBody(x, tr);
        if (!isChord) {
            const verses = lyricsByTick.get(startTick);
            if (verses) {
                for (let v = 0; v < verses.length; v++) {
                    x.open('lyric', `number="${v + 1}"`);
                    x.leaf('syllabic', 'single');
                    x.leaf('text', esc(verses[v]!));
                    x.close('lyric');
                }
            }
        }
        x.close('note');
    }

    private writeRest(x: Xml, ticks: number, tr: NoteTypeResult): void {
        x.open('note');
        x.selfClose('rest');
        x.leaf('duration', ticks);
        this.writeTypeBody(x, tr);
        x.close('note');
    }

    private writeTypeBody(x: Xml, tr: NoteTypeResult): void {
        if (tr.actualNotes != null) {
            x.open('time-modification');
            x.leaf('actual-notes', tr.actualNotes);
            x.leaf('normal-notes', tr.normalNotes!);
            x.leaf('normal-type', tr.normalType!);
            x.close('time-modification');
        }
        x.leaf('type', tr.type);
        for (let d = 0; d < tr.dots; d++) x.selfClose('dot');
        if (tr.tupletTag) {
            x.open('notations');
            if (tr.tupletTag === 'start') {
                x.selfClose('tuplet', 'type="start" bracket="yes"');
            } else {
                x.selfClose('tuplet', 'type="stop"');
            }
            x.close('notations');
        }
    }
}
