'use client';

import { useEffect, useState } from 'react';
import type { Dictionary } from '@/content/es';

const ADVANCE_MS = 1150;

export function WordGame({ copy }: { copy: Dictionary['games']['game'] }) {
  const [round, setRound] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [game, setGame] = useState(0);

  const done = round >= copy.rounds.length;
  const current = copy.rounds[Math.min(round, copy.rounds.length - 1)];
  const isRight = picked === current.answer;

  useEffect(() => {
    if (!picked) return;
    const timer = window.setTimeout(() => {
      setPicked(null);
      setRound((r) => r + 1);
    }, ADVANCE_MS);
    return () => window.clearTimeout(timer);
  }, [picked]);

  function choose(option: string) {
    if (picked) return;
    setPicked(option);
    if (option === current.answer) {
      setScore((s) => s + 10);
      setCorrect((c) => c + 1);
    }
  }

  function restart() {
    setRound(0);
    setPicked(null);
    setScore(0);
    setCorrect(0);
    setGame((g) => g + 1);
  }

  return (
    <div className="game" data-state={done ? 'done' : picked ? (isRight ? 'right' : 'wrong') : 'play'}>
      <div className="game-head">
        <div>
          <p className="game-name">{copy.name}</p>
          <p className="game-words">
            {copy.weekWords}:{' '}
            <span lang="en">{copy.rounds.map((r) => r.answer.toLowerCase()).join(' · ')}</span>
          </p>
        </div>
        <div className="game-points" aria-label={`${copy.points}: ${score}`}>
          <span className="game-points-num" key={score}>
            {score}
          </span>
          <span>{copy.points}</span>
        </div>
      </div>

      <ol className="game-progress" aria-label={`${copy.round} ${Math.min(round + 1, copy.rounds.length)} / ${copy.rounds.length}`}>
        {copy.rounds.map((_, i) => (
          <li key={i} data-state={i < round ? 'done' : i === round && !done ? 'now' : 'todo'} />
        ))}
      </ol>

      {done ? (
        <div className="game-done" key={`done-${game}`}>
          <p className="game-done-score">
            {correct}/{copy.rounds.length}
          </p>
          <p className="game-done-title">{copy.doneTitle}</p>
          <p className="game-done-body">
            {correct} {copy.doneBody}
          </p>
          <button type="button" className="btn btn-dark" onClick={restart}>
            <span>{copy.again}</span>
          </button>
        </div>
      ) : (
        <div className="game-round" key={`${game}-${round}`}>
          <p className="game-sentence" lang="en">
            {current.before}
            <span className="game-gap" data-filled={!!picked}>
              {picked ? current.answer : ' '}
            </span>
            {current.after}
          </p>
          <div className="game-options" role="group">
            {current.options.map((option) => {
              const state = !picked ? 'idle' : option === current.answer ? 'right' : option === picked ? 'wrong' : 'dim';
              return (
                <button key={option} type="button" className="game-option" data-state={state} disabled={!!picked} onClick={() => choose(option)} lang="en">
                  {option}
                  {state === 'right' && picked === option ? <span className="game-plus">+10</span> : null}
                </button>
              );
            })}
          </div>
          <p className="game-feedback" aria-live="polite">
            {picked ? (isRight ? copy.right : `${copy.wrong} «${current.answer}».`) : ' '}
          </p>
        </div>
      )}
      <p className="game-note">{copy.note}</p>
    </div>
  );
}
