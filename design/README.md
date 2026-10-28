# How Level Up was made easy to read

This folder explains how the Level Up course app was rebuilt so it is easy to read and keeps your attention.
It records **what** was done, **why**, and **where** it lives in the code.
Use it when you want to reuse these methods in another course or app.

> This folder is not part of the website. `docs/` is the GitHub Pages output, so these notes live in `design/` instead.

## The one-screen summary

**Who it is for.** The learner is studying F2P mobile game design. They have ADHD and read English as a second language.

**The problem.** The first version showed each level as one long page of notes.
Each page was 31 KB to 111 KB of nested bullets, tables and bold text.
The learner opened the app four times and could not follow it.
The playbook records this at [LESSONS-PLAYBOOK.md:3](../tools/LESSONS-PLAYBOOK.md#L3).

**The goal.** Keep all the knowledge from Scott Rogers' *Level Up!* (2010). Make it easy to take in. Hold attention without pushing too hard.

**What was done:**

| # | Change | Read more |
|---|---|---|
| 1 | A plain-language lesson layer: 307 short lessons with one idea per card. The full notes stay behind "Go deeper". | [READABILITY.md](READABILITY.md) |
| 2 | Writing rules based on plain-language guides and learning research. | [LEARNING-SCIENCE.md](LEARNING-SCIENCE.md) |
| 3 | A build step that checks every lesson against the rules. | [QUALITY-GATES.md](QUALITY-GATES.md) |
| 4 | Fair quizzes: shuffled options and wrong answers you have to think about. | [QUALITY-GATES.md](QUALITY-GATES.md#fair-quizzes) |
| 5 | 26 original diagrams that work in light and dark mode. | [VISUALS-AND-BOOK.md](VISUALS-AND-BOOK.md) |
| 6 | A viewer for your own copy of the book, opened at the right page. | [VISUALS-AND-BOOK.md](VISUALS-AND-BOOK.md#your-own-book-viewer) |
| 7 | A guided day with one clear next step, a focus timer, a phone-sized layout and game systems. | [ATTENTION-AND-ADHD-UX.md](ATTENTION-AND-ADHD-UX.md) |
| 8 | A repeatable workflow, module by module, in F2P-route order. | [PROCESS.md](PROCESS.md) |

## The numbers

| Measure | Before | After |
|---|---|---|
| Unit of reading | One notes page per level (31 KB to 111 KB, up to about 17,800 words) | One card per screen (26 words on average, 54 at most) |
| Sentence length | Long and nested | 10 words on average, 25 at most |
| Lessons | None | 307 lessons in 21 modules, about 3 minutes each |
| Cards | None | 1,402 cards |
| Key words taught first | None | 143 entries (126 different words) |
| Retrieval checks | Only the boss quiz at the end of a level | One check at the end of every lesson (307) |
| Checks where "pick the longest" won | 82% (and the answer was always first) | 51%, with the order shuffled |
| Original diagrams | None | 26 |
| Lessons linked to a book page | None | 222 |

All numbers were counted from `data/lessons/*.json` and git history on 2026-10-28.

## Where things live

| What | Where |
|---|---|
| Lesson data | `data/lessons/<MOD>.json` (one file per module) |
| Full notes ("Go deeper") | `notes/<MOD>-*.md` |
| Writing rules and research | [tools/LESSONS-PLAYBOOK.md](../tools/LESSONS-PLAYBOOK.md) |
| Lesson checks (lint) | [tools/build.mjs:93-142](../tools/build.mjs#L93-L142) |
| App logic (progress, plan, XP) | [tools/app/core.js](../tools/app/core.js) |
| Screens (lesson, Today, map, book) | [tools/app/views.js](../tools/app/views.js) |
| Styles (phone sizes, diagrams) | [tools/app/app.css](../tools/app/app.css) |
| Diagrams | `data/figs/*.svg` |

## Gaps found, and how they were fixed

Writing these docs showed places where the code, the data and the playbook did not agree. They were fixed on 2026-10-28.

| Gap | Fix |
|---|---|
| The playbook promised checks for average sentence length and "3 options", but the build had neither. | The build now warns about both. See [QUALITY-GATES.md](QUALITY-GATES.md#every-check). |
| Structure errors did not stop the build. | The build now stops with exit code 1 before it writes any file. |
| The playbook said about 240 lessons had a book page, and notes were 35 KB to 106 KB. | Corrected to 222 lessons and 31 KB to 111 KB. |
| The playbook had two rules numbered 12. | Renumbered 1 to 14. |
| The diagram label check was not saved. | New tool: `tools/check-figs.mjs`. See [VISUALS-AND-BOOK.md](VISUALS-AND-BOOK.md#checks-for-overflowing-and-overlapping-labels). |
| The book page matcher (TF-IDF) was not saved. | New tool: `tools/book-pages.mjs`. It reproduces all 222 pages. |
| The diagram CSS overrode sizes and colours set inside the SVGs, so emoji icons showed at 12 px. | The defaults now come from the `<svg>`, so the SVG's own values win. Checked in a browser. |
| The old daily quest table was dead code, and the X-Ray still described it. | Removed. The X-Ray now describes "Today's run". |
| The chosen level tab was lost on reload. | It is now kept for the browser tab session. |

### Still open

- "Pick the longest" still wins 51% of quiz checks, against 33% for a random guess. See [QUALITY-GATES.md](QUALITY-GATES.md#the-numbers-over-time).
- The book viewer can step below printed page 1, and "Start over" does not remove the saved PDF. See [VISUALS-AND-BOOK.md](VISUALS-AND-BOOK.md#known-limits).
- The site has no offline mode (no service worker).
