import { ErrorListener, RecognitionException, Recognizer } from 'antlr4';

export class MasciiParseErrorListener extends ErrorListener<unknown> {
    private msgs: string[] = [];

    override syntaxError(
        recognizer: Recognizer<unknown>,
        offendingSymbol: unknown,
        line: number,
        charPositionInLine: number,
        msg: string,
        _e: RecognitionException | undefined,
    ): void {
        this.msgs.push(`${offendingSymbol} at ${line}:${charPositionInLine} ${msg}`);
    }

    getMsgs(): string[] {
        return this.msgs;
    }
}
