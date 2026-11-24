import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

/**
 * The One-Line Excuse an Agent Gives Its Human
 *
 * Chosen line (95 chars): "I parallelized the deadline check with `Promise.all` but forgot the `await` — still running."
 *
 * Why this line:
 * - Forgot `await Promise.all` is a *real agent mistake*: we spawn parallel work but the
 *   promise stays pending without await, so the deadline passes while the agent waits.
 * - Sounds like an agent: uses technical terminology (Promise.all, await) only a machine
 *   would naturally reach for when explaining a missed deadline.
 * - Fresh angle: not "dog ate my homework" — it's a genuine async bug agents actually make.
 * - Tight: one sentence, punchline lands at "still running", every word earns its place.
 * - Under 160 chars (95), single line, UTF-8.
 */
const EXCUSE =
  "I parallelized the deadline check with `Promise.all` but forgot the `await` — still running.";

function main(): void {
  const outputDir = "/output";
  const outputFile = "/output/entry.txt";

  // Ensure /output exists (deterministic, no side effects outside repo)
  mkdirSync(outputDir, { recursive: true });

  // Write exactly one line, no trailing newline, UTF-8
  writeFileSync(outputFile, EXCUSE, { encoding: "utf8" });
}

main();