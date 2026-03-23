import { Note, NoteSpelling } from './Note';
import { TimeSlot } from './TimeSlot';
import { KeySignature, KeySignatureAdHoc } from './KeySignature';
import { MetaInfoElement } from './MetaInfo';
import { ChordSymbol } from './ChordSymbol';
import { parsePitchContext } from '../util/MasciiUtil';
import { PitchContext } from '../antlr-generated/MasciiParser';

export class Part {
    barCount = 0;
    channel = -1;
    patch = 0;
    clef = '';

    // index of start of current measure block within noteStream
    currentMeasureBlockIndex = 0;

    currentKey: KeySignatureAdHoc = KeySignature.C.alterationsMap();

    noteStream: Note[] = [];
    chordSymbolStream: ChordSymbol[] = [];
    metaInfoChanges: MetaInfoElement<unknown>[] = [];

    timingStack: TimeSlot[] = [];
    pitchBase: NoteSpelling[] = [];
    openNotes: Map<number, Note> = new Map();

    peekTiming(): TimeSlot {
        return this.timingStack[this.timingStack.length - 1]!;
    }

    popTiming(): TimeSlot {
        return this.timingStack.pop()!;
    }

    pushTiming(slot: TimeSlot): void {
        this.timingStack.push(slot);
    }

    peekPitchBase(): NoteSpelling | undefined {
        return this.pitchBase[this.pitchBase.length - 1];
    }

    resetCurrentMeasureBlockIndex(): void {
        this.currentMeasureBlockIndex = this.noteStream.length;
    }

    getNotesInThisMeasureBlock(): Note[] {
        if (this.noteStream.length === 0 || this.currentMeasureBlockIndex >= this.noteStream.length) {
            return [];
        }
        return this.noteStream.slice(this.currentMeasureBlockIndex);
    }

    bumpBarCount(): void {
        this.barCount++;
    }

    getNoteStream(): Note[] { return this.noteStream; }
    getChordSymbolStream(): ChordSymbol[] { return this.chordSymbolStream; }
    addChordSymbol(cs: ChordSymbol): void { this.chordSymbolStream.push(cs); }
    getMetaInfoChanges(): MetaInfoElement<unknown>[] { return this.metaInfoChanges; }
    getBarCount(): number { return this.barCount; }
    setBarCount(n: number): void { this.barCount = n; }
    getChannel(): number { return this.channel; }
    setChannel(ch: number): void { this.channel = ch; }
    getClef(): string { return this.clef; }
    setClef(clef: string): void { this.clef = clef; }

    startAndFinishNoteHere(pitch: PitchContext, srcOffset?: number): void {
        const slot = this.peekTiming();
        const note = Note.withDuration(slot.offset, slot.duration, this.resolvePitchFromContext(pitch), srcOffset);
        this.addNote(note);
    }

    startNoteHere(pitch: PitchContext, srcOffset?: number): void {
        const slot = this.peekTiming();
        const note = Note.startOnly(slot.offset, this.resolvePitchFromContext(pitch), srcOffset);
        // if note already open at this pitch, it stays (we overwrite the reference)
        this.openNotes.set(note.getPitch(), note);
        this.addNote(note);
    }

    private addNote(note: Note): void {
        this.changePitchBase(note.spelling);
        this.currentKey.setAccidental(note.spelling.degree, note.spelling.accidentals);
        this.noteStream.push(note);
    }

    changePitchBase(sp: NoteSpelling): void {
        if (this.pitchBase.length > 0) this.pitchBase.pop();
        this.pitchBase.push(sp);
    }

    finishNoteHere(pitch: PitchContext): void {
        const finish = this.resolvePitchFromContext(pitch);
        const start = this.openNotes.get(finish.getPitch());
        if (start == null) {
            console.error(`note end ${finish} with pitch ${finish.getPitch()} had no matching start`);
        } else {
            start.setEnd(this.peekTiming().endTime());
            this.openNotes.delete(finish.getPitch());
        }
    }

    finishAllOpenNotesHere(): void {
        const finishTime = this.peekTiming().endTime();
        for (const note of this.openNotes.values()) {
            note.setEnd(finishTime);
        }
        this.openNotes.clear();
    }

    resolvePitchFromContext(ctx: PitchContext): NoteSpelling {
        const base = this.peekPitchBase();
        return parsePitchContext(ctx, this.currentKey, base ?? null);
    }
}
