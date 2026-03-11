import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { SourceParser } from '../../src/SourceParser';
import { ParseResult } from '../../src/ParseResult';
import { Accidental } from '../../src/musicelements/Accidental';
import { KeySignature } from '../../src/musicelements/KeySignature';
import { relativeMajorDegree } from '../../src/util/MasciiUtil';

function parse(source: string): ParseResult {
    const result = new SourceParser().generateFromString(source);
    const msgs = result.errors?.getMsgs() ?? [];
    for (const msg of msgs) console.error(msg);
    assert.equal(msgs.length, 0, `Expected no parse errors, got: ${msgs.join(', ')}`);
    return result;
}

describe('KeysigTests', () => {

    test('keysigencoding', () => {
        const key = KeySignature.B_FLAT.alterationsMap();
        const origBitMap = key.asBitmap();

        assert.equal(key.getAccidental('b'), Accidental.FLAT);   // -1
        assert.equal(key.getAccidental('e'), Accidental.FLAT);   // -1
        assert.equal(key.getAccidental('c'), Accidental.NATURAL); // 0

        assert.notEqual(KeySignature.E_FLAT.alterationsMap().asBitmap(), key.asBitmap());

        key.setAccidental('a', Accidental.FLAT);
        assert.equal(KeySignature.E_FLAT.alterationsMap().asBitmap(), key.asBitmap());

        // make sure original unaffected
        assert.equal(origBitMap, KeySignature.B_FLAT.alterationsMap().asBitmap());
    });

    test('relativeMajor', () => {
        assert.equal('c', relativeMajorDegree('a'));
        assert.equal('d', relativeMajorDegree('b'));
        assert.equal('b', relativeMajorDegree('g'));
        assert.equal('g', relativeMajorDegree('e'));
        assert.equal('a', relativeMajorDegree('f'));
    });

    test('keysigLookup', () => {
        assert.equal(KeySignature.C,       KeySignature.getByDegree('c', Accidental.NATURAL, false));
        assert.equal(KeySignature.D_FLAT,  KeySignature.getByDegree('d', Accidental.FLAT,    false));
        assert.equal(KeySignature.F_SHARP, KeySignature.getByDegree('f', Accidental.SHARP,   false));
        assert.equal(KeySignature.C_SHARP, KeySignature.getByDegree('a', Accidental.SHARP,   true));
        assert.equal(KeySignature.B_FLAT,  KeySignature.getByDegree('g', Accidental.NATURAL, true));
        assert.equal(KeySignature.E,       KeySignature.getByDegree('c', Accidental.SHARP,   true));
    });

    test('alterationMemory', () => {
        const minuet = '{key: gm}\n\ng [b A] G b= A@ G a b | c B A G';
        const parts = parse(minuet).getParts() ?? [];
        const treb = parts[0]!.getNoteStream();

        assert.equal(0, treb[3]!.getPitch() - treb[0]!.getPitch());
        assert.equal(1, treb[4]!.getPitch() - treb[1]!.getPitch());
    });

    test('alterationMemory2', () => {
        const minuet = '{key: fm}\na F | E= f E';
        const parts = parse(minuet).getParts() ?? [];
        const treb = parts[0]!.getNoteStream();

        assert.equal(treb[2]!.getPitch(), treb[4]!.getPitch());
    });

    test('alterationMemory3', () => {
        const minuet = '{key: gm}\ng [b A] G b= A@ G a b | c B A G';
        const parts = parse(minuet).getParts() ?? [];
        const treb = parts[0]!.getNoteStream();

        assert.equal(0, treb[3]!.getPitch() - treb[0]!.getPitch());
        assert.equal(1, treb[11]!.getPitch() - treb[7]!.getPitch());
    });

    test('accidentalKey', () => {
        const minuet = '{key: d@}\nf e d g';
        const result = parse(minuet);
        assert.equal(
            KeySignature.D_FLAT.alterationsMap().asBitmap(),
            result.getParts()![0]!.currentKey.asBitmap(),
        );
    });

});
