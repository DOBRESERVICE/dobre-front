import styles from './AuthHeader.module.scss';
import { FC } from 'react';

interface AuthHeader {
  setActiveStep: () => void;
  actionType?: string;
  title: string;
  text: string;
}
export const AuthHeader: FC<AuthHeader> = ({ setActiveStep, actionType, text, title }) => {
  return (
    <div className={styles.authHeaderWrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>
        {text}
        <span className={styles.blueText} onClick={() => setActiveStep()}>
          {actionType}
        </span>
      </p>
    </div>
  );
};
