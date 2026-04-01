import { useState } from 'react';
import s from './LevelCard.module.css';
import { MIN_LEVEL, MAX_LEVEL } from '../model/constants';
import { PlusIcon, MinusIcon, MaleIcon, FemaleIcon } from '@shared/icons';

export function LevelCard() {
  const [level, setLevel] = useState<number>(MIN_LEVEL);
  const [isMale, setIsMale] = useState<boolean>(true);

  return (
    <div className={s.card}>
      <button
        className={`${s.button} ${s.gender}`}
        onClick={() => setIsMale(!isMale)}
        aria-label={isMale ? "Switch to female" : "Switch to male"}
      >
        {isMale ? <MaleIcon size={20} /> : <FemaleIcon size={20} />}
      </button>
      <button
        className={s.button}
        onClick={() => setLevel(level - 1)}
        disabled={level === MIN_LEVEL}
        aria-label="Decrease level"
      >
        <MinusIcon size={32} />
      </button>
      <div className={s.number}>{level}</div>
      <button
        className={s.button}
        onClick={() => setLevel(level + 1)}
        disabled={level === MAX_LEVEL}
        aria-label="Increase level"
      >
        <PlusIcon size={32} />
      </button>
    </div>
  );
}
