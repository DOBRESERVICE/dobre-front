import { FC } from 'react';
import styles from './DifficultyProgressBar.module.scss';
interface DifficultyProgressBar {
  strength: number;
  strengthText: string;
}

export const DifficultyProgressBar: FC<DifficultyProgressBar> = ({ strength, strengthText }) => {
  return (
    <div className={styles.progressWrapper}>
      <div>
        <p>Уровень сложности пароля</p>
        <span>{strengthText}</span>
      </div>
      <progress value={strength * 33.3} max='100' className={styles.difficultyProgressBar} />
    </div>
  );
};
