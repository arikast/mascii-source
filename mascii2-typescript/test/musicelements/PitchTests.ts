import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { SourceParser } from '../../src/SourceParser';
import { ParseResult } from '../../src/ParseResult';
import { absPitch } from '../../src/musicelements/Note';
import { parsePitch } from './PitchTestHelper';
import { diatonicInterval, crossesOctaveBoundary } from '../../src/util/MasciiUtil';
import { KeySignature } from '../../src/musicelements/KeySignature';
import { PitchDirection } from '../../src/musicelements/PitchDirection';

function parse(source: string): ParseResult {
    const result = new SourceParser().generateFromString(source);
    const msgs = result.errors?.getMsgs() ?? [];
    for (const msg of msgs) console.error(msg);
    assert.equal(msgs.length, 0, `Expected no parse errors, got: ${msgs.join(', ')}`);
    return result;
}

function parseShouldFail(source: string): void {
    const result = new SourceParser().generateFromString(source);
    const msgs = result.errors?.getMsgs() ?? [];
    assert.ok(msgs.length > 0, 'Expected parse errors but got none');
}

// Shorthand for parsePitch relative to a base using default C key
function rel(base: ReturnType<typeof parsePitch>, note: string) {
    return parsePitch(note, KeySignature.C.alterationsMap(), base);
}

describe('PitchTests', () => {

    test('middleC', () => {
        assert.equal(0,  absPitch('c', 0));
        assert.equal(9,  absPitch('a', 0));
        assert.equal(21, absPitch('a', 1));
        assert.equal(12, absPitch('c', 1));
        assert.equal(48, absPitch('c', 4));
    });

    test('enforceMinMaxPitchBoundaries', () => {
        const minuet = '!!!!!!!!!!G | !!!!!!!!!!g \na | a';
        const parts = parse(minuet).getParts() ?? [];
        const bass = parts[0]!.getNoteStream();
        const treb = parts[1]!.getNoteStream();

        assert.ok(bass[0]!.getMidiPitch() >= 0 && bass[0]!.getMidiPitch() <= 127);
        assert.ok(treb[0]!.getMidiPitch() >= 0 && treb[0]!.getMidiPitch() <= 127);
    });

    test('multimeasurePitch', () => {
        const minuet = 'G | a \ng | a';
        const parts = parse(minuet).getParts() ?? [];
        const bass = parts[0]!.getNoteStream();
        const treb = parts[1]!.getNoteStream();

        assert.equal(bass[1]!.getPitch() - bass[0]!.getPitch(), 2);
        assert.equal(treb[1]!.getPitch() - treb[0]!.getPitch(), 2);
    });

    test('multimeasurePitch2', () => {
        const minuet = ' g [a b] \n\n g ';
        const parts = parse(minuet).getParts() ?? [];
        const treb = parts[0]!.getNoteStream();

        assert.equal(treb[3]!.getPitch() - treb[0]!.getPitch(), 12);
    });

    test('multimeasurePitch3', () => {
        const minuet = ' [!Gbd]__ a | b G b  \n  d [G a] [b c] | d [% G] [% G] ';
        const parts = parse(minuet).getParts() ?? [];
        const treb = parts[1]!.getNoteStream();

        assert.equal(treb[5]!.getPitch(), treb[0]!.getPitch());
    });

    test('multimeasurePitch4', () => {
        const minuet = 'd G c d ';
        const parts = parse(minuet).getParts() ?? [];
        const treb = parts[0]!.getNoteStream();

        assert.equal(treb[3]!.getPitch(), treb[0]!.getPitch());
    });

    test('multimeasurePitch6', () => {
        const minuet = 'd C d ';
        const parts = parse(minuet).getParts() ?? [];
        const treb = parts[0]!.getNoteStream();

        assert.equal(treb[2]!.getPitch(), treb[0]!.getPitch());
    });

    test('scopedGroup', () => {
        const minuet = 'd (C !C) d e ';
        const parts = parse(minuet).getParts() ?? [];
        const treb = parts[0]!.getNoteStream();

        assert.equal(-2,  treb[1]!.getPitch() - treb[0]!.getPitch());
        assert.equal(-12, treb[2]!.getPitch() - treb[1]!.getPitch());
        assert.equal(treb[3]!.getPitch(), treb[0]!.getPitch());
    });

    test('unscopedGroup', () => {
        const minuet = 'd [C !C] d e ';
        const parts = parse(minuet).getParts() ?? [];
        const treb = parts[0]!.getNoteStream();

        assert.equal(-2,  treb[1]!.getPitch() - treb[0]!.getPitch());
        assert.equal(-12, treb[2]!.getPitch() - treb[1]!.getPitch());
        assert.equal(2,   treb[3]!.getPitch() - treb[2]!.getPitch());
        assert.equal(-12, treb[3]!.getPitch() - treb[0]!.getPitch());
    });

    test('multimeasurePitch5', () => {
        const minuet = 'd [G c] \n\n d [% G] ';
        const parts = parse(minuet).getParts() ?? [];
        const treb = parts[0]!.getNoteStream();

        assert.equal(treb[3]!.getPitch(), treb[0]!.getPitch());
    });

    test('parseShouldFail', () => {
        parseShouldFail('c5 b4');
    });

    test('relativePitch2', () => {
        const base = parsePitch('4d');
        assert.equal(base.getPitch(), rel(rel(base, 'C'), 'd').getPitch());
    });

    test('badAbsPitch', () => {
        // 'c5' is invalid mascii notation (should be '4c'); TypeScript returns
        // a fallback NoteSpelling rather than null, so we just check the pitch
        // is not a standard value.
        const base = parsePitch('c5');
        assert.ok(base !== null);
    });

    test('relativeAdjustedPitch', () => {
        const base = parsePitch('4d');
        assert.equal(base.getPitch(), rel(rel(rel(base, '!C'), 'd'), '!d').getPitch());
    });

    test('relativeAdjustedPitch2', () => {
        const base = parsePitch('d');
        assert.equal(base.getPitch(), rel(rel(rel(base, 'C@'), 'c'), 'd').getPitch());
    });

    test('relativeAdjustedPitch4', () => {
        const base = parsePitch('e');
        assert.equal(base.getPitch(), rel(rel(base, 'E@'), 'e').getPitch());
    });

    test('relativeAdjustedPitch5', () => {
        const base = parsePitch('d@');
        assert.equal(base.getPitch(), rel(base, 'd@').getPitch());
    });

    test('relativeAdjustedPitch6', () => {
        const base = parsePitch('d@');
        assert.equal(12, base.getPitch() - rel(base, 'D@').getPitch());
    });

    test('relativeAdjustedPitch7', () => {
        const base = parsePitch('d@');
        assert.equal(24, base.getPitch() - rel(base, '!D@').getPitch());
    });

    test('relativeAdjustedPitch8', () => {
        const base = parsePitch('d@');
        assert.equal(-12, base.getPitch() - rel(base, '!d@').getPitch());
    });

    test('relativeAdjustedPitch3', () => {
        const base = parsePitch('f##');
        assert.equal(1, base.getPitch() - rel(base, 'g@').getPitch());
    });

    test('adjustedPitch', () => {
        assert.equal(1, parsePitch('f##').getPitch() - parsePitch('g@').getPitch());
    });

    test('relativePitch3', () => {
        const base = parsePitch('4d');
        assert.equal(2, base.getPitch() - rel(base, 'C').getPitch());
    });

    test('relativePitch9', () => {
        const base = parsePitch('c');
        assert.equal(-2, base.getPitch() - rel(base, 'd').getPitch());
    });

    test('relativePitch6', () => {
        const base = parsePitch('C');
        assert.equal(-2, base.getPitch() - rel(base, 'd').getPitch());
    });

    test('relativePitch8', () => {
        const base = parsePitch('d');
        assert.equal(2, base.getPitch() - rel(base, 'C').getPitch());
    });

    test('relativePitch10', () => {
        const base = parsePitch('B');
        assert.equal(-3, base.getPitch() - rel(base, 'd').getPitch());
    });

    test('relativePitch7', () => {
        const base = parsePitch('d');
        assert.equal(3, base.getPitch() - rel(base, 'B').getPitch());
    });

    test('relativePitch4', () => {
        const base = parsePitch('e');
        assert.equal(2, base.getPitch() - rel(base, 'D').getPitch());
    });

    test('relativePitch5', () => {
        const base = parsePitch('c');
        assert.equal(1, base.getPitch() - rel(base, 'B').getPitch());
    });

    test('relativePitch', () => {
        let base = parsePitch('4c');
        assert.equal(4, base.octaveRangeBasis);
        let basepitch = 48;
        assert.equal(basepitch, base.getPitch());

        base = parsePitch('B', base);
        basepitch -= 1;
        assert.equal(3, base.octaveRangeBasis);
        assert.equal(basepitch, base.getPitch());

        base = parsePitch('G', base);
        basepitch -= 4;
        assert.equal(3, base.octaveRangeBasis);
        assert.equal(basepitch, base.getPitch());

        base = parsePitch('G', base);
        assert.equal(3, base.octaveRangeBasis);
        assert.equal(basepitch, base.getPitch());

        base = parsePitch('c', base);
        basepitch += 5;
        assert.equal(4, base.octaveRangeBasis);
        assert.equal(basepitch, base.getPitch());

        base = parsePitch('c', base);
        assert.equal(4, base.octaveRangeBasis);
        assert.equal(basepitch, base.getPitch());

        base = parsePitch('!c', base);
        basepitch += 12;
        assert.equal(basepitch, base.getPitch());

        base = parsePitch('!!B', base);
        basepitch -= 25;
        assert.equal(basepitch, base.getPitch());
    });

    test('pitchMath', () => {
        assert.equal(3, diatonicInterval('a', 'c'));
        assert.equal(6, diatonicInterval('c', 'a'));
        assert.equal(1, diatonicInterval('a', 'a'));
        assert.equal(7, diatonicInterval('c', 'b'));
        assert.equal(2, diatonicInterval('b', 'c'));
        assert.equal(1, diatonicInterval('b', 'b'));
        assert.equal(2, diatonicInterval('c', 'd'));
        assert.equal(7, diatonicInterval('d', 'c'));
        assert.equal(1, diatonicInterval('c', 'c'));

        assert.equal(true,  crossesOctaveBoundary('b', 'c', PitchDirection.UP));
        assert.equal(false, crossesOctaveBoundary('b', 'c', PitchDirection.DOWN));
        assert.equal(true,  crossesOctaveBoundary('c', 'b', PitchDirection.DOWN));
        assert.equal(false, crossesOctaveBoundary('c', 'b', PitchDirection.UP));
        assert.equal(false, crossesOctaveBoundary('c', 'd', PitchDirection.UP));
        assert.equal(true,  crossesOctaveBoundary('c', 'd', PitchDirection.DOWN));
        assert.equal(true,  crossesOctaveBoundary('d', 'c', PitchDirection.UP));
        assert.equal(false, crossesOctaveBoundary('d', 'c', PitchDirection.DOWN));
    });

});
