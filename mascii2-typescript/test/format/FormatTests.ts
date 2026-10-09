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

    test('aligns lyric syllables under their notes', () => {
        const out = format('c d e f\n" do re mi fa"');
        const [staff, lyric] = out.split('\n');
        // Staff rows get a leading-space gutter; lyric rows are wrapped in quotes.
        assert.ok(staff!.startsWith(' '), `staff row has gutter: "${staff}"`);
        assert.ok(lyric!.startsWith('"') && lyric!.endsWith('"'), `lyric is quoted: "${lyric}"`);
        // Each syllable sits in the same column as its note.
        for (const [note, syl] of [['c', 'do'], ['d', 're'], ['e', 'mi'], ['f', 'fa']] as const) {
            assert.equal(staff!.indexOf(note), lyric!.indexOf(syl),
                `"${syl}" should align under "${note}"\n${staff}\n${lyric}`);
        }
    });

    test('lyric "%" skips a note without consuming a syllable', () => {
        // First note gets no lyric; "la"/"la" map to the 2nd and 3rd notes.
        const out = format('c d e\n" % la la"');
        const [staff, lyric] = out.split('\n');
        assert.equal(staff!.indexOf('d'), lyric!.indexOf('la'),
            `first "la" aligns under "d"\n${staff}\n${lyric}`);
        assert.ok(lyric!.indexOf('c') === -1, 'no lyric over the first note');
    });

    test('keeps glued group-plus-note elements contiguous and in order', () => {
        // A group and a note glued with no space sound simultaneously; the note
        // must stay outside the brackets and the inner note order preserved.
        assert.equal(format('[e@ e=]g@'), '[e@ e=]g@');
        assert.equal(format('a [b c]d e'), 'a  [b c]d  e');
        assert.equal(format('[a b][c d] e'), '[a b][c d]  e');
        // Scoped groups (parentheses) behave identically, including when mixed.
        assert.equal(format('(e@ e=)g@'), '(e@ e=)g@');
        assert.equal(format('(a b)(c d) e'), '(a b)(c d)  e');
        assert.equal(format('[e@ (e=)]g@'), '[e@ (e=)]g@');
    });

    test('is idempotent', () => {
        const src = '{time:3/4}\n\n!d [G a b] [c d e] | D G G\n[!Gbd]__ A | b G b';
        const once = format(src);
        const twice = format(once);
        assert.equal(twice, once, 'formatting formatted output should be a no-op');
    });
});
