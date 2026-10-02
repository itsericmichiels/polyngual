import { NextResponse, type NextRequest } from 'next/server';
import { saveSignup, sendEmail } from '@/lib/brevo';
import { confirmationEmail } from '@/lib/confirmation-email';
import { normalizeEmail, readCountry, readTrafficSource } from '@/lib/signup';
import { unsubscribeUrl } from '@/lib/unsubscribe-token';
import { siteUrl } from '@/lib/site';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: 'invalid_request' }, { status: 400 });

  // Honeypot: real people never fill this hidden field. Pretend it worked.
  if (typeof body.company === 'string' && body.company.length > 0) return NextResponse.json({ ok: true });

  const email = normalizeEmail(body.email);
  if (!email) return NextResponse.json({ error: 'invalid_email' }, { status: 422 });
  if (body.consent !== true) return NextResponse.json({ error: 'consent_required' }, { status: 422 });

  const source = readTrafficSource(body.source as Record<string, unknown> | undefined);
  if (!source.referrer) source.referrer = (request.headers.get('referer') ?? '').slice(0, 500);

  try {
    const result = await saveSignup({
      email,
      country: readCountry(request.headers.get('x-vercel-ip-country')),
      source,
      signedUpAt: new Date(),
    });

    if (result.created) {
      const link = unsubscribeUrl(siteUrl(), email, process.env.WAITLIST_SECRET ?? '');
      const message = confirmationEmail(link);
      await sendEmail({ to: email, ...message, unsubscribeUrl: link }).catch((error) => {
        // The signup is saved; a failed email should not show the visitor an error.
        console.error('[waitlist] confirmation email failed', error);
      });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[waitlist] signup failed', error);
    return NextResponse.json({ error: 'unavailable' }, { status: 502 });
  }
}
