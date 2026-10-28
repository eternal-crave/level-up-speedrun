# Visuals and the book: original diagrams and your own book viewer

Words alone are hard work. This page explains two ways the app adds pictures without copying the book:

1. **26 original diagrams** drawn for the lessons.
2. **A viewer for your own copy of the book**, opened at the matching page.

## Why pictures

Mayer's research says people learn better from words and pictures together than from words alone. This is often called "dual coding".
A diagram can show a curve, a loop or a layout in one look. In text, the same thing takes a whole card.

## Original diagrams

### What exists

There are 26 SVG files in `data/figs/`. Each one is used by exactly one card.

| Module | Diagrams |
|---|---|
| F2P1 (F2P core) | ltv-cpi, retention-curve, loops, sawtooth, faucets-sinks |
| F2P2 (live game) | pity-tail, pass-rhythm, liveops-rhythm, leagues, level-funnel, ab-split |
| L02, L03 | eight-fun, story-beats, weird-triangle |
| L05 to L09 | jump-phases, rule-thirds, thumb-zone, bracketing, weenie |
| L11, L13 | telegraph, boss-dance, power-families |
| L15 to L17, BX | sound-priority, cutscene-spectrum, slice-layer, doc-ladder |

Most diagrams sit on a `how` card (17 of 26). The rest are on `see`, `idea` and `f2p` cards.

### How a card uses one

Add `"fig"` to the card ([data/lessons/BX.json:19](../data/lessons/BX.json)):

```json
{ "t": "how", "fig": "doc-ladder", "text": "- **One-sheet:** sells the idea in one page\n..." }
```

The build reads `data/figs/doc-ladder.svg` and puts the SVG straight into the page ([build.mjs:130-136](../tools/build.mjs#L130-L136)).
The diagrams are inline, so the app never downloads them separately.
The lesson card shows it inside `<figure class="lfig">` ([views.js:515](../tools/app/views.js#L515)).

### How they work in light and dark mode

The SVG files use CSS classes instead of fixed colours. The colours come from the app's theme tokens ([app.css:578-596](../tools/app/app.css#L578-L596)).

| Class | Meaning |
|---|---|
| `t-ink`, `t-acc`, `t-hot`, `t-go`, `t-gold` | Bold text in ink, accent, red, green or gold |
| `t-sm` | Small text (10.5 px) |
| `s-ink`, `s-line`, `s-acc`, `s-hot` | Line colours and widths |
| `f-acc`, `f-gold`, `f-hot`, `f-go`, `f-card`, `f-line` | Fill colours |
| `f-acc-soft`, `f-gold-soft`, `f-hot-soft`, `f-go-soft` | Soft fill colours |

The default text colour and size are set on the `<svg>` itself, not on `<text>` ([app.css:580](../tools/app/app.css#L580)).
Children inherit them, so a `fill` or `font-size` written inside the SVG still wins. Examples are a 28 px castle emoji, or white text on a coloured dot.

The tokens are defined once for light mode ([app.css:3-37](../tools/app/app.css#L3-L37)) and again for dark mode ([app.css:38-57](../tools/app/app.css#L38-L57)).
So one SVG file works in both themes. Only two places use a fixed colour: white text on a filled shape in `story-beats.svg` and `telegraph.svg`.

Every SVG also has `role="img"`, an `aria-label` and a `<title>`, so screen readers can describe it.

### Checks for overflowing and overlapping labels

Run the check after you add or change a diagram:

1. `node tools/check-figs.mjs` writes `app/_fig-check.html`. It shows every diagram with the real `app.css`. Files named `app/_*.html` are git-ignored.
2. `node tools/serve.mjs 5177 app`, then open `http://localhost:5177/_fig-check.html`.
3. The page title becomes "fig-check: N issues". Each diagram shows "ok" or its issues in red.

How it measures ([check-figs.mjs](../tools/check-figs.mjs)):

- It reads the box of every `<text>` label in viewBox units.
- **Spill**: a label that ends more than half a unit outside the drawing.
- **Overlap**: two labels that share more than 2 units of width and a third of the shorter one's height. Text boxes include line spacing, so lines that only touch do not count.
- `window.figCheck()` measures again, so you can test a change in the browser console.

On 2026-10-28 all 26 diagrams passed. A planted overlapping label and a planted label outside the drawing were both caught.

### Why the book's own drawings were not copied

The book is full of Scott Rogers' drawings. They were deliberately **not** copied:

- They are under copyright.
- The GitHub repo is public.

The playbook records this ([LESSONS-PLAYBOOK.md:89](../tools/LESSONS-PLAYBOOK.md#L89)). The app footer also tells the learner to get the book for its drawings ([views.js:970](../tools/app/views.js#L970)).
So every diagram here is a new drawing of the idea, not a copy of a page.
The book's real drawings still show up in the app, but only from your own PDF on your own device. See [The book's drawings, cut out of your PDF](#the-books-drawings-cut-out-of-your-pdf).

## Your own book viewer

### Why

The diagrams cannot replace the book's drawings and jokes. So the app lets you open **your own** PDF of the book at the page that matches the lesson.
Nothing from the book is stored in the repo or on a server.

### How a lesson knows its page

222 of the 307 lessons have `"book": <printed page>`. For example, `L11-l08` has `"book": 291`.

| Module group | Lessons with a page |
|---|---|
| L01 to L17 and BX | 222 of 247 |
| F2P1, F2P2, L00 | none (this material is not from the book) |

The page numbers were found with TF-IDF. TF-IDF is a simple way to score how well two texts share their unusual words.
The script is [tools/book-pages.mjs](../tools/book-pages.mjs):

- It needs a text copy of your own PDF, with one page per form feed. That is what `pdftotext` makes by default. Keep that file outside the repo.
- Each lesson's title and cards (not the f2p card) score every PDF page of its chapter. Rare words count most.
- The best page wins if it scores 20 or more. Lessons whose "Go deeper" section is F2P-only are skipped.
- Run `node tools/book-pages.mjs <book.txt>` to compare. Add `--apply` to fill in lessons that have no page yet. It never overwrites a page.

On 2026-10-28 it gave the same page for all 222 lessons that have one. It skipped the same 25 lessons.
Later that day, a review of every lesson against the book text and its drawings corrected 40 of those pages; see [Which lesson shows which drawing](#which-lesson-shows-which-drawing). So `book-pages.mjs` now disagrees with those 40 on purpose, because word overlap picked the wrong page there.

The data stores the printed page. The PDF has 24 extra pages at the front, so the app adds 24 ([views.js:535](../tools/app/views.js#L535)).

### How it works

| Step | What happens | Where |
|---|---|---|
| 1 | A lesson with a page shows "📖 In the book · p. 291". | [views.js:530](../tools/app/views.js#L530) |
| 2 | The first time, you choose your PDF file. | `bookPickHtml()`, [views.js:578-582](../tools/app/views.js#L578-L582) |
| 3 | The file is saved in this browser, in IndexedDB (database `lus-book`, store `f`, key `pdf`). | `bookIO()`, [views.js:538-557](../tools/app/views.js#L538-L557) |
| 4 | If the browser blocks storage, the file is kept in memory until you close the page. | [views.js:551-555](../tools/app/views.js#L551-L555) |
| 5 | PDF.js 3.11.174 loads from cdnjs, only the first time you open the book. | `pdfjs()`, [views.js:561-569](../tools/app/views.js#L561-L569) |
| 6 | One page is drawn on a canvas, sized to the screen. | `bookRender()`, [views.js:595-616](../tools/app/views.js#L595-L616) |
| 7 | You can go back, go forward, zoom to 2 times, or close. The arrow keys and Escape also work. | [views.js:1044-1049](../tools/app/views.js#L1044-L1049) |

You can see the file size, or remove the PDF, in the Me tab ([views.js:629-637](../tools/app/views.js#L629-L637)).

### Privacy

- The PDF is **never uploaded or synced**. The code has no network call that sends it.
- The only network traffic is loading the two PDF.js scripts from cdnjs.
- Cloud sync saves only your progress and your flashcard state, not the book.
- `*.pdf` is in `.gitignore`, so a PDF cannot be committed by mistake.

## The book's drawings, cut out of your PDF

### Why

A whole page is a lot to read in the middle of a lesson. Rogers' cartoons make the point in one look, and they are funny, so they help an idea stick.
So the app cuts each drawing out of your PDF and shows it right next to the lesson that goes with it.

### What the repo holds: positions, not pictures

[data/book/art.json](../data/book/art.json) lists the 462 drawings in the 2010 PDF, on 315 pages.
Each row is `[pdf page, left, top, width, height]`, as fractions of the page. It holds numbers only: no pixels from the book.

[tools/book-art-scan.js](../tools/book-art-scan.js) made the file. Paste it into the browser console of the app, with your PDF added. PDF.js lists every image the page draws, and the script works out each image's box on the page. On 2026-10-28 it reproduced the committed file exactly.

### Which lesson shows which drawing

Each drawing is shown in the lesson whose idea it shows, not just the lesson with the nearest page.

**First version: page only (replaced).** At first a drawing went to the lesson whose `book` page was nearest to it, 3 pages away at most. That gave 415 drawings in 173 lessons. Then a check scored each drawing's caption and nearby text against every lesson in its chapter. Only about half the drawings were in the lesson that fit them best. For example, the nine story-beat drawings (pp. 37–41) showed in "Story is salt, gameplay is meat" instead of "Nine beats of a classic story".

**Now: chosen by meaning, then reviewed.** On 2026-10-28, five reviewers worked in parallel, one per group of chapters, about 90 drawings each. They were subagents. Each reviewer looked at:

- every drawing, cut out of the PDF locally (the cut-outs were never saved in the repo);
- its caption and nearby text;
- what each lesson of the chapter teaches;
- a word-overlap score as a hint only, because captions that are really footnotes fool it.

Each reviewer chose:

- 1 lesson for each drawing, sometimes 2;
- or `[]` (gallery only) when no lesson teaches what it shows, such as the cover, the author photo, or a gag with no lesson point.

The choices are in [data/book/art-lessons.json](../data/book/art-lessons.json). Each key is `<pdf page>-<nth image on that page>`, and the build reads them ([build.mjs](../tools/build.mjs), "book illustrations"). A drawing that isn't listed falls back to the nearest-page rule.

Each drawing still belongs to its chapter in the gallery. The chapter is the one whose printed pages hold it, from each module's `bookPages`. Pages between two chapters go to the chapter before, and the front pages go to L00.

The result:

- 428 of the 462 drawings now appear in 158 lessons.
- 228 drawings changed lessons, and 3 went to a lesson in another chapter. For example, the two chili drawings from the back of the book went to "Making a game is like cooking chili".
- All 462 are in the gallery.
- With the same word-overlap check, the share of drawings in their best-scoring lesson went from 46% to 59%. Clear misses dropped from 96 to 39. The reviewers overruled the remaining ones on purpose, after looking at the drawing. One example is a teleporting enemy, which went to "Ten enemy behaviours".

**Lesson pages fixed too.** The same reviewers checked every lesson's `book` page against the book text. They corrected 40 pages where another page in the chapter clearly covered the lesson better. For example, "Nine beats of a classic story" went from p. 48 to p. 37, where the beats start. These were edited in `data/lessons/*.json`, so the 📖 buttons open the better page as well.

### How it works

| Step | What happens | Where |
|---|---|---|
| 1 | A lesson with drawings shows a "🎨 From the book" strip of thumbnails above the 📖 button. | `artStrip()` in views.js |
| 2 | Each drawing is drawn by PDF.js from your saved PDF, but only the box around the drawing (a viewport offset). It becomes a PNG blob URL, so moving to the next card shows it at once. | `artCrop()` |
| 3 | Renders run one at a time. In the gallery, only drawings near the screen are rendered (IntersectionObserver). | `fillArt()` |
| 4 | Tap a drawing to see it full width. ← → and the arrow keys move through the lesson's drawings, or the chapter's in the gallery. "📖 Whole page" opens the page, and "Go to its lesson" jumps to the lesson. | `openArt()` |
| 5 | The gallery is at `#art` (all chapters) or `#art/<MOD>`. It is linked from Me (📖 Your book) and from each chapter's lesson tab. | `viewArt()` |
| 6 | With no PDF on this device, a lesson shows one line instead: "N of the book's drawings go with this lesson. Add your PDF in Me". The gallery shows the PDF picker. | `artStrip()`, `viewArt()` |

The first drawing after a page load takes a few seconds, because PDF.js loads and opens the PDF once. After that, each drawing takes a fraction of a second.

## Known limits

- **Book page range.** "←" can go below printed page 1, so the counter can show 0 or less. "→" has no end; past the last page it shows "That page isn't in this PDF."
- **Start over** does not remove the saved PDF. Remove it in the Me tab.
- **Fixed on 2026-10-28:** the old rule `.lfig text { fill: …; font-size: 12px }` beat every size and colour set inside the SVGs. Emoji icons meant to be 20 px to 28 px showed at 12 px, and white labels turned grey. The defaults now come from the `<svg>`.

## How to reuse this

1. Draw your own simple diagrams. Do not copy pictures from the source.
2. Use theme classes in the SVG, not fixed colours.
3. Keep one diagram per idea, and put it on the card that explains it.
4. To show the original, let each user open their own copy on their own device.
5. Save the scripts you use for checks and matching in the repo, so the work can be repeated.
