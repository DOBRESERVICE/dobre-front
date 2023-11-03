'use client';
import styles from './Error.module.scss';
import { useRouter } from 'next/navigation';
export const Error = () => {
  const router = useRouter();
  return (
    <div className={styles.errorWrapper}>
      <p>Error while fetching</p>
    </div>
  );
};
