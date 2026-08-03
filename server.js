const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

function resolvePath(requestPath) {
  const decoded = decodeURIComponent(requestPath);
  const normalized = path.normalize(path.join(rootDir, decoded));

  if (!normalized.startsWith(rootDir)) {
    return null;
  }

  return normalized;
}

function serveFile(filePath, res) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Internal server error");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
    });
    res.end(data);
  });
}

http
  .createServer((req, res) => {
    const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    let filePath = resolvePath(requestUrl.pathname);

    if (!filePath) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    if (!fs.existsSync(filePath)) {
      filePath = path.join(rootDir, "index.html");
    }

    serveFile(filePath, res);
  })
  .listen(port, () => {
    console.log(`Jadesalud IPS front running at http://localhost:${port}`);
  });
