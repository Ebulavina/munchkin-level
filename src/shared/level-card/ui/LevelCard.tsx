import { useState } from 'react';
import s from './LevelCard.module.css';
import { MIN_LEVEL, MAX_LEVEL } from '../model/constants';

export function LevelCard() {
  const [level, setLevel] = useState<number>(MIN_LEVEL);

  return (
    <div className={s.card}>
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
  );
}
