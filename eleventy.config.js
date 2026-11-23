import fs from "node:fs";
import markdownIt from "markdown-it";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

// The site is served from https://www.salmony.co.uk/ once the file src/CNAME exists.
// Until then GitHub Pages serves it from https://mgs49.github.io/salmony-website/,
// so every link needs that folder in front. Nothing else has to change when the domain moves.
const hasCustomDomain = fs.existsSync("src/CNAME");
const pathPrefix = process.env.PATH_PREFIX || (hasCustomDomain ? "/" : "/salmony-website/");
const site = JSON.parse(fs.readFileSync("src/_data/site.json", "utf8"));

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  const md = markdownIt({ html: true, linkify: false, typographer: false, breaks: false });
  // A heading that is just a year ("## 2026") gets an id (#y2026) so the year links
  // at the top of the lectures and publications pages can jump to it.
  const headingOpen = md.renderer.rules.heading_open || ((t, i, o, e, self) => self.renderToken(t, i, o));
  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const text = (tokens[idx + 1] && tokens[idx + 1].content || "").trim();
    if (/^(19|20)\d\d$/.test(text)) {
      tokens[idx].attrSet("id", "y" + text);
      tokens[idx].attrSet("class", "year");
    }
    return headingOpen(tokens, idx, options, env, self);
  };
  eleventyConfig.setLibrary("md", md);

  // The six "things I survived" stories, in the order given in src/_data/site.json
  eleventyConfig.addCollection("stories", (api) =>
    api.getFilteredByTag("story").sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  // Pages always link to the professional site by its real address, https://payments-innovation.com/.
  // While that site is still a preview, the links are pointed at the preview instead
  // (set "workUrl" in src/_data/site.json to the real address at go-live).
  eleventyConfig.addTransform("work-site-links", function (content) {
    if ((this.page.outputPath || "").endsWith(".html") && site.workUrl !== "https://payments-innovation.com") {
      return content.replaceAll("https://payments-innovation.com/", site.workUrl + "/");
    }
    return content;
  });


  // External links open in a new window (Michael's rule, 23rd November 2026): any link to
  // another site gets target="_blank" rel="noopener". Links within this site are unchanged.
  const OWN = ["https://www.salmony.co.uk", "https://salmony.co.uk", "http://www.salmony.co.uk", "http://salmony.co.uk", "https://mgs49.github.io/salmony-website"];
  eleventyConfig.addTransform("external-links-new-window", function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) return content;
    return content.replace(/<a\s([^>]*?)href="(https?:\/\/[^"]+)"([^>]*)>/gi, (tag, before, url, after) => {
      if (/\btarget=/i.test(tag)) return tag;
      if (OWN.some((own) => url.startsWith(own))) return tag;
      let attrs = before + 'href="' + url + '"' + after;
      if (/\brel="/i.test(attrs)) attrs = attrs.replace(/\brel="([^"]*)"/i, (m, v) => 'rel="' + (/noopener/.test(v) ? v : v + " noopener") + '"');
      else attrs += ' rel="noopener"';
      return "<a " + attrs + ' target="_blank">';
    });
  });

  eleventyConfig.addFilter("startsWith", (value, prefix) => String(value || "").startsWith(prefix));
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  return {
    pathPrefix,
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
}
