'use client';

import { useEffect } from 'react';

import styles from './Loader.module.scss';

export const Loader = () => {
  useEffect(() => {
    document.documentElement.classList.add(styles.disabledScroll);
    return () => document.documentElement.classList.remove(styles.disabledScroll);
  }, []);

  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader} />
    </div>
  );
};
