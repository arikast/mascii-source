cd ..
OUTPUTDIR=generated/typescript
rm -rf $OUTPUTDIR
#mkdir -p generated/com/kastkode/mascii2/antlrgenerated
mkdir -p $OUTPUTDIR
antlr -Dlanguage=TypeScript -o $OUTPUTDIR MasciiLexer.g4 MasciiParser.g4
