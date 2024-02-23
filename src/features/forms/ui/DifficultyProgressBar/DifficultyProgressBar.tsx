import { FC } from 'react';

import styles from './DifficultyProgressBar.module.scss';

import { usePasswordStrength } from '@/shared/hooks/usePasswordStrength';

interface DifficultyProgressBar {
  passwordValue: string;
}

export const DifficultyProgressBar: FC<DifficultyProgressBar> = ({ passwordValue }) => {
  const { strengthText, strengthPassword } = usePasswordStrength(passwordValue);
  return (
    <div className={styles.progressWrapper}>
      <div>
        <p>Уровень сложности пароля</p>
        <span>{strengthText}</span>
      </div>
      <progress value={strengthPassword * 33.3} max='100' className={styles.difficultyProgressBar} />
    </div>
  );
};
