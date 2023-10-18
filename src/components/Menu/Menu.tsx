'use client';
import styles from './Menu.module.scss';
import { useEffect } from 'react';
export const Menu = () => {
  useEffect(() => {
    document.documentElement.classList.add(styles.disabledScroll);
  }, []);
  return <div className={styles.menuWrapper}></div>;
};
