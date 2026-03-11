import type { MasciiSyntaxEventListener } from './MasciiSyntaxEventListener';
import type { MasciiParseErrorListener } from './MasciiParseErrorListener';
import type { Part } from './musicelements/Part';
import type { MetaInfoElement } from './musicelements/MetaInfo';

export class ParseResult {
    private syntaxListener: MasciiSyntaxEventListener;
    errors: MasciiParseErrorListener | null = null;

    constructor(listener: MasciiSyntaxEventListener) {
        this.syntaxListener = listener;
    }

    getGlobalMetas(): MetaInfoElement<unknown>[] {
        return this.syntaxListener.getGlobalMetaInfoChanges();
    }

    getParts(): Part[] | null {
        return this.syntaxListener.getParts();
    }

    getSyntaxListener(): MasciiSyntaxEventListener {
        return this.syntaxListener;
    }
}
