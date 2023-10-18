'use client';
import styles from './Loader.module.scss';
import { useAuthData } from '@/context/authContext';
import { Status } from '@/enums';

export const Loader = () => {
  const { status } = useAuthData();
  return (
    <div className={status === Status.LOADING ? styles.loaderWrapper : styles.initLoader}>
      <div className={styles.loader}></div>
    </div>
  );
};
