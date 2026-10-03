import { NextResponse, type NextRequest } from 'next/server';
import { timingSafeEqual } from 'node:crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Private setup check: /api/diagnostico?key=WAITLIST_SECRET[&to=email]
// Reports which settings are present (never their values), whether Resend and GoHighLevel accept
// the credentials, and, with &to=, sends one test email and returns Resend's answer.

function authorized(key: string | null) {
  const secret = process.env.WAITLIST_SECRET ?? '';
  if (!secret || !key) return false;
  const a = Buffer.from(key);
  const b = Buffer.from(secret);
  return a.length === b.length && timingSafeEqual(a, b);
}

async function describe(res: Response) {
  const text = await res.text().catch(() => '');
  return { status: res.status, ok: res.ok, body: text.slice(0, 400) };
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  if (!authorized(url.searchParams.get('key'))) return NextResponse.json({ error: 'not found' }, { status: 404 });

  const env = process.env;
  const fromEmail = env.WAITLIST_FROM_EMAIL ?? '';
  const report: Record<string, unknown> = {
    deployment: { commit: (env.VERCEL_GIT_COMMIT_SHA ?? 'unknown').slice(0, 7), env: env.VERCEL_ENV ?? 'local' },
    settings: Object.fromEntries(
      ['RESEND_API_KEY', 'RESEND_SEGMENT_ID', 'WAITLIST_FROM_EMAIL', 'WAITLIST_FROM_NAME', 'WAITLIST_REPLY_TO', 'WAITLIST_SECRET', 'GHL_TOKEN', 'GHL_LOCATION_ID', 'NEXT_PUBLIC_SITE_URL'].map(
        (name) => [name, env[name] ? (name.includes('KEY') || name.includes('TOKEN') || name.includes('SECRET') ? 'set' : env[name]) : 'MISSING'],
      ),
    ),
  };

  if (env.RESEND_API_KEY) {
    const headers = { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' };
    const domains = await fetch('https://api.resend.com/domains', { headers, cache: 'no-store' });
    const d = await describe(domains);
    let parsed: { data?: { name: string; status: string }[] } = {};
    try {
      parsed = JSON.parse(d.body);
    } catch {}
    report.resendDomains = parsed.data ? parsed.data.map((x) => `${x.name}: ${x.status}`) : d;
    report.senderDomainVerified = parsed.data?.some((x) => fromEmail.endsWith(`@${x.name}`) && x.status === 'verified') ?? 'unknown';

    const to = url.searchParams.get('to');
    if (to) {
      const sent = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers,
        cache: 'no-store',
        body: JSON.stringify({
          from: `${env.WAITLIST_FROM_NAME ?? 'Polyngual'} <${fromEmail}>`,
          to: [to],
          reply_to: env.WAITLIST_REPLY_TO ?? fromEmail,
          subject: 'Prueba de Polyngual',
          text: 'Correo de prueba del diagnóstico de la lista de espera.',
        }),
      });
      report.testEmail = await describe(sent);
    }
  }

  if (env.GHL_TOKEN && env.GHL_LOCATION_ID) {
    const query = new URLSearchParams({ locationId: env.GHL_LOCATION_ID, email: 'diagnostico@example.com' });
    const ghl = await fetch(`https://services.leadconnectorhq.com/contacts/search/duplicate?${query}`, {
      headers: { authorization: `Bearer ${env.GHL_TOKEN}`, version: '2023-02-21', accept: 'application/json' },
      cache: 'no-store',
    });
    report.goHighLevel = await describe(ghl);
  }

  return NextResponse.json(report, { headers: { 'cache-control': 'no-store' } });
}
