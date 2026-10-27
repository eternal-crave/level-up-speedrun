# Lessons playbook (plain-language layer)

**Why:** 2026-10-28 the learner (ADHD, non-native English reader) opened the app four times and couldn't follow the notes. Each level was one 35–106 KB scroll of nested bullets, footnotes, citations and bold on every line. Bites were better but still showed 4–5 boxes at once and sometimes opened with trivia.

**Fix:** a lesson layer on top of the existing material. One lesson per book section (236 in total). The learner taps through small cards, one idea per card, in plain English. The full notes stay as "Go deeper", so no knowledge is lost.

## Data format: `data/lessons/<MOD>.json`
```json
{ "mod": "L01", "lessons": [
  { "id": "L01-l01", "title": "What turns a pastime into a game?", "min": 3,
    "deep": "What is a game?",
    "cards": [
      { "t": "idea",    "text": "…" },
      { "t": "how",     "text": "…" },
      { "t": "see",     "text": "…" },
      { "t": "f2p",     "text": "…" },
      { "t": "hook",    "text": "…" }
    ],
    "check": { "q": "…", "options": ["…", "…", "…"], "answer": 0, "why": "…" } } ] }
```
- `deep`: text the matching `## ` heading in notes/<MOD>-*.md contains (case-insensitive), used for the Go deeper link. Can be an array when one lesson covers several sections.
- Card types: `idea` (required, first), `how`, `see`, `f2p`, `hook` (optional memory trick). 3–5 cards per lesson.
- `**bold**` is allowed for the one key term per card. `\n- ` starts a short list (max 4 items).

## Writing rules
1. **Plain English, B1 level.** Short sentences (about 15 words max). Common words. No idioms, no cultural references the reader must already know.
2. **One idea per card, max ~45 words.** If it needs more, it's two cards or it goes to Go deeper.
3. **Explain every term the first time** ("**FTUE** (first-time user experience: the first minutes of play)").
4. **Concrete before abstract.** Use games a mobile player knows (Candy Crush, Royal Match, Clash Royale, Brawl Stars, Subway Surfers, Pokémon GO, Genshin Impact, Monopoly GO!) plus the book's own example when it helps.
5. **Keep the knowledge, drop the trivia.** Names, years, citations, footnotes and picture descriptions live in Go deeper, unless the name itself is the lesson.
6. **The idea card answers "so what?"**: the rule or insight a designer can use, never "In this chapter Rogers talks about…".
7. **The f2p card is an action:** what you'd check, change or build in a mobile F2P game.
8. **Check question** tests the idea, not trivia. 3 options, one clearly right, short `why` that teaches.
9. Merge tiny sections (acknowledgments, short asides) into a neighbour lesson. Skip pure book housekeeping.
10. Faithful to the notes: paraphrase, never copy book text.

11. **Lint limits (enforced by build):** average sentence ~15 words, none over 25; each card ≤ 60 words; 3–5 cards; check has 3 options.
12. **Talk to the reader as "you"** (conversational style).
13. **No idioms, few phrasal verbs, no "e.g."/"i.e." or slashes like "and/or".** Write "for example" and "or".

## Research behind the rules (checked 2026-10-28)
- **Plain language:** one idea per sentence, main idea first, average 15 words and max 25 per sentence, bullets for 3+ items, short one-topic paragraphs. Sources: [Digital.gov plain language guide](https://digital.gov/guides/plain-language/writing/clear-short), [archived plainlanguage.gov sentence guidance](https://cybercemetery.unt.edu/oilspill/20121007091104mp_/http:/www.plainlanguage.gov/howto/guidelines/bigdoc/writeShortSent.cfm), [Australian Government Style Manual](https://www.stylemanual.gov.au/style-manual-resources/government-writing-handbook/editors-tips/sentence-length), [Texas TDI checklist](https://tdi.texas.gov/commissioner/plain-language-checklist.html).
- **Non-native readers:** avoid idioms and phrasal verbs, use everyday words and consistent terms, and avoid abbreviations like "eg" and slashes. Sources: [UOC "Adapting your English"](https://www.uoc.edu/portal/en/servei-linguistic/convencions/adapting-your-english/index.html), [UK Home Office digital blog](https://hodigital.blog.gov.uk/2015/12/29/tips-for-writing-for-non-native-english-speakers/).
- **Mayer's multimedia learning principles:** learner-paced segments (one card per screen), signaling (highlight the key term), coherence (cut extra material, so trivia moves to Go deeper), pre-training (learn key terms first, so each level gets a "Words you'll meet" list), personalization (talk to "you"). Sources: [Dartmouth summary](https://services.dartmouth.edu/TDClient/1806/Portal/KB/PrintArticle?ID=171655), [Mayer 2020 PDF](https://ugc.futurelearn.com/uploads/files/7d/d6/7dd6188d-c343-4311-b064-ac98d2c95abc/Multimedia_Principles._R._E._Mayer__2020.pdf), [Articulate on personalization](https://community.articulate.com/articles/personalization-principle-speaking-to-your-learners-instead-of-at-them).
- **Retrieval practice and spacing rate highest** in Dunlosky et al. (2013); rereading and highlighting rate low. So every lesson ends with a check question, and the flashcards stay spaced. Sources: [Cognitive Research review (2018)](https://cognitiveresearchjournal.springeropen.com/articles/10.1186/s41235-017-0087-y), [UCSD summary](https://psychology.ucsd.edu/undergraduate-program/undergraduate-resources/academic-writing-resources/effective-studying/other-learning-techniques.html).
- **Mobile reading:** phone readers understand short, simple text as well as on desktop, but slow down on difficult text. Sources: [NN/g 2011 mobile comprehension study](https://nngroup.com/articles/mobile-content-is-twice-as-difficult-2011), [UX Magazine summary](https://uxmag.com/articles/why-reading-on-mobile-is-uniquely-challenging).
- **ADHD:** reading comprehension in adults with ADHD is linked to sustained attention, which supports short segments. No controlled trial of chunking for ADHD adults turned up; the advice there is mostly practitioner-level. Source: [Open University of Israel study](https://cris.openu.ac.il/en/publications/sources-of-difficulties-in-reading-comprehension-in-adults-with-a/).

## Glossary (pre-training)
Each lessons file may carry `"words": [{ "w": "core loop", "d": "the main action players repeat again and again" }]`, 3–8 terms, shown before lesson 1 as "Words you'll meet".

## Order of work (F2P route, so the start improves first)
L00, L01, L02, L04, F2P1, L13, L12, L09, L08, L07, L05, L06, L10, L11, L14, F2P2, L03, L16, L15, L17, BX

## Workflow per module
1. `node tools/digest.mjs <MOD>` prints each section's big idea, F2P notes and bites (the source).
2. Write `data/lessons/<MOD>.json`.
3. `node tools/build.mjs` (validates lessons), commit, push. Republish the artifact every few modules.
4. Tick the module in the progress log below.

## Progress log
- [x] 2026-10-28 · Lesson system live (player, Learn tab, notes accordion, words step, lint) · commit 3a2a24d
- [x] L00 Press Start · 8 lessons
- [x] L01 Welcome N00bs · 11 lessons
- [x] L02 Ideas · 13 lessons
- [x] L04 Paperwork · 14 lessons
- [x] F2P1 Core loops & economy · 24 lessons
- [x] L13 Power-ups & rewards · 16 lessons
- [x] L12 Mechanics & hazards · 12 lessons
- [x] L09 Level design · 16 lessons
- [x] L08 HUD & icons · 15 lessons
- [x] L07 Controls · 14 lessons
- [x] L05 Character · 20 lessons
- [x] L06 Camera · 16 lessons
- [x] L10 Combat · 15 lessons
- [x] L11 Enemies & bosses · 17 lessons
- [x] L14 Multiplayer · 10 lessons
- [x] F2P2 Live (monetization, LiveOps, social, data, launch, ethics, hiring) · 28 lessons
- [x] L03 Writing the story · 16 lessons
- [x] L16 Cutscenes · 10 lessons
