import { readFileSync, statSync, readdirSync, writeFileSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import { parseArgs } from 'util';
import { SourceParser } from './SourceParser';
import { MidiGenerator } from './MidiGenerator';
import { MusicXmlGenerator } from './MusicXmlGenerator';
import { FormatGenerator } from './FormatGenerator';
import { MasciiParseErrorListener } from './MasciiParseErrorListener';

function changeExtension(filename: string, ext: string): string {
    const base = basename(filename);
    const dot = base.lastIndexOf('.');
    const stem = dot >= 0 ? base.substring(0, dot) : base;
    return stem + '.' + ext;
}

interface CliOptions {
    extension: string;
    recurse: boolean;
    colocate: boolean;
    format: string;
    files: string[];
}

function parseCliArgs(): CliOptions {
    const { values, positionals } = parseArgs({
        args: process.argv.slice(2),
        options: {
            extension: { type: 'string', short: 'e', default: 'mascii' },
            recurse:   { type: 'boolean', short: 'r', default: false },
            colocate:  { type: 'boolean', short: 'c', default: false },
            format:    { type: 'string', short: 'f', default: 'midi' },
        },
        allowPositionals: true,
    });

    return {
        extension: (values.extension as string) ?? 'mascii',
        recurse: values.recurse as boolean,
        colocate: values.colocate as boolean,
        format: (values.format as string) ?? 'midi',
        files: positionals,
    };
}

function processFiles(files: string[], opts: CliOptions): void {
    const ext = '.' + opts.extension;
    for (const file of files) {
        const stat = statSync(file);
        if (stat.isDirectory()) {
            if (opts.recurse) {
                const children = readdirSync(file).map(f => join(file, f));
                processFiles(children, opts);
            }
        } else {
            if (file.toLowerCase().endsWith(ext)) {
                processFile(file, opts);
            }
        }
    }
}

function processFile(sourceFile: string, opts: CliOptions): void {
    const content = readFileSync(sourceFile, 'utf-8');

    if (opts.format === 'format') {
        formatFile(sourceFile, content, opts);
        return;
    }

    console.log(`generating from file ${sourceFile}`);

    const parser = new SourceParser();
    const result = parser.generateFromString(content);

    const errs = result.errors?.getMsgs() ?? [];
    if (errs.length > 0) {
        for (const e of errs) console.error(e);
        return;
    }

    let outputName: string;
    let saved: string | null;

    if (opts.format === 'musicxml') {
        outputName = changeExtension(basename(sourceFile), 'musicxml');
        if (opts.colocate) {
            outputName = join(dirname(sourceFile), outputName);
        }
        saved = new MusicXmlGenerator().save(result, outputName);
    } else {
        outputName = changeExtension(basename(sourceFile), 'mid');
        if (opts.colocate) {
            outputName = join(dirname(sourceFile), outputName);
        }
        saved = new MidiGenerator().save(result, outputName);
    }

    console.log(`saved to ${saved}`);
}

function formatFile(sourceFile: string, content: string, opts: CliOptions): void {
    const errListener = new MasciiParseErrorListener();
    const tree = new SourceParser().parseFromString(content, errListener);

    const errs = errListener.getMsgs();
    if (errs.length > 0) {
        console.error(`errors formatting ${sourceFile}`);
        for (const e of errs) console.error(e);
        return;
    }

    let formatted = new FormatGenerator().format(tree, content);
    if (!formatted.endsWith('\n')) formatted += '\n';

    if (opts.colocate) {
        const outputName = join(dirname(sourceFile), changeExtension(basename(sourceFile), 'formatted.mascii'));
        writeFileSync(outputName, formatted);
        console.log(`saved to ${outputName}`);
    } else {
        process.stdout.write(formatted);
    }
}

const opts = parseCliArgs();

if (opts.files.length === 0) {
    console.error('Usage: mascii [options] <file.mascii> [...]');
    console.error('  -e, --extension  File extension to scan for (default: mascii)');
    console.error('  -r, --recurse    Recurse into subdirectories');
    console.error('  -c, --colocate   Write output next to source file');
    console.error('  -f, --format     Output format: midi (default), musicxml, or format');
    console.error('                   (format pretty-prints the mascii to stdout, or to');
    console.error('                   <name>.formatted.mascii with -c)');
    process.exit(1);
}

processFiles(opts.files, opts);
// Use stderr so a formatter run piped from stdout stays clean.
console.error('done');
