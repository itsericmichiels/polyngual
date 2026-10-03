# Polyngual: waitlist site

The "coming soon" waitlist page for Polyngual, the consumer language brand built on Voxeo's technology.
It is a standalone Next.js app, kept separate from the Voxeo repo and Vercel project (see the brief).

## Routes

| Route | What it is |
|---|---|
| `/` | Redirects to `/es` |
| `/es` | Landing page (Spanish, default). `/en` is added by putting `'en'` in `src/content/index.ts` and adding an `en.ts` dictionary; hreflang tags and the sitemap pick it up automatically |
| `/privacidad` | Privacy policy |
| `/baja` | Unsubscribe and delete my data (linked from every email) |
| `POST /api/waitlist` | Signup: validates the email, requires consent, saves to Resend, sends the confirmation email |
| `POST /api/baja` | Signed unsubscribe link and mail clients' one-click unsubscribe (RFC 8058) |

## Run locally

```sh
npm install
cp .env.example .env.local   # optional: without RESEND_API_KEY signups are only logged
npm run dev                  # http://localhost:3000/es
npm test && npm run typecheck && npm run build
```

## Email tool: Resend

Resend stores the waitlist (as contacts in one segment) and sends the confirmation email.

1. **Domain:** in Resend → Domains, add `polyngual.app` and add the DNS records it shows (SPF, DKIM and the MX record for bounces) where the domain is managed. Wait for "Verified".
2. **Segment:** in Resend → Audience → Segments, create `Polyngual waitlist`. Put its ID in `RESEND_SEGMENT_ID`.
3. **Contact properties:** in Resend → Audience → Properties, create these (exact keys, lower case):
   `signup_order` (number), and `country`, `signup_date`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `referrer`, `landing` (all string).
4. **API key:** in Resend → API Keys, create a key named `polyngual-waitlist` with full access (it must manage contacts, not only send), and put it in `RESEND_API_KEY`.
5. Set `WAITLIST_FROM_EMAIL` to an address on the verified domain, `WAITLIST_REPLY_TO` to the inbox you read (polyngualapp@gmail.com), and `WAITLIST_SECRET` to a long random string (`openssl rand -base64 32`).

How signups behave:
- Country comes from Vercel's `x-vercel-ip-country` header. Source comes from first-touch UTM parameters, the referrer and the landing URL.
- A duplicate email gets the same success message and nothing is written or re-sent.
- Signup order is the number of people already in the segment plus one, counted up to 500 (the founder offer only needs the first 200). Two signups in the same instant can get the same number.
- Contacts are shared across a Resend account. If an email already exists there (say, from Voxeo), it is added to the Polyngual segment rather than duplicated.
- The unsubscribe link deletes the contact from Resend entirely, which also covers deletion requests. If you share one Resend account with Voxeo, that removes the address from Voxeo's lists too; use a separate Resend account or team if that matters.
- Resend allows only a few API requests per second; the code retries briefly when Resend says to slow down.

## Analytics

Vercel Web Analytics, which sets no cookies, so there is no cookie banner. Turn it on in the Vercel project (Analytics tab).
Page views work on every plan. The `waitlist_signup` custom event needs a Vercel Pro plan; the source of every signup is stored in Resend either way.

## Brand independence

Nothing public should link Polyngual to Voxeo or to its founder: no founder name in emails or on the site, no "powered by Voxeo", and the sender is the Polyngual team. Keep it that way in new copy.

## Design notes

- Brand tokens are taken from the brand guide and live in `src/app/globals.css`: Midnight and Paper carry the page; Lagoon, Cobalt and Marigold are accents.
- Fonts: Nunito 800/900 for headings and Nunito Sans for body text, via `next/font`, with Latin and Latin Extended subsets.
- Motion: custom ease-out curves, short UI transitions, a 0.97 press scale on buttons, and staggered blur-in reveals. Hover effects only run on devices with a mouse. Everything respects `prefers-reduced-motion`, and the hero demo pauses when it is off screen or the tab is hidden.
- The hero "speaking" card, the word game and the content studio are illustrative examples, labelled as such. No real audio is processed. The benefit visuals loop only while on screen.
- `public/og.png` is the share image (1200×630). `src/app/icon.png` and `apple-icon.png` are made from the logo icon.

## Deploy

Import this repo as a new Vercel project (framework preset Next.js, root directory left as is), add the environment variables above, and point polyngual.app at it.
