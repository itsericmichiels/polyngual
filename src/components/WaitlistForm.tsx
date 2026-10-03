'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import type { Dictionary } from '@/content/es';

type Status = 'idle' | 'sending' | 'done' | 'error';
type FieldError = 'email' | 'consent' | 'server' | null;

const SOURCE_KEY = 'polyngual:first-touch';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;

// First-touch attribution: the visit that brought the person here, kept for the browser session.
function readSource(): Record<string, string> {
  try {
    const saved = sessionStorage.getItem(SOURCE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  const params = new URLSearchParams(window.location.search);
  const source: Record<string, string> = {
    referrer: document.referrer,
    landing: window.location.pathname + window.location.search,
  };
  for (const key of UTM_KEYS) source[key] = params.get(key) ?? '';
  try {
    sessionStorage.setItem(SOURCE_KEY, JSON.stringify(source));
  } catch {}
  return source;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function WaitlistForm({ copy, privacyHref, locale }: { copy: Dictionary['form']; privacyHref: string; locale: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<FieldError>(null);
  const source = useRef<Record<string, string>>({});
  const ids = { email: useId(), consent: useId(), error: useId() };

  useEffect(() => {
    source.current = readSource();
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') ?? '').trim();
    const consent = form.get('consent') === 'on';

    if (!EMAIL_PATTERN.test(email)) return setError('email');
    if (!consent) return setError('consent');

    setError(null);
    setStatus('sending');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, consent, company: form.get('company'), source: source.current, locale }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body.error === 'invalid_email' ? 'email' : 'server');
        setStatus('error');
        return;
      }
      setStatus('done');
      const s = source.current;
      track('waitlist_signup', { source: s.utm_source || hostOf(s.referrer) || 'direct' });
    } catch {
      setError('server');
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="form-success" role="status">
        <span className="success-check" aria-hidden>
          <svg viewBox="0 0 24 24">
            <path d="M5.5 12.5 L10 17 L18.5 7.5" />
          </svg>
        </span>
        <p>{copy.success}</p>
      </div>
    );
  }

  return (
    <form className="waitlist" onSubmit={onSubmit} noValidate data-error={error ?? undefined}>
      <div className="waitlist-row">
        <label htmlFor={ids.email} className="sr-only">
          {copy.label}
        </label>
        <input
          id={ids.email}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={copy.placeholder}
          required
          aria-invalid={error === 'email'}
          aria-describedby={error ? ids.error : undefined}
          onChange={() => error === 'email' && setError(null)}
        />
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'} data-busy={status === 'sending'}>
          <span>{status === 'sending' ? copy.sending : copy.button}</span>
        </button>
      </div>

      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hp" aria-hidden />

      <label className="consent" htmlFor={ids.consent}>
        <input
          id={ids.consent}
          name="consent"
          type="checkbox"
          required
          aria-invalid={error === 'consent'}
          onChange={() => error === 'consent' && setError(null)}
        />
        <span className="consent-box" aria-hidden>
          <svg viewBox="0 0 16 16">
            <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" />
          </svg>
        </span>
        <span>
          {copy.consentBefore}
          <Link href={privacyHref}>{copy.consentLink}</Link>
          {copy.consentAfter}
        </span>
      </label>

      <p id={ids.error} className="form-error" aria-live="polite">
        {error ? copy.errors[error] : ''}
      </p>
      <p className="form-note">{copy.note}</p>
    </form>
  );
}

function hostOf(url?: string) {
  try {
    return url ? new URL(url).hostname : '';
  } catch {
    return '';
  }
}
