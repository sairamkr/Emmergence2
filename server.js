// A tiny static server for Squish, no dependencies: node server.js  (or npm start)
const http = require("http"), fs = require("fs"), path = require("path");
const PORT = process.env.PORT || 3000, ROOT = __dirname;
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".json": "application/json", ".md": "text/markdown" };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  const file = path.join(ROOT, path.normalize(p).replace(/^(\.\.[\/\\])+/, ""));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end("Not found"); }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, "0.0.0.0", () => console.log(`Squish is running at http://localhost:${PORT}`));
