import { LevelCard } from '@shared/level-card/ui/LevelCard';
import { useState } from 'react';
import { MAX_LEVELS, MIN_LEVELS } from '../model/constants';
import s from './LevelStack.module.css';
import { PlusIcon } from '@shared/icons';

export function LevelStack() {
  const [levels, setLevels] = useState<number>(MIN_LEVELS);

  return (
    <div className={s.stack}>
      {Array.from({ length: levels }, (_, i) => (
        <LevelCard key={i} />
      ))}
      {levels < MAX_LEVELS && (
        <button className={s.button} onClick={() => setLevels(levels + 1)}>
          <PlusIcon size={32} />
        </button>
      )}
    </div>
  );
}
