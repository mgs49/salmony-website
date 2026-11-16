# Proposal: the professional pages and the domains

Prepared 16th November 2026. Everything stated as a fact below was checked that day against the live sites and public DNS; the method is noted where it matters.

## Update, 16th November 2026: what Michael decided

- **The professional site stands on its own**, not as a folder of salmony.co.uk. It is now a separate site in the repository `mgs49/payments-innovation-website` (preview: https://mgs49.github.io/payments-innovation-website/) and will be served directly under payments-innovation.com. This replaces recommendation 1 and 2 and the forwarding table in section 5 as far as payments-innovation.com is concerned: that domain will point at its own site, and paymentsinnovation.consulting will forward to it as today.
- salmony.co.uk keeps a Work page with the tongue-in-cheek CV and links across to the professional site. The old addresses `/work/boards/`, `/work/lectures/`, `/work/publications/` and `/work/media/` redirect there.
- The biography ("Bio Michael Salmony PI") and the boards file ("Boards Salmony") are the authoritative texts for the professional site.
- No e-mail is in use on salmony.co.uk, so nothing has to be preserved there when its DNS moves.
- Only LinkedIn is used; links to X/Twitter and Facebook are removed from both sites.
- Impressum: business name and VAT ID, with address and e-mail to follow. A privacy policy has been added.
- Domains, e-mail continuity and re-hosting are to be organised once the websites are finished.

The rest of this document is the original proposal and is kept for the record.

## 1. Recommendation in short

1. **One source for everything professional: the `/work/` section of the new site.** Profile, Consulting, Boards, Lectures, Publications, Media, Clients and Contact live there and nowhere else. This is already built in the new site.
2. **Retire the GoDaddy Website Builder site** at payments-innovation.com and **forward the domain** to `https://www.salmony.co.uk/work/`. Forward paymentsinnovation.consulting to the same place (it forwards to payments-innovation.com today).
3. **Keep both consulting domains registered.** Your e-mail runs on them (see section 3). Forwarding a domain does not make it free; what you save is the two hosting subscriptions, not the domain renewals.
4. **Re-register mathematicianscookbook.com and forward it to `/cookbook/`**, because the printed book sends readers to that address and it currently leads nowhere.

## 2. What I found: the duplication and where the two sites disagree

The professional content exists twice: on salmony.co.uk (Work, Boards, Lectures, Publications, Media) and on payments-innovation.com (Home, CEO Profile, References, Lectures, Publications, Boards, Announcements, Open Banking, B2B Events). The two have drifted apart:

| Topic | salmony.co.uk | payments-innovation.com | What the new site does |
|---|---|---|---|
| Biography | Long "Curriculum Vitae", partly dated | Shorter, more recent "CEO Profile" | Short profile on `/work/`, long CV kept in full on `/work/cv/` |
| Name and titles | "Prof. h.c. Dr. rer. nat. Michael G. Salmony, M.A. (Cantab.), VIP (Colbert), L.I.V.R., FRSA" | "Dr Michael Salmony FRSA" | Short form as headline, long form on the CV page |
| Children | "two children, one studying in Oxford and HEC Paris (Grand Ecole), the other in Cambridge" | "two millennial children" | Both texts carried over as they are; the CV line is out of date |
| Offices | "offices in Frankfurt (D) and Amsterdam (NL)" | not mentioned | Carried over on the CV page; please confirm or delete |
| LinkedIn reach | "top 5% most viewed profile out of the 200 million members" | "one of the top most viewed profiles" | Both carried over; the 200 million figure is old |
| Focus areas | includes Fraud/Cybercrime | includes Open Banking/PSD2 | Each kept in its own text |
| Teaching | Oxford, Ozyegin, German universities, Gakushuin, University of California | Australia, Turkey, Germany, Oxford | Each kept in its own text |
| Boards | Long descriptive list, older roles in detail | Compact list of about 40 current roles, at least a dozen of which are not on salmony.co.uk (for example Mastercard Latin America & Caribbean, 1871 FinTech Innovation Lab, Digitinary, Regional Hero, NOBO, Sabanci, Swinburne, Cyprus RIF, the two Freeman honours, ICFT, Inderscience, ACIS) | Merged on one page: "Current and recent roles" (from the consulting site) followed by "In more detail" (from salmony.co.uk) |
| Lectures | Complete, 1986 to June 2027 | 20 undated "recent" lectures, all also on salmony.co.uk | salmony.co.uk list is the master |
| Publications | Complete, including the 2026 Springer book | 12 items, the book is missing | salmony.co.uk list is the master |
| Clients / references | none | about 60 client logos and 7 partners | Moved to `/work/clients/` |
| Consulting pitch, geographies, map | none | Home page | Moved to `/work/consulting/` |
| Contact | Page says the form was removed because of spammers | Form with Google reCAPTCHA | LinkedIn button; no e-mail address published (your choice to add one) |

Neither biography mentions the things you now lead with: tokenised money and stablecoins, the EBA Academy, the Springer book as a headline, The Payments Trilogue. I have not added them because they are not on either site; say the word and I will draft an updated profile for your approval.

Other things noticed on payments-innovation.com:

- The footer says "Copyright © 2022".
- The "Privacy Policy" and "Announcements" pages are empty.
- The cookie banner and form notices are in German on an otherwise English site.
- "B2B Events" still advertises a Dubai event as "coming soon" next to programmes dated 2022 and 2023.
- Two client logos carry broken links (Argenta and Huawei each have two addresses run together). Corrected in the new site.
- One client logo (a line-drawn lion) has no name or link. It is on the new clients page with the placeholder description "Client logo"; please tell me who it is.

And on salmony.co.uk:

- The Media page has three captions ("Portrait Michael Salmony", the European Commission hearing, "Salmony at ECB Conference 2017") whose videos no longer appear. The captions are carried over; the videos need re-linking if you still have the addresses.
- Eleven embedded LinkedIn posts are now plain links to the posts. This keeps LinkedIn's tracking off your pages.
- The social link points to twitter.com on one site and x.com on the other. The new site uses x.com.

## 3. The domains as they are today

| Domain | Registered / DNS at | Website | E-mail |
|---|---|---|---|
| salmony.co.uk | Nameservers at SiteGround | WordPress hosted at SiteGround | MX records point to SiteGround's mail filter |
| payments-innovation.com | GoDaddy | GoDaddy Website Builder | Microsoft 365 |
| paymentsinnovation.consulting | GoDaddy | Forwards to payments-innovation.com | Microsoft 365 |
| mathematicianscookbook.com | Not registered. GoDaddy lists it as available | none | none |

Source: public DNS lookups and the sites' own page headers on 16th November 2026. I could not see which company salmony.co.uk is registered with, only where its DNS is run.

## 4. On "only paying for one domain"

I have to disagree with one part of the plan. Making payments-innovation.com and mathematicianscookbook.com point at the new site means you keep paying for those domains; a domain can only point somewhere while you own it. What changes is this:

- **Hosting falls to zero.** The new site is served free by GitHub Pages. You can cancel the SiteGround WordPress hosting and the GoDaddy Website Builder plan once the switch is done.
- **Domain renewals stay**, one per domain. For a .com that is typically in the region of €15 to €25 a year; please check your own renewal invoices, as I cannot see your prices.
- **You cannot drop payments-innovation.com or paymentsinnovation.consulting** without losing the e-mail addresses on them.
- **mathematicianscookbook.com would be a new cost**, not a saving. It is still worth it: the back cover of the 4th edition prints `http://www.mathematicianscookbook.com/` and a QR code, so every copy sold sends its reader to a dead address. If the QR code encodes the same address, re-registering fixes that too. If you prefer not to pay for it, `www.salmony.co.uk/cookbook/` works on its own.

If the real aim is one provider and one bill: move the registrations to a single registrar (GoDaddy already holds two of them) and let GitHub do the hosting.

## 5. How the forwarding would work

GitHub Pages serves one site on one domain. The other domains reach it by forwarding at the registrar, which GoDaddy includes with the domain and which you already use for paymentsinnovation.consulting.

| Visitor types | Ends up at |
|---|---|
| www.salmony.co.uk | the new site |
| payments-innovation.com | www.salmony.co.uk/work/ |
| paymentsinnovation.consulting | www.salmony.co.uk/work/ |
| mathematicianscookbook.com | www.salmony.co.uk/cookbook/ |

The e-mail (MX) records of the consulting domains are not touched by forwarding the website.

### An alternative worth a moment's thought

With forwarding, a client who types payments-innovation.com lands on salmony.co.uk, one click away from the potato cannon and "The criminal exploits I didn't get caught in". That is how your site works today (the Work tab sits beside the stories), so I have kept it. If you would rather keep the business brand at arm's length, the same repository can publish the `/work/` pages a second time directly under payments-innovation.com, with no duplicated content because both are built from the same files. It costs a little more set-up and nothing to run. Tell me if you want it.

## 6. Going live: the order of steps

Nothing here has been done; the old sites are untouched.

1. You review the preview at https://mgs49.github.io/salmony-website/ and tell me what to change.
2. Find where salmony.co.uk is registered. Its DNS is run on SiteGround's nameservers today, and those go away when the hosting is cancelled, so the DNS has to move to the registrar first.
3. Decide about e-mail on salmony.co.uk. If any @salmony.co.uk address is in use, its mail records must be recreated at the new DNS host before the switch. **Please tell me whether you use one.**
4. I add the domain to the site (one small file), you set the DNS records for GitHub Pages, and GitHub issues the HTTPS certificate.
5. Check the live site, then set the forwards for the other domains at GoDaddy.
6. Only then cancel SiteGround hosting and the GoDaddy Website Builder plan. Keep a final WordPress backup beside your existing ones.

## 7. Two points for your adviser rather than for me

- **Legal notice.** A business website run from Germany normally needs an Impressum and a privacy notice. Neither current site has one (the consulting site's privacy page is empty). I am not a lawyer; I can add the pages once you have the wording.
- **Client logos.** They are shown on the consulting site today and I have carried them over unchanged. Whether each client has agreed to be named is something only you know.
