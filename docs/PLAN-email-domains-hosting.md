# Plan: e-mail, domains and hosting

Prepared 17th November 2026 from public DNS, the Microsoft sign-in service and Michael's screenshots of his GoDaddy and SiteGround accounts. Nothing has been changed anywhere.

## 1. What is actually running today

| Domain | Registered at | Expires | Auto-renew | DNS run by | Website | E-mail |
|---|---|---|---|---|---|---|
| paymentsinnovation.consulting | GoDaddy | 15th/16th September 2027 | **Off** | GoDaddy | GoDaddy forwarding to payments-innovation.com | Microsoft 365, ordinary tenant ("Payments Innovation Consulting"), looked after by Abtis |
| payments-innovation.com | GoDaddy | 21st February 2032 | Off | GoDaddy | GoDaddy Website Builder ("Websites + Marketing Basic", paid to 16th June 2028) | Microsoft 365 **in a separate tenant run by GoDaddy** (sign-in is redirected to GoDaddy; "Microsoft 365 E-Mail Essentials - free trial", ends **16th June 2027**) |
| salmony.co.uk | SiteGround (Tucows) | 9th July 2028 | not shown | SiteGround | WordPress at SiteGround | none in use (records point at SiteGround's mail filter) |
| mathematicianscookbook.com | **not registered** (registry has no record) | - | - | - | SiteGround still lists a site for it, unreachable | none |

SiteGround hosting: GrowBig plan, expires **26th February 2027**; renewal offered at £479.76 for 24 months (£19.99 a month), or £23.99 a month on 12 months, ex. VAT (Michael's screenshot, 17th November 2026). The address michaels590.sg-host.com is SiteGround's temporary address for one of the sites and disappears with the plan.

## 2. The finding that matters

The two consulting e-mail domains live in **two different Microsoft 365 tenants**:

- **PIC** (paymentsinnovation.consulting) is a normal tenant, the one Abtis manages and the one Claude's Microsoft 365 connection uses.
- **PI** (payments-innovation.com) is a GoDaddy-provisioned tenant. Its subscription in the GoDaddy account is a free trial set to end on 16th June 2027, with auto-renew off.

If nothing is done, mail to @payments-innovation.com is likely to stop working when that subscription ends, whatever Abtis does on the PIC side. Separately, paymentsinnovation.consulting itself expires in September 2027 with auto-renew off; if it lapses, PIC mail stops too.

## 3. Recommended end state

- **E-mail:** one Microsoft 365 tenant, the Abtis one. payments-innovation.com is added to it, and salmony@payments-innovation.com (plus any catch-all or other addresses in use) becomes an alias of the PIC mailbox, or a shared mailbox if it must stay separate. No extra licence expected for an alias. GoDaddy's Microsoft 365 is then cancelled.
- **Not Google Workspace.** It would be a third mail system and an extra monthly cost per user, and would move him off the tenant Abtis already runs well. It solves nothing the step above does not.
- **Websites:** both sites on GitHub Pages (free; published sites up to 1 GB, soft limit 100 GB traffic a month; the professional site is about 130 MB today).
- **Domains and DNS:** decided direction (17th November 2026): move all four domains to Cloudflare, which sells at cost, runs the DNS free and handles .com, .consulting and .co.uk. A domain registered there must use Cloudflare's DNS, so every existing record (including the mail records) is copied across before the switch.
- paymentsinnovation.consulting forwards to payments-innovation.com; mathematicianscookbook.com is re-registered and forwards to salmony.co.uk/cookbook/.
- Cancelled: SiteGround hosting, GoDaddy Website Builder, GoDaddy Microsoft 365.

## 4. Order of work

**Hard deadline: 26th February 2027.** SiteGround hosting ends then, and with it the current salmony.co.uk website and its DNS. Do not renew it. salmony.co.uk carries no e-mail, so it can move first with no e-mail risk.


1. **Now:** switch on auto-renew for paymentsinnovation.consulting at GoDaddy and check the card on file is valid (or transfer the domain in step 6, which also renews it).
2. **Now:** brief Abtis. Ask them to bring payments-innovation.com into the PIC tenant: export the PI mailbox first, have GoDaddy release (defederate) the domain from its tenant, add it to the Abtis tenant, attach the addresses, then switch the MX, SPF and autodiscover records. Target: January to February 2027, well before 16th June 2027. Ask them to add DKIM and DMARC for both domains at the same time (neither has them today).
3. Michael chooses the looks for both sites; the look switches are removed.
4. Websites go live on GitHub Pages: only the web records (A and www) change; mail records are not touched.
5. Check both live sites; set the forward for paymentsinnovation.consulting.
6. Move DNS to the chosen provider and transfer salmony.co.uk and paymentsinnovation.consulting. payments-innovation.com can keep its GoDaddy registration (prepaid to 2032) with only its DNS moved.
7. Register mathematicianscookbook.com and forward it.
8. Cancel SiteGround (before its next renewal, after a final WordPress backup) and the GoDaddy Website Builder.

## 5. Costs

- Hosting after the move: none (GitHub Pages).
- Cloudflare prices as published by third-party price trackers, November 2026 (not yet confirmed in Cloudflare's own checkout): .com about $10.46 a year, .consulting about $42.20 a year; .co.uk not found, Nominet's wholesale is low, estimate a few pounds. Transferring a .com or .consulting costs one year's renewal and adds that year; a .co.uk transfer is free and adds no year.
- Total for all four domains: roughly $70 a year (estimate).
- Saved: SiteGround, about £240 to £290 a year ex. VAT; from June 2028 the GoDaddy Website Builder.
- E-mail move: no Microsoft licence cost expected for an extra domain and alias in the Abtis tenant; Abtis's own time is the only likely charge (ask for a quote).

## 6. Open questions for Michael

- Answered 17th November 2026: the extra sender address and the catch-all are on paymentsinnovation.consulting, in the Abtis tenant (a shared mailbox plus catch-all). The PI move does not touch them.
- Whether anyone else uses @payments-innovation.com addresses or the PI mailbox holds mail he needs to keep.
