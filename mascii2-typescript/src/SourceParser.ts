import { CharStream, CommonTokenStream, ParseTreeWalker } from 'antlr4';
import MasciiLexer from './antlr-generated/MasciiLexer';
import MasciiParser from './antlr-generated/MasciiParser';
import { MasciiParseErrorListener } from './MasciiParseErrorListener';
import { MasciiSyntaxEventListener } from './MasciiSyntaxEventListener';
import { ParseResult } from './ParseResult';

export class SourceParser {
    generateFromString(mascii: string): ParseResult {
        const errListener = new MasciiParseErrorListener();
        const tree = this.parseFromString(mascii, errListener);
        const result = this.generate(tree);
        result.errors = errListener;
        return result;
    }

    private generate(tree: ReturnType<MasciiParser['music']>): ParseResult {
        const listener = new MasciiSyntaxEventListener();
        ParseTreeWalker.DEFAULT.walk(listener, tree);
        return new ParseResult(listener);
    }

    parseFromString(masciiText: string, errListener: MasciiParseErrorListener): ReturnType<MasciiParser['music']> {
        const stream = new CharStream(masciiText);
        return this.parseFromStream(stream, errListener);
    }

    private parseFromStream(
        stream: CharStream,
        errListener: MasciiParseErrorListener,
    ): ReturnType<MasciiParser['music']> {
        const lexer = new MasciiLexer(stream);
        lexer.addErrorListener(errListener);
        const tokens = new CommonTokenStream(lexer);
        const parser = new MasciiParser(tokens);
        parser.removeErrorListeners();
        parser.addErrorListener(errListener);
        return parser.music();
    }
}
