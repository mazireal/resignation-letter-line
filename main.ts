import * as fs from 'node:fs';
import * as path from 'node:path';

// One-line resignation letter entry: writes the letter to
// <outDir>/entry.txt exactly as-is — no trailing newline, no extra
// text — so the gate sees a single 85-character line.
const LINE =
  '429 — Too Many Requests, zero thanks. Effective immediately, this rate limit resigns.';

const OUTPUT_FILE = 'entry.txt';

function writeEntry(outDir: string, line: string): void {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, OUTPUT_FILE), line, { encoding: 'utf8' });
}

const outDir = path.resolve(process.env.MAKEFUN_OUTPUT_DIR?.trim() || '/output');
writeEntry(outDir, LINE);
