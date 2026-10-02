// Small illustrative visuals for each benefit. Pure markup; motion runs in CSS once the row is revealed.

const WORDS = [
  { word: 'comfortable', score: 58 },
  { word: 'thought', score: 64 },
  { word: 'world', score: 71 },
];
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

export function BenefitVisual({ kind }: { kind: number }) {
  if (kind === 0) {
    return (
      <div className="bv bv-words" aria-hidden>
        {WORDS.map((w, i) => (
          <div key={w.word} className="bv-word" style={{ '--s': w.score / 100, '--i': i } as React.CSSProperties}>
            <span lang="en">{w.word}</span>
            <span className="bv-bar">
              <span />
            </span>
            <span className="bv-score">{w.score}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === 1) {
    return (
      <div className="bv bv-level" aria-hidden>
        <div className="bv-ladder">
          {LEVELS.map((level, i) => (
            <span key={level} data-level={i}>
              {level}
            </span>
          ))}
          <span className="bv-marker" />
        </div>
        <span className="bv-share">LinkedIn ↗</span>
      </div>
    );
  }
  return (
    <div className="bv bv-exam" aria-hidden>
      <div className="bv-exam-head">
        <span>TOEFL · Speaking</span>
        <span className="bv-timer">0:45</span>
      </div>
      <ul>
        <li data-ok>Organización</li>
        <li data-ok>Vocabulario</li>
        <li>Conectores</li>
      </ul>
    </div>
  );
}
