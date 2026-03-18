import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { SourceParser } from '../../src/SourceParser';
import { MusicXmlGenerator } from '../../src/MusicXmlGenerator';
import { ParseResult } from '../../src/ParseResult';
import { TimeSlot } from '../../src/musicelements/TimeSlot';
import { TimeSig } from '../../src/musicelements/MetaInfo';

/** Return a map of note step letter → voice number from a MusicXML string. */
function noteVoices(xml: string): Map<string, number> {
    const map = new Map<string, number>();
    for (const block of xml.match(/<note>[\s\S]*?<\/note>/g) ?? []) {
        const step = block.match(/<step>([A-G])<\/step>/)?.[1];
        const voice = block.match(/<voice>(\d+)<\/voice>/)?.[1];
        if (step && voice) map.set(step, parseInt(voice, 10));
    }
    return map;
}

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
    
    test('concurrent polyphony different durations', () => {
        const minuet = `{time:2/4} !c[E  g]`;
        const parts = parse(minuet).getParts() ?? [];
        const p0 = parts[0]!.getNoteStream();
        assert.equal(p0[0]!.spelling.degree, 'c');
        assert.equal(p0[1]!.spelling.degree, 'E');
        assert.equal(p0[2]!.spelling.degree, 'g');
        assert.equal(p0[0]!.getStart(), p0[1]!.getStart());
        assert.notEqual(p0[0]!.getStart(), p0[2]!.getStart());
        assert.notEqual(p0[0]!.getDuration(), p0[1]!.getDuration());
        assert.notEqual(p0[0]!.getDuration(), p0[2]!.getDuration());
        assert.equal(p0[1]!.getDuration(), p0[2]!.getDuration());
    });

    // c is a half note held across both E and g (sequential quarter notes).
    // E and g don't overlap each other, so they can share one voice.
    // c overlaps both, so it must be in a separate voice.
    test('concurrent polyphony different durations gets separate voices in MusicXML', () => {
        const xml = new MusicXmlGenerator().generate(parse('{time:2/4} !c[E  g]'));
        const voices = noteVoices(xml);
        assert.ok(voices.has('C'), 'C should appear in MusicXML');
        assert.ok(voices.has('E'), 'E should appear in MusicXML');
        assert.ok(voices.has('G'), 'G should appear in MusicXML');
        assert.equal(voices.get('E'), voices.get('G'), 'E and G should share a voice (they are sequential)');
        assert.notEqual(voices.get('C'), voices.get('E'), 'C should be in a separate voice (it overlaps both E and G)');
    });

    // Voice numbering should go highest-pitch → lowest at the moment voices are created.
    // c (MIDI 72) is higher than E (MIDI 64) at t=0, so c gets voice 1 and E gets voice 2.
    // g is sequential to E and shares its voice, so g is also voice 2.
    test('concurrent voices numbered highest pitch first', () => {
        const xml = new MusicXmlGenerator().generate(parse('{time:2/4} !c[E  g]'));
        const voices = noteVoices(xml);
        assert.equal(voices.get('C'), 1, 'C (highest at t=0) should be voice 1');
        assert.equal(voices.get('E'), 2, 'E (lower at t=0) should be voice 2');
        assert.equal(voices.get('G'), 2, 'G (sequential to E) should share voice 2');
    });

});
