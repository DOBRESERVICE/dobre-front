'use client';
import styles from './ButtonsContainer.module.scss';
import classNames from 'classnames';
import { Button } from '@mui/material';
import { howWeWorkButton } from '@/shared/styles/buttonStyles';
import { useState } from 'react';
import { RentState } from '@/enums';

export const ButtonsContainer = () => {
  const [currentType, setCurrentType] = useState<RentState>(RentState.TakeRent);

  return (
    <div className={styles.buttonsWrapper}>
      <div
        className={classNames(styles.active, {
          [styles.take]: currentType === RentState.TakeRent,
          [styles.rent]: currentType === RentState.GiveRent,
        })}
      >
        <p>{currentType}</p>
      </div>
      <Button sx={howWeWorkButton} disableRipple onClick={() => setCurrentType(RentState.TakeRent)}>
        Беру
      </Button>
      <Button sx={howWeWorkButton} disableRipple onClick={() => setCurrentType(RentState.GiveRent)}>
        Сдаю
      </Button>
    </div>
  );
};
