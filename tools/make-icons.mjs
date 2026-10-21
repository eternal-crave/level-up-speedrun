// Draws the app icon (two "level up" chevrons on graph paper) into tools/site/ as PNGs + SVG.
// No dependencies: a tiny rasterizer with 4x4 supersampling and a minimal PNG encoder.
// Usage: node tools/make-icons.mjs   (build.mjs copies tools/site/* into docs/)
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";

const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "site");
fs.mkdirSync(OUT, { recursive: true });

// Design in a 512-unit square
const BG = [0x2f, 0x5b, 0xea], SHADOW = [0x17, 0x21, 0x31], WHITE = [255, 255, 255], GOLD = [0xff, 0xd7, 0x6a];
const STROKE = 58, SHADOW_DY = 12;
const chevron = (y) => [[146, y + 96], [256, y], [366, y + 96]];
const LAYERS = [ // painted in order
  [chevron(196 + SHADOW_DY), SHADOW], [chevron(196), WHITE],
  [chevron(306 + SHADOW_DY), SHADOW], [chevron(306), GOLD],
];

function segDist(px, py, [ax, ay], [bx, by]) {
  const dx = bx - ax, dy = by - ay;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(px - ax - t * dx, py - ay - t * dy);
}
function sample(x, y) { // x, y in design units -> rgb
  let c = BG;
  if (x % 32 < 2 || y % 32 < 2) c = c.map((v) => v + (255 - v) * 0.1); // faint grid
  for (const [pts, col] of LAYERS) if (Math.min(segDist(x, y, pts[0], pts[1]), segDist(x, y, pts[1], pts[2])) <= STROKE / 2) c = col;
  return c;
}
function render(size) {
  const SS = 4, k = 512 / size, rows = [];
  for (let py = 0; py < size; py++) {
    const row = Buffer.alloc(1 + size * 3); // filter byte 0 + RGB
    for (let px = 0; px < size; px++) {
      let r = 0, g = 0, b = 0;
      for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) {
        const [cr, cg, cb] = sample((px + (sx + 0.5) / SS) * k, (py + (sy + 0.5) / SS) * k);
        r += cr; g += cg; b += cb;
      }
      const n = SS * SS;
      row[1 + px * 3] = Math.round(r / n); row[2 + px * 3] = Math.round(g / n); row[3 + px * 3] = Math.round(b / n);
    }
    rows.push(row);
  }
  return png(size, Buffer.concat(rows));
}

const CRC = new Int32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c; });
const crc32 = (buf) => { let c = -1; for (const b of buf) c = CRC[(c ^ b) & 0xff] ^ (c >>> 8); return (c ^ -1) >>> 0; };
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function png(size, raw) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 2; // 8-bit RGB
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", ihdr), chunk("IDAT", zlib.deflateSync(raw, { level: 9 })), chunk("IEND", Buffer.alloc(0))]);
}

for (const [name, size] of [["icon-512.png", 512], ["icon-192.png", 192], ["apple-touch-icon.png", 180]]) {
  fs.writeFileSync(path.join(OUT, name), render(size));
}
const hex = (c) => "#" + c.map((v) => v.toString(16).padStart(2, "0")).join("");
const poly = (pts) => pts.map((p) => p.join(",")).join(" ");
fs.writeFileSync(path.join(OUT, "icon.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" fill="${hex(BG)}"/>${LAYERS.map(([pts, col]) => `<polyline points="${poly(pts)}" fill="none" stroke="${hex(col)}" stroke-width="${STROKE}" stroke-linecap="round" stroke-linejoin="round"/>`).join("")}</svg>\n`);
console.log("icons written to", OUT);
