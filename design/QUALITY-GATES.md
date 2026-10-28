# Quality gates: lesson checks and fair quizzes

Rules only help if they are checked. This page explains what the build checks in every lesson, and how the quizzes were made fair.

## How the checks run

Run `node tools/build.mjs`. The lesson checks are in [build.mjs:93-142](../tools/build.mjs#L93-L142).

The build sorts what it finds into two lists:

- **Warnings** are style problems. They print as `lesson style warnings:` ([build.mjs:142](../tools/build.mjs#L142)).
- **Problems** are structure errors. They print as `PROBLEMS (nothing was written):` and stop the build ([build.mjs:144](../tools/build.mjs#L144)).

Every message starts with the module, the lesson number and the lesson id, like `lessons/L11 #8 L11-l08`.

> **Problems stop the build.** The build prints the list and exits with code 1. It does this before it writes a single file ([build.mjs:144](../tools/build.mjs#L144)).
> So a broken course never reaches `docs/` or the artifact. Warnings do not stop the build, so read them after each run.
>
> Before 2026-10-28 the build printed problems at the very end and still exited with code 0.

## Every check

| Check | Limit | Level | Line |
|---|---|---|---|
| The lessons file is valid JSON | | error | [102](../tools/build.mjs#L102) |
| Each lesson has an id, and no id repeats | | error (the lesson is skipped) | [108](../tools/build.mjs#L108) |
| The first card is an `idea` card | | error | [111](../tools/build.mjs#L111) |
| Number of cards | fewer than 3 or more than 5 | warning | [112](../tools/build.mjs#L112) |
| Number of check options | not exactly 3 | warning | [121](../tools/build.mjs#L121) |
| The check is well formed | a question, at least 2 options, an answer index in range | error | [114](../tools/build.mjs#L114) |
| The right answer is not much longer | more than 1.2 times the longest wrong option, in characters | warning | [115-116](../tools/build.mjs#L115-L116) |
| Every "Go deeper" link matches a notes heading | | error | [117-120](../tools/build.mjs#L117-L120) |
| Card length | more than 60 words | warning | [125](../tools/build.mjs#L125) |
| Sentence length | more than 25 words | warning | [126](../tools/build.mjs#L126) |
| Banned forms | "e.g.", "i.e." or "and/or" | warning | [127](../tools/build.mjs#L127) |
| Average sentence length in a lesson | more than 15 words | warning | [129](../tools/build.mjs#L129) |
| The diagram file exists | `data/figs/<name>.svg` | error | [134](../tools/build.mjs#L134) |
| The book page is a real page number | a whole number from 1 to 499 | error | [138](../tools/build.mjs#L138) |

### How words and sentences are counted

- **Words** ([build.mjs:96](../tools/build.mjs#L96)): bold marks are removed, then the build counts runs of letters, numbers, apostrophes and hyphens.
- **Sentences** ([build.mjs:126](../tools/build.mjs#L126)): each list item counts as its own sentence. A colon also ends a sentence. So "How it works:" followed by a list never counts as one long sentence.

Cards with an unknown type are dropped without a message ([build.mjs:110](../tools/build.mjs#L110)). Check your spelling of `idea`, `how`, `see`, `f2p` and `hook`.

### What the build does not check

- **Idioms and phrasal verbs**: not checked. A script cannot judge these well, so a person has to.
- **Check questions, options and "why" text**: the style limits apply only to card text.

### The state today

A build on 2026-10-28 found **0 warnings and 0 problems** in 307 lessons and 1,402 cards.
The highest average sentence length in any lesson is 12.9 words, so the new 15-word check passes everywhere.

### `tools/check.mjs` is something else

`node tools/check.mjs` checks the **notes**, not the lessons. It reports which modules are done, counts items, and checks that each book section appears in the notes.
It reads a text copy of the book from a fixed path in an old temporary folder ([check.mjs:10](../tools/check.mjs#L10)). If that file is missing, the book counts show 0.

## Fair quizzes

### The problem

Before the fix, two shortcuts beat the quiz without any knowledge:

1. **"Pick the first one."** The right answer was always shown first. That was true for all 307 checks.
2. **"Pick the longest one."** The right answer was the longest option in 252 of 307 checks (82%). The worst case was almost 7 times longer than the wrong options.

A quiz you can beat this way does not make you recall anything. That breaks retrieval practice (see [LEARNING-SCIENCE.md](LEARNING-SCIENCE.md#4-retrieval-practice-and-spacing-dunlosky-et-al-2013)).

### Fix 1: shuffle the order (commit `111da2c`)

The data always stores the right answer at index 0, with `"answer": 0`. The app shuffles the order on screen.

- When you open a lesson, the app makes a random order of option numbers, like `[2, 0, 1]` ([views.js:502](../tools/app/views.js#L502)). It uses a Fisher-Yates shuffle ([core.js:33](../tools/app/core.js#L33)).
- The buttons appear in that order, but each one keeps its original number in `data-k` ([views.js:520](../tools/app/views.js#L520)).
- When you tap one, the app compares that original number with `answer` ([views.js:1069](../tools/app/views.js#L1069)). The screen position never matters for grading.

**Why store the answer at index 0?** Writers never have to track where the answer is. They cannot accidentally put it in the same place every time either.

Two small details:

- A new order is made when you open a different lesson or reload the page. If you leave a lesson and come straight back, you see the same order.
- The right button has `data-k="0"` in the page source. That only matters if someone reads the HTML.

### Fix 2: make wrong answers believable (commits `cfe8690` and `404767c`)

Every wrong answer should be a real idea that a learner might pick. It should be about the same length as the right answer.

The work was done in two passes:

| Commit | Rule | Checks rewritten | Wrong answers rewritten | Right answers shortened |
|---|---|---|---|---|
| `cfe8690` | Right answer at most 1.5 times the longest wrong one | 157 | 314 | 76 |
| `404767c` | Tightened to 1.2 times | 92 | 179 | 6 |
| **Both** | | **229 different checks** | **455 different strings** | |

Question text, the answer index and the "why" text were not changed.
Each pass also added the lint rule, so new lessons cannot bring the problem back.

### Before and after

**Example 1** ([data/lessons/L02.json:130](../data/lessons/L02.json)), "Which kind of fun does a calm farming game mostly offer?"

| | Right | Wrong | Wrong |
|---|---|---|---|
| Before | Submission: relaxing, low pressure | Challenge | Narrative |
| After | Submission: relaxing, low pressure | Challenge: beating hard obstacles | Fellowship: playing with a team |

**Example 2** ([data/lessons/L11.json:172](../data/lessons/L11.json)), "Which non-enemy enemy is most common in mobile games?"

| | Right | Wrong | Wrong |
|---|---|---|---|
| Before | Time: countdowns and move limits | Dragons | Ghosts |
| After | Time: countdowns and move limits | Dragons guarding treasure | Ghosts that haunt the board |

**Example 3, fixed in both passes** ([data/lessons/L05.json:66](../data/lessons/L05.json)), "How does Among Us tell identical crewmates apart?"

| | Right | Wrong | Wrong |
|---|---|---|---|
| Before | By colour, plus hats and pets | By size | By voice |
| After pass 1 | By colour, plus hats and pets | By size and body shape | By voice and name tags |
| After pass 2 | By colour, plus hats and pets | By their size and body shape | By their voice and name tags |

**Example 4, the worst case** ([data/lessons/L16.json:65](../data/lessons/L16.json)), "What does Rogers say cutscenes are best for?"
Here the right answer was made shorter and the wrong answers longer.

| | Right | Wrong | Wrong |
|---|---|---|---|
| Before | Big moments the engine can't play, like kissing and explosions | Tutorials | Menus |
| After | Big moments the engine can't play | Teaching the controls step by step | Explaining menus and settings |

### The numbers over time

| Measure | Before | After pass 1 | After pass 2 (today) |
|---|---|---|---|
| Right answer shown first | 100% | shuffled | shuffled |
| Right answer is the longest | 82% | 68% | 51% |
| Right answer over 1.2 times the longest wrong one | 75% | 30% | 0% |
| Typical length ratio, right to longest wrong | 1.54 | 1.10 | 1.02 |
| Average length, right and wrong (characters) | 36 and 20 | 34 and 28 | 34 and 31 |

**Honest note.** "Pick the longest" still wins 51% of the time. Random guessing wins 33%.
The 1.2 rule removed the big gaps, but a small length hint is left. A stricter pass could make the right answer the longest in only about a third of checks.

## How to reuse this

1. Turn each writing rule you can measure into a lint check.
2. Split errors (broken structure) from warnings (style).
3. Make errors stop the build before it writes anything.
4. Store the right answer in a fixed place and shuffle on screen.
5. Check option lengths with a ratio. Then measure how often "pick the longest" would still win.
