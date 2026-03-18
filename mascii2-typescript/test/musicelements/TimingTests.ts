import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { SourceParser } from '../../src/SourceParser';
import { ParseResult } from '../../src/ParseResult';
import { TimeSlot } from '../../src/musicelements/TimeSlot';
import { TimeSig } from '../../src/musicelements/MetaInfo';

function parse(source: string): ParseResult {
    const result = new SourceParser().generateFromString(source);
    const msgs = result.errors?.getMsgs() ?? [];
    for (const msg of msgs) console.error(msg);
    assert.equal(msgs.length, 0, `Expected no parse errors, got: ${msgs.join(', ')}`);
    return result;
}

describe('TimingTests', () => {

    test('timing', () => {
        const minuet = '{tempo: 95} \n \n \n'
            + 'd d[G a] [b c] \n\n '
            + '[B__ B][d d d] ';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(1, parts.length);
        const notes = parts[0]!.getNoteStream();
        assert.equal(notes[0]!.getDuration(), notes[1]!.getDuration());
        assert.equal(notes[1]!.getDuration(), notes[2]!.getDuration() + notes[3]!.getDuration());

        // test & doubler
        assert.equal(
            notes[6]!.getDuration() + notes[7]!.getDuration(),
            notes[8]!.getDuration() + notes[9]!.getDuration() + notes[10]!.getDuration(),
        );
    });

    test('divvyNormalTime', () => {
        const ts = TimeSlot.init(100, 24);
        const subs = ts.divvy([false, false]);
        assert.equal(2, subs.length);
        assert.equal(subs[0]!.duration, subs[1]!.duration);
        assert.equal(100, subs[0]!.offset);
        assert.equal(112, subs[1]!.offset);
    });

    test('divvyUnevenTime', () => {
        const ts = TimeSlot.init(100, 24);
        const subs = ts.divvy([true, false]);
        assert.equal(2, subs.length);
        assert.equal(16, subs[0]!.duration);
        assert.equal(8,  subs[1]!.duration);
        assert.equal(100, subs[0]!.offset);
        assert.equal(116, subs[1]!.offset);
    });

    test('partsTiming', () => {
        const minuet = '{tempo: 95}'
            + 'G__ a \n d [G a] [b c] ';
        const listener = parse(minuet).getSyntaxListener();

        assert.equal(1, listener.getParts()![0]!.barCount);
        assert.equal(2, listener.partCount());
    });

    test('partsTiming4', () => {
        const minuet = 'G__ G \n g g g';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);
        const p0 = parts[0]!.getNoteStream();
        const p1 = parts[1]!.getNoteStream();
        assert.equal(p0[0]!.getStart(), p1[0]!.getStart());
    });

    test('partsTiming5', () => {
        const minuet = 'G [G G] \n g g';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);
        const p0 = parts[0]!.getNoteStream();
        const p1 = parts[1]!.getNoteStream();
        assert.equal(p0[0]!.getStart(), p1[0]!.getStart());
        assert.equal(p0[1]!.getStart(), p1[1]!.getStart());
        assert.equal(p0[2]!.getEnd(),   p1[1]!.getEnd());
        assert.ok(p0[2]!.getStart() > p1[1]!.getStart());
    });

    test('partsTiming3', () => {
        const minuet = 'G | A \ng | a';
        const listener = parse(minuet).getSyntaxListener();

        assert.equal(2, listener.getParts()![0]!.barCount);
        assert.equal(2, listener.partCount());
    });

    test('partsTiming2', () => {
        const minuet = '{tempo: 95}'
            + 'G__ a \n d [G a] [b c] ';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);
        const p0 = parts[0]!.getNoteStream();
        const p1 = parts[1]!.getNoteStream();
        assert.equal(p0[0]!.getStart(), p1[0]!.getStart());
        assert.equal(p0[1]!.getStart(), p1[3]!.getStart());
    });

    test('partsTiming6', () => {
        const minuet = '{tempo: 95}'
            + 'G a \n d a [b c] \n\n b \n c';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);
        const p0 = parts[0]!.getNoteStream();
        const p1 = parts[1]!.getNoteStream();
        assert.equal(p0[2]!.getStart(), p1[4]!.getStart());
    });

    test('restsTiming', () => {
        const minuet = '{tempo: 95}'
            + 'G__ a \n d [% a] [b c] ';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);
        const p0 = parts[0]!.getNoteStream();
        const p1 = parts[1]!.getNoteStream();
        assert.equal(p0[0]!.getStart(), p1[0]!.getStart());
        assert.equal(p0[1]!.getStart(), p1[2]!.getStart());
    });

    test('explicitRests', () => {
        const minuet = ' % \n d a \n % \n\n'
            + 'a \n   %  \n b \n\n'
            + 'd \n e   \n f';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(3, parts.length);
        const p0 = parts[0]!.getNoteStream();
        const p1 = parts[1]!.getNoteStream();
        const p2 = parts[2]!.getNoteStream();

        assert.equal(2, p0.length);
        assert.equal(3, p1.length);
        assert.equal(2, p2.length);
        assert.equal(p0[1]!.getStart(), p1[2]!.getStart());
        assert.equal(p0[1]!.getStart(), p2[1]!.getStart());
    });

    test('defaultPart', () => {
        const minuet = ' \n \n d a \n  \n ';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(1, parts.length);
    });

    test('dottedTiming', () => {
        const minuet = '{tempo: 95}'
            + 'G. F# a \n d [% a] [b c] ';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);
        const p0 = parts[0]!.getNoteStream();
        const p1 = parts[1]!.getNoteStream();
        assert.equal(p0[0]!.getStart(), p1[0]!.getStart());
        assert.equal(p0[1]!.getStart(), p1[1]!.getStart());
        assert.equal(p0[1]!.getDuration(), p1[1]!.getDuration());
    });

    test('inverseDottedTiming', () => {
        const minuet = '{tempo: 95}'
            + '.G F# a \n [d a_] _a [b c] ';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);
        const p0 = parts[0]!.getNoteStream();
        const p1 = parts[1]!.getNoteStream();
        assert.equal(p0[0]!.getStart(), p1[0]!.getStart());
        assert.equal(p0[1]!.getStart(), p1[1]!.getStart());
        assert.equal(p0[1]!.getDuration(), p1[1]!.getDuration());
    });

    test('timeMeta', () => {
        const m = new TimeSig().setRawValue(' 9/12 ');
        assert.equal(9,  m.timeNumerator);
        assert.equal(12, m.timeDenominator);
    });

    test('tie1', () => {
        const minuet = 'g_ _* b c';
        const parts = parse(minuet).getParts() ?? [];
        const p0 = parts[0]!.getNoteStream();
        assert.equal(p0[0]!.spelling.degree, 'g');
        assert.equal(p0[0]!.getDuration(), p0[1]!.getDuration() + p0[2]!.getDuration());
    });

    test('tie2', () => {
        const minuet = 'ag_ _* b c';
        const parts = parse(minuet).getParts() ?? [];
        const p0 = parts[0]!.getNoteStream();
        assert.equal(p0[0]!.spelling.degree, 'a');
        assert.equal(p0[1]!.spelling.degree, 'g');
        assert.equal(p0[2]!.spelling.degree, 'b');
        assert.equal(p0[0]!.getDuration(), p0[2]!.getDuration());
        assert.equal(p0[1]!.getDuration(), p0[2]!.getDuration() + p0[3]!.getDuration());
    });

    test('tie3', () => {
        const minuet = 'g_ b_ _* c';
        const parts = parse(minuet).getParts() ?? [];
        const p0 = parts[0]!.getNoteStream();
        assert.equal(p0[0]!.spelling.degree, 'g');
        assert.equal(p0[1]!.spelling.degree, 'b');
        assert.equal(p0[2]!.spelling.degree, 'c');
        assert.equal(p0[0]!.getDuration(), 3 * p0[2]!.getDuration());
        assert.equal(p0[1]!.getDuration(), 2 * p0[2]!.getDuration() );
    });

    test('chord 1', () => {
        const minuet = `{ 
    time:       3/4
} 

[!Gbd]__     A       | b G b      

`;
        const parts = parse(minuet).getParts() ?? [];
        const p0 = parts[0]!.getNoteStream();
        assert.equal(p0[0]!.spelling.degree, 'G');
        assert.equal(p0[1]!.spelling.degree, 'b');
        assert.equal(p0[2]!.spelling.degree, 'd');
        assert.equal(p0[0]!.getStart(), p0[1]!.getStart());
        assert.equal(p0[0]!.getStart(), p0[2]!.getStart());
        assert.notEqual(p0[0]!.getStart(), p0[3]!.getStart());
    });
    
});
