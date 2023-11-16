import styles from './SectionHeader.module.scss';
import { FC, ReactNode } from 'react';

interface SectionHeader {
  children: ReactNode;
}
export const SectionHeader: FC<SectionHeader> = ({ children }) => {
  return <div className={styles.sectionHeaderWrapper}>{children}</div>;
};
