// Finds where every illustration sits in your own PDF of Level Up! and prints data/book/art.json.
// Positions only: no picture leaves your browser, and the repo never holds the book's drawings.
//
// How to run: open the app, add your PDF in Me (📖 Your book), open the browser console,
// paste this whole file and press Enter. Copy the printed JSON into data/book/art.json.
// It reads the PDF the app saved in IndexedDB (lus-book / f / pdf) and uses the app's PDF.js build.
(async () => {
  const PDFJS = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/";
  const load = (src) => new Promise((ok, no) => { const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); });
  if (!window.pdfjsLib) { await load(PDFJS + "pdf.worker.min.js"); await load(PDFJS + "pdf.min.js"); pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS + "pdf.worker.min.js"; }
  const buf = await new Promise((ok, no) => { const r = indexedDB.open("lus-book", 1); r.onerror = () => no(r.error); r.onsuccess = () => { const q = r.result.transaction("f").objectStore("f").get("pdf"); q.onsuccess = () => ok(q.result); q.onerror = () => no(q.error); }; });
  if (!buf) throw new Error("Add your PDF in Me first");
  const doc = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
  const O = pdfjsLib.OPS, name = {}; for (const k in O) name[O[k]] = k;
  const mul = (a, b) => [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]];
  const r3 = (v) => +v.toFixed(3), rows = [];
  let page = null;
  for (let n = 1; n <= doc.numPages; n++) {
    const pg = await doc.getPage(n), vp = pg.getViewport({ scale: 1 }), ol = await pg.getOperatorList();
    if (!page) page = [+vp.width.toFixed(2), +vp.height.toFixed(2)];
    let ctm = [1, 0, 0, 1, 0, 0]; const stack = [];
    ol.fnArray.forEach((f, i) => {
      if (f === O.save) stack.push(ctm);
      else if (f === O.restore) ctm = stack.pop() || ctm;
      else if (f === O.transform) ctm = mul(ctm, ol.argsArray[i]);
      else if (/^paint.*Image/.test(name[f])) {
        // an image fills the unit square under the current transform: its corners give the box on the page
        const pts = [[0, 0], [1, 0], [0, 1], [1, 1]].map(([x, y]) => vp.convertToViewportPoint(ctm[0] * x + ctm[2] * y + ctm[4], ctm[1] * x + ctm[3] * y + ctm[5]));
        const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
        rows.push([n, r3(Math.min(...xs) / vp.width), r3(Math.min(...ys) / vp.height), r3((Math.max(...xs) - Math.min(...xs)) / vp.width), r3((Math.max(...ys) - Math.min(...ys)) / vp.height)]);
      }
    });
    pg.cleanup();
  }
  const about = "Where each illustration sits in the 2010 Wiley PDF of Level Up!: [pdf page, left, top, width, height], as fractions of the page. Positions only: the pictures come from the reader’s own PDF, on their device.";
  console.log(`{\n  "about": ${JSON.stringify(about)},\n  "page": [${page.join(", ")}],\n  "art": [\n${rows.map((r) => "    [" + r.join(", ") + "]").join(",\n")}\n  ]\n}\n`);
  console.log(rows.length + " illustrations on " + new Set(rows.map((r) => r[0])).size + " pages");
})();
