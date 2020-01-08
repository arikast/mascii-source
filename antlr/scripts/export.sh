set -euo pipefail

#./compile.sh

DEST=../../mascii2/src/main/java/com/kastkode/mascii2/antlrgenerated/
rm -rf $DEST/*
cp ../generated/source/Mascii*.java $DEST
