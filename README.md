# Mascii 2.2.1 
This is a reference implementation for an engine to power the _Musical Ascii_ ("Mascii") polyphonic text-based music notation system.

While mascii is itself just a syntax, this engine demonstrates how to convert that syntax into a midi or musicxml file. 

## Using Mascii
To learn more about how to use Mascii, including its syntax, a playground to try it in real time, and examples demonstrating its use, visit [mascii.org](http://mascii.org/)

Mascii-notated pieces can easily be converted to a variety of formats including standard printed sheet music, playable sound files, and other widely used formats. 

Mascii is designed to be well suited for sharing musical snippets on forums and webpages or wikis.  It is designed to be the equivalent of a tweet, but for musical ideas.

## Developing Mascii

Starting from version 2.1 onwards, this mascii engine has been ported to Typescript, which will receive all future development.  The legacy 2.0 version, written in Java, is preserved in the branch "legacy-java", where you'll also find instructions how to run it in that branch's version of this README.  (Some java code may remain in this branch too for a while, but will be removed soon.)

The important directories are:

- antlr/
- mascii2-typescript/

The other directory mascii2/ is the legacy java version, soon to be archived


 
### Build the project
Mascii relies on the Antlr 4 lex/parse system, which uses grammar files to express the core syntax of Mascii.  The antlr source grammar files are in the antr/ directory, called MasciiLexer.g4 and MasciiParser.g4.
Antlr translates the grammar from these files into an equivalent set of Typescript files.

1. make sure you have Anltr 4 installed in your system
2. make sure you have npm installed
3. build the project: `make`


### Convert a mascii file to musicxml
After building the project, use the command line tools: 

`mascii-typescript/mascii-2-musicxml.sh [yourfile.mascii]`

`mascii-typescript/mascii-2-midi.sh [yourfile.mascii]`


