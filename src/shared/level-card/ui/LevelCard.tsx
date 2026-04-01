import { useState, useMemo } from 'react';
import s from './LevelCard.module.css';
import { MIN_LEVEL, MAX_LEVEL } from '../model/constants';
import { PlusIcon, MinusIcon, MaleIcon, FemaleIcon, CrownIcon } from '@shared/icons';
import { NAMES } from '../model/names';

export function LevelCard() {
  const [level, setLevel] = useState<number>(MIN_LEVEL);
  const [isMale, setIsMale] = useState<boolean>(true);

  // Пример того, как можно было бы сделать, если бы гендер нельзя было изменить
  // const [name] = useState(() => {
  //   const adv = NAMES.adv[Math.floor(Math.random() * NAMES.adv.length)];
  //   const noun = isMale
  //     ? NAMES.nouns_m[Math.floor(Math.random() * NAMES.nouns_m.length)]
  //     : NAMES.nouns_f[Math.floor(Math.random() * NAMES.nouns_f.length)];
  //   return `${adv} ${noun}`;
  // });

  const name = useMemo(() => {
    const [advM, advF] = NAMES.adv[Math.floor(Math.random() * NAMES.adv.length)];
    const adv = isMale ? advM : advF;
    const noun = isMale
      ? NAMES.nouns_m[Math.floor(Math.random() * NAMES.nouns_m.length)]
      : NAMES.nouns_f[Math.floor(Math.random() * NAMES.nouns_f.length)];
    return `${adv} ${noun}`;
  }, [isMale]);

  return (
    <div className={s.card}>
      {level === MAX_LEVEL && (
        <div className={s.crown}><CrownIcon size={32} color="gold" /></div>
      )}

      <div className={s.header}>
        <span className={s.name}>{name}</span>
        <button
          className={`${s.button} ${s.gender}`}
          onClick={() => setIsMale(!isMale)}
          aria-label={isMale ? "Switch to female" : "Switch to male"}
        >
          {isMale ? <MaleIcon size={20} /> : <FemaleIcon size={20} />}
        </button>
      </div>

      <div className={s.content}>
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
    </div>
  );
}
