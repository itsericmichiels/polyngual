'use client';

import { useEffect } from 'react';

// Plays the loop once it scrolls into view: the steps light up in order, the practice formats light up
// one by one, and each retest clears items from the centre list. Three rounds, then it rests on the last.
// With reduced motion it jumps straight to the end state. Without JavaScript the diagram stays fully lit.

const ROUNDS = 3;
const STEP_MS = 520;
const NODE_MS = 60;
const CLEAR_MS = 700;
const REST_MS = 900;

export function LoopAnimator({ targetId }: { targetId: string }) {
  useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root) return;

    const all = (selector: string) => Array.from(root.querySelectorAll<HTMLElement | SVGElement>(selector));
    const steps = (n: number) => all(`[data-loop-step="${n}"], [data-loop-arc="${n}"]`);
    const nodes = all('[data-loop-node]');
    const returns = all('[data-loop-return]');
    const gaps = all('[data-cleared-in]');
    const count = root.querySelector<HTMLElement>('[data-loop-count]');
    const roundLabel = root.querySelector<HTMLElement>('[data-loop-round-label]');

    const lit = (els: (HTMLElement | SVGElement)[], on: boolean) => els.forEach((el) => el.toggleAttribute('data-lit', on));
    const showRound = (round: number) => {
      root.setAttribute('data-round', String(round));
      const left = gaps.filter((g) => {
        const clearedIn = Number(g.getAttribute('data-cleared-in'));
        return !clearedIn || clearedIn > round;
      }).length;
      if (count) count.textContent = (count.dataset.template ?? '{n}').replace('{n}', String(left));
      if (roundLabel) roundLabel.textContent = (roundLabel.dataset.template ?? '{n}').replace('{n}', String(round));
      gaps.forEach((g) => {
        const clearedIn = Number(g.getAttribute('data-cleared-in'));
        g.toggleAttribute('data-cleared', Boolean(clearedIn) && clearedIn <= round);
      });
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.setAttribute('data-static', '');
      showRound(ROUNDS);
      return;
    }

    root.setAttribute('data-armed', '');
    const timers: number[] = [];
    const later = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

    const playRound = (round: number) => {
      let t = 0;
      lit([...steps(1), ...steps(2), ...steps(3), ...steps(4), ...nodes, ...returns], false);
      later((t += 200), () => lit(steps(1), true));
      later((t += STEP_MS), () => lit(steps(2), true));
      later((t += STEP_MS), () => lit(steps(3), true));
      nodes.forEach((node) => later((t += NODE_MS), () => lit([node], true)));
      later((t += STEP_MS), () => lit(steps(4), true));
      if (round === ROUNDS) {
        later((t += STEP_MS), () => {
          lit(returns, true);
          root.setAttribute('data-done', '');
        });
        return;
      }
      later((t += STEP_MS), () => lit(returns, true));
      later((t += CLEAR_MS), () => showRound(round + 1));
      later((t += REST_MS), () => playRound(round + 1));
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        playRound(1);
      },
      { threshold: 0.45 },
    );
    io.observe(root);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [targetId]);

  return null;
}
