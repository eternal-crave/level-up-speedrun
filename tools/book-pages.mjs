// Suggests the printed book page for each lesson, for the "📖 In the book" button.
// Usage: node tools/book-pages.mjs <book.txt> [MOD ...] [--apply]
//   <book.txt>: a text extract of your own PDF with one form feed between pages (pdftotext's default output).
//   It is only read, never copied; keep it outside the repo (the book is copyrighted and the repo is public).
// Method (TF-IDF): each lesson's words (title and every card except the f2p one, which is mobile advice, not book text)
// score each PDF page of its chapter; a word counts log(pages / pages that contain it), so rare words weigh most.
// --apply adds "book": <printed page> to lessons that have none, when the best page scores MIN_SCORE or more and the
// lesson's Go deeper section is not one of the F2P-only additions. Existing pages are reported, never overwritten.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OFFSET = 24; // PDF page = printed page + 24 in the 2010 Wiley PDF (same as BOOK_OFFSET in views.js)
const MIN_SCORE = 20;
const F2P_ONLY = /F2P|Deep Dive|phone|Narrative in F2P/i;
const STOP = new Set("about above after again against their there these those which while would could should being other every where because before through still really players player games game level levels designer design something things think people your yours them they this that with from have will what when make makes made more most some than then into just like only also very much many even each such over under well same does doesn first second three never always".split(" "));

const args = process.argv.slice(2), apply = args.includes("--apply");
const [src, ...want] = args.filter((a) => a !== "--apply");
if (!src || !fs.existsSync(src)) { console.error("usage: node tools/book-pages.mjs <book.txt> [MOD ...] [--apply]"); process.exit(1); }

const pages = fs.readFileSync(src, "utf8").split("\f").map((p) => p.toLowerCase());
const words = (s) => (String(s).toLowerCase().replace(/\*\*/g, "").match(/[a-z][a-z'’-]{3,}/g) || []).filter((w) => !STOP.has(w));
const df = {};
for (const p of pages) for (const w of new Set(words(p))) df[w] = (df[w] || 0) + 1;
const N = pages.length;

// chapter page ranges come from each module's "bookPages" ("417–430, 481–482"); roman-numbered intros are skipped
const ranges = {};
for (const f of fs.readdirSync(path.join(ROOT, "data")).filter((f) => f.endsWith(".json"))) {
  const m = JSON.parse(fs.readFileSync(path.join(ROOT, "data", f), "utf8"));
  const r = String(m.bookPages || "").split(",").map((s) => s.split(/[–-]/).map((v) => parseInt(v, 10))).filter(([a, b]) => a > 0 && b >= a);
  if (m.kind === "book" && r.length) ranges[m.id] = r;
}
const mods = want.length ? want : Object.keys(ranges).sort();

let same = 0, differ = 0, added = 0, weak = 0;
for (const mod of mods) {
  if (!ranges[mod]) { console.log(`${mod}: no printed page range, skipped`); continue; }
  const file = path.join(ROOT, "data", "lessons", mod + ".json");
  let text = fs.readFileSync(file, "utf8");
  const data = JSON.parse(text);
  for (const l of data.lessons) {
    const ws = [...new Set(words(l.title + " " + l.cards.filter((c) => c.t !== "f2p").map((c) => c.text).join(" ")))];
    const scored = [];
    for (const [a, b] of ranges[mod]) for (let i = Math.max(1, a + OFFSET - 1); i <= Math.min(N, b + OFFSET + 1); i++) {
      let s = 0;
      for (const w of ws) if (pages[i - 1].includes(w)) s += Math.log(N / (df[w] || 1));
      scored.push([i - OFFSET, s]);
    }
    scored.sort((x, y) => y[1] - x[1]);
    const [best, score] = scored[0] || [0, 0];
    const f2p = [].concat(l.deep || []).some((d) => F2P_ONLY.test(d));
    const note = l.book == null ? (f2p ? "f2p, skip" : score < MIN_SCORE ? "weak, skip" : "new") : l.book === best ? "same" : `data says ${l.book}`;
    console.log(`${l.id.padEnd(9)} ${scored.slice(0, 3).map(([p, s]) => `${p}:${s.toFixed(0)}`).join(" ").padEnd(24)} ${note.padEnd(14)} ${l.title.slice(0, 40)}`);
    if (l.book != null) { if (l.book === best) same++; else differ++; continue; }
    if (f2p || score < MIN_SCORE || best < 1) { weak++; continue; }
    if (apply) { // insert after "min": N, keeping the hand-formatted JSON layout
      const at = text.indexOf(`"id": "${l.id}"`), mi = text.indexOf('"min": ', at), me = text.indexOf(",", mi);
      text = text.slice(0, me + 1) + ` "book": ${best},` + text.slice(me + 1);
    }
    added++;
  }
  if (apply) { JSON.parse(text); fs.writeFileSync(file, text); }
}
console.log(`\nexisting pages: ${same} match the best page, ${differ} differ · without a page: ${added} ${apply ? "added" : "could be added (--apply)"}, ${weak} skipped`);
