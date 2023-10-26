'use client';
import styles from './Loader.module.scss';
import { useAuthData } from '@/context/authContext';
import { Status } from '@/enums';

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};
