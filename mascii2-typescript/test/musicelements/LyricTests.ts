import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { SourceParser } from '../../src/SourceParser';
import { ParseResult } from '../../src/ParseResult';
import { Lyric } from '../../src/musicelements/MetaInfo';
import { Note } from '../../src/musicelements/Note';
import { asLyrics } from '../../src/util/MasciiUtil';
import { parsePitch } from './PitchTestHelper';

function parse(source: string): ParseResult {
    const result = new SourceParser().generateFromString(source);
    const msgs = result.errors?.getMsgs() ?? [];
    for (const msg of msgs) console.error(msg);
    assert.equal(msgs.length, 0, `Expected no parse errors, got: ${msgs.join(', ')}`);
    return result;
}

describe('LyricTests', () => {

    test('lyricParse', () => {
        const minuet = 'd c f g c\n"you were the lucky one"';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(1, parts.length);
        const p = parts[0]!;
        assert.ok(p.getMetaInfoChanges().length > 0);
        assert.ok(p.getMetaInfoChanges()[0] instanceof Lyric);
        assert.equal('you', p.getMetaInfoChanges()[0]!.getRawValue());
        assert.ok(p.getMetaInfoChanges()[1]!.getStartingAt() > 0);
    });

    test('shebang', () => {
        const minuet = '{tempo: 95} \n \n \nd d[G a] [b c] \n " you havent "';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(1, parts.length);
        const notes = parts[0]!.getNoteStream();
        assert.equal(notes[0]!.getDuration(), notes[1]!.getDuration());
    });

    test('lyricMultipleParts', () => {
        const minuet = 'd\n"you were" \nc\n"I was" \n';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);

        const p = parts[0]!;
        assert.ok(p.getMetaInfoChanges().length > 0);
        assert.ok(p.getMetaInfoChanges()[0] instanceof Lyric);
        assert.equal('you-were', p.getMetaInfoChanges()[0]!.getRawValue());

        const p1 = parts[1]!;
        assert.ok(p1.getMetaInfoChanges().length > 0);
        assert.ok(p1.getMetaInfoChanges()[0] instanceof Lyric);
        assert.equal('I-was', p1.getMetaInfoChanges()[0]!.getRawValue());
    });

    test('lyricMultipleVerses', () => {
        const minuet = `
        d a
        "you were"
        "my only"
        "sun shine"
        `;
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(1, parts.length);
        const p = parts[0]!;
        const metas = p.getMetaInfoChanges();
        assert.equal(2, metas.length); //meta is vertical, so 2 notes = 2 metas, in this case 3 deep
        assert.ok(metas[1]!.getStartingAt() > metas[0]!.getStartingAt());
        assert.equal('were\nonly\n\nshine', metas[1]!.getRawValue());
        assert.ok(metas[0]!.getStartingAt() >= 0);
    });

    test('lyricConversion', () => {
        const notes = [
            Note.startOnly(0,  parsePitch('c')),
            Note.startOnly(50, parsePitch('d')),
        ];
        const lyrics = ['you', 'were'];
        const answer = asLyrics(notes, lyrics, '');
        assert.equal(2, answer.length);
    });

    test('lyricConversionUneven', () => {
        const notes = [
            Note.startOnly(0,  parsePitch('c')),
            Note.startOnly(50, parsePitch('d')),
        ];
        const lyrics = ['you', 'were', 'my'];
        const answer = asLyrics(notes, lyrics, '');
        assert.equal(2, answer.length);
        assert.equal('you',      answer[0]!.getRawValue());
        assert.equal('were-my',  answer[1]!.getRawValue());
    });

    test('lyricConversionWithGaps', () => {
        const notes = [
            Note.startOnly(0,   parsePitch('c')),
            Note.startOnly(50,  parsePitch('d')),
            Note.startOnly(100, parsePitch('a')),
        ];
        const lyrics = ['you', '%', 'my'];
        const answer = asLyrics(notes, lyrics, '');
        assert.equal(3, answer.length);
        assert.equal('you', answer[0]!.getRawValue());
        assert.equal(null,  answer[1]);
        assert.equal('my',  answer[2]!.getRawValue());
        assert.equal(100,   answer[2]!.getStartingAt());
    });

    test('lyricMatchWithTuneRests', () => {
        const minuet = ' %   %   %   [c  d]\n" well I "\n %';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);
        const p = parts[0]!;
        const metas = p.getMetaInfoChanges();
        assert.equal(2, metas.length);
        assert.ok(metas[0]!.getStartingAt() > 0);
        assert.equal(metas[0]!.getStartingAt(), p.getNoteStream()[0]!.getStart());
        assert.equal(metas[1]!.getStartingAt(), p.getNoteStream()[1]!.getStart());
    });

    test('lyricWithBarLines', () => {
        const minuet = ' %  c | d \n" well | I "\n %';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);
        const p = parts[0]!;
        const metas = p.getMetaInfoChanges();
        assert.equal(2, metas.length);
        assert.ok(metas[0]!.getStartingAt() > 0);
        assert.equal(metas[0]!.getStartingAt(), p.getNoteStream()[0]!.getStart());
        assert.equal(metas[1]!.getStartingAt(), p.getNoteStream()[1]!.getStart());
    });

    test('optionalTrailingQuote', () => {
        const minuet = ' %  c   | d \n" well | I \n %';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);
        const p = parts[0]!;
        const metas = p.getMetaInfoChanges();
        assert.equal(2, metas.length);
        assert.ok(metas[0]!.getStartingAt() > 0);
        assert.equal(metas[0]!.getStartingAt(), p.getNoteStream()[0]!.getStart());
        assert.equal(metas[1]!.getStartingAt(), p.getNoteStream()[1]!.getStart());
    });

    test('lyricsLast', () => {
        const minuet = ' %  c   | d \n" well | I \n \n\n ';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(1, parts.length);
        const p = parts[0]!;
        const metas = p.getMetaInfoChanges();
        assert.equal(2, metas.length);
        assert.ok(metas[0]!.getStartingAt() > 0);
        assert.equal(metas[0]!.getStartingAt(), p.getNoteStream()[0]!.getStart());
        assert.equal(metas[1]!.getStartingAt(), p.getNoteStream()[1]!.getStart());
    });

    test('lyrics oh susanna with untrimmed space', () => {
        const minuet = `c e
            " well I "
            `;
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(1, parts.length);
        const p = parts[0]!;
        const metas = p.getMetaInfoChanges();
        assert.equal(2, metas.length);
        assert.equal('well', metas[0]!.getRawValue());
        assert.equal(metas[0]!.getStartingAt(), p.getNoteStream()[0]!.getStart());
    });

});
