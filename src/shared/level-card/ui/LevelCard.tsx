import { useState } from 'react';
import s from './LevelCard.module.css';
import { MIN_LEVEL, MAX_LEVEL } from '../model/constants';

export function LevelCard() {
  const [level, setLevel] = useState<number>(MIN_LEVEL);
  const [isMale, setIsMale] = useState<boolean>(true);

  return (
    <div className={s.card}>
      <div className={s.header}>
        <button 
          className={`${s.button} ${s.gender}`} 
          onClick={() => setIsMale(!isMale)}
        >
          {isMale ? '\u2642' : '\u2640'}
        </button>
      </div>
      <div className={s.content}>
        <button 
          className={s.button} 
          onClick={() => setLevel(level - 1)}      
          disabled={level === MIN_LEVEL}
        >
          {'\u2212'}
        </button>
        <div className={s.number}>{level}</div>
        <button 
          className={s.button} 
          onClick={() => setLevel(level + 1)} 
          disabled={level === MAX_LEVEL}
        >
          {'\u002B'}
        </button>
      </div>
    </div>
  );
}
