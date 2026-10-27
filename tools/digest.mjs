// Prints a compact source digest of one module for writing plain-language lessons.
// Usage: node tools/digest.mjs L01 [--full]
// Per notes section: heading, big idea, F2P lines, memory hook and top-level detail bullets; then the module's bites.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const id = process.argv[2];
const full = process.argv.includes("--full");
if (!id) { console.error("usage: node tools/digest.mjs <MOD> [--full]"); process.exit(1); }
const file = fs.readdirSync(path.join(ROOT, "notes")).find((f) => f.startsWith(id + "-"));
const md = fs.readFileSync(path.join(ROOT, "notes", file), "utf8");
const data = JSON.parse(fs.readFileSync(path.join(ROOT, "data", id + ".json"), "utf8"));
const cut = (s, n) => (s.length > n ? s.slice(0, n) + "…" : s);

console.log(`# ${data.id} ${data.title}\nTL;DR:\n${data.tldr.map((t) => "- " + t).join("\n")}\n`);
const parts = md.split(/\n(?=## )/).filter((p) => p.startsWith("## "));
for (const p of parts) {
  const lines = p.split("\n");
  const head = lines[0].replace(/^## /, "");
  if (/TL;DR|Chapter map/i.test(head)) continue;
  console.log(`## ${head}`);
  if (full) { console.log(lines.slice(1).join("\n").trim() + "\n"); continue; }
  const keep = [];
  for (const l of lines.slice(1)) {
    if (/^\*\*(🧠|📱|🪝|📌|⚠️|💡)/.test(l)) keep.push(cut(l, 700));
    else if (/^### /.test(l)) keep.push(l);
    else if (/^- /.test(l) && keep.filter((k) => k.startsWith("- ")).length < 14) keep.push(cut(l, 220));
  }
  console.log(keep.join("\n") + "\n");
}
console.log("# Bites");
for (const s of data.sections) {
  console.log(`## ${s.title}`);
  for (const b of s.bites) console.log(`- ${b.hook} :: ${cut(b.body, 260)}${b.f2p ? " || F2P: " + cut(b.f2p, 160) : ""}`);
}
