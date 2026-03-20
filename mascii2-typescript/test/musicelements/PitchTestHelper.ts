import { KeySignature, KeySignatureAdHoc } from '../../src/musicelements/KeySignature';
import { NoteSpelling } from '../../src/musicelements/Note';
import { asAccidental, magnitude } from '../../src/util/MasciiUtil';

const NOTE_RE = /^(\d*)(!*)(([a-gA-G])([#@=]*))$/;

export function parsePitch(pitch: string): NoteSpelling;
export function parsePitch(pitch: string, key: KeySignatureAdHoc): NoteSpelling;
export function parsePitch(pitch: string, relativeTo: NoteSpelling): NoteSpelling;
export function parsePitch(pitch: string, key: KeySignatureAdHoc, relativeTo: NoteSpelling | null): NoteSpelling;
export function parsePitch(
    pitch: string,
    keyOrRelative?: KeySignatureAdHoc | NoteSpelling,
    relativeTo?: NoteSpelling | null,
): NoteSpelling {
    let key: KeySignatureAdHoc;
    let rel: NoteSpelling | null;

    if (keyOrRelative == null) {
        key = KeySignature.C.alterationsMap();
        rel = null;
    } else if (keyOrRelative instanceof NoteSpelling) {
        key = KeySignature.C.alterationsMap();
        rel = keyOrRelative;
    } else {
        key = keyOrRelative;
        rel = relativeTo ?? null;
    }

    const m = NOTE_RE.exec(pitch);
    if (!m) return new NoteSpelling(pitch);

    const absOctave = m[1] ?? '';
    const amplifier = m[2] ?? '';
    const degree = m[4]!;
    const accidentals = m[5] ?? '';

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
