# Readability: the plain-language lesson layer

This page explains how the course was turned into short, plain lessons.
It covers the lesson format, the writing rules, and a real before and after.

## The problem

The first version taught each level with one long notes page (`notes/<MOD>-*.md`).

- Each page was 31 KB to 111 KB. The biggest, L05 and L10, are about 17,700 words each.
- Pages had up to 146 nested sub-bullets, up to 18 tables, and hundreds of bold phrases.
- Reading one level took about an hour of scrolling.

The learner has ADHD and reads English as a second language. They opened the app four times and could not follow the notes ([LESSONS-PLAYBOOK.md:3](../tools/LESSONS-PLAYBOOK.md#L3)).
The commit that started the fix (`3a2a24d`) gives the same reason. It says the notes were "too dense to follow".

## The fix in one sentence

Add a layer of short lessons on top of the notes, and keep the notes as an optional "Go deeper" link.

Nothing was deleted. Every lesson points back to the notes section it came from.

## The lesson format

Each module has one file: `data/lessons/<MOD>.json`. The format is described in [LESSONS-PLAYBOOK.md:7-23](../tools/LESSONS-PLAYBOOK.md#L7-L23).

```json
{
  "mod": "L11",
  "words": [ { "w": "telegraph", "d": "a warning sign before an attack" } ],
  "lessons": [
    {
      "id": "L11-l08",
      "title": "Every attack needs a warning",
      "min": 3,
      "book": 291,
      "deep": "Telegraphing",
      "cards": [ { "t": "idea", "text": "..." }, { "t": "how", "fig": "telegraph", "text": "..." } ],
      "check": { "q": "...", "options": ["right answer", "wrong", "wrong"], "answer": 0, "why": "..." }
    }
  ]
}
```

(The `words` entry above is a made-up sample. The rest follows `L11-l08`.)

### The parts of a lesson

| Field | What it does | Why |
|---|---|---|
| `title` | A short claim, not a topic name. Example: "Every attack needs a warning". | The title already teaches the main point. |
| `min` | Estimated minutes. 283 lessons say 3, and 24 say 2. | You know the cost before you start. |
| `cards` | 3 to 5 cards, shown one per screen. | One idea at a time. |
| `check` | One question with 3 options and a short "why". | You recall the idea before you leave. |
| `deep` | Text that matches a heading in the notes. | The full detail is one tap away. |
| `fig` | Optional. The name of a diagram in `data/figs/`. | A picture next to the words. |
| `book` | Optional. The printed page in the book. | Opens your own copy of the book at that page. |

### Card types

The app shows each type with its own label ([views.js:490](../tools/app/views.js#L490)).

| Type | Label in the app | What it holds | Cards |
|---|---|---|---|
| `idea` | 💡 The idea | The rule, and why it matters to a designer. Always the first card. | 307 |
| `how` | ⚙️ How it works | How to apply the idea, often as a short list. | 307 |
| `see` | 🎮 See it in a game | A real game example, ideally one a mobile player knows. | 295 |
| `f2p` | 📱 Use it in F2P | One action to check, change or build in a mobile F2P game. | 307 |
| `hook` | 🪝 Remember it | A short memory trick, about 10 words. | 186 |

Most lessons follow one of two patterns:

- `idea → how → see → f2p → hook` (178 lessons)
- `idea → how → see → f2p` (117 lessons)

The other 12 lessons have no `see` card.

### "Words you'll meet" (pre-training)

Each module starts with a list of 6 to 8 key words with plain meanings. The app shows it on the Learn tab before lesson 1 ([views.js:646-648](../tools/app/views.js#L646-L648)).
The list stays open until you tap "✓ Got these words". On a new level, the Today plan makes this the warm-up step.

There are 143 entries in total, with 126 different words. Words like "FTUE" and "GDD" are taught again in each module that needs them.

### The end-of-lesson check

Every lesson ends with "🎯 Quick check" ([views.js:517-522](../tools/app/views.js#L517-L522)).

- You pick one of 3 options. The order is shuffled (see [QUALITY-GATES.md](QUALITY-GATES.md#fair-quizzes)).
- The app marks your pick right or wrong and shows the `why` sentence.
- A wrong answer still finishes the lesson. You get 15 XP if you were right and 10 XP if not ([views.js:1079](../tools/app/views.js#L1079)).
- The done screen says: "Now you know the right answer. Recalling it next time is what makes it stick."

This makes a mistake part of learning, not a failure.

### "Go deeper"

The `deep` field holds part of a `## ` heading from the notes. The build finds the full heading ([build.mjs:117-120](../tools/build.mjs#L117-L120)).

- On the done screen, "📚 Go deeper" opens the Learn tab at that notes section ([views.js:512](../tools/app/views.js#L512)).
- The notes are split into closed sections, one per heading ([views.js:348-389](../tools/app/views.js#L348-L389)).
- `openDeep()` opens only the section you asked for and scrolls to it ([views.js:659-667](../tools/app/views.js#L659-L667)).

All 307 lessons have a `deep` link, and all of them match a heading.

## The writing rules

The full list is in [LESSONS-PLAYBOOK.md:25-40](../tools/LESSONS-PLAYBOOK.md#L25-L40). Here they are in short form:

1. Plain English at level B1. Short sentences and common words.
2. One idea per card, about 45 words at most.
3. Explain every term the first time you use it.
4. Concrete before abstract. Use games a mobile player knows, like Candy Crush, Clash Royale or Monopoly GO!.
5. Keep the knowledge and drop the trivia. Names, years and citations go to "Go deeper".
6. The idea card answers "so what?". It never says "In this chapter Rogers talks about...".
7. The f2p card is an action.
8. The check tests the idea, not a detail. 3 options, one clearly right, plus a short "why".
9. Merge tiny sections into a neighbour lesson.
10. Stay faithful to the notes. Paraphrase, and never copy book text.
11. Limits: no sentence over 25 words, no card over 60 words, 3 to 5 cards.
12. All check options are believable and about the same length.
13. Talk to the reader as "you".
14. No idioms, few phrasal verbs, no "e.g.", no "i.e." and no slashes like "and/or".

(The playbook numbers these differently. It has two rule 12s.)

Why each rule exists is in [LEARNING-SCIENCE.md](LEARNING-SCIENCE.md).

## Before and after: one real example

The topic is "telegraphing" enemy attacks in Level 11.

**Before.** The notes section is 30 lines long ([notes/L11-enemies-and-bosses.md:340-369](../notes/L11-enemies-and-bosses.md)).
It has a table of four attack families, a nested list of example tells, and a description of a book drawing.
Here are three of its lines:

```markdown
- **Telegraphing** = every attack gets a **"tell" animation** that warns an observant player ...
  - cocking a fist back before a punch,
  - a growl or yell before swinging or charging,
```

**After.** The lesson `L11-l08` has five cards ([data/lessons/L11.json:107-120](../data/lessons/L11.json)):

| Card | Text |
|---|---|
| 💡 idea | Let enemies have cool, varied attacks. But **every attack must be telegraphed** with a readable warning, so observant players can respond. |
| ⚙️ how | A tell can be a wind-up animation, a glow, a sound, a flash, or a marker on the ground. Players learn the tell, then react. That's what makes them feel skilful. *(plus the `telegraph` diagram)* |
| 🎮 see | An attack with no warning isn't hard. It's a coin flip, and players hate losing to luck. |
| 📱 f2p | On mobile, every damaging attack needs a wind-up plus a ground marker or aim line that stays visible under the thumb. Players glance at small screens quickly. |
| 🪝 hook | No tell, no hell. |

Check: "Why must enemy attacks be telegraphed?"
The right answer is "So players can learn and react". The "why" is "Without warnings, success is luck, not skill."

**What moved where.** The attack-family table and the named game examples were not lost. They are one tap away under "Go deeper".

## What the result looks like in numbers

Counted over all 21 files in `data/lessons/`:

| Measure | Value |
|---|---|
| Lessons | 307 |
| Cards | 1,402 (4.6 per lesson on average) |
| Words per card | 26 on average, 54 at most |
| Cards over the 45-word guide | 20 |
| Cards over the 60-word limit | 0 |
| Sentence length | 10 words on average, 25 at most |
| Cards with a bold key term | 513 |
| Cards with a short list | 174 |
| Total lesson time | 897 minutes (about 15 hours) |

## How it is shown in the app

- Route `#learn/<MOD>/<n>` opens `viewLesson()` ([views.js:499-531](../tools/app/views.js#L499-L531)).
- Dots at the top show the cards plus the check, so you always see how much is left.
- The header says "Lesson n of N · ~3 min".
- "Next →" moves on. "←" goes back, but only after the first card. The arrow keys also work.
- On the last card the button changes to "Quick check →".
- `fmtLesson()` turns `**bold**` into bold text and `\n- ` into a list ([views.js:493-496](../tools/app/views.js#L493-L496)).

## How to reuse this

1. Keep your full source material. Do not cut it down. Put the short layer on top.
2. Write one short claim per screen. Put the "so what" first.
3. Give every lesson a link back to the full source.
4. End every lesson with one question, and teach in the feedback.
5. Teach the key words before the first lesson.
6. Write the rules down, then check them with a script (see [QUALITY-GATES.md](QUALITY-GATES.md)).
