'use client';
import styles from './Loader.module.scss';
import { useEffect } from 'react';

export const Loader = () => {
  useEffect(() => {
    document.documentElement.classList.add(styles.disabledScroll);
    return () => document.documentElement.classList.remove(styles.disabledScroll);
  }, []);

  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};
