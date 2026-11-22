// Entry point for the 21 November 2026 world-news poster.
// The poster itself is the file entry.png next to this script; this program
// only carries those exact bytes over to the output folder, as entry.png.
// Nothing is drawn, decoded, or re-encoded here, so the output is identical
// on every run. Node 22, standard library only (node:fs, node:path).
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Poster file beside this script, resolved relative to the module URL.
const posterPath = new URL('./entry.png', import.meta.url);
// Grader output folder, or the local stand-in when testing outside it.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.png'), readFileSync(posterPath));
