'use client';
import styles from './AvailableNow.module.scss';
import { Checkbox } from '@mui/material';
import { authCheckBox } from '@/shared/styles/buttonStyles';
export const AvailableFilter = () => {
  return (
    <div className={styles.avalableNowWrapper}>
      <Checkbox sx={authCheckBox} />
      <p>Доступен сейчас</p>
    </div>
  );
};
