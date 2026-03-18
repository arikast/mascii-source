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

        const data = this.buildFile(result);
        writeFileSync(filename, data);
        return filename;
    }

    buildFile(result: ParseResult): Uint8Array {
        const parts = result.getParts();
        if (!parts || parts.length === 0) return new Uint8Array();
        const tracks = this.generate(result);
        return new MidiWriter.Writer(tracks, { ticksPerBeat: TICKS_PER_BEAT }).buildFile();
    }

    generate(result: ParseResult): MidiTrack[] {
        const parts = result.getParts() ?? [];
        assignChannels(parts);

        const tracks: MidiTrack[] = [];
        let partCount = 0;

        for (const part of parts) {
            const track = new MidiWriter.Track();
            const lyrics: Lyric[] = [];

            // Global meta events on first track only
            if (partCount === 0) {
                for (const me of result.getGlobalMetas()) {
                    this.applyGlobalMetaToTrack(track, me);
                }
            }

            // Track-level meta (patch/program changes); collect lyrics separately
            for (const me of part.getMetaInfoChanges()) {
                if (me instanceof Lyric) {
                    lyrics.push(me);
                } else {
                    this.applyTrackMetaToTrack(track, me, part);
                }
            }

            // Notes
            for (const note of part.getNoteStream()) {
                this.addNote(track, part.getChannel(), note);
            }

            // Apply lyrics at their correct tick positions
            if (lyrics.length > 0) {
                this.applyLyricsAtTick(track, lyrics);
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
                24, // standard MIDI clocks per metronome click (must be a single byte; TICKS_PER_BEAT is too large)
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
                    channel: part.getChannel(), // ProgramChangeEvent is 0-based (unlike NoteEvent which is 1-based)
                }),
            );
        }
    }

    private applyLyricsAtTick(track: MidiTrack, lyrics: Lyric[]): void {
        // Build the track first so all NoteEvents are expanded into NoteOnEvent/NoteOffEvent
        // with their absolute tick values populated.
        (track as any).buildData({ ticksPerBeat: TICKS_PER_BEAT });

        // Insert each lyric at the correct tick position using mergeSingleEvent.
        // The LyricEvent is pre-encoded with delta=0, so it will land at the same
        // tick as the preceding event (the NoteOn at the same tick).
        const sorted = [...lyrics].sort((a, b) => a.getStartingAt() - b.getStartingAt());
        for (const lyric of sorted) {
            const lyricEvent = new MidiWriter.LyricEvent({ text: lyric.getRawValue() ?? '' });
            (lyricEvent as any).tick = lyric.getStartingAt();
            (track as any).mergeSingleEvent(lyricEvent);
        }
    }

    private addNote(track: MidiTrack, channel: number, note: Note): void {
        const midiChannel = channel + 1; // 1-based for midi-writer-js
        const midiPitch = note.getMidiPitch();
        const startTick = note.getStart();
        const duration = note.getDuration();

        if (duration <= 0) return; // skip zero-duration notes

        const event = new MidiWriter.NoteEvent({
            pitch: [midiPitch],
            duration: `T${duration}`,
            tick: startTick,
            channel: midiChannel,
            velocity: 100,
        });
        // midi-writer-js uses `tick || null` so tick=0 becomes null, causing
        // simultaneous notes (chords at beat 0) to be placed sequentially.
        // Override after construction so tick=0 goes through explicitTickEvents.
        (event as any).tick = startTick;
        track.addEvent(event);
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
