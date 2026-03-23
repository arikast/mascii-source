import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { SourceParser } from '../../src/SourceParser';
import { ParseResult } from '../../src/ParseResult';
import { ChordSymbol } from '../../src/musicelements/ChordSymbol';
import { TICKS_PER_BEAT } from '../../src/MasciiSyntaxEventListener';

function parse(source: string): ParseResult {
    const result = new SourceParser().generateFromString(source);
    const msgs = result.errors?.getMsgs() ?? [];
    for (const msg of msgs) console.error(msg);
    assert.equal(msgs.length, 0, `Expected no parse errors, got: ${msgs.join(', ')}`);
    return result;
}

describe('ChordSymbolTests', () => {

    test('simple chord symbol root only', () => {
        const minuet = 'G: g  d  e  f';
        const parts = parse(minuet).getParts() ?? [];
        const chords = parts[0]!.getChordSymbolStream();
        assert.equal(chords.length, 1);
        assert.equal(chords[0]!.root, 'G');
        assert.equal(chords[0]!.chordType, null);
        assert.equal(chords[0]!.alterations.length, 0);
        assert.equal(chords[0]!.slashBass, null);
    });

    test('chord symbol with minor type', () => {
        const minuet = 'Gm: g  d  e  f';
        const parts = parse(minuet).getParts() ?? [];
        const chords = parts[0]!.getChordSymbolStream();
        assert.equal(chords.length, 1);
        assert.equal(chords[0]!.root, 'G');
        assert.equal(chords[0]!.chordType, 'm');
    });

    test('chord symbol with alteration', () => {
        const minuet = 'G7: g  d  e  f';
        const parts = parse(minuet).getParts() ?? [];
        const chords = parts[0]!.getChordSymbolStream();
        assert.equal(chords.length, 1);
        assert.equal(chords[0]!.root, 'G');
        assert.equal(chords[0]!.chordType, null);
        assert.equal(chords[0]!.alterations.length, 1);
        assert.equal(chords[0]!.alterations[0]!.degree, 7);
        assert.equal(chords[0]!.alterations[0]!.accidental, null);
    });

    test('chord symbol with sharp alteration', () => {
        const minuet = 'G#9: g  d  e  f';
        const parts = parse(minuet).getParts() ?? [];
        const chords = parts[0]!.getChordSymbolStream();
        assert.equal(chords.length, 1);
        assert.equal(chords[0]!.alterations[0]!.accidental, '#');
        assert.equal(chords[0]!.alterations[0]!.degree, 9);
    });

    test('chord symbol with flat alteration', () => {
        const minuet = 'G@9: g  d  e  f';
        const parts = parse(minuet).getParts() ?? [];
        const chords = parts[0]!.getChordSymbolStream();
        assert.equal(chords.length, 1);
        assert.equal(chords[0]!.alterations[0]!.accidental, '@');
        assert.equal(chords[0]!.alterations[0]!.degree, 9);
    });

    test('chord symbol with slash bass', () => {
        const minuet = 'G/b: g  d  e  f';
        const parts = parse(minuet).getParts() ?? [];
        const chords = parts[0]!.getChordSymbolStream();
        assert.equal(chords.length, 1);
        assert.equal(chords[0]!.root, 'G');
        assert.equal(chords[0]!.slashBass, 'b');
    });

    test('chord symbol with type and multiple alterations', () => {
        const minuet = 'Gm7@5: g  d  e  f';
        const parts = parse(minuet).getParts() ?? [];
        const chords = parts[0]!.getChordSymbolStream();
        assert.equal(chords.length, 1);
        assert.equal(chords[0]!.chordType, 'm');
        assert.equal(chords[0]!.alterations.length, 2);
        assert.equal(chords[0]!.alterations[0]!.degree, 7);
        assert.equal(chords[0]!.alterations[0]!.accidental, null);
        assert.equal(chords[0]!.alterations[1]!.degree, 5);
        assert.equal(chords[0]!.alterations[1]!.accidental, '@');
    });

    test('multiple chord symbols across measure', () => {
        const minuet = 'G: g  Am: a  D7: d  e';
        const parts = parse(minuet).getParts() ?? [];
        const chords = parts[0]!.getChordSymbolStream();
        assert.equal(chords.length, 3);
        assert.equal(chords[0]!.root, 'G');
        assert.equal(chords[1]!.root, 'A');
        assert.equal(chords[1]!.chordType, 'm');
        assert.equal(chords[2]!.root, 'D');
        assert.equal(chords[2]!.alterations[0]!.degree, 7);
    });

    test('chord symbol timing matches timed element', () => {
        const minuet = 'G:a  Am:g  D7:f  e';
        const parts = parse(minuet).getParts() ?? [];
        const chords = parts[0]!.getChordSymbolStream();
        const notes = parts[0]!.getNoteStream();
        // Each timed element occupies one beat (TICKS_PER_BEAT = 480)
        assert.equal(chords[0]!.start, notes[0]!.getStart());
        assert.equal(chords[0]!.end, notes[0]!.getEnd());
        assert.equal(chords[1]!.start, notes[1]!.getStart());
        assert.equal(chords[2]!.start, notes[2]!.getStart());
    });

    test('chord symbol with grouped alterations', () => {
        const minuet = 'G(#9 @13): g  d  e  f';
        const parts = parse(minuet).getParts() ?? [];
        const chords = parts[0]!.getChordSymbolStream();
        assert.equal(chords.length, 1);
        assert.equal(chords[0]!.alterations.length, 2);
        assert.equal(chords[0]!.alterations[0]!.accidental, '#');
        assert.equal(chords[0]!.alterations[0]!.degree, 9);
        assert.equal(chords[0]!.alterations[1]!.accidental, '@');
        assert.equal(chords[0]!.alterations[1]!.degree, 13);
    });

});
