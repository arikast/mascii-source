# Mascii 2.0 
This is source code for the _Musical Ascii_ ("Mascii") polyphonic text-based music notation system.

## Using Mascii
To learn more about how to use Mascii, including its syntax and how to install it, see the [Mascii quickstart](https://github.com/arikast/mascii-quickstart)

Once notated in Mascii, a piece can then easily be converted to a variety of formats including standard printed sheet music, playable sound files, and many other widely used formats. 

Some musical examples notated in Mascii can be found at [mascii.org](http://mascii.org/)

Mascii is well suited for sharing musical snippets on forums and webpages or wikis.

## Developing Mascii

Starting from version 2.1 onwards, mascii has been ported to Typescript, which will receive all future development.  The legacy 2.0 version, written in Java, is preserved in the branch "legacy-java", where you'll also find instructions how to run it in that branch's version of this README.  Some java code may remain in this branch too for a while, but may be removed at any time.
 
#### To regenerate the Mascii grammar 
Mascii relies on the Antlr 4 lex/parse system, which uses grammar files to express the core syntax of Mascii.  The antlr source grammar files are in the antr/ directory, called MasciiLexer.g4 and MasciiParser.g4.

Antlr translates the grammar from these files into an equivalent set of Typescript files.
To trigger Antlr to regenerate the Typescript files and run tests on the generated code:

1. make sure you have Anltr 4 installed in your system
2. `make all` 


### to convert a mascii file to musicxml
use the command line tool: mascii-typescript/convert.sh

it supports -f musicxml and -f midi


