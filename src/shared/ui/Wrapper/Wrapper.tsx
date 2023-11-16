import styles from './Wrapper.module.scss';
import { ReactNode } from 'react';
export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
