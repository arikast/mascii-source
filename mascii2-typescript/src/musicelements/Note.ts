import { Accidental } from './Accidental';
import type { KeySignatureAdHoc } from './KeySignature';
import { PitchDirection } from './PitchDirection';

// Inlined from MasciiUtil to avoid circular dependency
function diatonicInterval(a: string, b: string): number {
    const ai = a.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
    const bi = b.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
    return ((((bi - ai) % 7) + 7) % 7) + 1;
}

function crossesOctaveBoundary(from: string, to: string, direction: PitchDirection): boolean {
    const f = from.toLowerCase();
    const t = to.toLowerCase();
    if (f === t) return direction !== PitchDirection.SAME;
    if (direction !== PitchDirection.UP) {
        return !crossesOctaveBoundary(f, t, PitchDirection.UP);
    }
    if (f === 'c') return false;
    return diatonicInterval(f, t) >= diatonicInterval(f, 'c');
}

export function absPitch(degree: string, octaveRange: number): number {
    let semitones = 0;
    switch (degree.toLowerCase()) {
        case 'a': semitones = 9;  break;
        case 'b': semitones = 11; break;
        case 'c': semitones = 0;  break;
        case 'd': semitones = 2;  break;
        case 'e': semitones = 4;  break;
        case 'f': semitones = 5;  break;
        case 'g': semitones = 7;  break;
        default:  semitones = 0;  break;
    }
    return semitones + octaveRange * 12;
}

export class NoteSpelling {
    grossPitchAdjust = 0;
    degree: string;
    accidentals: Accidental = Accidental.NATURAL;
    octaveRangeBasis = 0;
    octaveAdjusts = 0;

    constructor(degree: string) {
        this.degree = degree;
    }

    toString(): string {
        return `${this.degree} ${this.accidentals}`;
    }

    getPitch(): number {
        return absPitch(this.degree, this.octaveRangeBasis + this.octaveAdjusts)
            + this.grossPitchAdjust
            + this.accidentals;
    }

    getMidiPitch(): number {
        let answer = this.getPitch() + 12;
        answer = Math.max(answer, 0);
        answer = Math.min(answer, 127);
        return answer;
    }

    isCapitalized(): boolean {
        return this.degree === this.degree.toUpperCase();
    }

    setOctaveRangeBasis(octaveRangeOrString: number | string): void {
        if (typeof octaveRangeOrString === 'string') {
            if (octaveRangeOrString.length > 0) {
                this.octaveRangeBasis = parseInt(octaveRangeOrString, 10);
            } else {
                this.octaveRangeBasis = 0;
            }
        } else {
            this.octaveRangeBasis = octaveRangeOrString;
        }
    }

    inheritOctaveRangeFrom(from: NoteSpelling): void {
        this.inheritOctaveRangeFromSmart(from);
    }

    inheritOctaveRangeFromSmart(from: NoteSpelling): void {
        let priorRange = from.octaveRangeBasis + from.octaveAdjusts;
        if (this.degree === from.degree && this.accidentals === from.accidentals) {
            this.octaveRangeBasis = priorRange;
        } else {
            if (this.degree.toLowerCase() === from.degree.toLowerCase()) {
                // same degree letter, different case or accidental
                if (this.isCapitalized()) {
                    if (this.accidentals >= from.accidentals) {
                        priorRange--;
                    }
                } else {
                    if (this.accidentals <= from.accidentals) {
                        priorRange++;
                    }
                }
            } else if (this.isCapitalized()) {
                if (crossesOctaveBoundary(from.degree, this.degree, PitchDirection.DOWN)) {
                    priorRange--;
                }
            } else {
                if (crossesOctaveBoundary(from.degree, this.degree, PitchDirection.UP)) {
                    priorRange++;
                }
            }
            this.octaveRangeBasis = priorRange;
        }
    }

    // Late-bound to avoid circular dep with MasciiUtil
    parseRelative(note: string, currentKey: KeySignatureAdHoc): NoteSpelling {
        // Defer import to avoid circular dep - caller should use MasciiUtil.parsePitch directly
        throw new Error('Use MasciiUtil.parsePitch(note, key, this) instead');
    }
}

export class Note {
    start: number;
    end: number;
    spelling: NoteSpelling;
    srcOffset?: number;

    constructor(start: number, end: number, spelling: NoteSpelling) {
        this.start = start;
        this.end = end;
        this.spelling = spelling;
    }

    static withDuration(start: number, duration: number, spelling: NoteSpelling, srcOffset?: number): Note {
        const n = new Note(start, start + duration, spelling);
        n.srcOffset = srcOffset;
        return n;
    }

    static startOnly(start: number, spelling: NoteSpelling, srcOffset?: number): Note {
        const n = new Note(start, start, spelling);
        n.srcOffset = srcOffset;
        return n;
    }

    setDuration(duration: number): void {
        this.end = this.start + duration;
    }

    getDuration(): number {
        return this.end - this.start;
    }

    isDurationComplete(): boolean {
        return this.end > this.start;
    }

    getPitch(): number {
        return this.spelling.getPitch();
    }

    getMidiPitch(): number {
        return this.spelling.getMidiPitch();
    }

    getStart(): number { return this.start; }
    getEnd(): number { return this.end; }
    setEnd(end: number): void { this.end = end; }
}
