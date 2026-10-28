# Process: how the work was done

This page explains the workflow that produced the lessons. Follow it to add or fix a module, or to repeat the method in another course.

## Workflow for each module

The steps are in [LESSONS-PLAYBOOK.md:56-60](../tools/LESSONS-PLAYBOOK.md#L56-L60):

1. **Read the source.** `node tools/digest.mjs <MOD>` prints a short digest of the module's notes. It shows each section's big idea, F2P lines, memory hook and top-level bullets, then the bites.
2. **Write the lessons.** Create `data/lessons/<MOD>.json` using the format and rules in [READABILITY.md](READABILITY.md).
3. **Build and check.** Run `node tools/build.mjs`. Read the warnings and problems (see [QUALITY-GATES.md](QUALITY-GATES.md)).
4. **Commit and push.** One commit per module, like "Add plain-language lessons for Level 11 (enemies and bosses)".
5. **Log it.** Tick the module in the progress log ([LESSONS-PLAYBOOK.md:62-91](../tools/LESSONS-PLAYBOOK.md#L62-L91)).
6. **Republish.** Every few modules, republish the claude.ai artifact.

## Why the F2P route order

The modules were written in the F2P route order, not the book order ([LESSONS-PLAYBOOK.md:53-54](../tools/LESSONS-PLAYBOOK.md#L53-L54)).
The learner starts at the top of the route, so the start of the course got better first.
If the work had stopped halfway, the most useful levels would already be done.

[ROADMAP.md:3](../ROADMAP.md) explains the route: the most F2P-critical levels come first (rewards, mechanics, level design, UI). Story and cutscenes come late.

## Timeline

All lesson work happened on 2026-10-28. The app itself was built a week earlier.

| Time | Commit | What |
|---|---|---|
| 01:12 | `3a2a24d` | The lesson system, the playbook, the lint, and the first module (L00) |
| 01:17 | `905488b` | L01, L02, L04 |
| 01:19 to 01:40 | `37927b7` to `7f26060` | F2P1, L13, L12, L09, L08, L07, L05, L06, L10, L11, L14, F2P2 |
| 01:42 to 01:46 | `f580220` to `72847ba` | L03, L16, L15, L17, BX |
| 01:48 | `111da2c` | Shuffle check options |
| 01:51 | `cfe8690` | Even out option lengths, add the 1.5 rule |
| 01:53 | `404767c` | Tighten the rule to 1.2 |
| 11:10 | `ba2ef3d` | First 10 diagrams, with theme support |
| 11:23 | `f34b8ae` | Your own book viewer, with page links |
| 11:27 | `ae0cddb` | 16 more diagrams |

The commit order matches the F2P route exactly.

Earlier commits from 2026-10-21 built the attention features. They are covered in [ATTENTION-AND-ADHD-UX.md](ATTENTION-AND-ADHD-UX.md):

- `d1c5c2a`: the three-step day
- `457e153`: the phone layout
- `99f1ade`: the desktop-site warning
- `d67fca5`: the loading screen

## The progress log

The log at the end of the playbook records each module with its lesson count, then the later fixes ([LESSONS-PLAYBOOK.md:62-91](../tools/LESSONS-PLAYBOOK.md#L62-L91)). Its summary line reads:

> "All 21 modules done · 307 lessons, 1402 cards, 143 glossary words"

A short log like this lets a new session pick up the work without reading the whole history.

## What the build makes

`node tools/build.mjs` writes these files ([build.mjs:1-9](../tools/build.mjs#L1-L9)):

| Output | Used for |
|---|---|
| `docs/index.html` and icons | The GitHub Pages site |
| `app/level-up-speedrun.html` | A single file you can open offline |
| `tools/dist/artifact.html` | The claude.ai artifact (git-ignored) |
| `anki/level-up-flashcards.tsv` | Flashcards for Anki |
| `Level-Up-All-Notes.md`, `QUEST-LOG.md`, `ROADMAP.md` | Readable copies of the course |

Notes for anyone working here:

- **Do not put documents in `docs/`.** GitHub Pages serves that folder. That is why this documentation lives in `design/`.
- **The build rewrites files** at the repo root and in `app/`, `anki/` and `docs/`. Commit its output together with the change that caused it.
- **Preview the site** with `node tools/serve.mjs 5178 docs`.

## Publishing

- **GitHub Pages:** push to `main`, and Pages serves `docs/`. The site is at <https://eternal-crave.github.io/level-up-speedrun/>.
- **claude.ai artifact:** republish `tools/dist/artifact.html` to the same artifact URL, so the link stays the same.
- **Progress sync:** the artifact syncs through claude.ai storage. The GitHub Pages site syncs through Firebase after Google sign-in ([core.js:66-70](../tools/app/core.js#L66-L70)).

No root document explains the artifact republish step in detail. This page and the playbook line are the only records.

## How to reuse this

1. Write the rules and the data format down before you write content.
2. Build a small digest tool that shows the source material one module at a time.
3. Do the modules in the order learners will meet them.
4. Make one commit per module, and keep a one-line progress log.
5. Run the lint after each module, not only at the end.
6. Fix whole classes of problems in a separate pass, like the quiz fairness pass.
