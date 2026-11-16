# 00 Status log: salmony.co.uk remake

Single source of truth for this project. Latest first.

## Purpose and goals

- Replace the WordPress site at www.salmony.co.uk with a clean, simple site that Michael can change directly through Claude.
- Give the Mathematician's Cookbook a proper sub-site again.
- End the duplication of the professional pages between salmony.co.uk and payments-innovation.com.
- Reduce the number of providers and bills.

## People

- Michael Salmony: owner, sole decision-maker.
- Claude: builds and maintains the sites through the GitHub repositories `mgs49/salmony-website` (personal site and cookbook) and `mgs49/payments-innovation-website` (professional site).

## Key facts and decisions (latest first)

- 16th November 2026 (Michael, in chat): Impressum to show business name and VAT ID only, "address and e-mail to follow"; he accepts the risk and will change it if anyone complains.
- 16th November 2026 (Michael, in chat): the professional site is to be separate from salmony.co.uk, not a sub-directory. Domains, e-mail continuity and re-hosting to be organised once the websites are finished.
- 16th November 2026 (Michael, in chat): the title string "Prof. h.c. Dr. rer. nat. ... VIP (Colbert), L.I.V.R., FRSA" is tongue in cheek: fine on salmony.co.uk, not wanted on the professional site.
- 16th November 2026 (Michael, attached files): "Bio Michael Salmony PI" is the authoritative biography; "Boards Salmony" (June 2025) records all board positions.
- 16th November 2026 (Michael, in chat): he uses only LinkedIn, not X/Twitter or Facebook. No e-mail is in use on salmony.co.uk.
- 16th November 2026 (Michael, in chat): Amazon and PayPal buttons on the cookbook page work; they are to open in a new page.

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

1. Michael reviews both previews and answers the open points in REMAKE_REPORT.md (boards wording, CAPS name, book title, client logos to add, the unidentified lion logo, videos to keep or add).
2. Michael plays each video on the Media page once.
3. Go live when he is happy: DNS for salmony.co.uk and payments-innovation.com, `src/CNAME` in each repository, HTTPS, forward paymentsinnovation.consulting, decide on mathematicianscookbook.com, then cancel SiteGround and the GoDaddy Website Builder plan. E-mail on the two consulting domains must keep working throughout.
4. Impressum: add address and e-mail if and when he decides.
5. Optional: copy the ten genealogy pictures from the old homepage backups into the site; prune the 141 dead outside links.
6. Michael to say where this log should be kept on his Mac.

## Log

- 16th November 2026 (evening): after Michael's review, professional site split out into its own repository and published as a preview; authoritative biography and boards list applied; announcements, events, Impressum and privacy policy added; seven videos from his work-videos folder converted and added to the Media page; X/Twitter and Facebook links removed; cookbook buy buttons open in a new tab.
- 16th November 2026: old site downloaded (34 pages, 6 stories, media), consulting site downloaded, cookbook folder reviewed. New site built, checked and published as a preview. Proposal and report written.

## Key documents

- `REMAKE_REPORT.md`: what was done, what was checked, what is open.
- `docs/PROPOSAL-professional-pages-and-domains.md`: professional pages and domains.
- `docs/dead-outside-links.md`: outside links that no longer work.
- `README.md`: how the site is organised and how to change it.
- `CLAUDE.md`: standing rules for Claude when editing the site.
