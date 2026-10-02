'use client';

import { useEffect, useRef, useState } from 'react';

// Looping illustrations for the three benefits. Each runs only while on screen and
// shows a still, finished state when the visitor prefers reduced motion.

function useLoop(steps: number, ms: number, finalStep: number) {
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

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % steps), ms);
    return () => window.clearInterval(id);
  }, [running, steps, ms]);

  return { ref, step };
}

const WORDS = [
  { word: 'comfortable', from: 58, to: 86 },
  { word: 'thought', from: 64, to: 88 },
  { word: 'world', from: 71, to: 91 },
];

function PronunciationVisual() {
  // step 0: before practice; 1-3: each word practised in turn; 4: hold.
  const { ref, step } = useLoop(5, 1500, 4);
  return (
    <div ref={ref} className="bv bv-words" aria-hidden>
      <p className="bv-label">
        <span className="bv-mic" data-on={step > 0 && step < 4} />
        Palabras para trabajar
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

function LevelVisual() {
  // step 0: A2, 1: B1, 2: B2 (+ share), 3: hold.
  const { ref, step } = useLoop(4, 1700, 3);
  const at = Math.min(step, 2);
  const level = at + 1;
  return (
    <div ref={ref} className="bv bv-level" aria-hidden>
      <p className="bv-label">
        Tu nivel <strong className="bv-level-now" key={level}>{LEVELS[level]}</strong>
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
        Compartir {LEVELS[level]} en LinkedIn ↗
      </span>
    </div>
  );
}

const CHECKS = [
  { label: 'Organización', ok: true },
  { label: 'Vocabulario', ok: true },
  { label: 'Conectores: practícalos hoy', ok: false },
];

function ExamVisual() {
  // step 0: answering; 1-3: feedback items arrive; 4-5: hold.
  const { ref, step } = useLoop(6, 1100, 5);
  const [seconds, setSeconds] = useState(45);
  useEffect(() => {
    if (step === 0) setSeconds(45);
  }, [step]);
  useEffect(() => {
    if (step !== 0) return;
    const id = window.setInterval(() => setSeconds((s) => Math.max(s - 7, 0)), 160);
    return () => window.clearInterval(id);
  }, [step]);
  const time = step === 0 ? seconds : 0;
  return (
    <div ref={ref} className="bv bv-exam" aria-hidden>
      <div className="bv-exam-head">
        <span>TOEFL · Speaking</span>
        <span className="bv-timer" data-done={step > 0}>
          {step === 0 ? `0:${String(time).padStart(2, '0')}` : 'Corregido'}
        </span>
      </div>
      <span className="bv-progress">
        <span style={{ transform: `scaleX(${step === 0 ? 1 - time / 45 : 1})` }} />
      </span>
      <ul>
        {CHECKS.map((c, i) => (
          <li key={c.label} data-ok={c.ok || undefined} data-show={step > i}>
            {c.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BenefitVisual({ kind }: { kind: number }) {
  if (kind === 0) return <PronunciationVisual />;
  if (kind === 1) return <LevelVisual />;
  return <ExamVisual />;
}
