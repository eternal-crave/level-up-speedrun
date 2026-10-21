// Minimal static server for previewing the app: node tools/serve.mjs [port] [app|docs]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIR = process.argv[3] === "docs" ? "docs" : "app";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", DIR);
const port = +process.argv[2] || 5177;
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json" };
http.createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const file = path.join(ROOT, url === "/" ? (DIR === "docs" ? "index.html" : "level-up-speedrun.html") : url);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end("not found"); return; }
  res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream", "cache-control": "no-store" });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`serving ${ROOT} on http://localhost:${port}`));
