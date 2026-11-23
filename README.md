# salmony-website

The source of **www.salmony.co.uk**: Michael Salmony's personal site and the Mathematician's Cookbook sub-site. It replaces the WordPress site. The professional site (payments-innovation.com) is a separate site in the sister repository `mgs49/payments-innovation-website`.

- Preview (until the domain is switched): https://mgs49.github.io/salmony-website/
- Preview of the professional site: https://mgs49.github.io/payments-innovation-website/
- Report on the remake: [REMAKE_REPORT.md](REMAKE_REPORT.md)
- Proposal on the professional pages and the domains: [docs/PROPOSAL-professional-pages-and-domains.md](docs/PROPOSAL-professional-pages-and-domains.md)
- Project log: kept on Michael's Mac in Documents/homepages/00_Statuslog.md and in the "Websites" project on claude.ai, not here

## Changing the site with Claude

No WordPress, no logins. Every page is a plain text file in this repository. Ask Claude, with GitHub connected, for what you want in ordinary words, for example:

- "In my salmony-website repository, add this to the 2027 lectures: 12th March 2027, keynote at ..."
- "Add the attached photo to the Japan page under Past trips."
- "Change the PayPal price of the cookbook to 21.90 euros, English and German."

Claude edits the file, saves it to GitHub, and the live site updates by itself about a minute later. Every change is recorded and can be undone.

## Where things are

| What | Where |
|---|---|
| Home page | `src/index.njk` |
| The six stories | `src/stories/` |
| Private pages (books, films, travels, Japan ...) | `src/personal/` |
| Genealogy | `src/genealogy.md`, `src/genealogy/` |
| Work page (the tongue-in-cheek CV, with a link to the professional site) | `src/work/index.md` |
| Cookbook texts, English and German | `src/_data/cb.json` |
| Cookbook recipe list | `src/_data/recipes.json` |
| Cookbook pictures | `src/assets/cookbook/` |
| Pictures and documents carried over from WordPress | `src/assets/uploads/` (same year/month folders as before) |
| Menus | `src/_data/nav.json` |
| Old addresses that now redirect | `src/_data/redirects.json` |
| Colours, fonts, layout | `src/assets/css/site.css` (the three colour schemes are at the top) |
| Page frames | `src/_includes/` |

Most pages are Markdown: `## Heading`, `**bold**`, `[link text](address)`, a blank line between paragraphs.

Links to the professional site are written as `https://payments-innovation.com/...`. While that site is still a preview they are pointed at the preview automatically; set `workUrl` in `src/_data/site.json` to `https://payments-innovation.com` when it goes live.

## Look of the personal pages

The personal pages use the "fun" look (an exercise book in his own handwriting), chosen on 23rd November 2026. Details are in CLAUDE.md.

## How it is built

[Eleventy](https://www.11ty.dev/) turns the files in `src/` into the finished site in `_site/`. On every push to `main`, the workflow in `.github/workflows/deploy.yml` builds the site, checks every internal link and picture, and publishes the result to the `gh-pages` branch, which GitHub Pages serves. Do not edit `gh-pages` by hand.

To build on your own computer (optional): `npm install`, then `npm run build` and `npm run check`, or `npm start` for a local preview.

The site sets no cookies, uses no trackers and loads its fonts from this repository. The only content fetched from elsewhere is ten small genealogy pictures that are still loaded from the Internet Archive, as on the old site.

## Switching the real domain to this site

See section 6 of the proposal. In short: add a file `src/CNAME` containing `www.salmony.co.uk`, point the domain's DNS at GitHub Pages, and switch on HTTPS in the repository's Pages settings. The site notices the `CNAME` file and stops using the `/salmony-website/` preview prefix by itself.
