import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay'
import { SourceParser } from '@parser/SourceParser'
import { MusicXmlGenerator } from '@parser/MusicXmlGenerator'
import { MidiGenerator } from '@parser/MidiGenerator'
import { MidiPlayer } from './MidiPlayer'
import type { MidiPlayerState } from './MidiPlayer'

const STYLES = `
.mascii-embed {
  font-family: sans-serif;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 400px;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  margin: 1em 0;
  overflow: hidden;
}
.mascii-embed * {
  box-sizing: border-box;
}
.mascii-controls {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  flex-shrink: 0;
}
.mascii-sheet-scroll {
  flex: 1;
  overflow: auto;
  min-height: 0;
}
.mascii-sheet {
  min-height: 80px;
}
.mascii-sheet-error {
  padding: 16px 12px;
  color: #c00;
  font-size: 13px;
  font-family: monospace;
}
.mascii-btn {
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.4;
  color: #333;
  transition: background 0.1s;
  user-select: none;
}
.mascii-btn:hover:not(:disabled) {
  background: #e8e8e8;
  border-color: #999;
}
.mascii-btn:active:not(:disabled) {
  background: #ddd;
}
.mascii-btn:disabled {
  opacity: 0.4;
  cursor: default;
}
.mascii-btn--loading {
  opacity: 0.6;
  cursor: wait;
}
`

let stylesInjected = false

function injectStyles(): void {
  if (stylesInjected) return
  stylesInjected = true
  const style = document.createElement('style')
  style.textContent = STYLES
  document.head.appendChild(style)
}

/**
 * Render a Mascii score into a container element.
 *
 * If no container is provided, a new <div> is inserted immediately before
 * document.currentScript (works when called synchronously from a <script> tag)
 * or appended to document.body as a fallback.
 *
 * Returns the container element.
 */
export interface MasciiRenderOptions {
  zoom?: number
}

export async function render(text: string, container?: HTMLElement, options?: MasciiRenderOptions): Promise<HTMLElement> {
  if (!container) {
    const script = document.currentScript as HTMLScriptElement | null
    container = document.createElement('div')
    if (script?.parentNode) {
      script.parentNode.insertBefore(container, script)
    } else {
      document.body.appendChild(container)
    }
  }
  await new MasciiEmbed(container, text, options ?? {}).init()
  return container
}

class MasciiEmbed {
  private readonly container: HTMLElement
  private readonly text: string
  private readonly options: MasciiRenderOptions
  private osmd!: OpenSheetMusicDisplay
  private player!: MidiPlayer
  private osmdTimeline: number[] = []
  private currentStep = 0
  private playBtn!: HTMLButtonElement
  private loading = false

  constructor(container: HTMLElement, text: string, options: MasciiRenderOptions) {
    this.container = container
    this.text = text
    this.options = options
  }

  async init(): Promise<void> {
    injectStyles()
    this.container.classList.add('mascii-embed')
    this.container.innerHTML = `
      <div class="mascii-controls">
        <button class="mascii-btn" data-action="stop" title="Stop">&#x23EE;</button>
        <button class="mascii-btn" data-action="prev" title="Previous measure">&#x23EA;</button>
        <button class="mascii-btn" data-action="play" title="Play">&#x25B6;</button>
        <button class="mascii-btn" data-action="next" title="Next measure">&#x23E9;</button>
        <button class="mascii-btn" data-action="end" title="End">&#x23ED;</button>
      </div>
      <div class="mascii-sheet-scroll">
        <div class="mascii-sheet-scaler"><div class="mascii-sheet"></div></div>
      </div>
    `

    const sheetEl = this.container.querySelector('.mascii-sheet') as HTMLElement
    this.playBtn = this.container.querySelector('[data-action="play"]') as HTMLButtonElement

    // Disable all controls until we have a loaded score
    this.setControlsDisabled(true)

    // Parse
    let result
    try {
      result = new SourceParser().generateFromString(this.text)
    } catch (e) {
      sheetEl.className = 'mascii-sheet-error'
      sheetEl.textContent = `Parse error: ${String(e)}`
      return
    }

    const errors = result.errors?.getMsgs() ?? []
    if (errors.length > 0) {
      sheetEl.className = 'mascii-sheet-error'
      sheetEl.textContent = `Parse error: ${errors[0]}`
      return
    }

    const xml = new MusicXmlGenerator().generate(result)
    const midiBytes = new MidiGenerator().buildFile(result)

    // OSMD
    this.osmd = new OpenSheetMusicDisplay(sheetEl, {
      autoBeam: true,
      autoResize: true,
      drawTitle: true,
      drawSubtitle: false,
    })
    try {
      await this.osmd.load(xml)
    } catch (e) {
      sheetEl.className = 'mascii-sheet-error'
      sheetEl.textContent = `Render error: ${String(e)}`
      return
    }

    // Widen the sheet before rendering so OSMD fills the full logical width.
    // After applyZoom scales it down, the visual width matches the container.
    const zoom = this.options.zoom ?? 1
    if (zoom !== 1) sheetEl.style.width = `${100 / zoom}%`
    this.osmd.render()
    this.applyZoom(sheetEl)
    this.buildTimeline()

    // Player
    this.player = new MidiPlayer()
    this.player.load(midiBytes, this.osmdTimeline)
    this.osmd.cursor.show()

    this.player.on('state-change', (state: MidiPlayerState) => {
      this.updatePlayButton(state)
      this.setControlsDisabled(false)
    })

    this.player.on('step-change', (step: number) => {
      this.currentStep = step
      const cursor = this.osmd.cursor
      cursor.reset()
      for (let i = 0; i < step; i++) cursor.next()
      cursor.show()
    })

    this.setControlsDisabled(false)

    this.container.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest('[data-action]') as HTMLButtonElement | null
      if (!btn || btn.disabled) return
      void this.handleAction(btn.dataset['action'] ?? '')
    })
  }

  private applyZoom(sheetEl: HTMLElement): void {
    const zoom = this.options.zoom ?? 1
    if (zoom === 1) return
    const scaler = sheetEl.parentElement as HTMLElement
    // offsetHeight is the full rendered height before any scaling.
    const fullHeight = sheetEl.offsetHeight
    sheetEl.style.transform = `scale(${zoom})`
    sheetEl.style.transformOrigin = 'top left'
    // Constrain the scaler to the post-scale height so there is no leftover whitespace.
    scaler.style.height = `${fullHeight * zoom}px`
    scaler.style.overflow = 'hidden'
  }

  private buildTimeline(): void {
    const timeline: number[] = []
    const cursor = this.osmd.cursor
    cursor.reset()
    while (!cursor.iterator.EndReached) {
      timeline.push(cursor.iterator.currentTimeStamp.RealValue)
      cursor.next()
    }
    this.osmdTimeline = timeline
    cursor.reset()
  }

  private async handleAction(action: string): Promise<void> {
    switch (action) {
      case 'play':
        if (this.player.getState() === 'PLAYING') {
          this.player.pause()
        } else {
          await this.playWithLoadingState()
        }
        break
      case 'stop':
        this.player.stop()
        this.currentStep = 0
        this.osmd.cursor.reset()
        this.osmd.cursor.show()
        break
      case 'prev': {
        const cursor = this.osmd.cursor
        cursor.reset()
        for (let i = 0; i < this.currentStep; i++) cursor.next()
        cursor.previousMeasure()
        cursor.show()
        if (!cursor.iterator.EndReached) {
          const step = this.findStep(cursor.iterator.currentTimeStamp.RealValue)
          this.currentStep = step
          this.player.jumpToStep(step)
        }
        break
      }
      case 'next': {
        const cursor = this.osmd.cursor
        cursor.reset()
        for (let i = 0; i < this.currentStep; i++) cursor.next()
        cursor.nextMeasure()
        cursor.show()
        if (!cursor.iterator.EndReached) {
          const step = this.findStep(cursor.iterator.currentTimeStamp.RealValue)
          this.currentStep = step
          this.player.jumpToStep(step)
        }
        break
      }
      case 'end': {
        const step = Math.max(0, this.osmdTimeline.length - 1)
        this.currentStep = step
        const cursor = this.osmd.cursor
        cursor.reset()
        for (let i = 0; i < step; i++) cursor.next()
        cursor.show()
        this.player.jumpToStep(step)
        break
      }
    }
  }

  private async playWithLoadingState(): Promise<void> {
    if (this.loading) return
    this.loading = true
    this.playBtn.classList.add('mascii-btn--loading')
    this.playBtn.disabled = true
    try {
      await this.player.play()
    } finally {
      this.loading = false
      this.playBtn.classList.remove('mascii-btn--loading')
      this.playBtn.disabled = false
    }
  }

  private updatePlayButton(state: MidiPlayerState): void {
    if (state === 'PLAYING') {
      this.playBtn.innerHTML = '&#x23F8;'
      this.playBtn.title = 'Pause'
    } else {
      this.playBtn.innerHTML = '&#x25B6;'
      this.playBtn.title = 'Play'
    }
  }

  private setControlsDisabled(disabled: boolean): void {
    this.container.querySelectorAll<HTMLButtonElement>('.mascii-btn').forEach((btn) => {
      btn.disabled = disabled
    })
  }

  private findStep(realValue: number): number {
    let step = 0
    for (let i = 0; i < this.osmdTimeline.length; i++) {
      if ((this.osmdTimeline[i] ?? 0) <= realValue + 1e-9) step = i
      else break
    }
    return step
  }
}
