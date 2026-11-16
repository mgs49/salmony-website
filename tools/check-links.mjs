// Checks the built site (_site) for broken internal links and missing images.
// Run with: npm run build && npm run check
import fs from "node:fs";
import path from "node:path";

const root = "_site";
const prefix = (process.env.PATH_PREFIX || (fs.existsSync("src/CNAME") ? "/" : "/salmony-website/")).replace(/\/$/, "");
const pages = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith(".html")) pages.push(p);
  }
})(root);

const ids = new Map();
const idsOf = (file) => {
  if (!ids.has(file)) {
    const html = fs.readFileSync(file, "utf8");
    ids.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return ids.get(file);
};

let problems = 0, checked = 0;
for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  for (const m of html.matchAll(/\s(?:href|src|poster)="([^"]+)"/g)) {
    let url = m[1].replace(/&amp;/g, "&");
    if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) continue;
    checked++;
    let [target, hash] = url.split("#");
    let file = page;
    if (target) {
      if (!target.startsWith("/")) target = path.posix.join("/", path.relative(root, path.dirname(page)), target);
      else if (prefix && target.startsWith(prefix)) target = target.slice(prefix.length) || "/";
      else if (prefix) { console.log(`${page}: link without site prefix: ${url}`); problems++; continue; }
      file = path.join(root, decodeURIComponent(target.split("?")[0]));
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
      if (!fs.existsSync(file)) { console.log(`${page}: missing ${url}`); problems++; continue; }
    }
    if (hash && file.endsWith(".html") && !idsOf(file).has(decodeURIComponent(hash))) {
      console.log(`${page}: no anchor #${hash} in ${path.relative(root, file)}`); problems++;
    }
  }
}
console.log(`${pages.length} pages, ${checked} internal links and files checked, ${problems} problems`);
process.exit(problems ? 1 : 0);
