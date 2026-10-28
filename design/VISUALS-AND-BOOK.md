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

The build reads `data/figs/doc-ladder.svg` and puts the SVG straight into the page ([build.mjs:127-133](../tools/build.mjs#L127-L133)).
The diagrams are inline, so the app never downloads them separately.
The lesson card shows it inside `<figure class="lfig">` ([views.js:511](../tools/app/views.js#L511)).

### How they work in light and dark mode

The SVG files use CSS classes instead of fixed colours. The colours come from the app's theme tokens ([app.css:561-579](../tools/app/app.css#L561-L579)).

| Class | Meaning |
|---|---|
| `t-ink`, `t-acc`, `t-hot`, `t-go`, `t-gold` | Bold text in ink, accent, red, green or gold |
| `t-sm` | Small text (10.5 px) |
| `s-ink`, `s-line`, `s-acc`, `s-hot` | Line colours and widths |
| `f-acc`, `f-gold`, `f-hot`, `f-go`, `f-card`, `f-line` | Fill colours |
| `f-acc-soft`, `f-gold-soft`, `f-hot-soft`, `f-go-soft` | Soft fill colours |

The tokens are defined once for light mode ([app.css:3-37](../tools/app/app.css#L3-L37)) and again for dark mode ([app.css:38-57](../tools/app/app.css#L38-L57)).
So one SVG file works in both themes. Only two places use a fixed colour: white text on a filled shape in `story-beats.svg` and `telegraph.svg`.

Every SVG also has `role="img"`, an `aria-label` and a `<title>`, so screen readers can describe it.

### Checks for overflowing and overlapping labels

The playbook says each diagram was checked on a phone, in light and dark mode, for labels that overflow or overlap ([LESSONS-PLAYBOOK.md:89-91](../tools/LESSONS-PLAYBOOK.md#L89-L91)).
The script used for that check was **not saved in the repo**. The build only checks that the file exists.
If you add diagrams, check them by eye, or write a small browser script that compares the boxes of the `<text>` labels.

### Why the book's own drawings were not copied

The book is full of Scott Rogers' drawings. They were deliberately **not** copied:

- They are under copyright.
- The GitHub repo is public.

The playbook records this ([LESSONS-PLAYBOOK.md:89](../tools/LESSONS-PLAYBOOK.md#L89)). The app footer also tells the learner to get the book for its drawings ([views.js:882](../tools/app/views.js#L882)).
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
Each lesson was matched against the pages of its own chapter. Weak matches were skipped ([LESSONS-PLAYBOOK.md:90](../tools/LESSONS-PLAYBOOK.md#L90)).
The matching script is **not in the repo**.

The data stores the printed page. The PDF has 24 extra pages at the front, so the app adds 24 ([views.js:530](../tools/app/views.js#L530)).

### How it works

| Step | What happens | Where |
|---|---|---|
| 1 | A lesson with a page shows "📖 In the book · p. 291". | [views.js:525](../tools/app/views.js#L525) |
| 2 | The first time, you choose your PDF file. | `bookPickHtml()`, [views.js:573-577](../tools/app/views.js#L573-L577) |
| 3 | The file is saved in this browser, in IndexedDB (database `lus-book`, store `f`, key `pdf`). | `bookIO()`, [views.js:533-552](../tools/app/views.js#L533-L552) |
| 4 | If the browser blocks storage, the file is kept in memory until you close the page. | [views.js:546-550](../tools/app/views.js#L546-L550) |
| 5 | PDF.js 3.11.174 loads from cdnjs, only the first time you open the book. | `pdfjs()`, [views.js:556-564](../tools/app/views.js#L556-L564) |
| 6 | One page is drawn on a canvas, sized to the screen. | `bookRender()`, [views.js:590-611](../tools/app/views.js#L590-L611) |
| 7 | You can go back, go forward, zoom to 2 times, or close. The arrow keys and Escape also work. | [views.js:954-959](../tools/app/views.js#L954-L959) |

You can see the file size, or remove the PDF, in the Me tab ([views.js:624-632](../tools/app/views.js#L624-L632)).

### Privacy

- The PDF is **never uploaded or synced**. The code has no network call that sends it.
- The only network traffic is loading the two PDF.js scripts from cdnjs.
- Cloud sync saves only your progress and your flashcard state, not the book.
- `*.pdf` is in `.gitignore`, so a PDF cannot be committed by mistake.

## Known limits

- **Diagram font sizes.** The rule `.lfig text { font-size: 12px }` ([app.css:564](../tools/app/app.css#L564)) is CSS, and CSS wins over `font-size="..."` attributes inside an SVG.
  So text set to 20 px or 28 px inside some diagrams (like `weenie.svg`) probably shows at 12 px. The same goes for the `fill="#fff"` text.
  This was found by reading the code and has not been checked in a browser.
- **Book page range.** "←" can go below printed page 1, so the counter can show 0 or less. "→" has no end; past the last page it shows "That page isn't in this PDF."
- **Start over** does not remove the saved PDF. Remove it in the Me tab.
- **Missing scripts.** The label-overlap check and the TF-IDF page matcher are not in the repo.

## How to reuse this

1. Draw your own simple diagrams. Do not copy pictures from the source.
2. Use theme classes in the SVG, not fixed colours.
3. Keep one diagram per idea, and put it on the card that explains it.
4. To show the original, let each user open their own copy on their own device.
5. Save the scripts you use for checks and matching, so the work can be repeated.
