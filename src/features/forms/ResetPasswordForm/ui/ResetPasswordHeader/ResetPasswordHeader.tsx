import { FC } from 'react';

import styles from './ResetPasswordHeader.module.scss';

interface ResetPasswordHeader {
  title: string;
  text: string;
}
export const ResetPasswordHeader: FC<ResetPasswordHeader> = ({ text, title }) => {
  return (
    <div className={styles.resetHeaderWrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
