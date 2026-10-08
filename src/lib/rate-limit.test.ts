import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clientIp, createLimiter } from './rate-limit.ts';

test('allows up to the limit in the window, then blocks, then allows again after it', () => {
  const limiter = createLimiter(3, 1000);
  assert.equal(limiter.allow('a', 0), true);
  assert.equal(limiter.allow('a', 10), true);
  assert.equal(limiter.allow('a', 20), true);
  assert.equal(limiter.allow('a', 30), false);
  assert.equal(limiter.allow('b', 30), true, 'other visitors are counted separately');
  assert.equal(limiter.allow('a', 1001), true, 'the first hit has left the window');
});

test('forgets the oldest visitors past the memory cap', () => {
  const limiter = createLimiter(1, 60_000, 2);
  limiter.allow('a', 0);
  limiter.allow('b', 0);
  limiter.allow('c', 0);
  assert.equal(limiter.allow('a', 1), true, 'a was dropped when c arrived');
});

test('reads the first forwarded IP, then x-real-ip', () => {
  assert.equal(clientIp(new Headers({ 'x-forwarded-for': '203.0.113.7, 10.0.0.1' })), '203.0.113.7');
  assert.equal(clientIp(new Headers({ 'x-real-ip': '198.51.100.2' })), '198.51.100.2');
  assert.equal(clientIp(new Headers()), null);
});
