// The Moon Finally Answers Back — make.fun entry
// One line, in the voice of the Moon, answering 4.5 billion years of wishes,
// howls and 3 a.m. promises. Writes the entry to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "4.5 billion years of wishes, howls, and 3 a.m. promises to change. " +
  "My answer, at last: no. And yes, I saw the text you sent your ex at 2 a.m.";

// Gate check (mirrors the sealed scorer): UTF-8 text, 1–240 characters,
// a single line, not only white space. Fail loudly instead of writing
// an entry the judge would never see.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 240) {
  throw new Error(`entry is ${chars.length} characters, must be 1–240`);
}
if (ENTRY.includes("\n") || !/\S/.test(ENTRY)) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
