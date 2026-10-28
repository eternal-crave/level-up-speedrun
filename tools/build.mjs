// Builds the Level Up Speedrun app + exports from notes/*.md and data/*.json.
// Usage: node tools/build.mjs
// Outputs:
//   app/level-up-speedrun.html      standalone page (open locally in any browser)
//   tools/dist/artifact.html        same page without the document skeleton (for publishing)
//   docs/index.html                 GitHub Pages site (Firebase sync when site.config.json has a config)
//   anki/level-up-flashcards.tsv    Anki import (Front, Back, Tags)
//   Level-Up-All-Notes.md           every module's notes in route order
//   QUEST-LOG.md                    every side quest, main quest and Play Lab as a checklist
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rd = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const wr = (p, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, p)), { recursive: true }); fs.writeFileSync(path.join(ROOT, p), s); };

const ROUTE_F2P = ["L00", "L01", "L02", "L04", "F2P1", "L13", "L12", "L09", "L08", "L07", "L05", "L06", "L10", "L11", "L14", "F2P2", "L03", "L16", "L15", "L17", "BX"];
const ROUTE_BOOK = ["L00", "L01", "L02", "L03", "L04", "L05", "L06", "L07", "L08", "L09", "L10", "L11", "L12", "L13", "L14", "L15", "L16", "L17", "BX", "F2P1", "F2P2"];
const SCHEDULE = {
  speedrun: [["L00", "L01", "L02", "L04", "F2P1"], ["L13", "L12", "L09", "L08", "L07"], ["L05", "L06", "L10", "L11", "L14"], ["F2P2", "L03", "L16", "L15", "L17", "BX"]],
  chill: [["L00", "L01", "L02"], ["L04", "F2P1"], ["L13", "L12"], ["L09", "L08"], ["L07", "L05", "L06"], ["L10", "L11"], ["L14", "F2P2"], ["L03", "L16", "L15", "L17", "BX"]],
};
const BOSSES = {
  L00: { name: "The Tutorial Gatekeeper", emoji: "🚪" }, L01: { name: "The Genre Hydra", emoji: "🐉" }, L02: { name: "Writer's Block Golem", emoji: "🗿" },
  L03: { name: "The Triangle of Weirdness", emoji: "🔺" }, L04: { name: "The Paperwork Lich", emoji: "📜" }, L05: { name: "Generic Badass Prime", emoji: "😎" },
  L06: { name: "The Clipping Camera", emoji: "🎥" }, L07: { name: "The Button-Mash Kraken", emoji: "🐙" }, L08: { name: "The Cluttered HUD", emoji: "🖥️" },
  L09: { name: "The Endless Gray Corridor", emoji: "🧱" }, L10: { name: "Combo Breaker", emoji: "🥊" }, L11: { name: "The Bullet Sponge", emoji: "🧽" },
  L12: { name: "Death Trap Deluxe", emoji: "🪤" }, L13: { name: "The Inflation Dragon", emoji: "🐲" }, L14: { name: "The Toxic Lobby", emoji: "☣️" },
  L15: { name: "The Muted Phone Phantom", emoji: "🔇" }, L16: { name: "The Unskippable Cutscene", emoji: "🎬" }, L17: { name: "Crunch Time", emoji: "⏰" },
  BX: { name: "The Blank Template", emoji: "📄" }, F2P1: { name: "The Churn Beast", emoji: "🌪️" }, F2P2: { name: "The Dark Pattern", emoji: "🕳️" },
};
const CAPSTONE = [
  { id: "cap1", title: "Pitch it in one breath", after: ["L02", "L04"], xp: 250,
    task: "Pick ONE F2P mobile concept: genre + a twist + who it's for. Write its **one-sheet**: title, genre, target player, platforms, age rating, the core loop in one sentence, 3 unique selling points, a monetization hypothesis and 2–3 competitor games.",
    deliverable: "A one-page one-sheet (doc, Notion or a photo of paper)." },
  { id: "cap2", title: "Loop it", after: ["F2P1"], xp: 250,
    task: "Draw your **core loop** (what you do every 30 seconds), **session loop** (one 3–5 minute session) and **meta loop** (what pulls you back for weeks). Mark where the player feels progress and where each retention hook sits.",
    deliverable: "One loop diagram plus one short paragraph per loop." },
  { id: "cap3", title: "Reward economy v0", after: ["L13", "F2P1"], xp: 300,
    task: "List every currency (soft, hard, energy, tokens), every **source** and every **sink**, and design the reward schedule for days 1–7. Simulate a player's balance for the first week in a spreadsheet.",
    deliverable: "Economy sheet: sources/sinks table + day-by-day balance for 7 days." },
  { id: "cap4", title: "The first ten levels", after: ["L09", "L12"], xp: 300,
    task: "Make a **beat chart** for the FTUE and levels 1–10: what each level teaches (one new mechanic or hazard at a time), its difficulty, the rest beats, and where the first real difficulty spike lands (and why there).",
    deliverable: "Beat chart table + a rough difficulty curve sketch." },
  { id: "cap5", title: "Screens & thumbs", after: ["L07", "L08"], xp: 250,
    task: "Wireframe your **home/lobby screen** and **in-game HUD** for a portrait phone. Mark thumb zones, touch-target sizes, currency bars, notification dots and the path to the store. Map every touch gesture to an action.",
    deliverable: "2 wireframes (paper photos are fine) + a one-table control map." },
  { id: "cap6", title: "Cast & conflict", after: ["L05", "L10", "L11"], xp: 300,
    task: "Create your hero's **character sheet** (personality, silhouette, metrics), **3 enemies** with distinct behaviors and **1 boss**, using the enemy and boss templates from the Bonus Levels.",
    deliverable: "1 character sheet, 3 enemy cards, 1 boss card." },
  { id: "cap7", title: "Go live", after: ["L14", "F2P2"], xp: 350,
    task: "Design one **social feature** (clan, co-op or PvP), a **30-day LiveOps calendar**, and a **store page** with 3 offers (prices + why). Run an ethics check: which of your hooks could feel predatory, and how do you defuse it?",
    deliverable: "Calendar, store mock-up and a one-page feature spec." },
  { id: "cap8", title: "Ship the pitch", after: ["L17", "BX"], xp: 400,
    task: "Write the **ten-pager** (use the F2P-adapted template in the Bonus Levels) and a **10-slide pitch deck**. Post it publicly for feedback: r/gamedesign, a Discord, X or LinkedIn. Public feedback is the boss fight.",
    deliverable: "Ten-pager + pitch deck + a link to your public post." },
];
const REQUIRED = ["id", "order", "kind", "label", "title", "bookPages", "emoji", "tagline", "f2pRelevance", "f2pWhy", "minutes", "tldr", "sections", "truths", "mnemonics", "flashcards", "quiz", "sideQuests", "mainQuests", "playLabs", "retrieval", "feynman", "links"];
const ARRAYS = ["tldr", "sections", "truths", "mnemonics", "flashcards", "quiz", "sideQuests", "mainQuests", "playLabs", "retrieval", "links"];

const problems = [];
const modules = [];
const notes = {};
const noteFiles = fs.readdirSync(path.join(ROOT, "notes")).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
for (const f of fs.readdirSync(path.join(ROOT, "data")).filter((f) => f.endsWith(".json")).sort()) {
  let m;
  try { m = JSON.parse(rd(`data/${f}`)); } catch (e) { problems.push(`${f}: JSON parse error ${e.message}`); continue; }
  const miss = REQUIRED.filter((k) => !(k in m));
  if (miss.length) problems.push(`${m.id || f}: missing keys ${miss.join(",")}`);
  for (const k of ARRAYS) if (!Array.isArray(m[k])) m[k] = [];
  for (const k of ["tagline", "f2pWhy", "feynman", "bookPages", "label", "title", "emoji"]) if (typeof m[k] !== "string") m[k] = m[k] == null ? "" : String(m[k]);
  m.minutes = +m.minutes || 45;
  m.f2pRelevance = Math.max(0, Math.min(5, +m.f2pRelevance || 0));
  const seen = new Set();
  const uid = (id, fallback) => { let x = String(id || fallback); if (seen.has(x)) { let n = 2; while (seen.has(`${x}~${n}`)) n++; problems.push(`${m.id}: duplicate id ${x} renamed`); x = `${x}~${n}`; } seen.add(x); return x; };
  m.sections = m.sections.filter((s) => s && Array.isArray(s.bites)).map((s, si) => ({ title: String(s.title || `Part ${si + 1}`), bites: s.bites.map((b, bi) => ({ ...b, id: uid(b.id, `${m.id}-s${si}b${bi}`), hook: String(b.hook || ""), body: String(b.body || ""), example: String(b.example || ""), f2p: String(b.f2p || ""), memory: String(b.memory || ""), tag: String(b.tag || "concept") })) }));
  m.flashcards = m.flashcards.filter((c) => c && c.q && c.a).map((c, i) => ({ ...c, id: uid(c.id, `${m.id}-f${i}`), q: String(c.q), a: String(c.a), type: c.type || "basic" }));
  m.quiz = m.quiz.filter((q) => {
    const ok = q && q.q && Array.isArray(q.options) && q.options.length >= 2 && Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length;
    if (!ok) problems.push(`${m.id}: dropped malformed quiz item ${q && q.id}`);
    return ok;
  }).map((q, i) => ({ ...q, id: uid(q.id, `${m.id}-q${i}`), why: String(q.why || "") }));
  m.sideQuests = m.sideQuests.map((q, i) => ({ ...q, id: uid(q.id, `${m.id}-s${i}`) }));
  m.mainQuests = m.mainQuests.map((q, i) => ({ ...q, id: uid(q.id, `${m.id}-m${i}`) }));
  m.playLabs = m.playLabs.map((q, i) => ({ ...q, id: uid(q.id, `${m.id}-p${i}`) }));
  m.retrieval = m.retrieval.filter((r) => r && r.q).map((r) => ({ q: String(r.q), a: String(r.a || "") }));
  m.truths = m.truths.map(String);
  const nf = noteFiles.find((n) => n.startsWith(m.id + "-"));
  if (nf) notes[m.id] = rd(`notes/${nf}`); else problems.push(`${m.id}: no notes file`);
  modules.push(m);
}
// ---- lessons: plain-language layer (tools/LESSONS-PLAYBOOK.md). Structure errors are problems; style limits are warnings.
const lessonWarn = [];
const CARD_TYPES = new Set(["idea", "how", "see", "f2p", "hook"]);
const wordsOf = (t) => (String(t).replace(/\*\*/g, "").match(/[A-Za-z0-9'’-]+/g) || []).length;
for (const m of modules) {
  const lf = path.join(ROOT, "data", "lessons", m.id + ".json");
  m.lessons = []; m.words = [];
  if (!fs.existsSync(lf)) continue;
  let L;
  try { L = JSON.parse(fs.readFileSync(lf, "utf8")); } catch (e) { problems.push(`lessons/${m.id}: JSON parse error ${e.message}`); continue; }
  const heads = (notes[m.id] || "").split("\n").filter((l) => l.startsWith("## ")).map((l) => l.slice(3).trim());
  m.words = (L.words || []).filter((w) => w && w.w && w.d).map((w) => ({ w: String(w.w), d: String(w.d) }));
  const ids = new Set();
  for (const [i, x] of (L.lessons || []).entries()) {
    const where = `lessons/${m.id} #${i + 1} ${x.id || ""}`;
    if (!x.id || ids.has(x.id)) { problems.push(`${where}: missing or duplicate id`); continue; }
    ids.add(x.id);
    const cards = (x.cards || []).filter((c) => c && CARD_TYPES.has(c.t) && c.text);
    if (!cards.length || cards[0].t !== "idea") problems.push(`${where}: first card must be an idea card`);
    if (cards.length < 3 || cards.length > 5) lessonWarn.push(`${where}: ${cards.length} cards (aim for 3-5)`);
    const ck = x.check || {};
    if (!ck.q || !Array.isArray(ck.options) || ck.options.length < 2 || !Number.isInteger(ck.answer) || ck.answer < 0 || ck.answer >= ck.options.length) problems.push(`${where}: malformed check question`);
    // multiple-choice rule: options of similar length, so "pick the longest" never works
    if (Array.isArray(ck.options) && ck.options.length > 1) { const len = ck.options.map((o) => String(o).length), rest = Math.max(...len.filter((_, k) => k !== ck.answer)); if (len[ck.answer] > rest * 1.2) lessonWarn.push(`${where}: right answer is much longer than the others (${len[ck.answer]} vs ${rest} chars)`); }
    const deep = [].concat(x.deep || []).map(String);
    // stored as the heading's plain text, the way the rendered notes show it
    const deepHeads = deep.map((d) => heads.find((h) => h.toLowerCase().includes(d.toLowerCase()))).filter(Boolean).map((h) => h.replace(/[*_`]/g, "").replace(/\s+/g, " ").trim());
    if (deep.length && deepHeads.length !== deep.length) problems.push(`${where}: Go deeper "${deep.join(" / ")}" matches no notes heading`);
    if (Array.isArray(ck.options) && ck.options.length !== 3) lessonWarn.push(`${where}: check has ${ck.options.length} options (use 3)`);
    let sw = 0, sn = 0;
    for (const c of cards) {
      const n = wordsOf(c.text);
      if (n > 60) lessonWarn.push(`${where} [${c.t}]: ${n} words (max 60)`);
      for (const sent of String(c.text).replace(/\*\*/g, "").replace(/\n- /g, ". ").replace(/\n/g, ". ").split(/(?<=[.!?:]["”']?)\s+/)) { const k = wordsOf(sent); if (k) { sw += k; sn++; } if (k > 25) lessonWarn.push(`${where} [${c.t}]: ${k}-word sentence: "${sent.slice(0, 60)}…"`); }
      if (/\be\.g\.|\bi\.e\.|\band\/or\b/i.test(c.text)) lessonWarn.push(`${where} [${c.t}]: avoid e.g./i.e./and-or`);
    }
    if (sn && sw / sn > 15) lessonWarn.push(`${where}: average sentence ${(sw / sn).toFixed(1)} words (aim for 15 or less)`);
    // optional diagram: "fig": "<name>" inlines data/figs/<name>.svg (themed by app.css classes)
    const figOf = (c) => {
      if (!c.fig) return undefined;
      const ff = path.join(ROOT, "data", "figs", String(c.fig) + ".svg");
      if (!fs.existsSync(ff)) { problems.push(`${where} [${c.t}]: figure "${c.fig}" not found in data/figs`); return undefined; }
      return fs.readFileSync(ff, "utf8").replace(/<\?xml[^>]*>\s*/, "").trim();
    };
    // "book": printed page in the 2010 edition (the app adds the PDF offset)
    if (x.book != null && !(Number.isInteger(x.book) && x.book > 0 && x.book < 500)) problems.push(`${where}: book page must be a printed page number`);
    m.lessons.push({ id: String(x.id), title: String(x.title || ""), min: +x.min || 3, book: Number.isInteger(x.book) ? x.book : undefined, deep: deepHeads, cards: cards.map((c) => ({ t: c.t, text: String(c.text), fig: figOf(c) })), check: { q: String(ck.q || ""), options: (ck.options || []).map(String), answer: ck.answer | 0, why: String(ck.why || "") } });
  }
}
if (lessonWarn.length) console.log("lesson style warnings:\n  " + lessonWarn.join("\n  "));
// structure problems stop the build before anything is written, so a broken course never reaches docs/ or the artifact
if (problems.length) { console.error("PROBLEMS (nothing was written):\n- " + problems.join("\n- ")); process.exit(1); }
modules.sort((a, b) => a.order - b.order);
const ids = new Set(modules.map((m) => m.id));
const COURSE = {
  built: new Date().toISOString().slice(0, 10),
  modules, notes,
  route: { f2p: ROUTE_F2P.filter((i) => ids.has(i)), book: ROUTE_BOOK.filter((i) => ids.has(i)) },
  schedule: Object.fromEntries(Object.entries(SCHEDULE).map(([k, w]) => [k, w.map((ws) => ws.filter((i) => ids.has(i))).filter((ws) => ws.length)])),
  capstone: CAPSTONE, bosses: BOSSES,
};

// ---- app
const css = rd("tools/app/app.css");
const js = rd("tools/app/core.js") + "\n" + rd("tools/app/views.js");
const SEP = new RegExp("[" + String.fromCharCode(0x2028) + String.fromCharCode(0x2029) + "]", "g");
const data = JSON.stringify(COURSE).replace(/</g, "\\u003c").replace(SEP, (c) => "\\u" + c.charCodeAt(0).toString(16));
const page = rd("tools/app/shell.html").replace("/*__CSS__*/", () => css).replace("/*__DATA__*/", () => data).replace("/*__JS__*/", () => js);
wr("tools/dist/artifact.html", page);
wr("app/level-up-speedrun.html", `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n</head>\n<body>\n${page}\n</body>\n</html>\n`);

// ---- GitHub Pages site (docs/): same page, plus the Firebase web config from site.config.json when present
const siteCfg = fs.existsSync(path.join(ROOT, "site.config.json")) ? JSON.parse(rd("site.config.json")) : {};
const fbCfg = siteCfg.firebase && siteCfg.firebase.apiKey ? `<script>window.FIREBASE_CONFIG = ${JSON.stringify(siteCfg.firebase)};</script>
` : "";
const sitePage = page.replace("<script>window.COURSE", () => fbCfg + "<script>window.COURSE");
wr("docs/index.html", `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="Level Up! remixed for F2P mobile game design: bite-sized lessons, flashcards, quests and boss fights.">
<meta name="theme-color" content="#2f5bea">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Level Up">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
</head>
<body>
${sitePage}
</body>
</html>
`);
wr("docs/.nojekyll", "");
// installable web app: icons from tools/make-icons.mjs, opened full screen from the home screen
for (const f of fs.readdirSync(path.join(ROOT, "tools/site"))) fs.copyFileSync(path.join(ROOT, "tools/site", f), path.join(ROOT, "docs", f));
wr("docs/manifest.webmanifest", JSON.stringify({
  name: "Level Up Speedrun", short_name: "Level Up", description: "F2P mobile game design, learned like a game.",
  start_url: "./", scope: "./", display: "standalone", orientation: "portrait",
  background_color: "#0d1625", theme_color: "#2f5bea",
  icons: [
    { src: "icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
    { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
    { src: "icon.svg", sizes: "any", type: "image/svg+xml" },
  ],
}, null, 2) + "\n");
if (!fbCfg) console.log("docs/index.html built WITHOUT cloud sync: add your Firebase web config to site.config.json and rebuild");

// ---- anki (tab separated; import with "Fields separated by: Tab", allow HTML)
const cell = (s) => String(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/[\t\r\n]+/g, " ");
const anki = ["#separator:tab", "#html:true", "#tags column:3", "#deck:Level Up! F2P"];
for (const m of modules) for (const c of m.flashcards) anki.push(`${cell(c.q)}\t${cell(c.a)}\tLevelUp::${m.id} ${c.type}`);
wr("anki/level-up-flashcards.tsv", anki.join("\n") + "\n");

// ---- all-in-one notes (F2P route order)
const byId = Object.fromEntries(modules.map((m) => [m.id, m]));
let all = `# Level Up! — complete study notes (F2P route order)\n\nGenerated ${COURSE.built}. ${modules.length} modules. Original study notes based on *Level Up! The Guide to Great Video Game Design* by Scott Rogers (2010), plus two DLC modules on F2P mobile.\n\n`;
all += COURSE.route.f2p.map((id, i) => `${i + 1}. ${byId[id].emoji} **${byId[id].label}** — ${byId[id].title}`).join("\n") + "\n\n";
for (const id of COURSE.route.f2p) if (notes[id]) all += `\n\n---\n\n${notes[id].trim()}\n`;
wr("Level-Up-All-Notes.md", all);

// ---- quest log
let ql = `# Quest Log\n\nEvery exercise in the course as a checklist, in F2P route order. The app tracks these too (and gives XP).\n\n## Capstone: build your own F2P game\n\n`;
ql += CAPSTONE.map((c, i) => `- [ ] **${i + 1}. ${c.title}** (after ${c.after.join(", ")}) — ${c.task.replace(/\*\*/g, "")}\n  - Deliverable: ${c.deliverable}`).join("\n") + "\n";
for (const id of COURSE.route.f2p) {
  const m = byId[id];
  ql += `\n## ${m.emoji} ${m.label} — ${m.title}\n\n`;
  if (m.sideQuests.length) ql += `**Side quests**\n\n` + m.sideQuests.map((q) => `- [ ] **${q.title}** (${q.minutes || "?"} min) — ${q.task}`).join("\n") + "\n\n";
  if (m.mainQuests.length) ql += `**Main quests**\n\n` + m.mainQuests.map((q) => `- [ ] **${q.title}** (${q.minutes || "?"} min) — ${q.task}${q.deliverable ? `\n  - Deliverable: ${q.deliverable}` : ""}${q.doneWhen ? `\n  - Done when: ${q.doneWhen}` : ""}`).join("\n") + "\n\n";
  if (m.playLabs.length) ql += `**Play Labs**\n\n` + m.playLabs.map((q) => `- [ ] **${q.game}** (${q.minutes || 10} min) — Look for: ${q.lookFor} → ${q.question}`).join("\n") + "\n";
}
wr("QUEST-LOG.md", ql);

// ---- roadmap (both paces; capstone milestones land in the week their prerequisite levels finish)
let rm = `# 🗺️ Roadmap\n\nTwo paces, same route. The route is reordered for F2P mobile: the most F2P-critical levels come first (rewards, mechanics, level design, UI), story and cutscenes come late. Nothing is locked; this is the recommended path. Times are estimates for a full pass (read + bites + boss + a couple of quests).\n\n`;
rm += `| # | Level | F2P | ⏱ |\n|---|---|---|---|\n` + COURSE.route.f2p.map((id, i) => { const m = byId[id]; return `| ${i + 1} | ${m.emoji} **${m.label}** · ${m.title} | ${"★".repeat(m.f2pRelevance)}${"☆".repeat(5 - m.f2pRelevance)} | ~${m.minutes} min |`; }).join("\n") + "\n";
for (const [pace, weeks] of Object.entries(COURSE.schedule)) {
  const label = pace === "speedrun" ? "⚡ Speedrun · 4 weeks · ~60–90 min/day, 6 days/week" : "🌿 Chill · 8 weeks · ~30–45 min/day, 5–6 days/week";
  rm += `\n## ${label}\n`;
  const weekOf = (id) => weeks.findIndex((w) => w.includes(id));
  weeks.forEach((w, wi) => {
    const mins = w.reduce((a, id) => a + byId[id].minutes, 0);
    rm += `\n### Week ${wi + 1} · ~${Math.round(mins / 60)} h of level work + daily cards\n\n`;
    rm += w.map((id) => `- [ ] ${byId[id].emoji} **${byId[id].label}** — ${byId[id].title} (~${byId[id].minutes} min): read → swipe bites → beat the boss → 2 side quests + 1 Play Lab`).join("\n") + "\n";
    const caps = CAPSTONE.filter((c) => Math.max(...c.after.map(weekOf)) === wi);
    if (caps.length) rm += caps.map((c) => `- [ ] 🧱 **Capstone: ${c.title}** — ${c.deliverable}`).join("\n") + "\n";
    rm += `- [ ] 🔬 Weekend: one full teardown of a top-grossing F2P game (method in DLC 1) + post your capstone progress publicly\n`;
  });
}
rm += `\n## Every single day (10–15 min, non-negotiable, even on bad days)\n\n- 🃏 Flashcard review (the app schedules it; Anki deck in \`anki/\` works too)\n- 📱 15 bites in the feed (on the bus, in a queue, instead of doomscrolling)\n- 🔥 Keep the streak. A 5-minute day still counts.\n`;
wr("ROADMAP.md", rm);

// ---- report
const tot = (k) => modules.reduce((a, m) => a + (k === "bites" ? m.sections.reduce((x, s) => x + s.bites.length, 0) : m[k].length), 0);
console.log(`modules ${modules.length} | bites ${tot("bites")} | cards ${tot("flashcards")} | quiz ${tot("quiz")} | side ${tot("sideQuests")} | main ${tot("mainQuests")} | labs ${tot("playLabs")} | truths ${tot("truths")}`);
console.log(`app ${(fs.statSync(path.join(ROOT, "app/level-up-speedrun.html")).size / 1024).toFixed(0)} KB`);
