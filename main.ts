import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "Sorry, can't come in. The office VPN keeps routing me through Los Santos and the traffic never clears.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const text = LINE + "\n";
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
if (LINE.length > 140 || LINE.split(/\s+/).length > 20) {
  throw new Error("entry violates the gate: at most 140 characters and 20 words");
}
if (readFileSync(`${outDir}/entry.txt`, "utf8").trim().length === 0) {
  throw new Error("entry.txt is empty");
}
