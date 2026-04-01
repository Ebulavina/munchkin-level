import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LevelCard } from '@shared/level-card';
import { MIN_LEVELS, MAX_LEVELS } from '../model/constants';
import { PlusIcon } from '@shared/icons';
import s from './LevelStack.module.css';

const createLevel = () => ({ id: uuidv4() });

export function LevelStack() {
  const [levels, setLevels] = useState(() =>
    Array.from({ length: MIN_LEVELS }, createLevel)
  );

  const addLevel = () => {
    setLevels(prev => [...prev, createLevel()]);
  };

  return (
    <div className={s.stack}>
      {levels.map(level => (
        <LevelCard key={level.id} />
      ))}
      {levels.length < MAX_LEVELS && (
        <button 
          className={s.button} 
          onClick={addLevel} 
          aria-label="Add level"
        >
          <PlusIcon size={32} />
        </button>
      )}
    </div>
  );
}