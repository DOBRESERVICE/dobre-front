import styles from './AuthHeader.module.scss';
import { FC } from 'react';
import Link from 'next/link';

interface AuthHeader {
  link: string;
  actionType?: string;
  title: string;
  text: string;
}
export const AuthHeader: FC<AuthHeader> = ({ link, actionType, text, title }) => {
  return (
    <div className={styles.authHeaderWrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>
        {text}
        <Link className={styles.blueText} href={`/${link}`}>
          {actionType}
        </Link>
      </p>
    </div>
  );
};
