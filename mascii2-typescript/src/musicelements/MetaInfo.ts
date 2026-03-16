import { Accidental } from './Accidental';
import { KeySignature } from './KeySignature';

export class MetaInfoElement<U> {
    protected rawValue: U | undefined;
    startingAt = 0;

    getRawValue(): U | undefined { return this.rawValue; }
    setRawValue(rawValue: U): this { this.rawValue = rawValue; return this; }
    getStartingAt(): number { return this.startingAt; }
    setStartingAt(startingAt: number): this { this.startingAt = startingAt; return this; }

    protected static trim(s: string | undefined | null): string | undefined {
        if (s == null) return undefined;
        return s.trim();
    }
}

export class GlobalMeta extends MetaInfoElement<string> {
    override setRawValue(s: string): this {
        return super.setRawValue(s);
    }
}

export class TrackLevelMeta extends MetaInfoElement<string> {
    override setRawValue(s: string): this {
        return super.setRawValue(s);
    }
}

export class TimeSig extends GlobalMeta {
    private static readonly TIMESIG_RE = /^(\d+)\/?(\d+)?$/;
    timeNumerator = 4;
    timeDenominator = 4;

    override setRawValue(time: string): this {
        const t = MetaInfoElement.trim(time);
        super.setRawValue(t ?? '');
        if (!t) return this;
        const m = TimeSig.TIMESIG_RE.exec(t);
        if (m) {
            this.timeNumerator = parseInt(m[1]!, 10);
            if (m[2] != null) {
                this.timeDenominator = parseInt(m[2], 10);
            }
        }
        return this;
    }
}

export class Tempo extends GlobalMeta {
    tempo = 120;

    override setRawValue(tempoStr: string): this {
        const t = MetaInfoElement.trim(tempoStr);
        super.setRawValue(t ?? '');
        if (!t) return this;
        this.tempo = parseInt(t, 10);
        return this;
    }

    setTempo(bpm: number): void { this.tempo = bpm; }
    getTempo(): number { return this.tempo; }
}

export class Title extends GlobalMeta {}
export class Copyright extends GlobalMeta {}
export class Composer extends GlobalMeta {}
export class Lyricist extends GlobalMeta {}
export class Lyric extends GlobalMeta {}
export class FreeText extends GlobalMeta {}

const KEYSIG_RE = /^([a-gA-G])([#@=]*)([Mm]?)$/;

export class KeySig extends GlobalMeta {
    isMinor = false;
    keySignature: KeySignature = KeySignature.C;

    constructor() {
        super();
        this.rawValue = 'c';
    }

    override setRawValue(key: string): this {
        const k = MetaInfoElement.trim(key);
        super.setRawValue(k ?? '');
        if (k == null) {
            this.keySignature = KeySignature.C;
            return this;
        }
        const asNum = parseInt(k, 10);
        if (!isNaN(asNum) && /^-?\d+$/.test(k)) {
            this.keySignature = KeySignature.getByCode(asNum) ?? KeySignature.C;
        } else {
            const m = KEYSIG_RE.exec(k);
            if (m) {
                const degree = m[1]!.toLowerCase();
                const accidental = asAccidental(m[2] ?? '');
                this.isMinor = (m[3]?.length ?? 0) > 0;
                this.keySignature = KeySignature.getByDegree(degree, accidental, this.isMinor) ?? KeySignature.C;
            }
        }
        if (!this.keySignature) this.keySignature = KeySignature.C;
        return this;
    }
}

export class PartName extends TrackLevelMeta {}

export class Patch extends TrackLevelMeta {
    patch = 0;

    getPatch(): number { return this.patch; }

    override setRawValue(patchStr: string): this {
        const p = MetaInfoElement.trim(patchStr);
        super.setRawValue(p ?? '');
        if (!p) return this;
        this.patch = parseInt(p, 10);
        return this;
    }
}

function asAccidental(s: string): Accidental {
    switch (s) {
        case '@@': return Accidental.DBLFLAT;
        case '@': case '=@': return Accidental.FLAT;
        case '#': case '=#': return Accidental.SHARP;
        case '##': return Accidental.DBLSHARP;
        default: return Accidental.NATURAL;
    }
}

export class MetaInfo {
    instrument = 'Piano';
    clef = 'treble';
    transpose = 0;
    patch: Patch | undefined;
    partName: PartName | undefined;
    timeSig: TimeSig | undefined;
    keySig: KeySig | undefined;
    tempo: Tempo | undefined;
    title: Title | undefined;
    copyright: Copyright | undefined;
    composer: Composer | undefined;
    lyricist: Lyricist | undefined;
}
