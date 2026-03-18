set -euo pipefail

GITROOT=$(git rev-parse --show-toplevel)

SRC_DIR="$1"
if [ -z "$SRC_DIR" ]; then
    echo >&2 "Please specify the file you'd like to convert."
    exit 1
fi

npx ts-node src/index.ts -f midi -c $SRC_DIR
