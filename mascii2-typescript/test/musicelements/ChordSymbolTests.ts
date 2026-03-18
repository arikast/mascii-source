import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { SourceParser } from '../../src/SourceParser';
import { ParseResult } from '../../src/ParseResult';
import { Accidental } from '../../src/musicelements/Accidental';
import { KeySignature } from '../../src/musicelements/KeySignature';
import { relativeMajorDegree } from '../../src/util/MasciiUtil';

function parse(source: string): ParseResult {
    const result = new SourceParser().generateFromString(source);
    const msgs = result.errors?.getMsgs() ?? [];
    for (const msg of msgs) console.error(msg);
    assert.equal(msgs.length, 0, `Expected no parse errors, got: ${msgs.join(', ')}`);
    return result;
}

// describe('ChordSymbolTests', () => {

//     test('chord symbol parsing', () => {
//         const minuet = 'G-/ Am7/ D7/ | Gm7/ C7/ Fmaj7/ Bm7@5/ | Em7/ A7/ Dm7/ G7/';
//         const parts = parse(minuet).getParts() ?? [];
//         const treb = parts[0]!.getNoteStream();

//         assert.equal(0, treb[3]!.getPitch() - treb[0]!.getPitch());
//         assert.equal(1, treb[4]!.getPitch() - treb[1]!.getPitch());
//     });


//     test('chord symbol parsing with ambiguous alterations', () => {
//         const minuet = 'G@9/ G#9/';
//         const parts = parse(minuet).getParts() ?? [];
//         const treb = parts[0]!.getNoteStream();

//         assert.equal(0, treb[0]!.getPitch() - treb[0]!.getPitch());
//     });

// });
