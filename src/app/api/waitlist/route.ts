import { NextResponse, type NextRequest } from 'next/server';
import { saveSignup, sendEmail } from '@/lib/resend';
import { syncSignupToCrm } from '@/lib/gohighlevel';
import { confirmationEmail } from '@/lib/confirmation-email';
import { normalizeEmail, readCountry, readTrafficSource } from '@/lib/signup';
import { oneClickUnsubscribeUrl, unsubscribeUrl } from '@/lib/unsubscribe-token';
import { siteUrl } from '@/lib/site';
import { DEFAULT_LOCALE, isLocale } from '@/content';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: 'invalid_request' }, { status: 400 });

  // Honeypot: real people never fill this hidden field. Pretend it worked.
  if (typeof body.company === 'string' && body.company.length > 0) return NextResponse.json({ ok: true });

  const email = normalizeEmail(body.email);
  if (!email) return NextResponse.json({ error: 'invalid_email' }, { status: 422 });
  if (body.consent !== true) return NextResponse.json({ error: 'consent_required' }, { status: 422 });

  const locale = isLocale(body.locale) ? body.locale : DEFAULT_LOCALE;
  const source = readTrafficSource(body.source as Record<string, unknown> | undefined);
  if (!source.referrer) source.referrer = (request.headers.get('referer') ?? '').slice(0, 500);

  try {
    const record = {
      email,
      country: readCountry(request.headers.get('x-vercel-ip-country')),
      source,
      signedUpAt: new Date(),
      locale,
    };
    const result = await saveSignup(record);

    // One line per signup so the Vercel logs show each step (no email address, only the outcome).
    console.info('[waitlist] signup', { created: result.created, order: result.order, country: record.country, locale });

    if (result.created) {
      // The signup is already saved in Resend; a CRM hiccup should not show the visitor an error.
      await syncSignupToCrm(record, result.order)
        .then(() => console.info('[waitlist] GoHighLevel sync ok'))
        .catch((error) => console.error('[waitlist] GoHighLevel sync failed', error));
      const link = unsubscribeUrl(siteUrl(), email, process.env.WAITLIST_SECRET ?? '', locale);
      const message = confirmationEmail(link, locale);
      const oneClick = oneClickUnsubscribeUrl(siteUrl(), email, process.env.WAITLIST_SECRET ?? '');
      await sendEmail({ to: email, ...message, unsubscribeUrl: oneClick })
        .then(() => console.info('[waitlist] confirmation email sent'))
        // The signup is saved; a failed email should not show the visitor an error.
        .catch((error) => console.error('[waitlist] confirmation email failed', error));
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[waitlist] signup failed', error);
    return NextResponse.json({ error: 'unavailable' }, { status: 502 });
  }
}
