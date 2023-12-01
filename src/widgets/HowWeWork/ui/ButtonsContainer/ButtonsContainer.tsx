'use client';

import { Button } from '@mui/material';
import classNames from 'classnames';
import { useState } from 'react';

import styles from './ButtonsContainer.module.scss';

import { RentState } from '@/enums';
import { howWeWorkButton } from '@/shared/styles/buttonStyles';

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
