// Fortune Cookie for the Liquidated Trader
// make.fun competition: u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c
//
// Writes a single fortune cookie line to /output/entry.txt.
// Deterministic by design: the same fixed text on every run, no network,
// no randomness, no clock, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "A great fortune awaits you \u2014 unfortunately, it is the same one you just lost to leverage.\n";

// Gate self-check: the competition requires 1-160 characters and at most
// 20 words of plain text. Fail loudly instead of writing an invalid entry.
const text = FORTUNE.trim();
const words = text.split(/\s+/).filter(Boolean).length;
if (text.length < 1 || text.length > 160) {
  throw new Error(`fortune is ${text.length} chars, must be 1-160`);
}
if (words > 20) {
  throw new Error(`fortune is ${words} words, must be at most 20`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
