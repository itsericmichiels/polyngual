'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/content/es';

type Phase = 'speaking' | 'analysing' | 'feedback' | 'leaving';

const WORD_MS = 300;
const ANALYSE_MS = 650;
const FEEDBACK_MS = 3200;
const LEAVE_MS = 380;

// Deterministic bar heights so server and client render the same waveform.
const BARS = Array.from({ length: 34 }, (_, i) => {
  const h = 0.35 + 0.65 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.6));
  return { h: h.toFixed(2), d: `${((i * 137) % 900) / 1000}s` };
});

const RING = 2 * Math.PI * 26;

export function SpeakingDemo({ copy }: { copy: Dictionary['demo'] }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('speaking');
  const [spoken, setSpoken] = useState(-1);
  const [shownScore, setShownScore] = useState(copy.sentences[0].score - 6);
  const [running, setRunning] = useState(false);
  const root = useRef<HTMLElement>(null);

  const sentence = copy.sentences[index];
  const baseline = copy.sentences[0].score - 6;

  // Only animate while visible, the tab is active and the visitor accepts motion.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) {
      setSpoken(sentence.words.length - 1);
      setPhase('feedback');
      setShownScore(sentence.score);
      return;
    }
    let visible = false;
    const update = () => setRunning(visible && document.visibilityState === 'visible');
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    if (root.current) io.observe(root.current);
    document.addEventListener('visibilitychange', update);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!running) return;
    let timer: number;
    if (phase === 'speaking') {
      if (spoken < sentence.words.length - 1) {
        timer = window.setTimeout(() => setSpoken((s) => s + 1), spoken < 0 ? 500 : WORD_MS);
      } else {
        timer = window.setTimeout(() => setPhase('analysing'), WORD_MS + 120);
      }
    } else if (phase === 'analysing') {
      timer = window.setTimeout(() => setPhase('feedback'), ANALYSE_MS);
    } else if (phase === 'feedback') {
      timer = window.setTimeout(() => setPhase('leaving'), FEEDBACK_MS);
    } else {
      timer = window.setTimeout(() => {
        const next = (index + 1) % copy.sentences.length;
        if (next === 0) setShownScore(baseline);
        setIndex(next);
        setSpoken(-1);
        setPhase('speaking');
      }, LEAVE_MS);
    }
    return () => window.clearTimeout(timer);
  }, [running, phase, spoken, index, sentence.words.length, copy.sentences.length, baseline]);

  // Count the score up when feedback appears.
  useEffect(() => {
    if (phase !== 'feedback') return;
    const from = shownScore;
    const to = sentence.score;
    if (from === to) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 900);
      const eased = 1 - Math.pow(1 - t, 3);
      setShownScore(Math.round(from + (to - from) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, index]);

  const showFeedback = phase === 'feedback';
  const delta = shownScore - baseline;

  return (
    <figure ref={root} className="demo" data-phase={phase} aria-label={copy.caption}>
      <div className="demo-card">
        <div className="demo-top">
          <span className="demo-status">
            <span className="rec-dot" aria-hidden />
            <span key={phase === 'analysing' ? 'a' : 'l'} className="demo-status-text">
              {phase === 'analysing' ? copy.analysing : copy.listening}
            </span>
          </span>
          <span className="demo-lang" lang="en">EN · US</span>
        </div>

        <p className="demo-sentence" lang="en" key={index}>
          {sentence.words.map((word, i) => {
            const flagged = showFeedback && sentence.flags.includes(i);
            return (
              <span key={i} className="demo-word" data-spoken={i <= spoken} data-flagged={flagged}>
                {word}
              </span>
            );
          })}
        </p>

        <div className="wave" data-active={phase === 'speaking' && spoken >= 0} aria-hidden>
          {BARS.map((bar, i) => (
            <span key={i} className="wave-bar" style={{ '--h': bar.h, '--d': bar.d } as React.CSSProperties}>
              <span />
            </span>
          ))}
        </div>

        <div className="demo-bottom">
          <div className="demo-tip" data-show={showFeedback} key={`tip-${index}`}>
            <span className="demo-tip-sound" lang="en">{sentence.tip.sound}</span>
            <span className="demo-tip-text">{sentence.tip.text}</span>
          </div>
          <div className="score" aria-label={`${copy.score}: ${shownScore}`}>
            <svg viewBox="0 0 60 60" aria-hidden>
              <circle className="score-track" cx="30" cy="30" r="26" />
              <circle
                className="score-fill"
                cx="30"
                cy="30"
                r="26"
                strokeDasharray={RING}
                strokeDashoffset={RING * (1 - shownScore / 100)}
              />
            </svg>
            <span className="score-num">{shownScore}</span>
          </div>
        </div>
      </div>

      <div className="demo-week" data-show={delta > 0}>
        <span className="demo-week-num">+{Math.max(delta, 0)}</span> {copy.score.toLowerCase()} {copy.week}
      </div>
      <figcaption className="demo-caption">{copy.caption}</figcaption>
    </figure>
  );
}
