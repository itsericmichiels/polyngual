'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/content/es';

type VisualCopy = Dictionary['benefits']['visuals'];

// Looping illustrations for the three benefits. Each runs only while on screen and
// shows a still, finished state when the visitor prefers reduced motion.

function useLoop(steps: number, ms: number | number[], finalStep: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStep(finalStep);
      return;
    }
    let visible = false;
    const update = () => setRunning(visible && document.visibilityState === 'visible');
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    if (ref.current) io.observe(ref.current);
    document.addEventListener('visibilitychange', update);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, [finalStep]);

  const duration = Array.isArray(ms) ? ms[step] ?? ms[ms.length - 1] : ms;
  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => setStep((s) => (s + 1) % steps), duration);
    return () => window.clearTimeout(id);
  }, [running, steps, duration, step]);

  return { ref, step };
}

const WORDS = [
  { word: 'comfortable', from: 58, to: 86 },
  { word: 'thought', from: 64, to: 88 },
  { word: 'world', from: 71, to: 91 },
];

function PronunciationVisual({ copy }: { copy: VisualCopy }) {
  // step 0: before practice; 1-3: each word practised in turn; 4: hold.
  const { ref, step } = useLoop(5, 1500, 4);
  return (
    <div ref={ref} className="bv bv-words" aria-hidden>
      <p className="bv-label">
        <span className="bv-mic" data-on={step > 0 && step < 4} />
        {copy.wordsToWork}
      </p>
      {WORDS.map((w, i) => {
        const practised = step > i && step > 0;
        const active = step === i + 1;
        const score = practised ? w.to : w.from;
        return (
          <div key={w.word} className="bv-word" data-practised={practised} data-active={active} style={{ '--s': score / 100 } as React.CSSProperties}>
            <span lang="en">{w.word}</span>
            <span className="bv-bar">
              <span />
            </span>
            <span className="bv-score" key={score}>
              {score}
            </span>
          </div>
        );
      })}
    </div>
  );
}

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const MARKER = [
  { left: '30%', bottom: '48%' },
  { left: '50%', bottom: '64%' },
  { left: '70%', bottom: '82%' },
];

function LevelVisual({ copy }: { copy: VisualCopy }) {
  // step 0: A2, 1: B1, 2: B2 (+ share), 3: hold.
  const { ref, step } = useLoop(4, 1700, 3);
  const at = Math.min(step, 2);
  const level = at + 1;
  return (
    <div ref={ref} className="bv bv-level" aria-hidden>
      <p className="bv-label">
        {copy.yourLevel} <strong className="bv-level-now" key={level}>{LEVELS[level]}</strong>
      </p>
      <div className="bv-ladder">
        {LEVELS.map((l, i) => (
          <span key={l} data-level={i} data-reached={i <= level} data-current={i === level}>
            {l}
          </span>
        ))}
        <span className="bv-marker" style={{ left: `calc(${MARKER[at].left} - 7px)`, bottom: `calc(${MARKER[at].bottom} + 6px)` }} />
      </div>
      <span className="bv-share" data-show={step >= 2}>
        {copy.share.replace('{level}', LEVELS[level])}
      </span>
    </div>
  );
}


const TASK_SECONDS = 45;
const SHOWN_SECONDS = 8; // the visual joins the answer in its last seconds, then counts down in real time

function ExamVisual({ copy }: { copy: VisualCopy }) {
  // step 0: answering (real-time countdown); 1-3: feedback items arrive; 4: hold.
  const { ref, step } = useLoop(5, [SHOWN_SECONDS * 1000 + 300, 900, 900, 900, 2600], 4);
  const [seconds, setSeconds] = useState(SHOWN_SECONDS);
  useEffect(() => {
    if (step !== 0) return;
    setSeconds(SHOWN_SECONDS);
    const id = window.setInterval(() => setSeconds((s) => Math.max(s - 1, 0)), 1000);
    return () => window.clearInterval(id);
  }, [step]);
  const answering = step === 0;
  const elapsed = answering ? (TASK_SECONDS - seconds) / TASK_SECONDS : 1;
  return (
    <div ref={ref} className="bv bv-exam" aria-hidden>
      <div className="bv-exam-head">
        <span>TOEFL · Speaking</span>
        <span className="bv-timer" data-done={!answering}>
          {answering ? `0:${String(seconds).padStart(2, '0')}` : copy.marked}
        </span>
      </div>
      <span className="bv-progress">
        <span style={{ transform: `scaleX(${elapsed})` }} />
      </span>
      <ul>
        {copy.checks.map((c, i) => (
          <li key={c.label} data-ok={c.ok || undefined} data-show={step > i}>
            {c.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BenefitVisual({ kind, copy }: { kind: number; copy: VisualCopy }) {
  if (kind === 0) return <PronunciationVisual copy={copy} />;
  if (kind === 1) return <LevelVisual copy={copy} />;
  return <ExamVisual copy={copy} />;
}
