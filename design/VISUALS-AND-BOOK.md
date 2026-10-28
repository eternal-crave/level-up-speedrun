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

The SVG files use CSS classes instead of fixed colours. The colours come from the app's theme tokens ([app.css:561-579](../tools/app/app.css#L561-L579)).

| Class | Meaning |
|---|---|
| `t-ink`, `t-acc`, `t-hot`, `t-go`, `t-gold` | Bold text in ink, accent, red, green or gold |
| `t-sm` | Small text (10.5 px) |
| `s-ink`, `s-line`, `s-acc`, `s-hot` | Line colours and widths |
| `f-acc`, `f-gold`, `f-hot`, `f-go`, `f-card`, `f-line` | Fill colours |
| `f-acc-soft`, `f-gold-soft`, `f-hot-soft`, `f-go-soft` | Soft fill colours |

The default text colour and size are set on the `<svg>` itself, not on `<text>` ([app.css:563](../tools/app/app.css#L563)).
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

The playbook records this ([LESSONS-PLAYBOOK.md:89](../tools/LESSONS-PLAYBOOK.md#L89)). The app footer also tells the learner to get the book for its drawings ([views.js:886](../tools/app/views.js#L886)).
So every diagram here is a new drawing of the idea, not a copy of a page.

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

The data stores the printed page. The PDF has 24 extra pages at the front, so the app adds 24 ([views.js:534](../tools/app/views.js#L534)).

### How it works

| Step | What happens | Where |
|---|---|---|
| 1 | A lesson with a page shows "📖 In the book · p. 291". | [views.js:529](../tools/app/views.js#L529) |
| 2 | The first time, you choose your PDF file. | `bookPickHtml()`, [views.js:577-581](../tools/app/views.js#L577-L581) |
| 3 | The file is saved in this browser, in IndexedDB (database `lus-book`, store `f`, key `pdf`). | `bookIO()`, [views.js:537-556](../tools/app/views.js#L537-L556) |
| 4 | If the browser blocks storage, the file is kept in memory until you close the page. | [views.js:550-554](../tools/app/views.js#L550-L554) |
| 5 | PDF.js 3.11.174 loads from cdnjs, only the first time you open the book. | `pdfjs()`, [views.js:560-568](../tools/app/views.js#L560-L568) |
| 6 | One page is drawn on a canvas, sized to the screen. | `bookRender()`, [views.js:594-615](../tools/app/views.js#L594-L615) |
| 7 | You can go back, go forward, zoom to 2 times, or close. The arrow keys and Escape also work. | [views.js:958-963](../tools/app/views.js#L958-L963) |

You can see the file size, or remove the PDF, in the Me tab ([views.js:628-636](../tools/app/views.js#L628-L636)).

### Privacy

- The PDF is **never uploaded or synced**. The code has no network call that sends it.
- The only network traffic is loading the two PDF.js scripts from cdnjs.
- Cloud sync saves only your progress and your flashcard state, not the book.
- `*.pdf` is in `.gitignore`, so a PDF cannot be committed by mistake.

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
