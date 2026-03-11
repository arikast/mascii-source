import { Accidental } from './Accidental';

export class KeySignatureAdHoc {
    private static readonly SHARPS_BYTE = 0 * 8;
    private static readonly DBLSHARPS_BYTE = 1 * 8;
    private static readonly FLATS_BYTE = 2 * 8;
    private static readonly DBLFLATS_BYTE = 3 * 8;

    private bitmap: number;

    constructor(bitmap = 0) {
        this.bitmap = bitmap;
    }

    copy(): KeySignatureAdHoc {
        return new KeySignatureAdHoc(this.bitmap);
    }

    asBitmap(): number {
        return this.bitmap;
    }

    getAccidental(c: string): Accidental {
        const offset = c.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        if ((this.bitmap & (1 << (offset + KeySignatureAdHoc.DBLSHARPS_BYTE))) !== 0) return Accidental.DBLSHARP;
        if ((this.bitmap & (1 << (offset + KeySignatureAdHoc.DBLFLATS_BYTE))) !== 0) return Accidental.DBLFLAT;
        if ((this.bitmap & (1 << (offset + KeySignatureAdHoc.SHARPS_BYTE))) !== 0) return Accidental.SHARP;
        if ((this.bitmap & (1 << (offset + KeySignatureAdHoc.FLATS_BYTE))) !== 0) return Accidental.FLAT;
        return Accidental.NATURAL;
    }

    setAccidental(c: string, acc: Accidental): number {
        const offset = c.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        if (acc === Accidental.DBLFLAT) {
            this.bitmap |= 1 << (offset + KeySignatureAdHoc.DBLFLATS_BYTE);
        } else {
            this.bitmap &= ~(1 << (offset + KeySignatureAdHoc.DBLFLATS_BYTE));
        }
        if (acc === Accidental.DBLSHARP) {
            this.bitmap |= 1 << (offset + KeySignatureAdHoc.DBLSHARPS_BYTE);
        } else {
            this.bitmap &= ~(1 << (offset + KeySignatureAdHoc.DBLSHARPS_BYTE));
        }
        if (acc === Accidental.FLAT) {
            this.bitmap |= 1 << (offset + KeySignatureAdHoc.FLATS_BYTE);
        } else {
            this.bitmap &= ~(1 << (offset + KeySignatureAdHoc.FLATS_BYTE));
        }
        if (acc === Accidental.SHARP) {
            this.bitmap |= 1 << (offset + KeySignatureAdHoc.SHARPS_BYTE);
        } else {
            this.bitmap &= ~(1 << (offset + KeySignatureAdHoc.SHARPS_BYTE));
        }
        return this.bitmap;
    }
}

export class KeySignature {
    readonly degree: string;
    readonly accidental: Accidental;
    readonly code: number;
    private readonly _alterations: KeySignatureAdHoc;

    private constructor(degree: string, accidental: Accidental, alterations: KeySignatureAdHoc, code: number) {
        this.degree = degree;
        this.accidental = accidental;
        this._alterations = alterations;
        this.code = code;
    }

    alterationsMap(): KeySignatureAdHoc {
        return this._alterations.copy();
    }

    toString(): string {
        return `${this.code}`;
    }

    private static setFlats(...degrees: string[]): KeySignatureAdHoc {
        const ans = new KeySignatureAdHoc();
        for (const ch of degrees) ans.setAccidental(ch, Accidental.FLAT);
        return ans;
    }

    private static setSharps(...degrees: string[]): KeySignatureAdHoc {
        const ans = new KeySignatureAdHoc();
        for (const ch of degrees) ans.setAccidental(ch, Accidental.SHARP);
        return ans;
    }

    static readonly C_FLAT  = new KeySignature('c', Accidental.FLAT,    KeySignature.setFlats('b','e','a','d','g','c','f'), -7);
    static readonly G_FLAT  = new KeySignature('g', Accidental.FLAT,    KeySignature.setFlats('b','e','a','d','g','c'),     -6);
    static readonly D_FLAT  = new KeySignature('d', Accidental.FLAT,    KeySignature.setFlats('b','e','a','d','g'),         -5);
    static readonly A_FLAT  = new KeySignature('a', Accidental.FLAT,    KeySignature.setFlats('b','e','a','d'),             -4);
    static readonly E_FLAT  = new KeySignature('e', Accidental.FLAT,    KeySignature.setFlats('b','e','a'),                 -3);
    static readonly B_FLAT  = new KeySignature('b', Accidental.FLAT,    KeySignature.setFlats('b','e'),                     -2);
    static readonly F       = new KeySignature('f', Accidental.FLAT,    KeySignature.setFlats('b'),                         -1);
    static readonly C       = new KeySignature('c', Accidental.NATURAL, new KeySignatureAdHoc(),                             0);
    static readonly G       = new KeySignature('g', Accidental.SHARP,   KeySignature.setSharps('f'),                         1);
    static readonly D       = new KeySignature('d', Accidental.SHARP,   KeySignature.setSharps('f','c'),                     2);
    static readonly A       = new KeySignature('a', Accidental.SHARP,   KeySignature.setSharps('f','c','g'),                 3);
    static readonly E       = new KeySignature('e', Accidental.SHARP,   KeySignature.setSharps('f','c','g','d'),             4);
    static readonly B       = new KeySignature('b', Accidental.SHARP,   KeySignature.setSharps('f','c','g','d','a'),         5);
    static readonly F_SHARP = new KeySignature('f', Accidental.SHARP,   KeySignature.setSharps('f','c','g','d','a','e'),     6);
    static readonly C_SHARP = new KeySignature('c', Accidental.SHARP,   KeySignature.setSharps('f','c','g','d','a','e','b'), 7);

    private static readonly allKeys: KeySignature[] = [
        KeySignature.C_FLAT, KeySignature.G_FLAT, KeySignature.D_FLAT, KeySignature.A_FLAT,
        KeySignature.E_FLAT, KeySignature.B_FLAT, KeySignature.F,      KeySignature.C,
        KeySignature.G,      KeySignature.D,      KeySignature.A,      KeySignature.E,
        KeySignature.B,      KeySignature.F_SHARP, KeySignature.C_SHARP,
    ];

    // Indexed [a, b, c, d, e, f, g] (offset from 'a')
    private static readonly flatSignatures: (KeySignature | null)[] = [
        KeySignature.A_FLAT, KeySignature.B_FLAT, null, KeySignature.D_FLAT,
        KeySignature.E_FLAT, null, KeySignature.G_FLAT,
    ];
    private static readonly naturalSignatures: KeySignature[] = [
        KeySignature.A, KeySignature.B, KeySignature.C, KeySignature.D,
        KeySignature.E, KeySignature.F, KeySignature.G,
    ];
    private static readonly sharpSignatures: (KeySignature | null)[] = [
        null, null, KeySignature.C_SHARP, null, null, KeySignature.F_SHARP, null,
    ];

    static getByCode(code: number): KeySignature | null {
        return KeySignature.allKeys.find(k => k.code === code) ?? null;
    }

    static getByDegree(degree: string, accidental: Accidental, isMinor: boolean): KeySignature | null {
        const d = degree.toLowerCase();
        if (!isMinor) {
            let keys: (KeySignature | null)[];
            if (accidental === Accidental.FLAT) keys = KeySignature.flatSignatures;
            else if (accidental === Accidental.SHARP) keys = KeySignature.sharpSignatures;
            else keys = KeySignature.naturalSignatures;
            const idx = (d.charCodeAt(0) - 'a'.charCodeAt(0)) % keys.length;
            return keys[idx] ?? null;
        } else {
            // relativeMajorDegree: (degree + 2) % 7 (gives the 6th note going backwards = relative major)
            const relMaj = ((d.charCodeAt(0) - 'a'.charCodeAt(0)) + 2) % 7;
            const nat = KeySignature.naturalSignatures[relMaj];
            if (nat && nat._alterations.getAccidental(d) === accidental) return nat;
            const sharp = KeySignature.sharpSignatures[relMaj];
            if (sharp && sharp._alterations.getAccidental(d) === accidental) return sharp;
            return KeySignature.flatSignatures[relMaj] ?? null;
        }
    }
}
