import styles from './ButtonsContainer.module.scss';
import classNames from 'classnames';
import { Button } from '@mui/material';
import { howWeWorkButton } from '@/styles/buttonStyles';
import { useState } from 'react';

export const ButtonsContainer = () => {
  const [currentType, setCurrentType] = useState('Беру');

  return (
    <div className={styles.buttonsWrapper}>
      <div
        className={classNames(styles.active, {
          [styles.take]: currentType === 'Беру',
          [styles.rent]: currentType === 'Сдаю',
        })}
      >
        <p>{currentType}</p>
      </div>
      <Button sx={howWeWorkButton} disableRipple onClick={() => setCurrentType('Беру')}>
        Беру
      </Button>
      <Button sx={howWeWorkButton} disableRipple onClick={() => setCurrentType('Сдаю')}>
        Сдаю
      </Button>
    </div>
  );
};
