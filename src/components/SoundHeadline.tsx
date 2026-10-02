// Headline where each word first appears as a burst of sound bars that settles into the letters.
// Server-rendered and CSS-driven; the real text is always in the DOM for screen readers and SEO.

const WORD_STEP_MS = 110;

function barHeight(word: number, bar: number) {
  return (0.35 + 0.65 * Math.abs(Math.sin(word * 2.3 + bar * 1.7))).toFixed(2);
}

function SoundWord({ word, index }: { word: string; index: number }) {
  const bars = Math.max(3, Math.min(word.length, 9));
  return (
    <span className="sw" style={{ '--i': index, '--t': `${index * WORD_STEP_MS}ms` } as React.CSSProperties}>
      <span className="sw-text">{word}</span>
      <span className="sw-bars" aria-hidden>
        {Array.from({ length: bars }, (_, b) => (
          <span key={b} style={{ '--h': barHeight(index, b), '--b': b } as React.CSSProperties} />
        ))}
      </span>
    </span>
  );
}

// Splits text into animated words, keeping the spaces as real text so lines wrap naturally.
function words(text: string, start: number) {
  const parts = text.split(/(\s+)/).filter(Boolean);
  let i = start;
  const nodes = parts.map((part, k) => (/^\s+$/.test(part) ? part : <SoundWord key={k} word={part} index={i++} />));
  return { nodes, next: i };
}

export function SoundHeadline({ before, mark, after }: { before: string; mark: string; after: string }) {
  const a = words(before, 0);
  const m = words(mark, a.next);
  // Keep the punctuation glued to the highlighted phrase so it never wraps alone.
  const punct = after.slice(0, 1);
  const rest = words(after.slice(1), m.next);
  const waveDelay = `${m.next * WORD_STEP_MS + 650}ms`;
  return (
    <h1 className="hero-title">
      {a.nodes}
      <span className="nowrap">
        <span className="hero-mark">
          {m.nodes}
          <span className="hero-wave" aria-hidden style={{ animationDelay: `${waveDelay}, 0ms` }} />
        </span>
        <span className="sw-punct" style={{ '--t': `${(m.next - 1) * WORD_STEP_MS}ms` } as React.CSSProperties}>
          {punct}
        </span>
      </span>
      {rest.nodes}
    </h1>
  );
}
