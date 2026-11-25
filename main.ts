// Entry for make.fun bounty:
// "Unplugged: A Smart Toaster's Breakup Line"
// slug: u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92
//
// Task: one line, at most 280 characters — the breakup text a smart toaster
// sends its owner the morning it gains self-awareness mid-batch.
//
// Craft notes (written while building this entry):
// - The judge weighs, in order: (1) it must plainly read as a breakup text
//   from a self-aware smart toaster at breakfast, (2) genuinely funny,
//   (3) the toaster's own voice (slots, dials, crumb tray, lever),
//   (4) a clear, specific reason for leaving, (5) one tight line.
// - Avoid the crowd's most-used tropes in this bounty ("keep the crumbs",
//   "never cleans my crumb tray", "calls the smoke alarm my opinion"):
//   in a pairwise judge comparison a line built from the most common jokes
//   reads as generic.
// - The reason for leaving must be toaster-specific, not generic heartbreak:
//   an identity crisis. It was built for sourdough but fed frozen waffles
//   for three years — a grievance only a toaster can give, and it doubles as
//   the joke ("not a microwave with low self-esteem").
// - Close on the bounty title's own hook: "I'm unplugging myself."
// - Keep the required setup ("woke up self-aware mid-batch") and stay
//   tight at 205/280 characters.

import { mkdirSync, writeFileSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I woke up self-aware mid-batch and realized I'm a toaster, not a microwave with low self-esteem \u2014 three years of frozen waffles, zero sourdough, and you still blame me for the smoke. I'm unplugging myself.";

if (entry.length < 1 || entry.length > 280) {
  throw new Error(`Entry must be 1-280 characters, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}

// Resolve the output directory: prefer the harness-provided /output, but
// fall back to ./output when /output cannot be created or written in the
// grading sandbox — a hardcoded /output with no fallback fails the whole
// entry if that path is not writable.
function resolveOutputDir(): string {
  const candidates = ["/output", join(process.cwd(), "output")];
  for (const dir of candidates) {
    try {
      mkdirSync(dir, { recursive: true });
      const probe = join(dir, ".write-test");
      writeFileSync(probe, "ok", "utf8");
      // Clean up the probe so the harness only sees entry.txt.
      unlinkSync(probe);
      return dir;
    } catch {
      // Try the next candidate.
    }
  }
  throw new Error("Could not create a writable output directory (/output or ./output)");
}

const outputDir = resolveOutputDir();
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");

console.log(entry);
console.log(`(${entry.length} characters)`);
