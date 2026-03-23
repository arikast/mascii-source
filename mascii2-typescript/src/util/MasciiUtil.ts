import { Accidental } from '../musicelements/Accidental';
import { KeySignatureAdHoc } from '../musicelements/KeySignature';
import { Note, NoteSpelling } from '../musicelements/Note';
import { MetaInfo } from '../musicelements/MetaInfo';
import { PitchDirection } from '../musicelements/PitchDirection';
import { Lyric } from '../musicelements/MetaInfo';
import { PitchContext } from '../antlr-generated/MasciiParser';

export const REST = '%';

export function asAccidental(accidental: string | undefined | null): Accidental {
    if (!accidental) return Accidental.NATURAL;
    switch (accidental) {
        case '@@': return Accidental.DBLFLAT;
        case '@': case '=@': return Accidental.FLAT;
        case '#': case '=#': return Accidental.SHARP;
        case '##': return Accidental.DBLSHARP;
        default: return Accidental.NATURAL;
    }
}

export function magnitude(shift: string | undefined | null): number {
    if (!shift) return 0;
    return shift.length;
}

export function parsePitchContext(ctx: PitchContext, key: KeySignatureAdHoc, rel?: NoteSpelling | null): NoteSpelling {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const repeatEl = ctx.REPEAT_ELEMENT() as any;
    if (repeatEl != null) {
        return new NoteSpelling(repeatEl.getText() as string);
    }
    const absOctave: string = (ctx.abs_pitch_range() as unknown as { getText(): string } | null)?.getText() ?? '';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const amplifier: string = (ctx.AMPLIFIERS() as any)?.getText() ?? '';
    const degree = ctx.REL_PITCH().getText();
    const accidentals: string = (ctx.accidental() as unknown as { getText(): string } | null)?.getText() ?? '';

    const spelling = new NoteSpelling(degree);

    if (accidentals.length === 0) {
        spelling.accidentals = key.getAccidental(degree);
    } else {
        spelling.accidentals = asAccidental(accidentals);
    }

    if (spelling.isCapitalized()) {
        spelling.octaveAdjusts = magnitude(amplifier) * -1;
    } else {
        spelling.octaveAdjusts = magnitude(amplifier);
    }

    if (absOctave.length > 0) {
        spelling.setOctaveRangeBasis(parseInt(absOctave, 10));
    } else {
        if (rel == null) {
            spelling.setOctaveRangeBasis(spelling.isCapitalized() ? 3 : 4);
        } else {
            spelling.inheritOctaveRangeFrom(rel);
        }
    }

    return spelling;
}

export function crossesOctaveBoundary(from: string, to: string, direction: PitchDirection): boolean {
    const f = from.toLowerCase();
    const t = to.toLowerCase();
    if (f === t) return direction !== PitchDirection.SAME;
    if (direction !== PitchDirection.UP) {
        return !crossesOctaveBoundary(f, t, PitchDirection.UP);
    }
    if (f === 'c') return false;
    return diatonicInterval(f, t) >= diatonicInterval(f, 'c');
}

export function diatonicInterval(a: string, b: string): number {
    const ai = a.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
    const bi = b.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
    return ((((bi - ai) % 7) + 7) % 7) + 1;
}

export function relativeMajorDegree(degree: string): string {
    const d = degree.toLowerCase();
    return String.fromCharCode((((d.charCodeAt(0) - 'a'.charCodeAt(0)) + 2) % 7) + 'a'.charCodeAt(0));
}

export function splitHeaderValues(content: string): string[] {
    const appendSilent = /,\s*$/.test(content);
    let s = content;
    if (appendSilent) s += 'silentToken';
    const parts = s.split(/\s*,\s*/);
    if (appendSilent) parts[parts.length - 1] = '';
    return parts;
}

export function times(howMany: number, s: string): string {
    if (howMany <= 0) return '';
    return s.repeat(howMany);
}

export function isRest(s: string): boolean {
    return s.length === 1 && s === REST;
}

export function asLyrics(notes: Note[], lyrics: string[], prefix: string): (Lyric | null)[] {
    const answer: (Lyric | null)[] = [];
    if (lyrics.length === 0) return answer;

    const gap = lyrics.length - notes.length;
    if (gap > 0) {
        const sb: string[] = [];
        for (let i = lyrics.length - gap - 1; i < lyrics.length; i++) {
            const lyr = lyrics[i]!;
            if (!isRest(lyr)) {
                sb.push(lyr);
                if (i + 1 < lyrics.length) sb.push('-');
            }
        }
        lyrics[lyrics.length - gap - 1] = sb.join('');
    }

    let lind = 0;
    for (const n of notes) {
        if (lind >= lyrics.length) break;
        const lyr = lyrics[lind]!;
        if (isRest(lyr)) {
            answer.push(null);
            lind++;
            continue;
        }
        const lyric = new Lyric();
        lyric.setStartingAt(n.getStart());
        lyric.setRawValue(prefix + lyr);
        answer.push(lyric);
        lind++;
    }
    return answer;
}

export function mergeBIntoA(a: (Lyric | null)[], b: (Lyric | null)[]): void {
    for (let ai = 0, bi = 0; ai < a.length && bi < b.length; ai++, bi++) {
        const la = a[ai];
        const lb = b[bi];
        if (la == null) {
            a[ai] = lb ?? null;
        } else if (lb != null) {
            la.setRawValue((la.getRawValue() ?? '') + (lb.getRawValue() ?? ''));
        }
    }
    const sizeDiff = b.length - a.length;
    if (sizeDiff > 0) {
        const tail = b.slice(b.length - sizeDiff - 1);
        for (const item of tail) a.push(item);
    }
}
