# Polyngual: waitlist site

The "coming soon" waitlist page for Polyngual, the consumer language brand built on Voxeo's technology.
It is a standalone Next.js app, kept separate from the Voxeo repo and Vercel project (see the brief).

## Routes

| Route | What it is |
|---|---|
| `/` | Redirects to `/es` |
| `/es` | Landing page in Spanish (default, `x-default` in hreflang) |
| `/en` | Landing page in English. Copy lives in `src/content/en.ts`, same shape as `es.ts`; a new language is a new dictionary plus an entry in `src/content/index.ts` |
| `/toefl-practice`, `/toeic-practice`, `/ielts-practice`, `/cambridge-practice` and `/es/preparacion-{toefl,toeic,ielts,cambridge}` | Standalone exam landing pages (not in the navigation; linked from footers and the sitemap, with hreflang between each pair). Registry in `src/lib/exams.ts`, copy in `src/content/exams/` |
| `/privacidad`, `/en/privacy` | Privacy policy (Spanish path fixed by the brief; `/es/privacy` redirects to it) |
| `/baja` | Unsubscribe and delete my data (linked from every email; `?l=en` shows it in English) |
| `/api/diagnostico?key=WAITLIST_SECRET` | Private setup check: which settings are present, Resend domain status, GoHighLevel access; `&to=` sends a test email |
| `POST /api/waitlist` | Signup: validates the email, requires consent, saves to Resend, copies to GoHighLevel, sends the confirmation email in the page's language |
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
5. Set `WAITLIST_FROM_EMAIL` to hello@polyngual.app (an address on the verified domain), `WAITLIST_REPLY_TO` to the inbox you read (polyngualapp@gmail.com), and `WAITLIST_SECRET` to a long random string (`openssl rand -base64 32`).

How signups behave:
- Country comes from Vercel's `x-vercel-ip-country` header. Source comes from first-touch UTM parameters, the referrer and the landing URL.
- A duplicate email gets the same success message and nothing is written or re-sent.
- Signup order is the number of people already in the segment plus one, counted up to 500 (the founder offer only needs the first 200). Two signups in the same instant can get the same number.
- Contacts are shared across a Resend account. If an email already exists there (say, from Voxeo), it is added to the Polyngual segment rather than duplicated.
- The unsubscribe link deletes the contact from Resend entirely, which also covers deletion requests. If you share one Resend account with Voxeo, that removes the address from Voxeo's lists too; use a separate Resend account or team if that matters.
- Resend allows only a few API requests per second; the code retries briefly when Resend says to slow down.

## CRM: GoHighLevel (optional)

Each new signup is also copied into the Polyngual sub-account of GoHighLevel, so the list can be filtered and used in workflows there. Resend still sends the confirmation email.

1. Use a separate sub-account for Polyngual (not Voxeo's), with Polyngual's own business name and address, since those appear in email footers.
2. In that sub-account: Settings → Private Integrations → create one with the contacts scopes (view, edit). Put the token in `GHL_TOKEN`.
3. Put the sub-account's Location ID (Settings → Business Profile) in `GHL_LOCATION_ID`.
4. Optional: create a custom contact field with the key `signup_order` (number) to see each person's place in line.

What lands in GoHighLevel: email, country, source ("Polyngual waitlist (instagram)") and tags: `polyngual-waitlist` on everyone, `polyngual-fundador` for the first 200, and `fuente:…` / `campana:…` from the UTM parameters. Tags need no setup and can trigger workflows. If GoHighLevel is down or misconfigured, the signup still succeeds (it's already in Resend) and the error is logged in Vercel. The unsubscribe link deletes the contact from GoHighLevel too.

## Exam landing pages

- Each page is one content file per language in `src/content/exams/` rendered by `src/components/exam/ExamPage.tsx`. English pages live under `src/app/(en)` (their own `lang="en"` layout); Spanish ones are `src/app/[locale]/[slug]`.
- Every "Take the free mock test" button goes to `NEXT_PUBLIC_MOCK_TEST_URL` with `?exam=`, `lang=` and UTM parameters (plus `variant=` from the IELTS and Cambridge pickers). Unset, it goes to the waitlist form in the page's language (`/en#lista` or `/es#lista`), which stores the same parameters in the signup's landing URL.
- Each click sends the `mock_test_cta` event (`exam`, `lang`, `placement`, `variant`) to Vercel Analytics.
- A placeholder for real learner proof is marked in `ExamPage.tsx`; it renders only outside production. Do not fill it with invented testimonials or figures.

## Analytics

Vercel Web Analytics, which sets no cookies, always runs. Turn it on in the Vercel project (Analytics tab).

Google Tag Manager and Google Analytics 4 are optional: set `NEXT_PUBLIC_GTM_ID` and/or `NEXT_PUBLIC_GA4_ID` in Vercel and redeploy. They set cookies, so they load only after the visitor accepts the cookie notice (`src/components/GoogleTags.tsx`); a small "Cookies" button reopens it. The `waitlist_signup` and `mock_test_cta` events go to Vercel always and to the GTM/GA4 `dataLayer` after consent (`src/lib/analytics.ts`), ready to mark as conversions.
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
