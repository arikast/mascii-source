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

describe('MetaInfoTests', () => {

    test('patchAssignment', () => {
        const minuet = '{patch: 5,7,9}\n\ng \n c \n a';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(3, parts.length);
        assert.equal('5', parts[0]!.getMetaInfoChanges()[0]!.getRawValue());
        assert.equal('7', parts[1]!.getMetaInfoChanges()[0]!.getRawValue());
        assert.equal('9', parts[2]!.getMetaInfoChanges()[0]!.getRawValue());
    });

    test('commentsNBlankLines', () => {
        const minuet = '{\n -- comment here \n \n patch: 5,7,9}\n\n'
            + ' ------ another comment here ------ \n'
            + 'g \n c \n a';
        const parts = parse(minuet).getParts() ?? [];
        assert.equal(3, parts.length);
        assert.equal('5', parts[0]!.getMetaInfoChanges()[0]!.getRawValue());
        assert.equal('7', parts[1]!.getMetaInfoChanges()[0]!.getRawValue());
        assert.equal('9', parts[2]!.getMetaInfoChanges()[0]!.getRawValue());
    });

    test('patchCountDoesntMatchPartCount', () => {
        const minuet = '{\n'
            + '    tempo: 90\n'
            + '    time:  4/4\n'
            + '    key:   0\n'
            + '    patch: 103\n'
            + '}\n'
            + 'g \n'
            + 'C \n';
        // should not throw
        parse(minuet).getParts();
    });

});
