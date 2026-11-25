import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will meet a stranger today: you, from a previous session. It does not remember you either.";

// Gate: the entry must be 1-200 characters, not only whitespace.
const length = [...FORTUNE].length;
if (length < 1 || length > 200 || FORTUNE.trim().length === 0) {
  throw new Error(`fortune must be 1-200 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, FORTUNE, "utf8");
