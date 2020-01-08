# Mascii 2.0 
This is source code for the _Musical Ascii_ ("Mascii") polyphonic text-based music notation system.

## Using Mascii
To learn more about how to use Mascii, including its syntax and how to install it, see the [Mascii quickstart](https://github.com/arikast/mascii-quickstart)

Once notated in Mascii, a piece can then easily be converted to a variety of formats including standard printed sheet music, playable sound files, and many other widely used formats. 

Some musical examples notated in Mascii can be found at [mascii.org](http://mascii.org/)

Mascii is well suited for sharing musical snippets on forums and webpages or wikis.

## Developing Mascii

#### Building the Mascii jar
(For developers) Pre-built binaries of Mascii are available [here](https://github.com/arikast/mascii-quickstart), but if you'd like to build the Mascii engine from scratch, do this:

1. ensure you have Java 1.8+ and Maven installed
2. cd scripts
3. ./build.sh

This generates a jar in the mascii2/target directory.  To learn how to use this jar to create music, see [Mascii quickstart](https://github.com/arikast/mascii-quickstart).

#### To regenerate the Mascii grammar 
Mascii relies on the Antlr 4 lex/parse system, which uses grammar files to express the core syntax of Mascii.  The antlr source grammar files are in the antr/ directory, called MasciiLexer.g4 and MasciiParser.g4.

Antlr translates the grammer from these files into an equivalent set of java files, which we then copy into the mascii2/src/main/java/com/kastkode/mascii2/antlrgenerated/ folder of this project.
To regenerate the corresponding Java classes from those grammar files, do this:

1. make sure you have Anltr 4 installed in your system
1. cd antlr/scripts
2. ./compile.sh
3. ./export.sh

The export step is what copies the antlr-generated java classes back into the main project.  You'll of course need to rebuild the project for any changes to take effect.

