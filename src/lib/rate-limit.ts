// A small in-memory limit on waitlist signups per IP, against bots that get past the honeypot.
// It lives in one serverless instance's memory, so it is best-effort (each instance counts on
// its own) but costs nothing and needs no database. Real people sign up once.

export type Limiter = { allow: (key: string, now?: number) => boolean };

export function createLimiter(max: number, windowMs: number, maxKeys = 5000): Limiter {
  const hits = new Map<string, number[]>();
  return {
    allow(key, now = Date.now()) {
      const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
      if (recent.length >= max) {
        hits.set(key, recent);
        return false;
      }
      recent.push(now);
      hits.delete(key); // re-insert so the Map's order stays oldest-first
      hits.set(key, recent);
      if (hits.size > maxKeys) hits.delete(hits.keys().next().value as string);
      return true;
    },
  };
}

/** The visitor's IP as Vercel reports it, or null (then the limit is skipped). */
export function clientIp(headers: Headers): string | null {
  const forwarded = headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwarded || headers.get('x-real-ip')?.trim() || null;
}
