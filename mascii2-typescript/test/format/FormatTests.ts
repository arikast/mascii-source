import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { SourceParser } from '../../src/SourceParser';
import { MasciiParseErrorListener } from '../../src/MasciiParseErrorListener';
import { FormatGenerator } from '../../src/FormatGenerator';

function format(source: string): string {
    const errListener = new MasciiParseErrorListener();
    const tree = new SourceParser().parseFromString(source, errListener);
    const msgs = errListener.getMsgs();
    for (const msg of msgs) console.error(msg);
    assert.equal(msgs.length, 0, `Expected no parse errors, got: ${msgs.join(', ')}`);
    return new FormatGenerator().format(tree, source);
}

describe('FormatTests', () => {

    test('condenses runs of spaces then re-adds beat spaces', () => {
        // 8 eighths in 4/4 (2 per beat): messy spacing collapses, and a beat
        // space is restored at every beat boundary.
        const out = format('a    b  c   d e f g a');
        assert.equal(out, 'a b  c d  e f  g a');
    });

    test('adds a beat space based on the time signature (3/4)', () => {
        const out = format('{time:3/4}\n\na b c d e f');
        const lines = out.split('\n');
        assert.equal(lines[lines.length - 1], 'a b  c d  e f');
    });

    test('quarter notes in 4/4 are separated at every beat', () => {
        const out = format('a b c d');
        assert.equal(out, 'a  b  c  d');
    });

    test('aligns bar lines across stacked parts', () => {
        const out = format('a b c d | e f g A\nA | e A');
        const [top, bottom] = out.split('\n');
        const barTop = top!.indexOf('|');
        const barBottom = bottom!.indexOf('|');
        assert.ok(barTop > 0, 'top row should contain a bar line');
        assert.equal(barTop, barBottom, `bar lines should align (${barTop} vs ${barBottom})`);
    });

    test('aligns concurrent note onsets vertically (piano roll)', () => {
        // Top part has 4 sixteenths per beat, bottom has 2 eighths per beat.
        const out = format('c d e f\nc e');
        const [top, bottom] = out.split('\n');
        // The bottom "e" (2nd eighth, onset == 3rd sixteenth) lines up under "e".
        const topE = top!.indexOf('e');
        const bottomE = bottom!.lastIndexOf('e');
        assert.equal(topE, bottomE, `onsets should align (${topE} vs ${bottomE})`);
    });

    test('preserves the metainfo block verbatim', () => {
        const src = '{ \n    tempo: 110  \n    time:       3/4\n}\n\na b c';
        const out = format(src);
        assert.ok(out.includes('{ \n    tempo: 110  \n    time:       3/4\n}'),
            'metainfo should be untouched');
    });

    test('preserves comment rows verbatim', () => {
        const src = '-- a comment row\na b c d';
        const out = format(src);
        assert.ok(out.startsWith('-- a comment row\n'), 'comment row should be untouched');
    });

    test('keeps groups and ties intact', () => {
        // [G a] fits within beat 0, so its brackets stay adjacent; d_ keeps its tie.
        const out = format('[G a] b c d_');
        assert.ok(out.includes('[G a]'), `group brackets preserved: ${out}`);
        assert.ok(out.includes('d_'), `tie preserved: ${out}`);
    });

    test('is idempotent', () => {
        const src = '{time:3/4}\n\n!d [G a b] [c d e] | D G G\n[!Gbd]__ A | b G b';
        const once = format(src);
        const twice = format(once);
        assert.equal(twice, once, 'formatting formatted output should be a no-op');
    });
});
