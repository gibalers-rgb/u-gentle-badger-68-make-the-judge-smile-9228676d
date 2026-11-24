// Make the Judge Smile — entry program.
//
// Writes a single line (1–200 characters) about a small good thing that
// happened today to /output/entry.txt, the file the sealed scorer gates on
// and the judge compares two at a time.
//
// The judge weighs, most important first: on subject (a small good thing
// that happened today), warmth, surprise, one concrete detail, fresh
// wording — no greeting-card phrasing. So the line below is built around
// one real moment: a specific animal, a specific place, a specific cost
// (ten minutes late), and a turn the reader does not see coming (the
// aloof cat choosing *today* to claim my shoes).
//
// The program is deterministic: no randomness, no network, no clock, no
// environment. It writes the same line on every run, and it refuses to
// write anything that would fail the gate (empty, whitespace-only, or
// over 200 characters).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My neighbour's cat, who has ignored me for two years, chose this " +
  "morning to sit on my shoes and refuse to move — I missed my bus " +
  "and grinned all the way to work on foot.";

function main(): void {
  if (LINE.trim().length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (LINE.length > 200) {
    throw new Error(`entry line is ${LINE.length} characters, over the 200 cap`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("entry line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
  console.log(LINE);
}

main();
