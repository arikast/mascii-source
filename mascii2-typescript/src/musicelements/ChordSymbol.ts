export enum ChordType {
    ADD  = 'ADD',
    AUG  = 'AUG',
    DIM  = 'DIM',
    DOM  = 'DOM',
    HDIM = 'HDIM',
    MAJ  = 'MAJ',
    MIN  = 'MIN',
    SUS  = 'SUS',
}

export interface ChordAlteration {
    accidental: '#' | '@' | null;
    degree: number;
}

export class ChordSymbol {
    root: string;
    rootAccidental: '#' | '@' | null;
    chordType: ChordType | null;
    alterations: ChordAlteration[];
    slashBass: string | null;
    start: number;
    end: number;
    srcOffset?: number;

    constructor(
        root: string,
        rootAccidental: '#' | '@' | null,
        chordType: ChordType | null,
        alterations: ChordAlteration[],
        slashBass: string | null,
        start: number,
        end: number,
        srcOffset?: number,
    ) {
        this.root = root;
        this.rootAccidental = rootAccidental;
        this.chordType = chordType;
        this.alterations = alterations;
        this.slashBass = slashBass;
        this.start = start;
        this.end = end;
        this.srcOffset = srcOffset;
    }

    getStart(): number { return this.start; }
    getEnd(): number { return this.end; }
}
