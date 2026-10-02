# Polyngual: waitlist site

The "coming soon" waitlist page for Polyngual, the consumer language brand built on Voxeo's technology.
It is a standalone Next.js app with no imports from the Voxeo monorepo, so it can move into its own repo and Vercel project as is (see the brief).

## Routes

| Route | What it is |
|---|---|
| `/` | Redirects to `/es` |
| `/es` | Landing page (Spanish, default). `/en` is added by putting `'en'` in `src/content/index.ts` and adding an `en.ts` dictionary; hreflang tags and the sitemap pick it up automatically |
| `/privacidad` | Privacy policy |
| `/baja` | Unsubscribe and delete my data (linked from every email) |
| `POST /api/waitlist` | Signup: validates the email, requires consent, saves to Brevo, sends the confirmation email |
| `POST /api/baja` | Signed unsubscribe link and mail clients' one-click unsubscribe (RFC 8058) |

## Run locally

```sh
npm install
cp .env.example .env.local   # optional: without BREVO_API_KEY signups are only logged
npm run dev                  # http://localhost:3000/es
npm test && npm run typecheck && npm run build
```

## Email tool: Brevo (free tier)

Brevo stores the list and sends the confirmation email. The free tier has unlimited contacts and 300 emails a day.

1. Create a list called "Polyngual waitlist". Put its ID in `BREVO_LIST_ID`.
2. In Contacts → Settings → Contact attributes, create these attributes:
   `COUNTRY` (text), `SIGNUP_DATE` (date), `SIGNUP_ORDER` (number), `UTM_SOURCE`, `UTM_MEDIUM`, `UTM_CAMPAIGN`, `UTM_CONTENT`, `UTM_TERM`, `REFERRER`, `LANDING` (all text).
3. Verify the polyngual.com domain as a sender (SPF and DKIM) and set `WAITLIST_FROM_EMAIL`.
4. Set `WAITLIST_REPLY_TO` to the inbox Eric reads (for example hola@polyngual.com).
5. Create an API key and set `BREVO_API_KEY`. Set `WAITLIST_SECRET` to a long random string (`openssl rand -base64 32`).

How signups behave:
- Country comes from Vercel's `x-vercel-ip-country` header. Source comes from first-touch UTM parameters, the referrer and the landing URL.
- A duplicate email gets the same success message and nothing is written or re-sent.
- Signup order is the list size right after the insert. Two signups in the same instant can get the same number, which is fine for the "first 200" offer.
- The unsubscribe link deletes the contact entirely, which also covers deletion requests.

## Analytics

Vercel Web Analytics, which sets no cookies, so there is no cookie banner. Turn it on in the Vercel project (Analytics tab).
Page views work on every plan. The `waitlist_signup` custom event needs a Vercel Pro plan; the source of every signup is stored in Brevo either way.

## Design notes

- Brand tokens are taken from the brand guide and live in `src/app/globals.css`: Midnight and Paper carry the page; Lagoon, Cobalt and Marigold are accents.
- Fonts: Nunito 800/900 for headings and Nunito Sans for body text, via `next/font`, with Latin and Latin Extended subsets.
- Motion: custom ease-out curves, short UI transitions, a 0.97 press scale on buttons, and staggered blur-in reveals. Hover effects only run on devices with a mouse. Everything respects `prefers-reduced-motion`, and the hero demo pauses when it is off screen or the tab is hidden.
- The hero "speaking" card, the word game and the content studio are illustrative examples, labelled as such. No real audio is processed. The benefit visuals loop only while on screen.
- `public/og.png` is the share image (1200×630). `src/app/icon.png` and `apple-icon.png` are made from the logo icon.

## Deploy

Create a new Vercel project with **Root Directory = `polyngual`** (or move this folder into its own repo), add the environment variables above, and point polyngual.com at it.
