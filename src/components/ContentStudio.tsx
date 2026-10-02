'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/content/es';

const STEP_MS = 520;

function waveFor(title: string) {
  let seed = [...title].reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) >>> 0, 7);
  return Array.from({ length: 48 }, () => {
    seed = (seed * 1103515245 + 12345) >>> 0;
    return 0.18 + ((seed >>> 16) % 1000) / 1250;
  });
}

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export function ContentStudio({ copy }: { copy: Dictionary['studio'] }) {
  const [formatIndex, setFormatIndex] = useState(0);
  const [optionIndex, setOptionIndex] = useState(0);
  const [step, setStep] = useState<number>(copy.steps.length); // steps.length = finished
  const [run, setRun] = useState(0);
  const tabs = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState({ x: 0, w: 0 });

  const format = copy.formats[formatIndex];
  const sample = format.options[optionIndex].sample;
  const generating = step < copy.steps.length;

  useIsoLayoutEffect(() => {
    const el = tabs.current?.querySelector<HTMLElement>(`[data-index="${formatIndex}"]`);
    if (el) setPill({ x: el.offsetLeft, w: el.offsetWidth });
  }, [formatIndex]);

  useEffect(() => {
    if (run === 0) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setStep(copy.steps.length);
      return;
    }
    setStep(0);
    const timers = copy.steps.map((_, i) => window.setTimeout(() => setStep(i + 1), STEP_MS * (i + 1)));
    return () => timers.forEach(window.clearTimeout);
  }, [run, copy.steps]);

  function generate(nextFormat: number, nextOption: number) {
    setFormatIndex(nextFormat);
    setOptionIndex(nextOption);
    setRun((r) => r + 1);
  }

  return (
    <div className="studio">
      <div className="studio-controls">
        <p className="studio-try">{copy.tryLabel}</p>
        <div className="tabs" role="tablist" ref={tabs} style={{ '--pill-x': `${pill.x}px`, '--pill-w': `${pill.w}px` } as React.CSSProperties}>
          <span className="tabs-pill" aria-hidden data-ready={pill.w > 0} />
          {copy.formats.map((f, i) => (
            <button
              key={f.id}
              role="tab"
              type="button"
              data-index={i}
              aria-selected={i === formatIndex}
              onClick={() => i !== formatIndex && generate(i, 0)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className="studio-prompt">{format.prompt}</p>
        <div className="chips">
          {format.options.map((option, i) => (
            <button
              key={option.label}
              type="button"
              className="chip"
              aria-pressed={i === optionIndex}
              onClick={() => generate(formatIndex, i)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="episode" data-generating={generating} aria-live="polite" aria-busy={generating}>
        <ol className="steps" aria-hidden={!generating}>
          {copy.steps.map((label, i) => (
            <li key={label} data-state={i < step ? 'done' : i === step ? 'active' : 'todo'}>
              <span className="step-dot" />
              {label}
            </li>
          ))}
        </ol>

        <div className="episode-body" key={`${formatIndex}-${optionIndex}-${run}`}>
          <div className="episode-head">
            <div>
              <p className="episode-meta">{sample.meta}</p>
              <h3 className="episode-title" lang="en">{sample.title}</h3>
            </div>
            <span className="episode-play" aria-hidden>
              <svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" /></svg>
            </span>
          </div>
          <div className="episode-wave" aria-hidden>
            {waveFor(sample.title).map((h, i) => (
              <span key={i} style={{ '--h': h.toFixed(2), '--i': i } as React.CSSProperties} />
            ))}
          </div>
          <ul className="script" lang="en">
            {sample.lines.map((line, i) => (
              <li key={i} style={{ '--i': i } as React.CSSProperties}>
                <span className="script-who">{line.who}</span>
                <span>
                  {line.parts.map((part, j) => (part.mark ? <mark key={j}>{part.text}</mark> : <span key={j}>{part.text}</span>))}
                </span>
              </li>
            ))}
          </ul>
          <div className="episode-words">
            <span>{copy.wordsLabel}</span>
            <span className="episode-word-list" lang="en">
              {sample.words.map((w) => (
                <span key={w}>{w}</span>
              ))}
            </span>
          </div>
        </div>
        <p className="episode-note">{copy.sampleNote}</p>
      </div>
    </div>
  );
}
