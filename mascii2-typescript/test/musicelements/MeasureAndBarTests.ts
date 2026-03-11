import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { SourceParser } from '../../src/SourceParser';
import { ParseResult } from '../../src/ParseResult';

function parse(source: string): ParseResult {
    const result = new SourceParser().generateFromString(source);
    const msgs = result.errors?.getMsgs() ?? [];
    for (const msg of msgs) console.error(msg);
    assert.equal(msgs.length, 0, `Expected no parse errors, got: ${msgs.join(', ')}`);
    return result;
}

describe('MeasureAndBarTests', () => {

    test('measureCount', () => {
        const minuet = 'a b | c d \n a f | \n c c |';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(3, parts.length);
        assert.equal(2, parts[0]!.getBarCount());
        assert.equal(2, parts[1]!.getBarCount());
    });

    test('unevenMeasureCount', () => {
        const minuet = 'a b | c d \n a f  \n c c ';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(3, parts.length);
        assert.equal(2, parts[0]!.getBarCount());
        assert.equal(2, parts[1]!.getBarCount());
    });

    test('leadingEmptyMeasure', () => {
        const minuet = ' | c d \n a b | c c ';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(2, parts.length);
        assert.equal(2, parts[0]!.getBarCount());
        assert.equal(2, parts[1]!.getBarCount());
        assert.equal(
            parts[0]!.getNoteStream()[0]!.getStart(),
            parts[1]!.getNoteStream()[2]!.getStart(),
        );
    });

});
