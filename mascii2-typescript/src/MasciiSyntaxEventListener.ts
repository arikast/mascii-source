import MasciiParserListener from './antlr-generated/MasciiParserListener';
import {
    BarsContext,
    Concurrent_blockContext,
    Empty_staffContext,
    HeaderContext,
    Lyrics_rowContext,
    Note_end_allContext,
    Note_end_oneContext,
    Note_startContext,
    Scoped_groupContext,
    StaffContext,
    Staves_n_lyricsrowContext,
    Timed_elementContext,
    Timed_elementsContext,
} from './antlr-generated/MasciiParser';
import { Part } from './musicelements/Part';
import { TimeSlot } from './musicelements/TimeSlot';
import { MetaInfo, MetaInfoElement, TimeSig, KeySig, Tempo, Title, Copyright, Composer, Lyricist, Patch, Lyric } from './musicelements/MetaInfo';
import { splitHeaderValues, asLyrics, mergeBIntoA, times } from './util/MasciiUtil';

export const TICKS_PER_BEAT = 480;

export class MasciiSyntaxEventListener extends MasciiParserListener {
    private currentPart = 0;
    private parts: Part[] | null = null;
    private defaultMeta: MetaInfo;
    private globalMetaInfoChanges: MetaInfoElement<unknown>[] = [];
    private lyricVerse = 0;
    private currentPartCollectedLyrics: (Lyric | null)[] | null = null;

    constructor() {
        super();

        this.defaultMeta = new MetaInfo();
        this.defaultMeta.instrument = 'piano';
        this.defaultMeta.clef = 'treble';

        const ts = new TimeSig();
        ts.setRawValue('4/4');
        this.defaultMeta.timeSig = ts;

        const ks = new KeySig();
        ks.setRawValue('c');
        this.defaultMeta.keySig = ks;

        const tem = new Tempo();
        tem.setTempo(120);
        this.defaultMeta.tempo = tem;

        this.wireListeners();
    }

    private wireListeners(): void {
        this.enterHeader = this._enterHeader.bind(this);
        this.enterBars = this._enterBars.bind(this);
        this.enterConcurrent_block = this._enterConcurrent_block.bind(this);
        this.exitConcurrent_block = this._exitConcurrent_block.bind(this);
        this.enterStaves_n_lyricsrow = this._enterStaves_n_lyricsrow.bind(this);
        this.exitStaves_n_lyricsrow = this._exitStaves_n_lyricsrow.bind(this);
        this.exitLyrics_row = this._exitLyrics_row.bind(this);
        this.enterStaff = this._enterStaff.bind(this);
        this.exitStaff = this._exitStaff.bind(this);
        this.exitEmpty_staff = this._exitEmpty_staff.bind(this);
        this.enterScoped_group = this._enterScoped_group.bind(this);
        this.exitScoped_group = this._exitScoped_group.bind(this);
        this.enterTimed_elements = this._enterTimed_elements.bind(this);
        this.enterTimed_element = this._enterTimed_element.bind(this);
        this.exitTimed_element = this._exitTimed_element.bind(this);
        this.enterNote_end_all = this._enterNote_end_all.bind(this);
        this.enterNote_end_one = this._enterNote_end_one.bind(this);
        this.enterNote_start = this._enterNote_start.bind(this);
    }

    getGlobalMetaInfoChanges(): MetaInfoElement<unknown>[] {
        return this.globalMetaInfoChanges;
    }

    partCount(): number {
        return this.parts?.length ?? 0;
    }

    getParts(): Part[] | null {
        return this.parts;
    }

    private curPart(): Part {
        return this.parts![this.currentPart]!;
    }

    private curMeta(): MetaInfo {
        return this.defaultMeta;
    }

    barTime(): number {
        return (this.curMeta().timeSig?.timeNumerator ?? 4) * TICKS_PER_BEAT;
    }

    initParts(count: number): void {
        this.parts = Array.from({ length: count }, () => new Part());
    }

    private _enterHeader(ctx: HeaderContext): void {
        const headerName = ctx.header_name().getText().toLowerCase();
        const headerContent = ctx.header_values().getText();
        const headerVals = splitHeaderValues(headerContent);

        const currentTime = 0;

        switch (headerName) {
            case 'tempo': {
                const tem = new Tempo();
                tem.setRawValue(headerVals[0] ?? '');
                tem.setStartingAt(currentTime);
                this.globalMetaInfoChanges.push(tem);
                this.defaultMeta.tempo = tem;
                break;
            }
            case 'time': {
                const ts = new TimeSig();
                ts.setRawValue(headerVals[0] ?? '');
                ts.setStartingAt(currentTime);
                this.globalMetaInfoChanges.push(ts);
                this.defaultMeta.timeSig = ts;
                break;
            }
            case 'key': {
                const ks = new KeySig();
                ks.setRawValue(headerVals[0] ?? '');
                ks.setStartingAt(currentTime);
                this.globalMetaInfoChanges.push(ks);
                this.defaultMeta.keySig = ks;
                break;
            }
            case 'title': {
                const title = new Title();
                title.setRawValue(headerContent);
                title.setStartingAt(currentTime);
                this.globalMetaInfoChanges.push(title);
                this.defaultMeta.title = title;
                break;
            }
            case 'copyright': {
                const cop = new Copyright();
                cop.setRawValue(headerContent);
                cop.setStartingAt(currentTime);
                this.globalMetaInfoChanges.push(cop);
                this.defaultMeta.copyright = cop;
                break;
            }
            case 'composer': {
                const composer = new Composer();
                composer.setRawValue(headerContent);
                composer.setStartingAt(currentTime);
                this.globalMetaInfoChanges.push(composer);
                this.defaultMeta.composer = composer;
                break;
            }
            case 'lyrics': {
                const lyricist = new Lyricist();
                lyricist.setRawValue(headerContent);
                lyricist.setStartingAt(currentTime);
                this.globalMetaInfoChanges.push(lyricist);
                this.defaultMeta.lyricist = lyricist;
                break;
            }
            case 'patch': {
                if (this.partCount() === 0) this.initParts(headerVals.length);
                let vindex = 0;
                for (const p of this.parts!) {
                    const rv = headerVals[vindex] ?? undefined;
                    let pat: Patch;
                    if (rv != null && rv !== '') {
                        pat = new Patch();
                        pat.setRawValue(rv);
                        pat.setStartingAt(currentTime);
                    } else {
                        pat = this.defaultMeta.patch ?? new Patch();
                    }
                    p.metaInfoChanges.push(pat);
                    this.defaultMeta.patch = pat;
                    vindex++;
                }
                break;
            }
            case 'channel': {
                if (this.partCount() === 0) this.initParts(headerVals.length);
                for (let i = 0; i < headerVals.length && i < this.parts!.length; i++) {
                    const s = headerVals[i]!;
                    if (s.length === 0) continue;
                    const ch = parseInt(s, 10) - 1; // 1-based in notation, 0-based internally
                    this.parts![i]!.setChannel(ch);
                }
                break;
            }
            case 'clefs': {
                if (this.partCount() === 0) this.initParts(headerVals.length);
                for (let i = 0; i < headerVals.length && i < this.parts!.length; i++) {
                    const s = headerVals[i]!.trim();
                    if (s.length > 0) this.parts![i]!.setClef(s.toLowerCase());
                }
                break;
            }
            default: break;
        }
    }

    private _enterBars(_ctx: BarsContext): void {
        // nothing
    }

    private _enterConcurrent_block(ctx: Concurrent_blockContext): void {
        this.currentPart = 0;
        if (this.partCount() === 0) {
            const count = ctx.staves_n_lyricsrow_list().length;
            this.initParts(count);
        }
    }

    private _exitConcurrent_block(_ctx: Concurrent_blockContext): void {
        let maxBar = 0;
        for (const p of this.parts!) {
            maxBar = Math.max(maxBar, p.getBarCount());
        }
        for (const p of this.parts!) {
            p.setBarCount(maxBar);
            p.resetCurrentMeasureBlockIndex();
        }
    }

    private _enterStaves_n_lyricsrow(_ctx: Staves_n_lyricsrowContext): void {
        // nothing
    }

    private _exitStaves_n_lyricsrow(_ctx: Staves_n_lyricsrowContext): void {
        if (this.currentPartCollectedLyrics != null) {
            for (const lyric of this.currentPartCollectedLyrics) {
                if (lyric != null) {
                    this.curPart().metaInfoChanges.push(lyric);
                }
            }
            this.currentPartCollectedLyrics = null;
        }
        this.lyricVerse = 0;
        this.currentPart = (this.currentPart + 1) % this.partCount();
    }

    private _exitLyrics_row(ctx: Lyrics_rowContext): void {
        const lyricLine = ctx.LYRICS().getText();
        const lyrics = lyricLine.split(/[\s|]+/);
        const p = this.curPart();
        const notes = p.getNotesInThisMeasureBlock();
        const prefix = times(this.lyricVerse, '\n');

        const lyricList = asLyrics(notes, lyrics, prefix);
        if (this.currentPartCollectedLyrics == null) {
            this.currentPartCollectedLyrics = lyricList;
        } else {
            mergeBIntoA(this.currentPartCollectedLyrics, lyricList);
        }
        this.lyricVerse++;
    }

    private _enterStaff(_ctx: StaffContext): void {
        const p = this.curPart();
        p.pushTiming(TimeSlot.init(p.getBarCount() * this.barTime(), this.barTime()));
        p.currentKey = this.curMeta().keySig!.keySignature.alterationsMap();
    }

    private _exitStaff(_ctx: StaffContext): void {
        this.curPart().popTiming();
        this.curPart().bumpBarCount();
    }

    private _exitEmpty_staff(_ctx: Empty_staffContext): void {
        this.curPart().bumpBarCount();
    }

    private _enterScoped_group(_ctx: Scoped_groupContext): void {
        const pbase = this.curPart().pitchBase;
        if (pbase.length > 0) {
            pbase.push(pbase[pbase.length - 1]!);
        }
    }

    private _exitScoped_group(_ctx: Scoped_groupContext): void {
        const pbase = this.curPart().pitchBase;
        if (pbase.length > 0) pbase.pop();
    }

    private _enterTimed_elements(ctx: Timed_elementsContext): void {
        if (ctx.getChildCount() === 0) return;

        const parentSlot = this.curPart().peekTiming();
        const childSizes: boolean[] = [];

        for (const tc of ctx.timed_element_list()) {
            const dd = tc.duration_doubled() as unknown;
            childSizes.push(dd != null);
        }

        const slots = parentSlot.divvy(childSizes);

        // Push in reverse order (LIFO)
        for (let i = slots.length - 1; i >= 0; i--) {
            this.curPart().pushTiming(slots[i]!);
        }
    }

    private _enterTimed_element(ctx: Timed_elementContext): void {
        const normalDot = ctx._normal_dot as unknown;
        const inverseDot = ctx._inverse_dot as unknown;

        if (normalDot != null) {
            if (ctx.DBL_DOTTED_list().length > 0) {
                const mytime = this.curPart().popTiming();
                const nexttime = this.curPart().popTiming();
                let lucre = Math.floor(nexttime.duration / 2);
                lucre += Math.floor(lucre / 2);
                stealNextNeighborsTime(mytime, nexttime, lucre);
                this.curPart().pushTiming(nexttime);
                this.curPart().pushTiming(mytime);
            } else if (ctx.DOTTED_list().length > 0) {
                const mytime = this.curPart().popTiming();
                const nexttime = this.curPart().popTiming();
                const lucre = Math.floor(nexttime.duration / 2);
                stealNextNeighborsTime(mytime, nexttime, lucre);
                this.curPart().pushTiming(nexttime);
                this.curPart().pushTiming(mytime);
            }
        } else if (inverseDot != null) {
            if (ctx.DBL_DOTTED_list().length > 0) {
                const mytime = this.curPart().popTiming();
                const nexttime = this.curPart().popTiming();
                let lucre = Math.floor(mytime.duration / -2);
                lucre += Math.floor(lucre / 2);
                stealNextNeighborsTime(mytime, nexttime, lucre);
                this.curPart().pushTiming(nexttime);
                this.curPart().pushTiming(mytime);
            } else if (ctx.DOTTED_list().length > 0) {
                const mytime = this.curPart().popTiming();
                const nexttime = this.curPart().popTiming();
                const lucre = Math.floor(mytime.duration / -2);
                stealNextNeighborsTime(mytime, nexttime, lucre);
                this.curPart().pushTiming(nexttime);
                this.curPart().pushTiming(mytime);
            }
        }
    }

    private _exitTimed_element(_ctx: Timed_elementContext): void {
        this.curPart().popTiming();
    }

    private _enterNote_end_all(_ctx: Note_end_allContext): void {
        this.curPart().finishAllOpenNotesHere();
    }

    private _enterNote_end_one(ctx: Note_end_oneContext): void {
        this.curPart().finishNoteHere(ctx.PITCH().getText());
    }

    private _enterNote_start(ctx: Note_startContext): void {
        const noteTie = ctx.note_tie() as unknown;
        if (noteTie == null) {
            this.curPart().startAndFinishNoteHere(ctx.PITCH().getText());
        } else {
            this.curPart().startNoteHere(ctx.PITCH().getText());
        }
    }
}

function stealNextNeighborsTime(first: TimeSlot, nextNeighbor: TimeSlot, lucre: number): void {
    first.duration += lucre;
    nextNeighbor.duration -= lucre;
    nextNeighbor.offset += lucre;
}
