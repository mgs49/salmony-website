# Remake report: salmony.co.uk

Date: 16th November 2026. Preview: https://mgs49.github.io/salmony-website/

## Not verified - please check these yourself

- **The two Amazon buttons and the PayPal button on the cookbook pages were not opened in a browser by me.** Amazon and PayPal refuse automatic checks. The Amazon addresses answer (a missing listing would give "not found"), and the PayPal button is the same one that is on your current cookbook page. Please click each once.
- **Not every page was looked at by eye on every screen size.** 51 of the 52 pages (all but the "page not found" page) were tested automatically at desktop and phone width (nothing spills off the screen, no page errors), and I looked at screenshots of 40 pages at desktop width and 6 at phone width. Tablet widths were not looked at.
- **Outside links were tested from a data centre, not from a normal home connection.** 31 could not be reached at all from there and may be fine for real visitors.

## What was built

A new site in the GitHub repository `mgs49/salmony-website`, in three parts that share one design system but each have their own look:

1. **Personal site** (`/`): white page, Caslon type, a red seal as the only decoration. The home page is your name, one line, and the six things you survived as the headline list; the private pages, work and the cookbook follow underneath. The warning notice and the visitor counter joke are still there.
2. **Professional pages** (`/work/`): navy and gold from the PIC slide template, with Jost as the free stand-in for Brandon Grotesque. Profile, full CV, Consulting, Clients, Boards, Lectures, Publications, Media, Contact.
3. **Cookbook** (`/cookbook/`, German at `/cookbook/de/`): the red of the book cover, headings in your own handwriting font, the cover, the "instead of text it uses cartoons" comparison, three sample pages, the complete list of 126 recipes with page numbers, the quotes, and buy buttons.

It is a plain static site: no WordPress, no database, no logins, no cookies, no trackers. Hosting on GitHub Pages is free. You change it by asking Claude (see README.md).

## What was carried over, and how it was checked

| Check | Result |
|---|---|
| Pages and stories on the old site | 40 (34 pages, 6 stories) |
| Carried over | All 40. 33 converted as they were (Boards with the consulting site's list added). Reworked: the two cookbook pages and the old `/cookbook/` page became the new cookbook sub-site; the Work page was split into Profile and CV; the Private index and Contact pages were rewritten; the Potato Cannon page was identical to the explosives story, so its address now redirects there |
| Text compared word for word, old page against new | Done for all 40. Nothing missing except navigation words ("Quick navigation", "Back to top") and the fallback text of audio and video players |
| Pictures and documents | 379 files copied into the site, same year/month folders. 5 very large pictures were scaled down to 1800 pixels |
| Internal links and pictures | 1,464 checked on the finished site, 0 broken. This check now runs automatically before every publish |
| Old addresses | Unchanged, except the three that now redirect: `/mathematicians-cookbook/`, `/kochbuch-fur-mathematiker/`, `/personal/potato-cannon/` |
| Build on GitHub | Passed; the preview is live |

The old sites have not been touched in any way.

## Deliberate changes

- LinkedIn posts that were embedded in the lectures and publications pages (11) are now links to the posts, and the X/Twitter widget script is gone. The quoted text of tweets is kept.
- YouTube videos (3, on the lectures page) use YouTube's no-cookie address.
- Year navigation on the long lists is a single row of years at the top; the repeated "Back to top" links are gone.
- Home page: one new line of text under your name ("Payments by profession. Japan, good food and the occasional potato cannon by inclination."). This is my wording, not yours. Change or delete it as you wish.
- Contact pages: the old page said the form had been removed because of spammers. The new pages point to LinkedIn. No e-mail address is published.
- Boards: the consulting site's list of current roles is now the first half of the Boards page, your detailed list the second half. Some roles therefore appear twice; prune as you see fit.
- Cookbook: "inferiour" corrected to "inferior"; the link to the deluxe hardback at skoobebooks.co.uk was dropped because that website no longer exists; the German page's English paragraph about the author was put into German.
- Geographies list: "Tallin" corrected to "Tallinn" and a doubled "Jordan" removed.

## Things that were already broken on the old site

- 7 pictures no longer exist anywhere and were left out: two on the culture vulture page with no picture file at all (Turner, Helmut Newton), one Helmut Newton picture linked from artnet.de, one from the Seattle Art Museum on the namesakes page, and three LinkedIn/X preview pictures on the lectures page. Captions are kept.
- The Media page has three captions without their videos.
- 141 links to other websites are dead. They are listed page by page in [docs/dead-outside-links.md](docs/dead-outside-links.md) and were carried over unchanged.
- 10 small genealogy pictures on the namesakes page are still loaded from the Internet Archive's copy of your 2004 site, as before. I could not download them from here. If the originals are in your old homepage backups, I can move them into the site.

## The cookbook and what is public

- None of the print PDFs are in the repository or on the site.
- Public: the front cover, three sample pages (Käsefondue p. 45, Oma's Apfelkuchen p. 128, Sushi - Subroutine) at reduced size, and the index of recipe names.
- The recipe list comes from the 4th edition index. One title is written in Chinese in the book; it appears as "Original Peking Duck".
- The printed back cover sends readers to www.mathematicianscookbook.com, which is currently not registered by anyone. See the proposal.

## Decisions I need from you

1. **Journalists page.** `/journalists/` is a list of named journalists with stars against some names. It is public on the old site (not in the menu) and I carried it over the same way, hidden from search engines. It reads like a private working list. Keep, or remove?
2. **Client logos.** One logo (a line-drawn lion) has no name; who is it? And are you content for all of them to be shown?
3. **Profile.** One master biography, updated for tokenised money, the Springer book, the EBA Academy and The Payments Trilogue? I have not written one because it is not on either site today.
4. **Stale consulting material.** The TIF Japan 2022 programme and TIF MENA 2023 outline are linked from the Consulting page because they are on the consulting site today. Keep or drop?
5. **Spelling in your own titles.** "Top 10 Favorite Books", "My Top 10 (Well, 25) Favorite Films" and "The tumor in my head I survived" use American spelling. I left your titles alone. Change to "Favourite" and "tumour"?
6. **Domains and going live.** See [the proposal](docs/PROPOSAL-professional-pages-and-domains.md), in particular whether any @salmony.co.uk e-mail address is in use and whether to re-register mathematicianscookbook.com.
7. **Where the project log should live on your Mac.** `00_Statuslog.md` is in the repository for now.

## Where everything is

- Site source: this repository, branch `main`. Finished pages: branch `gh-pages` (automatic).
- Proposal: `docs/PROPOSAL-professional-pages-and-domains.md`
- Dead outside links: `docs/dead-outside-links.md`
- How to change the site: `README.md`. Standing rules for Claude: `CLAUDE.md`.

**Status: remake complete.** The new site is built, checked and published as a preview. Going live on www.salmony.co.uk waits for your review and the DNS steps in the proposal.
