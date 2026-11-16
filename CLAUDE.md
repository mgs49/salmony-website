# Notes for Claude when working on this repository

This is Michael Salmony's personal website (www.salmony.co.uk) with the cookbook sub-site. He edits it by asking Claude; he does not write code. Read README.md for the layout of the repository. His professional site is separate: repository `mgs49/payments-innovation-website`. Boards, lectures, publications, media and clients live only there; do not recreate them here.

## House rules

- British English spelling and grammar. No Americanisms.
- Dates in prose as "7th April 2027" (ordinal day, month name). The lectures and publications lists keep their existing compact style (`**15-16.6.27**`); follow the surrounding entries.
- Never use the em dash character in new text; use a hyphen.
- Do not rewrite his texts for style. The humour, odd spellings in recipe names and old-fashioned turns of phrase are deliberate. Fix only what he asks for, and plain typos if he agrees.
- Never state a specific number of years of experience in a biography; say "decades".
- The Work page here carries the deliberately tongue-in-cheek title string ("Prof. h.c. Dr. rer. nat. ... VIP (Colbert), L.I.V.R., FRSA"). It is fine here and must never appear on the professional site.
- Only LinkedIn. He does not use X, Twitter or Facebook; do not add links to them.
- The cookbook is for sale. Never add the book's print PDFs, or more sample pages than the three already shown, without his explicit say-so.
- Do not publish an e-mail address, phone number or home address on the site unless he asks.
- Do not add trackers, analytics, cookie banners, external fonts or embedded social-media widgets. Link to LinkedIn or X posts instead of embedding them.

## Working method

- Pages are Markdown or Nunjucks in `src/`. Shared frames are in `src/_includes/`, data in `src/_data/`.
- Internal links and picture addresses start with `/` (for example `/work/lectures/`, `/assets/uploads/2026/05/file.jpg`). Eleventy adds the `/salmony-website/` preview prefix while there is no `src/CNAME`; never write that prefix by hand.
- New pictures go in `src/assets/uploads/YYYY/MM/`. Resize photographs to at most 1800 pixels on the long side before adding them.
- After any change run `npm run build` and `npm run check`; both must pass. Look at the changed page (the built file in `_site/`) before saying it is done.
- Commit to `main` with a plain-English message and push. Publishing is automatic. Never push to `gh-pages` yourself except to repair a failed publish.
- When an old address changes, add a line to `src/_data/redirects.json` so existing links keep working.
- Keep `00_Statuslog.md` up to date: latest entry first, with the date.

## Two looks for the personal pages (temporary)

- The personal pages have two looks while he decides: the clean one (`site.css`, the default) and the fun one (`fun.css`, an exercise book in his handwriting). Only the look differs; pages and texts are shared. The cookbook has its own look and is not affected.
- A link in the footer switches, as does adding `?look=fun` or `?look=clean` to any address. The choice is kept in the visitor's browser only (no cookie, nothing sent anywhere).
- Parts with `class="fun-only"` (the potato-cannon drawing in `src/_includes/potato.svg` and the "6/6" mark on the home page) show in the fun look only.
- When changing the design of a personal page, check both looks: view the page with and without `?look=fun`.
- Once he has chosen, remove the other look and the switch (the two blocks marked in `src/_includes/base.njk`).

