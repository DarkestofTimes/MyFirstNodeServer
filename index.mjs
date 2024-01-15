import path from "path";
import fs from "fs";
import url from "node:url";
import express from "express";
const app = express();

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/404", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.get("*", (req, res) => {
  res.redirect("/404");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);

/* const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); */

/* const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  let extName = path.extname(filePath);
  let contentType =
    extName === ".mjs"
      ? "text/javascript"
      : extName === ".css"
      ? "text/css"
      : "text/html";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("port:", PORT));
 */
