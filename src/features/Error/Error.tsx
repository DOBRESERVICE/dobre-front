'use client';


import styles from './Error.module.scss';

export const Error = () => {
  return (
    <div className={styles.errorWrapper}>
      <p>Error while fetching</p>
    </div>
  );
};
