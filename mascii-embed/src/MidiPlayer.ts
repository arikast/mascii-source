// "import type" is erased at runtime — Tone.js is never loaded at module
// initialisation time, so no AudioContext is created before a user gesture.
import type * as ToneType from 'tone'
import { Midi } from '@tonejs/midi'

export type MidiPlayerState = 'INIT' | 'STOPPED' | 'PLAYING' | 'PAUSED'
export type GleitzSoundfont = 'FluidR3_GM' | 'FatBoy' | 'MusyngKite'

// Tone module reference, populated on first play() call.
type ToneMod = typeof ToneType

// Salamander Grand Piano samples hosted on the Tone.js CDN.
// Used for GM program 0 (acoustic grand piano) — higher quality than the gleitz CDN.
const SALAMANDER_URLS: Record<string, string> = {
  A0: 'A0.mp3',
  C1: 'C1.mp3',
  'D#1': 'Ds1.mp3',
  'F#1': 'Fs1.mp3',
  A1: 'A1.mp3',
  C2: 'C2.mp3',
  'D#2': 'Ds2.mp3',
  'F#2': 'Fs2.mp3',
  A2: 'A2.mp3',
  C3: 'C3.mp3',
  'D#3': 'Ds3.mp3',
  'F#3': 'Fs3.mp3',
  A3: 'A3.mp3',
  C4: 'C4.mp3',
  'D#4': 'Ds4.mp3',
  'F#4': 'Fs4.mp3',
  A4: 'A4.mp3',
  C5: 'C5.mp3',
  'D#5': 'Ds5.mp3',
  'F#5': 'Fs5.mp3',
  A5: 'A5.mp3',
  C6: 'C6.mp3',
  'D#6': 'Ds6.mp3',
  'F#6': 'Fs6.mp3',
  A6: 'A6.mp3',
  C7: 'C7.mp3',
  'D#7': 'Ds7.mp3',
  'F#7': 'Fs7.mp3',
  A7: 'A7.mp3',
  C8: 'C8.mp3',
}

// Anchor notes for gleitz FluidR3_GM samplers — flat notation, one every 3 semitones.
// Tone.js Sampler pitch-shifts from these anchors to cover the full range.
const GLEITZ_SAMPLE_URLS: Record<string, string> = {
  A0: 'A0.mp3',
  C1: 'C1.mp3',
  Eb1: 'Eb1.mp3',
  Gb1: 'Gb1.mp3',
  A1: 'A1.mp3',
  C2: 'C2.mp3',
  Eb2: 'Eb2.mp3',
  Gb2: 'Gb2.mp3',
  A2: 'A2.mp3',
  C3: 'C3.mp3',
  Eb3: 'Eb3.mp3',
  Gb3: 'Gb3.mp3',
  A3: 'A3.mp3',
  C4: 'C4.mp3',
  Eb4: 'Eb4.mp3',
  Gb4: 'Gb4.mp3',
  A4: 'A4.mp3',
  C5: 'C5.mp3',
  Eb5: 'Eb5.mp3',
  Gb5: 'Gb5.mp3',
  A5: 'A5.mp3',
  C6: 'C6.mp3',
  Eb6: 'Eb6.mp3',
  Gb6: 'Gb6.mp3',
  A6: 'A6.mp3',
  C7: 'C7.mp3',
  Eb7: 'Eb7.mp3',
  Gb7: 'Gb7.mp3',
  A7: 'A7.mp3',
  C8: 'C8.mp3',
}

/** Convert a GM instrument name (from @tonejs/midi) to a gleitz soundfont CDN slug. */
function instrumentToGleitzSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/\s+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
}

/**
 * Plays MIDI bytes (from MidiGenerator.buildFile) through Tone.js, synchronising
 * an OSMD cursor via requestAnimationFrame.
 *
 * Tone.js is loaded lazily via dynamic import() inside play(), which is always
 * called from a user-gesture handler.  This prevents any AudioContext from being
 * created before the browser allows it.
 *
 * Audio: one Tone.js Sampler per GM program used in the piece.
 *        Program 0 (acoustic grand piano) uses the Salamander CDN.
 *        All other programs use the gleitz FluidR3_GM CDN.
 *        Samplers are cached across pieces so instruments only download once.
 *        Percussion tracks (MIDI channel 9) are silenced.
 * Cursor: step times are derived by mapping each OSMD timeline RealValue (whole notes)
 *         through the MIDI file's tempo map → seconds, respecting tempo changes.
 */
export class MidiPlayer {
  private state: MidiPlayerState = 'INIT'
  // Populated lazily on first play()
  private T: ToneMod | null = null
  // Cached per GM program number — persist across piece loads so re-used instruments
  // don't re-download on subsequent play() calls.
  private samplers: Map<number, ToneType.Sampler> = new Map()
  private midi: Midi | null = null
  // GM programs needed by the currently-loaded piece (excluding percussion).
  private neededPrograms: Set<number> = new Set()
  private stepTimes: number[] = []
  private endTime = 0
  private seekOffset = 0
  private currentStep = 0
  private rafId: number | null = null

  private gleitzSoundfont: GleitzSoundfont = 'FatBoy'
  private stateChangeCb?: (state: MidiPlayerState) => void
  private stepChangeCb?: (step: number) => void

  /**
   * Switch the gleitz soundfont for all non-piano instruments.
   * Clears the sampler cache so the next play() re-downloads with the new font.
   */
  setSoundfont(sf: GleitzSoundfont): void {
    if (sf === this.gleitzSoundfont) return
    this.gleitzSoundfont = sf
    // Dispose and evict all non-piano samplers so they reload with the new CDN URL.
    for (const [program, sampler] of this.samplers) {
      if (program !== 0) {
        sampler.dispose()
        this.samplers.delete(program)
      }
    }
  }

  on(event: 'state-change', cb: (state: MidiPlayerState) => void): void
  on(event: 'step-change', cb: (step: number) => void): void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event: string, cb: (arg: any) => void): void {
    if (event === 'state-change') this.stateChangeCb = cb
    else if (event === 'step-change') this.stepChangeCb = cb
  }

  /**
   * Parse a new MIDI file and build the cursor sync table.
   * Pure data work — no Tone.js, no AudioContext, no network I/O.
   */
  load(midiBytes: Uint8Array, osmdTimeline: number[]): void {
    // Stop any in-progress playback (only touches Tone if it was ever started)
    if (this.T) this.stopTransport()
    this.stopRaf()

    const midi = new Midi(midiBytes)
    this.midi = midi

    this.neededPrograms = new Set(
      midi.tracks.filter((t) => !t.instrument.percussion).map((t) => t.instrument.number),
    )

    this.stepTimes = osmdTimeline.map((rv) => {
      const tick = Math.round(rv * 4 * midi.header.ppq)
      return midi.header.ticksToSeconds(tick)
    })

    this.endTime = Math.max(
      0,
      ...midi.tracks.flatMap((t) => t.notes.map((n) => n.time + n.duration)),
    )

    this.seekOffset = 0
    this.currentStep = 0
    this.setState('STOPPED')
  }

  /** True once all samplers needed by the current piece have finished loading. */
  get samplerLoaded(): boolean {
    if (this.neededPrograms.size === 0) return true
    for (const p of this.neededPrograms) {
      if (!this.samplers.has(p)) return false
    }
    return true
  }

  /**
   * Start or resume playback.
   * MUST be called from a user-gesture handler (click/keydown) so the browser
   * permits AudioContext creation and resume.
   */
  async play(): Promise<void> {
    if (this.state !== 'STOPPED' && this.state !== 'PAUSED') return

    // Dynamic import: loads Tone.js for the first time here (user gesture)
    if (!this.T) this.T = await import('tone')
    const T = this.T

    await T.start() // resume the AudioContext

    // Load any samplers not yet cached for this piece's programs
    await Promise.all(
      [...this.neededPrograms]
        .filter((p) => !this.samplers.has(p))
        .map((p) => {
          const name = this.midi?.tracks.find((t) => t.instrument.number === p)?.instrument.name
          return this.loadSampler(T, p, name ?? 'acoustic grand piano').then((s) =>
            this.samplers.set(p, s),
          )
        }),
    )

    this.scheduleFrom(T, this.seekOffset)
    const transport = T.getTransport()
    transport.seconds = this.seekOffset
    transport.start()
    this.setState('PLAYING')
    this.startRaf(T)
  }

  pause(): void {
    if (this.state !== 'PLAYING' || !this.T) return
    this.seekOffset = this.T.getTransport().seconds
    this.T.getTransport().pause()
    this.stopRaf()
    this.setState('PAUSED')
  }

  stop(): void {
    if (this.T) this.stopTransport()
    this.stopRaf()
    this.seekOffset = 0
    this.currentStep = 0
    this.stepChangeCb?.(0)
    this.setState('STOPPED')
  }

  jumpToStep(step: number): void {
    const targetTime = this.stepTimes[step] ?? 0
    this.seekOffset = targetTime
    this.currentStep = step

    if (this.state === 'PLAYING' && this.T) {
      const transport = this.T.getTransport()
      transport.pause()
      this.stopRaf()
      this.scheduleFrom(this.T, targetTime)
      transport.seconds = targetTime
      transport.start()
      this.startRaf(this.T)
    } else if (this.state === 'PAUSED') {
      this.setState('STOPPED')
    }
  }

  getState(): MidiPlayerState {
    return this.state
  }

  dispose(): void {
    this.stopRaf()
    if (this.T) this.stopTransport()
    for (const sampler of this.samplers.values()) sampler.dispose()
    this.samplers.clear()
    this.T = null
    this.midi = null
    this.state = 'INIT'
  }

  // --------------- private helpers ---------------

  private stopTransport(): void {
    const transport = this.T!.getTransport()
    transport.stop()
    transport.cancel(0)
  }

  private scheduleFrom(T: ToneMod, offset: number): void {
    if (!this.midi) return
    const transport = T.getTransport()
    transport.cancel(0)
    for (const track of this.midi.tracks) {
      if (track.instrument.percussion) continue
      const sampler = this.samplers.get(track.instrument.number)
      if (!sampler) continue
      for (const note of track.notes) {
        if (note.time < offset - 0.01) continue
        transport.schedule((time) => {
          sampler.triggerAttackRelease(
            T.Frequency(note.midi, 'midi').toNote(),
            note.duration,
            time,
            note.velocity,
          )
        }, note.time)
      }
    }
  }

  private startRaf(T: ToneMod): void {
    this.stopRaf()
    const loop = (): void => {
      if (this.state !== 'PLAYING') return
      const t = T.getTransport().seconds
      const step = this.findStep(t)
      if (step !== this.currentStep) {
        this.currentStep = step
        this.stepChangeCb?.(step)
      }
      if (this.endTime > 0 && t >= this.endTime + 0.1) {
        this.stop()
        return
      }
      this.rafId = requestAnimationFrame(loop)
    }
    this.rafId = requestAnimationFrame(loop)
  }

  private stopRaf(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
  }

  private findStep(seconds: number): number {
    let lo = 0,
      hi = this.stepTimes.length - 1,
      best = 0
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      if ((this.stepTimes[mid] ?? 0) <= seconds + 1e-6) {
        best = mid
        lo = mid + 1
      } else {
        hi = mid - 1
      }
    }
    return best
  }

  private loadSampler(T: ToneMod, program: number, name: string): Promise<ToneType.Sampler> {
    return new Promise((resolve, reject) => {
      const isPiano = program === 0
      const s = new T.Sampler({
        urls: isPiano ? SALAMANDER_URLS : GLEITZ_SAMPLE_URLS,
        baseUrl: isPiano
          ? 'https://tonejs.github.io/audio/salamander/'
          : `https://gleitz.github.io/midi-js-soundfonts/${this.gleitzSoundfont}/${instrumentToGleitzSlug(name)}-mp3/`,
        onload: () => resolve(s),
        onerror: reject,
      }).toDestination()
    })
  }

  private setState(s: MidiPlayerState): void {
    this.state = s
    this.stateChangeCb?.(s)
  }
}
