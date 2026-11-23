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
- Do not publish an e-mail address, phone number or home address on the site unless he asks. Exception he asked for (23rd November 2026): the Contact page shows hello@salmony.co.uk (Cloudflare Email Routing, forwards to his Gmail), assembled by a small script so it is not in the page source. Never show the Gmail address itself.
- He does not want his age obvious at first glance: no dates in the CV tables on the school page; jokes that hint at his age may stay.
- Do not add trackers, analytics, cookie banners, external fonts or embedded social-media widgets. Link to LinkedIn or X posts instead of embedding them.

## Working method

- Pages are Markdown or Nunjucks in `src/`. Shared frames are in `src/_includes/`, data in `src/_data/`.
- Internal links and picture addresses start with `/` (for example `/work/lectures/`, `/assets/uploads/2026/05/file.jpg`). Eleventy adds the `/salmony-website/` preview prefix while there is no `src/CNAME`; never write that prefix by hand.
- New pictures go in `src/assets/uploads/YYYY/MM/`. Resize photographs to at most 1800 pixels on the long side before adding them.
- After any change run `npm run build` and `npm run check`; both must pass. Look at the changed page (the built file in `_site/`) before saying it is done.
- Commit to `main` with a plain-English message and push. Publishing is automatic. Never push to `gh-pages` yourself except to repair a failed publish.
- When an old address changes, add a line to `src/_data/redirects.json` so existing links keep working.
- Keep `00_Statuslog.md` up to date: latest entry first, with the date.

## Look of the personal pages

- Michael chose the "fun" look on 23rd November 2026 (an exercise book in his handwriting). It is now the only look: `fun.css` sits on top of `site.css`, and `base.njk` puts `class="fun"` on every personal page. The cookbook has its own look and is not affected.
- Parts with `class="fun-only"` (the potato-cannon drawing in `src/_includes/potato.svg` and the "6/6" mark on the home page) show on the personal pages.
- The home page plays the applause from the old site (`/assets/uploads/2019/01/applause.mp3`). Browsers often block sound until the visitor clicks or presses a key; the page then plays it at the first touch.
- LinkedIn is linked from the Work and Contact pages only, not from the footer (his decision, 23rd November 2026).
