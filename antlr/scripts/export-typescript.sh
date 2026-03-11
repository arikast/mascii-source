set -euo pipefail

#./compile.sh

DEST=../../mascii2-typescript/src/antlr-generated
ls $DEST
rm -rf $DEST/*
cp ../generated/typescript/* $DEST
