import type { CSSProperties } from 'react';
import type { ExamPageContent, PracticeFormat } from '@/content/exams/types';
import { LoopAnimator } from './LoopAnimator';

// The loop: mock test → results → practice on your gaps → retest, with the gaps in the centre.
//
// One set of markup serves both layouts. From 760px up, the steps sit on a ring and the practice formats
// circle the centre, each with an arrow pointing in. Below that, the same flow is a vertical list. The
// ordered list is always in the DOM: it is the text version for screen readers and crawlers, visible on
// phones and visually hidden on the circle, which is aria-hidden.

const R_RING = 43;
const R_NODE = 31;
const R_CENTRE = 20.5;

const at = (deg: number, r: number) => {
  const rad = (deg * Math.PI) / 180;
  return { x: 50 + r * Math.sin(rad), y: 50 - r * Math.cos(rad) };
};

const arc = (from: number, to: number) => {
  const a = at(from, R_RING);
  const b = at(to, R_RING);
  return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${R_RING} ${R_RING} 0 0 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
};

const STEP_ANGLES = [0, 90, 180, 270] as const;
const ARC_GAP = 17;

export function LoopDiagram({ copy, formats, id }: { copy: ExamPageContent['loop']; formats: { id: PracticeFormat; label: string }[]; id: string }) {
  const startCount = copy.gaps.length;
  const nodeStep = 360 / formats.length;

  return (
    <figure className="x-loop" id={id} data-round="1" aria-labelledby={`${id}-caption`}>
      <div className="x-loop-stage">
        <svg className="x-loop-svg" viewBox="0 0 100 100" aria-hidden focusable="false">
          <defs>
            <marker id={`${id}-head`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="2.6" markerHeight="2.6" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" className="x-loop-head" />
            </marker>
            <marker id={`${id}-tip`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="1.9" markerHeight="1.9" markerUnits="userSpaceOnUse" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" className="x-loop-tip" />
            </marker>
          </defs>
          <circle className="x-loop-ring" cx="50" cy="50" r={R_RING} />
          {STEP_ANGLES.map((angle, i) => (
            <path
              key={angle}
              className={`x-loop-arc${i === 3 ? ' x-loop-arc-return' : ''}`}
              data-loop-arc={i + 1}
              d={arc(angle + ARC_GAP, angle + 90 - ARC_GAP)}
              markerEnd={`url(#${id}-head)`}
            />
          ))}
          <circle className="x-loop-core" cx="50" cy="50" r={R_CENTRE} />
          {formats.map((format, i) => {
            const angle = nodeStep / 2 + i * nodeStep;
            const from = at(angle, R_NODE - 5.2);
            const to = at(angle, R_CENTRE + 1.2);
            return (
              <line
                key={format.id}
                className="x-loop-spoke"
                data-loop-node={i}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                markerEnd={`url(#${id}-tip)`}
              />
            );
          })}
        </svg>

        {copy.steps.map((step, i) => {
          const p = at(STEP_ANGLES[i], R_RING);
          return (
            <div key={step} className="x-loop-pill" data-loop-step={i + 1} style={{ '--x': `${p.x}%`, '--y': `${p.y}%` } as CSSProperties} aria-hidden>
              <span className="x-loop-num">{i + 1}</span>
              {step}
            </div>
          );
        })}

        <div className="x-loop-return" data-loop-return aria-hidden>
          <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
            <path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {copy.returnLabel}
        </div>

        {formats.map((format, i) => {
          const p = at(nodeStep / 2 + i * nodeStep, R_NODE);
          return (
            <div
              key={format.id}
              className="x-loop-node"
              data-loop-node={i}
              style={{ '--x': `${p.x}%`, '--y': `${p.y}%`, '--i': i } as CSSProperties}
              aria-hidden
            >
              {format.label}
            </div>
          );
        })}

        <div className="x-loop-centre">
          <p className="x-loop-centre-title">{copy.centreTitle}</p>
          <p className="x-loop-centre-meta">
            <span data-loop-round-label data-template={copy.roundLabel}>
              {copy.roundLabel.replace('{n}', '1')}
            </span>
            <span data-loop-count data-template={copy.gapsLeft}>
              {copy.gapsLeft.replace('{n}', String(startCount))}
            </span>
          </p>
          <ul className="x-loop-gaps" aria-label={copy.centreSub}>
            {copy.gaps.map((gap) => (
              <li key={gap.label} data-cleared-in={gap.clearedInRound ?? ''}>
                <span>{gap.label}</span>
              </li>
            ))}
          </ul>
          <p className="x-loop-centre-sub">{copy.centreSub}</p>
        </div>

        <ol className="x-loop-flow" aria-label={copy.a11yLabel}>
          {copy.steps.map((step, i) => (
            <li key={step} data-loop-step={i + 1}>
              <span className="x-loop-num" aria-hidden>
                {i + 1}
              </span>
              <div>
                <strong>{step}</strong>
                <p>{copy.stepDetails[i]}</p>
                {i === 2 && (
                  <ul className="x-loop-flow-formats">
                    {formats.map((format, n) => (
                      <li key={format.id} data-loop-node={n}>
                        {format.label}
                      </li>
                    ))}
                  </ul>
                )}
                {i === 3 && (
                  <p className="x-loop-flow-return" data-loop-return>
                    {copy.returnLabel}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
      <figcaption id={`${id}-caption`} className="x-loop-caption">
        {copy.caption}
      </figcaption>
      <LoopAnimator targetId={id} />
    </figure>
  );
}
