import { NextResponse, type NextRequest } from 'next/server';
import { deleteContact } from '@/lib/resend';
import { deleteCrmContact } from '@/lib/gohighlevel';
import { normalizeEmail } from '@/lib/signup';
import { verifyEmailSignature } from '@/lib/unsubscribe-token';

export const runtime = 'nodejs';

// Handles both the confirmation button on /baja and mail clients' one-click
// unsubscribe (RFC 8058), which POST to the URL in the List-Unsubscribe header.
export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const form = await request.formData().catch(() => null);
  const email = normalizeEmail(form?.get('e') ?? url.searchParams.get('e'));
  const token = String(form?.get('t') ?? url.searchParams.get('t') ?? '');
  const lang = url.searchParams.get('lang') === 'en' ? '&lang=en' : '';

  if (!email || !verifyEmailSignature(email, token, process.env.WAITLIST_SECRET ?? '')) {
    return NextResponse.redirect(new URL(`/baja?estado=invalido${lang}`, request.url), 303);
  }
  try {
    await Promise.all([deleteContact(email), deleteCrmContact(email)]);
  } catch (error) {
    console.error('[waitlist] unsubscribe failed', error);
    return NextResponse.redirect(new URL(`/baja?estado=error${lang}`, request.url), 303);
  }
  return NextResponse.redirect(new URL(`/baja?estado=hecho${lang}`, request.url), 303);
}
