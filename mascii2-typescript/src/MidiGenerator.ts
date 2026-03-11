import MidiWriter from 'midi-writer-js';
import { writeFileSync } from 'fs';
import { ParseResult } from './ParseResult';
import { Part } from './musicelements/Part';
import { Note } from './musicelements/Note';
import {
    MetaInfoElement, TimeSig, KeySig, Tempo, Title, Copyright, Patch, Lyric, FreeText
} from './musicelements/MetaInfo';
import { TICKS_PER_BEAT } from './MasciiSyntaxEventListener';

type MidiTrack = InstanceType<typeof MidiWriter.Track>;

export const DRUM_TRACK_CHANNEL = 9; // 0-based; MIDI channel 10 (1-based)

export class MidiGenerator {
    save(result: ParseResult, filename: string): string | null {
        const parts = result.getParts();
        if (!parts || parts.length === 0) return null;

        const tracks = this.generate(result);
        const writer = new MidiWriter.Writer(tracks, { ticksPerBeat: TICKS_PER_BEAT });
        const data = writer.buildFile();
        writeFileSync(filename, data);
        return filename;
    }

    generate(result: ParseResult): MidiTrack[] {
        const parts = result.getParts() ?? [];
        assignChannels(parts);

        const tracks: MidiTrack[] = [];
        let partCount = 0;

        for (const part of parts) {
            const track = new MidiWriter.Track();

            // Global meta events on first track only
            if (partCount === 0) {
                for (const me of result.getGlobalMetas()) {
                    this.applyGlobalMetaToTrack(track, me);
                }
            }

            // Track-level meta (patch/program changes, lyrics)
            for (const me of part.getMetaInfoChanges()) {
                this.applyTrackMetaToTrack(track, me, part);
            }

            // Notes
            for (const note of part.getNoteStream()) {
                this.addNote(track, part.getChannel(), note);
            }

            tracks.push(track);
            partCount++;
        }

        return tracks;
    }

    private applyGlobalMetaToTrack(track: MidiTrack, me: MetaInfoElement<unknown>): void {
        if (me instanceof Tempo) {
            track.setTempo(me.getTempo(), me.getStartingAt());
        } else if (me instanceof TimeSig) {
            track.setTimeSignature(
                me.timeNumerator,
                me.timeDenominator,
                TICKS_PER_BEAT,
                8,
            );
        } else if (me instanceof KeySig) {
            track.setKeySignature(me.keySignature.code, me.isMinor ? 1 : 0);
        } else if (me instanceof Title) {
            track.addTrackName(me.getRawValue() ?? '');
        } else if (me instanceof Copyright) {
            track.addCopyright(me.getRawValue() ?? '');
        } else if (me instanceof Lyric) {
            track.addLyric(me.getRawValue() ?? '');
        } else if (me instanceof FreeText) {
            track.addText(me.getRawValue() ?? '');
        }
    }

    private applyTrackMetaToTrack(
        track: MidiTrack,
        me: MetaInfoElement<unknown>,
        part: Part,
    ): void {
        if (me instanceof Patch) {
            const patchNum = Math.max(0, me.getPatch() - 1); // GM patches are 1-based in mascii, 0-based in MIDI
            track.addEvent(
                new MidiWriter.ProgramChangeEvent({
                    instrument: patchNum,
                    channel: part.getChannel() + 1, // midi-writer-js uses 1-based channels
                }),
            );
        } else if (me instanceof Lyric) {
            // Lyrics are placed at start of track (delta limitation of midi-writer-js)
            // TODO: proper per-note tick placement requires custom MIDI byte writing
            track.addLyric(me.getRawValue() ?? '');
        }
    }

    private addNote(track: MidiTrack, channel: number, note: Note): void {
        const midiChannel = channel + 1; // 1-based for midi-writer-js
        const midiPitch = note.getMidiPitch();
        const startTick = note.getStart();
        const duration = note.getDuration();

        if (duration <= 0) return; // skip zero-duration notes

        track.addEvent(
            new MidiWriter.NoteEvent({
                pitch: [midiPitch],
                duration: `T${duration}`,
                tick: startTick,
                channel: midiChannel,
                velocity: 100,
            }),
        );
    }
}

export function assignChannels(parts: Part[]): void {
    const reserved = new Set<number>();
    reserved.add(DRUM_TRACK_CHANNEL);
    for (const p of parts) {
        if (p.getChannel() >= 0) reserved.add(p.getChannel());
    }

    let channel = 0;
    for (const p of parts) {
        if (p.getChannel() < 0) {
            channel = claimNextFreeChannel(channel, reserved);
            p.setChannel(channel);
            channel++;
        }
    }
}

function claimNextFreeChannel(proposed: number, claimed: Set<number>): number {
    proposed = proposed % 16;
    while (proposed < 16 && claimed.has(proposed)) {
        proposed++;
    }
    proposed = proposed % 16;
    claimed.add(proposed);
    return proposed;
}
