# Plan: e-mail, domains and hosting

Prepared 17th November 2026 from public DNS, the Microsoft sign-in service and Michael's screenshots of his GoDaddy and SiteGround accounts. Nothing has been changed anywhere.

## 1. What is actually running today

| Domain | Registered at | Expires | Auto-renew | DNS run by | Website | E-mail |
|---|---|---|---|---|---|---|
| paymentsinnovation.consulting | GoDaddy | 15th/16th September 2027 | **Off** | GoDaddy | GoDaddy forwarding to payments-innovation.com | Microsoft 365, ordinary tenant ("Payments Innovation Consulting"), looked after by Abtis |
| payments-innovation.com | GoDaddy | 21st February 2032 | Off | GoDaddy | GoDaddy Website Builder ("Websites + Marketing Basic", paid to 16th June 2028) | Microsoft 365 **in a separate tenant run by GoDaddy** (sign-in is redirected to GoDaddy; "Microsoft 365 E-Mail Essentials - free trial", ends **16th June 2027**) |
| salmony.co.uk | SiteGround (Tucows) | 9th July 2028 | not shown | SiteGround | WordPress at SiteGround | none in use (records point at SiteGround's mail filter) |
| mathematicianscookbook.com | **not registered** (registry has no record) | - | - | - | SiteGround still lists a site for it, unreachable | none |

SiteGround hosting plan renewal date and price: not in the screenshots, not verified.

## 2. The finding that matters

The two consulting e-mail domains live in **two different Microsoft 365 tenants**:

- **PIC** (paymentsinnovation.consulting) is a normal tenant, the one Abtis manages and the one Claude's Microsoft 365 connection uses.
- **PI** (payments-innovation.com) is a GoDaddy-provisioned tenant. Its subscription in the GoDaddy account is a free trial set to end on 16th June 2027, with auto-renew off.

If nothing is done, mail to @payments-innovation.com is likely to stop working when that subscription ends, whatever Abtis does on the PIC side. Separately, paymentsinnovation.consulting itself expires in September 2027 with auto-renew off; if it lapses, PIC mail stops too.

## 3. Recommended end state

- **E-mail:** one Microsoft 365 tenant, the Abtis one. payments-innovation.com is added to it, and salmony@payments-innovation.com (plus any catch-all or other addresses in use) becomes an alias of the PIC mailbox, or a shared mailbox if it must stay separate. No extra licence expected for an alias. GoDaddy's Microsoft 365 is then cancelled.
- **Not Google Workspace.** It would be a third mail system and an extra monthly cost per user, and would move him off the tenant Abtis already runs well. It solves nothing the step above does not.
- **Websites:** both sites on GitHub Pages (free; published sites up to 1 GB, soft limit 100 GB traffic a month; the professional site is about 130 MB today).
- **Domains and DNS:** all domains at one registrar that also runs DNS. Suggested: Cloudflare (sells at cost, free DNS, handles .com, .consulting and .co.uk). An EU alternative is INWX. Abtis may prefer to run DNS themselves; ask them.
- paymentsinnovation.consulting forwards to payments-innovation.com; mathematicianscookbook.com is re-registered and forwards to salmony.co.uk/cookbook/.
- Cancelled: SiteGround hosting, GoDaddy Website Builder, GoDaddy Microsoft 365.

## 4. Order of work (e-mail first, websites second, tidying last)

1. **Now:** switch on auto-renew for paymentsinnovation.consulting at GoDaddy and check the card on file is valid (or transfer the domain in step 6, which also renews it).
2. **Now:** brief Abtis. Ask them to bring payments-innovation.com into the PIC tenant: export the PI mailbox first, have GoDaddy release (defederate) the domain from its tenant, add it to the Abtis tenant, attach the addresses, then switch the MX, SPF and autodiscover records. Target: January to February 2027, well before 16th June 2027. Ask them to add DKIM and DMARC for both domains at the same time (neither has them today).
3. Michael chooses the looks for both sites; the look switches are removed.
4. Websites go live on GitHub Pages: only the web records (A and www) change; mail records are not touched.
5. Check both live sites; set the forward for paymentsinnovation.consulting.
6. Move DNS to the chosen provider and transfer salmony.co.uk and paymentsinnovation.consulting. payments-innovation.com can keep its GoDaddy registration (prepaid to 2032) with only its DNS moved.
7. Register mathematicianscookbook.com and forward it.
8. Cancel SiteGround (before its next renewal, after a final WordPress backup) and the GoDaddy Website Builder.

## 5. Costs (estimates, to be checked against invoices)

- Hosting after the move: none.
- Domain renewals at cost: roughly €10 a year for each .com, under €10 for .co.uk, roughly €25 to €40 for .consulting. GoDaddy list prices are typically higher.
- Saved: SiteGround hosting (amount not seen) and, from June 2028, the Website Builder plan (already paid until then; GoDaddy refunds for early cancellation not checked).
- Possible one-off: Abtis's time for the e-mail move.

## 6. Open questions for Michael

- How the "Nathalie" address and the catch-all (office@ and so on) are set up, and on which domain. The attachment was a shortcut to "IT hints!/fake PIC email alias for sec.docx", not the document itself.
- Whether anyone else uses @payments-innovation.com addresses or the PI mailbox holds mail he needs to keep.
- SiteGround renewal date and price.
