import { ImageResponse } from 'next/og';
import type { ExamPageContent } from '@/content/exams/types';
import { EXAM_NAMES } from '@/lib/exams';

// The share image for each exam page: the exam name on the left, the loop diagram on the right.

export const OG_SIZE = { width: 1200, height: 630 };

const MIDNIGHT = '#021940';
const PAPER = '#fbf8f3';
const LAGOON = '#2cc8bd';
const MARIGOLD = '#ffc857';

export function LoopOgImage(t: ExamPageContent) {
  const cx = 300;
  const cy = 300;
  const r = 230;
  const steps = t.loop.steps;
  const pos = [
    { x: cx, y: cy - r },
    { x: cx + r, y: cy },
    { x: cx, y: cy + r },
    { x: cx - r, y: cy },
  ];

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: MIDNIGHT, color: PAPER, fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 560, padding: '0 0 0 72px' }}>
          <div style={{ display: 'flex', fontSize: 30, color: LAGOON, fontWeight: 700 }}>Polyngual</div>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, lineHeight: 1.02, marginTop: 18, letterSpacing: -2 }}>
            {t.locale === 'es' ? `Preparación ${EXAM_NAMES[t.exam]}` : `${EXAM_NAMES[t.exam]} practice`}
          </div>
          <div style={{ display: 'flex', fontSize: 30, lineHeight: 1.3, marginTop: 24, color: 'rgba(251,248,243,0.78)' }}>{t.loop.caption}</div>
        </div>
        <div style={{ display: 'flex', position: 'relative', width: 600, height: 600, marginTop: 15 }}>
          <svg width="600" height="600" viewBox="0 0 600 600" style={{ position: 'absolute', left: 0, top: 0 }}>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(251,248,243,0.22)" strokeWidth="4" strokeDasharray="10 12" />
            <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx} ${cy - r}`} fill="none" stroke={MARIGOLD} strokeWidth="6" />
            <circle cx={cx} cy={cy} r="112" fill="rgba(44,200,189,0.14)" stroke={LAGOON} strokeWidth="4" />
          </svg>
          {pos.map((p, i) => (
            <div
              key={steps[i]}
              style={{
                position: 'absolute',
                left: p.x - 95,
                top: p.y - 26,
                width: 190,
                height: 52,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 26,
                background: i === 3 ? MARIGOLD : PAPER,
                color: MIDNIGHT,
                fontSize: 19,
                fontWeight: 700,
                textAlign: 'center',
                padding: '0 12px',
              }}
            >
              {`${i + 1}. ${steps[i]}`}
            </div>
          ))}
          <div style={{ position: 'absolute', left: cx - 110, top: cy - 60, width: 220, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', fontSize: 34, fontWeight: 800 }}>{t.loop.centreTitle}</div>
            <div style={{ display: 'flex', fontSize: 22, marginTop: 8, color: LAGOON }}>
              {`${t.loop.gaps.length} → ${t.loop.gaps.filter((g) => !g.clearedInRound).length}`}
            </div>
            <div style={{ display: 'flex', fontSize: 18, marginTop: 6, color: 'rgba(251,248,243,0.7)' }}>{t.loop.returnLabel}</div>
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
