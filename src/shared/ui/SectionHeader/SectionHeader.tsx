import { FC, ReactNode } from 'react';

import styles from './SectionHeader.module.scss';

interface SectionHeader {
  children: ReactNode;
}
export const SectionHeader: FC<SectionHeader> = ({ children }) => {
  return <div className={styles.sectionHeaderWrapper}>{children}</div>;
};
