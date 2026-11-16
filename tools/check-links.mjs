// Checks the built site (_site) for broken internal links and missing images.
// Run with: npm run build && npm run check
import fs from "node:fs";
import path from "node:path";

const root = "_site";
const prefix = fs.existsSync("src/CNAME") ? "/" : (process.env.PATH_PREFIX || "/salmony-website/");
const pages = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith(".html")) pages.push(p);
  }
})(root);

const idsOf = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const cache = new Map();
let problems = 0;
for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  const refs = [...html.matchAll(/\s(?:href|src|poster)="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
  for (const ref of refs) {
    if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(ref)) continue;
    let [target, frag] = ref.split("#");
    let file = page;
    if (target) {
      if (!target.startsWith(prefix)) {
        if (target.startsWith("/")) { console.log(`${page}: link outside the site folder: ${ref}`); problems++; continue; }
        target = path.posix.join("/", path.relative(root, path.dirname(page)), target);
      } else target = "/" + target.slice(prefix.length);
      file = path.join(root, decodeURIComponent(target));
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
      if (!fs.existsSync(file)) { console.log(`${page}: missing ${ref}`); problems++; continue; }
    }
    if (frag && file.endsWith(".html")) {
      if (!cache.has(file)) cache.set(file, idsOf(fs.readFileSync(file, "utf8")));
      if (!cache.get(file).has(decodeURIComponent(frag))) { console.log(`${page}: no anchor #${frag} in ${file}`); problems++; }
    }
  }
}
console.log(`${pages.length} pages checked, ${problems} problem(s).`);
process.exit(problems ? 1 : 0);
