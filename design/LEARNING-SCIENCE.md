# Learning science: the research behind the rules

This page lists each research finding, the design choice it led to, and where that choice lives in the code.
The same sources are in [LESSONS-PLAYBOOK.md:42-48](../tools/LESSONS-PLAYBOOK.md#L42-L48). They were checked on 2026-10-28.

## Summary table

| Finding | Design choice | Where |
|---|---|---|
| Plain language: short sentences, main idea first | 25-word sentence limit, idea card first | [build.mjs:111](../tools/build.mjs#L111), [build.mjs:124](../tools/build.mjs#L124) |
| Non-native readers: no idioms, no abbreviations | No "e.g.", "i.e." or "and/or" | [build.mjs:125](../tools/build.mjs#L125) |
| Mayer: segmenting | One card per screen, you control the pace | [views.js:509-512](../tools/app/views.js#L509-L512) |
| Mayer: signaling | One bold key term per card | `**bold**` in the card text |
| Mayer: coherence | Trivia moves to "Go deeper" | [views.js:508](../tools/app/views.js#L508) |
| Mayer: pre-training | "Words you'll meet" before lesson 1 | [views.js:642-644](../tools/app/views.js#L642-L644) |
| Mayer: personalization | Talk to "you" | Writing rule in the playbook |
| Dunlosky: retrieval practice | A check at the end of every lesson | [views.js:513-518](../tools/app/views.js#L513-L518) |
| Dunlosky: spacing | Spaced flashcards | [core.js:249-270](../tools/app/core.js#L249-L270) |
| Mobile reading is harder for difficult text | Short, simple cards; phone-sized type | [app.css:428-469](../tools/app/app.css#L428-L469) |
| ADHD: comprehension is linked to sustained attention | Short segments, about 3 minutes each | `min` in the lesson data |

## 1. Plain language

**What the sources say.** Put one idea in each sentence and the main idea first. Aim for an average of 15 words and a maximum of 25. Use bullets for three or more items. Keep paragraphs short, with one topic each.

**What we did.**

- The build warns about any sentence over 25 words.
- The first card of each lesson must be the idea card, so the main point comes first.
- Lists are written with `\n- ` and shown as bullets.

**Result.** Card sentences average 10 words. None is over 25.

**Sources:**

- [Digital.gov plain language guide](https://digital.gov/guides/plain-language/writing/clear-short)
- [Archived plainlanguage.gov sentence guidance](https://cybercemetery.unt.edu/oilspill/20121007091104mp_/http:/www.plainlanguage.gov/howto/guidelines/bigdoc/writeShortSent.cfm)
- [Australian Government Style Manual: sentence length](https://www.stylemanual.gov.au/style-manual-resources/government-writing-handbook/editors-tips/sentence-length)
- [Texas Department of Insurance plain language checklist](https://tdi.texas.gov/commissioner/plain-language-checklist.html)

## 2. Writing for non-native readers

**What the sources say.** Avoid idioms and phrasal verbs. Use everyday words, and use the same term for the same thing each time. Avoid abbreviations like "eg" and avoid slashes.

**What we did.**

- Rule: no idioms, few phrasal verbs.
- The build warns about "e.g.", "i.e." and "and/or". Write "for example" and "or" instead.
- Every term is explained the first time it appears.

**Sources:**

- [UOC: Adapting your English](https://www.uoc.edu/portal/en/servei-linguistic/convencions/adapting-your-english/index.html)
- [UK Home Office digital blog: tips for writing for non-native English speakers](https://hodigital.blog.gov.uk/2015/12/29/tips-for-writing-for-non-native-english-speakers/)

## 3. Mayer's multimedia learning principles

Richard Mayer's principles describe how people learn from words and pictures together. Five of them shaped the lessons.

| Principle | What it means | What we did |
|---|---|---|
| **Segmenting** | Split content into parts, and let the learner control the pace. | One card per screen. "Next →" moves on only when you tap it. |
| **Signaling** | Highlight what matters most. | One bold key term per card. A label on each card says what kind of card it is. |
| **Coherence** | Remove extra material, even if it is interesting. | Names, years, citations and drawing descriptions move to "Go deeper". |
| **Pre-training** | Teach key terms before the main lesson. | Each level opens with "Words you'll meet". |
| **Personalization** | Use a friendly, conversational style. | Cards talk to "you". |

The diagrams also follow Mayer's idea of using words and pictures together. See [VISUALS-AND-BOOK.md](VISUALS-AND-BOOK.md).

**Sources:**

- [Dartmouth summary of Mayer's principles](https://services.dartmouth.edu/TDClient/1806/Portal/KB/PrintArticle?ID=171655)
- [Mayer (2020), Multimedia Principles (PDF)](https://ugc.futurelearn.com/uploads/files/7d/d6/7dd6188d-c343-4311-b064-ac98d2c95abc/Multimedia_Principles._R._E._Mayer__2020.pdf)
- [Articulate on the personalization principle](https://community.articulate.com/articles/personalization-principle-speaking-to-your-learners-instead-of-at-them)

## 4. Retrieval practice and spacing (Dunlosky et al., 2013)

**What the research says.** Dunlosky and colleagues rated ten common study methods.
Practice testing (retrieval) and spreading study over time (spacing) rated highest.
Rereading and highlighting rated low.

**What we did.**

- **Retrieval after every lesson.** Every one of the 307 lessons ends with a one-question check. The answer comes with a short "why".
- **Retrieval for each level.** The boss fight is a quiz on the whole level ([views.js:665-771](../tools/app/views.js#L665-L771)).
- **Spacing.** Flashcards use a spaced schedule ([core.js:249-270](../tools/app/core.js#L249-L270)). Each card stores its due day, interval and ease. "Again" resets the card. "Easy" makes the next gap longer.
- **Spacing in the daily plan.** The Today warm-up shows due flashcards first. If cards were the warm-up, the last step asks you to recall answers. See [ATTENTION-AND-ADHD-UX.md](ATTENTION-AND-ADHD-UX.md).
- **No rereading loop.** The notes are still there, but the app never asks you to reread them as a study step.

**Sources:**

- The original paper: Dunlosky, Rawson, Marsh, Nathan and Willingham (2013), *Psychological Science in the Public Interest*, 14(1).
- [Cognitive Research: Principles and Implications, review (2018)](https://cognitiveresearchjournal.springeropen.com/articles/10.1186/s41235-017-0087-y)
- [UCSD summary of learning techniques](https://psychology.ucsd.edu/undergraduate-program/undergraduate-resources/academic-writing-resources/effective-studying/other-learning-techniques.html)

## 5. Reading on a phone

**What the research says.** In the NN/g study, phone readers understood short, simple text about as well as desktop readers. Difficult text was much harder on a phone.

**What we did.**

- Cards are short and simple, so the phone does not make them harder.
- The phone layout uses a bigger base font and thinner side margins. See [ATTENTION-AND-ADHD-UX.md](ATTENTION-AND-ADHD-UX.md#a-layout-that-fits-the-phone).

**Sources:**

- [NN/g: mobile content comprehension (2011)](https://nngroup.com/articles/mobile-content-is-twice-as-difficult-2011)
- [UX Magazine: why reading on mobile is uniquely challenging](https://uxmag.com/articles/why-reading-on-mobile-is-uniquely-challenging)

## 6. ADHD

**What the research says.** In adults with ADHD, reading comprehension is linked to sustained attention. That supports short segments.

**What it does not say.** The playbook is honest about this ([LESSONS-PLAYBOOK.md:48](../tools/LESSONS-PLAYBOOK.md#L48)):

> "No controlled trial of chunking for ADHD adults turned up; the advice there is mostly practitioner-level."

So the short lessons rest on general learning research. They are not proven by an ADHD trial.
The other ADHD supports in the app are also design choices, not tested treatments. They include the daily plan, the timer and the game systems.

**Source:**

- [Open University of Israel: sources of difficulties in reading comprehension in adults with ADHD](https://cris.openu.ac.il/en/publications/sources-of-difficulties-in-reading-comprehension-in-adults-with-a/)

## 7. What is design, not research

Some parts of the app come from F2P game design, not from learning research. They include the streak, the chest, XP and badges.
They were added to hold attention, and the app says so openly in its "Design X-Ray".
See [ATTENTION-AND-ADHD-UX.md](ATTENTION-AND-ADHD-UX.md#the-app-is-an-f2p-game-on-purpose).

Keep this difference clear when you reuse the methods:

- **Backed by research:** short segments, plain words, pre-training, retrieval checks, spacing.
- **Game design choices:** rewards, streaks, chests, badges. They help with motivation, but they do not teach by themselves.
