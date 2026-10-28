# Attention and ADHD-friendly UX

Short lessons are not enough on their own. The learner also needs to know **what to do next**, **when to stop**, and **why to come back**.
This page explains how the app guides each day, fits the phone, and uses game systems to hold attention.

The main idea: **always show exactly one obvious next step, and a clear finish line.**

## The Today run: three steps a day

### Before and after

**Before** (until commit `d1c5c2a`), the Today tab stacked six cards: a "2-minute start" card, Streak, Daily quests, Route week, Focus sprint and Truth of the day.
Everything asked for attention at once, and nothing said which one came first.

**After**, Today shows one run of three steps. Only the current step is open. Everything else moved into a closed "More" card.

### The three steps

The code comment explains the goal ([core.js:343-344](../tools/app/core.js#L343-L344)): each day "freezes a short path... so there is always exactly one obvious next thing and a clear finish line."

`buildPlan()` makes the plan once a day ([core.js:362-375](../tools/app/core.js#L362-L375)). It uses the first unfinished level on your route.

| Step | What it is | About |
|---|---|---|
| 1. Warm-up | Review due flashcards (up to 10). If none are due, "Meet the key words" of the level. Otherwise, swipe 5 bites. | 1 to 4 min |
| 2. Main quest | The next thing inside the level (see below). | 6 to 15 min |
| 3. Lock it in | If the warm-up was flashcards, recall 3 answers. Otherwise, review 5 flashcards. | 3 to 5 min |

The plan is saved for the day, so it does not change under you.

### Choosing the main step

`nextAction()` picks the next thing to do inside a level ([core.js:346-353](../tools/app/core.js#L346-L353)):

1. **Learn** the lessons, if any are left.
2. **Bites**, only for a level without lessons.
3. **Read** the notes, only for a level without lessons.
4. Beat the **boss**.
5. Do the **quests**.

All 21 levels now have lessons. So in practice the order is **learn → boss → quests**.

`mainStep()` sizes each step so it fits in one sitting ([core.js:354-361](../tools/app/core.js#L354-L361)):

| Kind | Goal | Time |
|---|---|---|
| Learn | 2 lessons | about 3 min each |
| Bites | up to 10 bites | a few minutes |
| Read | one 15-minute sprint ("You don't have to finish the level today.") | 15 min |
| Boss | 5 correct answers | 6 min |
| Quests | 1 quest | 15 min |

### Feedback while you work

- Each finished step gives +20 XP and confetti ([core.js:408-418](../tools/app/core.js#L408-L418)).
- If you are on another tab, a small popup says "✓ Step done. Next: ..." and hides after 9 seconds ([views.js:160-170](../tools/app/views.js#L160-L170)).
- The Today tab shows how many steps are left ([views.js:23-25](../tools/app/views.js#L23-L25)).

### The finish line

When all three steps are done ([views.js:128-135](../tools/app/views.js#L128-L135)):

1. "Run complete! Your chest is ready." with an "Open it" button.
2. After the chest: "✅ Done for today... Your streak is safe. Rest is part of the game. Come back tomorrow for a new run."

A closed "Still got energy? Bonus round" section offers more, but the app clearly says you are done.
This matters for ADHD: an endless list gives no moment to stop and feel finished.

## Focus timer

A timer helps you start, and it gives the time a clear end ([views.js:37-78](../tools/app/views.js#L37-L78)).

- Lengths: 5, 10, 15 or 25 minutes. The buttons are in the "More" card on Today.
- When it starts: "⏱ N-minute sprint started. Phone face down, one tab, go."
- A ⏱ countdown shows in the top bar while it runs.
- The timer is saved, so it survives a reload or a frozen tab. A sprint that ended while the tab was closed still counts if it was under 6 hours ago.
- A finished sprint gives 5 XP plus 1 XP per minute.
- The "Read" step starts a 15-minute sprint by itself.

## Route and weekly plan

You can study in one of two orders ([build.mjs:18-19](../tools/build.mjs#L18-L19)):

- **📱 F2P route** (the default): the most important levels for F2P come first. Order: L00, L01, L02, L04, F2P1, L13, L12, L09, L08, L07, L05, L06, L10, L11, L14, F2P2, L03, L16, L15, L17, BX.
- **📖 Book order**: L00 to L17, then BX, F2P1 and F2P2.

You choose on the Map or in Me → Settings. It is saved as `P.settings.route` ([core.js:49](../tools/app/core.js#L49)).

`weekPlan()` takes the number of levels per week from your pace, and the levels themselves from your route ([core.js:316-326](../tools/app/core.js#L316-L326)).

| Pace | Levels per week |
|---|---|
| Speedrun (4 weeks) | 5, 5, 5, 6 |
| Chill (8 weeks) | 3, 2, 2, 2, 3, 2, 2, 5 |

## Level progress

A level's ring on the map fills from three equal parts ([core.js:297-314](../tools/app/core.js#L297-L314)):

```js
const p = (parts.read + parts.boss + parts.quests) / 3;
```

- **read**: the share of lessons done (or 1 if you marked the notes as read).
- **boss**: full at a best score of 70%.
- **quests**: full at about 40% of the level's quests.

Bites do not count any more. They are optional review. The map explains the rule in plain words ([views.js:319](../tools/app/views.js#L319)).

## A layout that fits the phone

### The problem

On a phone the app felt like "looking through a hole". The text was small, and wide margins wasted space.

### The fix

Everything is sized in `rem`, so one change to the root font size scales the whole app ([app.css:424](../tools/app/app.css#L424)).

| Setting | Before (`8a798a7`) | After (`457e153`) | Where |
|---|---|---|---|
| Root font, 600 px wide or less | 18 px | **17 px** | [app.css:430](../tools/app/app.css#L430) |
| Root font, 360 px wide or less | 17 px | **16 px** | [app.css:466](../tools/app/app.css#L466) |
| Side margins | 16 px | **12 px** | [app.css:447](../tools/app/app.css#L447) |
| Card padding | 16 px | 14 px and 13 px | [app.css:448](../tools/app/app.css#L448) |
| Tab height | 56 px | 52 px | |

The code comment says 17 px is "big enough to read without zoom, small enough to fit ~40 characters a line on a 390px phone".
The current step also takes the full width on a phone ([app.css:458-459](../tools/app/app.css#L458-L459)).
Buttons stay at least 44 px to 48 px tall, so they are easy to tap.

### Other phone fixes

- **Desktop-site warning** (`99f1ade`). If Chrome shows the desktop version on a phone, everything looks tiny. The app notices this and says how to switch it off ([views.js:1195-1209](../tools/app/views.js#L1195-L1209)).
- **Installable** (`8a798a7`). The site has a manifest and icons, so you can add it to the home screen. There is no offline cache.
- **Loading screen** (`d67fca5`). "Loading your run..." shows while the app starts. If start-up fails, a clear message replaces the blank page ([shell.html:20-30](../tools/app/shell.html#L20-L30)).

## Show less at once

The app hides what you do not need yet, and shows it when you ask.

- **Hidden means hidden.** `[hidden] { display: none !important; }` makes sure a hidden panel never shows by accident ([app.css:59-60](../tools/app/app.css#L59-L60)). Before this fix, some layout classes made hidden panels show again.
- **Today's "More" card** holds the streak, week plan, focus timer and other extras. It is closed by default.
- **Bites hide their extras.** Each bite in the feed shows its main point. The example, the F2P note and the memory trick sit behind "More: example and F2P ▾".
- **Feed in small batches.** The feed starts with 10 bites and adds 8 more as you near the end ([views.js:262-290](../tools/app/views.js#L262-L290)). It stops at "End of this run." and does not scroll forever.
- **The recommended tab.** Each level opens on the tab for your next step, marked with "▶" ([views.js:393-404](../tools/app/views.js#L393-L404)). Your chosen tab is kept while you move around the app, and after a reload. It is stored for the browser tab session, so a new visit starts at the recommended tab again ([views.js:342-345](../tools/app/views.js#L342-L345)).

## The app is an F2P game, on purpose

The learner is studying F2P design. So the app uses real F2P systems, pointed at learning instead of spending.
The Me tab explains each one in a "🩻 Design X-Ray" card ([core.js:487-497](../tools/app/core.js#L487-L497), [views.js:861-864](../tools/app/views.js#L861-L864)):

> "Every hook here is a real retention or monetization mechanic, pointed at learning instead of your wallet."

| System | How it works here | Where |
|---|---|---|
| **Streak** | Any XP keeps the day. You earn a freeze every 7 days, up to 2, to cover a missed day. | [core.js:207-229](../tools/app/core.js#L207-L229) |
| **Daily chest** | Opens when all 3 steps are done. Random XP: 25, 40, 70 or 120. A 25% chance of a streak freeze. | [core.js:426-440](../tools/app/core.js#L426-L440) |
| **XP and levels** | Level = square root of (XP ÷ 40), plus 1. 15 titles, from "N00b" to "Legendary Designer". | [core.js:202-205](../tools/app/core.js#L202-L205) |
| **Saga map** | A winding path of levels. Nothing is locked. The next level glows. | [views.js:303-339](../tools/app/views.js#L303-L339) |
| **Hearts and revive** | 3 hearts in a boss fight. At 0 hearts you get one free revive. | [views.js:669-775](../tools/app/views.js#L669-L775) |
| **Feed** | Short bites to swipe. A pop quiz every 7 bites, a reward every 15. | [views.js:183-300](../tools/app/views.js#L183-L300) |
| **Badges** | 26 badges, +20 XP each. | [core.js:442-485](../tools/app/core.js#L442-L485) |

Each X-Ray entry names the mechanic, the psychology behind it, and the course level that teaches it. Some short examples:

- Streak: "loss aversion + a habit loop... The freeze is a mercy mechanic".
- Chest: "a variable-ratio reward... use it to delight, not to drain wallets".
- Boss: "the revive offer appears exactly when you're closest to winning".

Why this helps:

- The rewards give a small push to start, which helps with ADHD.
- The mercy rules keep it from feeling pushy: freezes, a free revive, and no locked levels.
- The learner can feel each mechanic working on them. That is field research for their F2P studies.

## Honest notes

- **No offline mode.** The site can be installed, but it has no service worker.
- **Not tested on ADHD learners.** These are design choices based on general research and F2P practice. See [LEARNING-SCIENCE.md](LEARNING-SCIENCE.md#6-adhd).
- **Fixed on 2026-10-28:**
  - The old daily quest table (8 quests, 3 picked a day) was dead code after the three-step run replaced it. It was removed. The X-Ray entry is now "📋 Today's run".
  - The X-Ray called the feed "infinite". It now says the feed feels endless but stops after a run.
  - The chosen level tab was lost on reload. Phones often reload a tab in the background, so it now survives that.

## How to reuse this

1. Make one plan per day with a fixed number of small steps.
2. Show only the current step. Hide the rest behind one "More".
3. Give a clear "done for today" message, and say that rest is fine.
4. Size steps in minutes, and timebox anything long.
5. On phones, scale the root font and keep margins thin.
6. If you use game rewards, add mercy rules, and explain the mechanics openly.
