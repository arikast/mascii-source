cd ..
rm -rf generated/*
#mkdir -p generated/com/kastkode/mascii2/antlrgenerated
mkdir -p generated/{source,classes}
antlr -package com.kastkode.mascii2.antlrgenerated -o generated/source MasciiLexer.g4 MasciiParser.g4
#antlr -package com.kastkode.mascii2.antlrgenerated -o generated/source Mascii.g4 
javac -cp $(brew --prefix)/Cellar/antlr/4.7.2/antlr-4.7.2-complete.jar -d generated/classes generated/source/Mascii*.java
