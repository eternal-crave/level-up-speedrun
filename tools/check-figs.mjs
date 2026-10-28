// Writes app/_fig-check.html: every diagram in data/figs, styled by the real app.css, plus a script that measures
// each <text> label and reports labels that spill outside the drawing or overlap another label.
// Usage: node tools/check-figs.mjs, then node tools/serve.mjs 5177 app and open http://localhost:5177/_fig-check.html
// The page title becomes "fig-check: N issues"; window.FIGCHECK holds the details; window.figCheck() measures again. app/_*.html is git-ignored.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rd = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const figs = fs.readdirSync(path.join(ROOT, "data", "figs")).filter((f) => f.endsWith(".svg")).sort();
const cards = figs.map((f) => `<section class="fc" data-name="${f.slice(0, -4)}"><h3>${f.slice(0, -4)}</h3><figure class="lfig">${rd("data/figs/" + f).replace(/<\?xml[^>]*>\s*/, "").trim()}</figure><pre></pre></section>`).join("\n");

// in viewBox units: a label may poke out by EDGE, and two labels count as overlapping when they share more than
// MIN_W wide and a third of the shorter label's height (text boxes include line spacing, so touching lines are fine)
const check = String.raw`
const EDGE = 0.5, MIN_W = 2;
window.figCheck = () => {
const issues = [];
for (const sec of document.querySelectorAll(".fc")) {
  const svg = sec.querySelector("svg"), vb = svg.viewBox.baseVal, m = svg.getScreenCTM(), k = m.a;
  const pt = (x, y) => new DOMPoint(x, y).matrixTransform(m);
  const a = pt(vb.x, vb.y), b = pt(vb.x + vb.width, vb.y + vb.height);
  const unit = (r) => ({ l: (r.left - a.x) / k, t: (r.top - a.y) / k, r: (r.right - a.x) / k, b: (r.bottom - a.y) / k });
  const W = vb.width, H = vb.height, found = [];
  const texts = [...svg.querySelectorAll("text")].filter((t) => t.textContent.trim()).map((t) => ({ s: t.textContent.trim(), ...unit(t.getBoundingClientRect()) }));
  for (const t of texts) {
    const out = [t.l < -EDGE && "left", t.t < -EDGE && "top", t.r > W + EDGE && "right", t.b > H + EDGE && "bottom"].filter(Boolean);
    if (out.length) found.push('spills ' + out.join("+") + ': "' + t.s + '"');
  }
  for (let i = 0; i < texts.length; i++) for (let j = i + 1; j < texts.length; j++) {
    const p = texts[i], q = texts[j];
    const w = Math.min(p.r, q.r) - Math.max(p.l, q.l), h = Math.min(p.b, q.b) - Math.max(p.t, q.t);
    if (w > MIN_W && h > Math.min(p.b - p.t, q.b - q.t) / 3) found.push('overlap: "' + p.s + '" and "' + q.s + '"');
  }
  sec.querySelector("pre").textContent = found.length ? found.join("\n") : "ok";
  sec.classList.toggle("bad", found.length > 0);
  for (const f of found) issues.push(sec.dataset.name + ": " + f);
}
window.FIGCHECK = issues;
document.title = "fig-check: " + issues.length + " issues";
document.getElementById("sum").textContent = figs + " diagrams, " + issues.length + " issues";
return issues;
};
window.figCheck();`;

const page = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>fig-check</title><style>${rd("tools/app/app.css")}
body { padding: 12px; } .fcs { display: grid; grid-template-columns: repeat(auto-fill, 317px); gap: 14px; }
.fc h3 { margin: 0 0 4px; font-size: 14px; } .fc pre { margin: 4px 0 0; font-size: 11px; white-space: pre-wrap; color: var(--go); }
.fc.bad pre { color: var(--hot); }</style></head>
<body><p><b id="sum">measuring…</b> · <button onclick="document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'">Switch light and dark</button></p>
<div class="fcs">${cards}</div>
<script>const figs = ${figs.length}; document.fonts.ready.then(() => {${check}});</script></body></html>
`;
fs.writeFileSync(path.join(ROOT, "app", "_fig-check.html"), page);
console.log(`wrote app/_fig-check.html with ${figs.length} diagrams`);
