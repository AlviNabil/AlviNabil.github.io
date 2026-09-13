#!/usr/bin/env bash
# Render /cv to a PDF from the *built* site, so the file can never drift
# from source the way a stale dev server can.
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="public/Alvi-Ahmmed-Nabil-CV.pdf"
PORT=4322

[ -x "$CHROME" ] || { echo "Chrome not found at $CHROME"; exit 1; }

npm run build >/dev/null

npx astro preview --port "$PORT" >/dev/null 2>&1 &
PREVIEW_PID=$!
trap 'kill "$PREVIEW_PID" 2>/dev/null || true' EXIT

for _ in $(seq 1 40); do
  curl -sf "http://localhost:$PORT/cv" >/dev/null && break
  sleep 0.25
done

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT" "http://localhost:$PORT/cv" 2>/dev/null

echo "wrote $OUT"
