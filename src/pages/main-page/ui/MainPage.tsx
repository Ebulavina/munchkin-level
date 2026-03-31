import { LevelStack } from '@widgets/level-stack';
import s from './MainPage.module.css';

export function MainPage() {
  return (
    <>
      <header className={s.header}>
        Munchkin Level
      </header>
      <LevelStack />
    </>
  );
}
