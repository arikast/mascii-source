import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { basename } from 'path';
import { SourceParser } from '../src/SourceParser';
import { assignChannels, DRUM_TRACK_CHANNEL } from '../src/MidiGenerator';
import { ParseResult } from '../src/ParseResult';

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

function changeExtension(filename: string, ext: string): string {
    const dot = filename.lastIndexOf('.');
    const stem = dot >= 0 ? filename.substring(0, dot) : filename;
    return stem + '.' + ext;
}

describe('Mascii2', () => {

    test('parseMinuet', () => {
        const minuet = '[3Gbd_ _* a b G b][5d d(G a) (b c)] \n\n '
            + '(d G G)(B__ B)(d d d) ';
        parse(minuet);
    });

    test('parseMinuetMultipart', () => {
        const minuet = ' 3Gbd_ _* a b G b | 5d d(G a) (b c) \n\n '
            + '(d G G) | (B__ B)(d d d) ';
        parse(minuet);
    });

    test('changeFileExt', () => {
        const f = basename('/somewhere/somefile.mascii');
        assert.equal(f, 'somefile.mascii');
        assert.equal(changeExtension(f, 'mid'), 'somefile.mid');
    });

    test('assignChannels', () => {
        const minuet = ' G \n 5d \n c \n ';
        const result = parse(minuet);
        const parts = result.getParts() ?? [];
        assignChannels(parts);
        assert.equal(parts[0]!.getChannel(), 0);
        assert.equal(parts[1]!.getChannel(), 1);
        assert.equal(parts[2]!.getChannel(), 2);
    });

    test('assignChannelsWithReservations', () => {
        const minuet = ' G \n d \n c \n ';
        const result = parse(minuet);
        const parts = result.getParts() ?? [];
        parts[1]!.setChannel(5);
        assignChannels(parts);
        assert.equal(parts[0]!.getChannel(), 0);
        assert.equal(parts[1]!.getChannel(), 5);
        assert.equal(parts[2]!.getChannel(), 1);
    });

    test('allowExplicitDrumChannel', () => {
        const minuet = ' G \n d \n c \n c \n e \n f \n F \n C \n G \n A \n b \n B \n ';
        const result = parse(minuet);
        const parts = result.getParts() ?? [];
        parts[3]!.setChannel(DRUM_TRACK_CHANNEL);
        assignChannels(parts);

        for (const p of parts) {
            assert.ok(p.getChannel() >= 0, `Part has invalid channel ${p.getChannel()}`);
        }
        assert.ok(parts.some(p => p.getChannel() === 0), 'Expected a part on channel 0');
        assert.ok(parts.some(p => p.getChannel() === DRUM_TRACK_CHANNEL), 'Expected a part on drum channel');
        assert.equal(parts.filter(p => p.getChannel() === DRUM_TRACK_CHANNEL).length, 1,
            'Expected exactly one part on drum channel');
    });

    test('avoidDrumChannel', () => {
        const minuet = ' G \n d \n c \n c \n e \n f \n F \n C \n G \n A \n b \n B \n ';
        const result = parse(minuet);
        const parts = result.getParts() ?? [];
        assignChannels(parts);

        for (const p of parts) {
            assert.notEqual(p.getChannel(), DRUM_TRACK_CHANNEL,
                `Part was assigned drum channel ${DRUM_TRACK_CHANNEL}`);
            assert.ok(p.getChannel() >= 0, `Part has invalid channel ${p.getChannel()}`);
        }
        assert.ok(parts.some(p => p.getChannel() === 0), 'Expected a part on channel 0');
    });

    test('assignChannelsWithAllReservations', () => {
        const minuet = '{channel: 1, 5, 2 } G \n d \n c \n ';
        const result = parse(minuet);
        const parts = result.getParts() ?? [];
        assert.equal(parts.length, 3);
        assignChannels(parts);
        assert.equal(parts[0]!.getChannel(), 0); // channel 1 (1-based) → 0 (0-based)
        assert.equal(parts[1]!.getChannel(), 4); // channel 5 (1-based) → 4 (0-based)
        assert.equal(parts[2]!.getChannel(), 1); // channel 2 (1-based) → 1 (0-based)
    });

    test('assignChannelsWithSomeReservationsAndSomeBlanks', () => {
        const minuet = '{channel: , 5 , } G \n d \n c \n ';
        const result = parse(minuet);
        const parts = result.getParts() ?? [];
        assert.equal(parts.length, 3);
        assignChannels(parts);
        assert.equal(parts[0]!.getChannel(), 0); // blank → auto 0
        assert.equal(parts[1]!.getChannel(), 4); // channel 5 (1-based) → 4 (0-based)
        assert.equal(parts[2]!.getChannel(), 1); // blank → auto 1
    });

});
