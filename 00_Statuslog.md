# 00 Status log: salmony.co.uk remake

Single source of truth for this project. Latest first.

## Purpose and goals

- Replace the WordPress site at www.salmony.co.uk with a clean, simple site that Michael can change directly through Claude.
- Give the Mathematician's Cookbook a proper sub-site again.
- End the duplication of the professional pages between salmony.co.uk and payments-innovation.com.
- Reduce the number of providers and bills.

## People

- Michael Salmony: owner, sole decision-maker.
- Claude: builds and maintains the site through the GitHub repository `mgs49/salmony-website`.

## Key facts and decisions (latest first)

- 16th November 2026 (Michael, in chat): the large PDFs of the book must not go on the web; people should buy it.
- 16th November 2026 (Michael, in chat): the result need not be WordPress; he prefers to change the sites directly using Claude.
- 16th November 2026 (Claude, checked against public DNS): salmony.co.uk DNS and hosting are at SiteGround; payments-innovation.com and paymentsinnovation.consulting are at GoDaddy with e-mail on Microsoft 365; mathematicianscookbook.com is not registered and is available.
- 16th November 2026 (Claude): site built as a static Eleventy site, published free on GitHub Pages, preview at https://mgs49.github.io/salmony-website/. Professional pages consolidated under `/work/`, cookbook under `/cookbook/` (English) and `/cookbook/de/` (German).

## Costs

- New hosting: none (GitHub Pages, public repository).
- Domains: renewals continue for each domain kept. Michael to check his invoices; no prices were verified.
- Possible savings once live: SiteGround WordPress hosting and the GoDaddy Website Builder plan.
- Possible new cost: re-registering mathematicianscookbook.com.

## Open items and next steps

1. Michael reviews the preview and answers the seven questions in REMAKE_REPORT.md.
2. Michael clicks the Amazon and PayPal buttons on the cookbook page once to confirm they work.
3. Decide on the domain plan in docs/PROPOSAL-professional-pages-and-domains.md.
4. Go live: DNS move for salmony.co.uk, `src/CNAME`, HTTPS, then forwards for the other domains, then cancel the old hosting.
5. Optional: copy the ten genealogy pictures from the old homepage backups into the site; prune the 141 dead outside links.
6. Michael to say where this log should be kept on his Mac.

## Log

- 16th November 2026: old site downloaded (34 pages, 6 stories, media), consulting site downloaded, cookbook folder reviewed. New site built, checked and published as a preview. Proposal and report written.

## Key documents

- `REMAKE_REPORT.md`: what was done, what was checked, what is open.
- `docs/PROPOSAL-professional-pages-and-domains.md`: professional pages and domains.
- `docs/dead-outside-links.md`: outside links that no longer work.
- `README.md`: how the site is organised and how to change it.
- `CLAUDE.md`: standing rules for Claude when editing the site.
