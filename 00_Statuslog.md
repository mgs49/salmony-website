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

- 17th November 2026 (Claude, checked against public DNS and Microsoft's sign-in service): the two consulting e-mail domains are in two different Microsoft 365 tenants. paymentsinnovation.consulting (PIC) is the ordinary tenant managed by Abtis; payments-innovation.com (PI) is a GoDaddy-run tenant whose "Microsoft 365 E-Mail Essentials" free trial ends 16th June 2027 with auto-renew off. paymentsinnovation.consulting expires 15th/16th September 2027, auto-renew off. mathematicianscookbook.com is not registered. salmony.co.uk is registered at SiteGround until 9th July 2028. See `docs/PLAN-email-domains-hosting.md`.
- 17th November 2026 (Michael, in chat): must not lose access to PIC and PI e-mail through any transition. Microsoft 365 is run by Abtis. A "Nathalie" address is simulated; mail to other addresses (e.g. office@) is rerouted to PIC.
- 17th November 2026 (Michael, in chat): his YouTube channel holds the long European Parliament video and some newer professional videos worth highlighting; it also holds things not wanted on the professional site.
- 17th November 2026 (Michael, in chat): he likes the fun look of the personal site ("I do like that fun look"); no final decision stated yet. Asked for an alternative for the professional site too: "not quite as clean, showing a little bit more of the innovation and payments and fintech aspect".
- 17th November 2026 (Michael, in chat): asked for an alternative private website that is "a bit more fun looking, not quite as clean and professional as the work one". Built as a second look for the personal pages only; he has not yet chosen between the two.
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

0. E-mail first (see `docs/PLAN-email-domains-hosting.md`): Michael switches on auto-renew for paymentsinnovation.consulting and checks the card; Abtis to move payments-innovation.com into the PIC tenant before 16th June 2027 (target January to February 2027), adding DKIM and DMARC. Michael to send the Nathalie/alias document and the SiteGround renewal date.
0. Michael chooses between the clean and the alternative look for the professional site (see `alt.css` and CLAUDE.md in `payments-innovation-website`). The switch must be removed before go-live.
0. Michael chooses between the clean and the fun look for the personal pages (see `src/assets/css/fun.css` and the note in CLAUDE.md). Then remove the look switch and the look not chosen.
1. Michael reviews both previews and answers the open points in REMAKE_REPORT.md (boards wording, CAPS name, book title, client logos to add, the unidentified lion logo, videos to keep or add).
2. Michael plays each video on the Media page once.
3. Go live when he is happy: DNS for salmony.co.uk and payments-innovation.com, `src/CNAME` in each repository, HTTPS, forward paymentsinnovation.consulting, decide on mathematicianscookbook.com, then cancel SiteGround and the GoDaddy Website Builder plan. E-mail on the two consulting domains must keep working throughout.
4. Impressum: add address and e-mail if and when he decides.
5. Optional: copy the ten genealogy pictures from the old homepage backups into the site; prune the 141 dead outside links.
6. Michael to say where this log should be kept on his Mac.

## Log

- 17th November 2026: e-mail, domains and hosting reviewed against Michael's GoDaddy and SiteGround screenshots and public records; plan written in `docs/PLAN-email-domains-hosting.md`. Nothing changed at any provider.
- 17th November 2026: Michael's YouTube channel (@salmony, 38 videos incl. unlisted and private) reviewed. On the professional Media page the European Parliament hearing (1080p on YouTube) and the ECB 2017 talk (720p) now play from YouTube instead of the small files in the repository, which were removed. Added from the channel: interview at Saïd Business School 2024, technology panel at the EPC 20th Anniversary event 2022, fireside chat on Open Banking at the Mastercard LAC Innovation Forum 2021. All YouTube videos on the site (Media, Lectures, Events) now show a still picture and load the player only when play is pressed; privacy policy reworded to match. Not used: the unlisted Trilogue episodes and all family, school and travel videos.
- 17th November 2026: alternative look added to the professional site (navy bands, a ribbon of engraved banknote lines turning into tokens, lectures/publications/announcements as a chain of blocks). Same pages and texts; clean look stays the default; footer link or `?look=alt` switches. Page frames were restructured for this; the clean look was compared pixel by pixel before and after on all 15 pages at desktop and phone width and is unchanged apart from the new footer link.
- 17th November 2026: alternative "fun" look added for the personal pages (school exercise book: squared paper, red margin, headings in his handwriting, potato-cannon drawing on the home page). Same pages and texts; the clean look stays the default; a link in the footer or `?look=fun` switches. Cookbook and professional site unchanged. New on the home page in the fun look only: the drawing with "range = v² / g (roughly)" and the red "6/6" mark, both Claude's additions.
- 16th November 2026 (evening): after Michael's review, professional site split out into its own repository and published as a preview; authoritative biography and boards list applied; announcements, events, Impressum and privacy policy added; seven videos from his work-videos folder converted and added to the Media page; X/Twitter and Facebook links removed; cookbook buy buttons open in a new tab.
- 16th November 2026: old site downloaded (34 pages, 6 stories, media), consulting site downloaded, cookbook folder reviewed. New site built, checked and published as a preview. Proposal and report written.

## Key documents

- `docs/PLAN-email-domains-hosting.md`: e-mail, domains and hosting plan (17th November 2026).
- `REMAKE_REPORT.md`: what was done, what was checked, what is open.
- `docs/PROPOSAL-professional-pages-and-domains.md`: professional pages and domains.
- `docs/dead-outside-links.md`: outside links that no longer work.
- `README.md`: how the site is organised and how to change it.
- `CLAUDE.md`: standing rules for Claude when editing the site.
