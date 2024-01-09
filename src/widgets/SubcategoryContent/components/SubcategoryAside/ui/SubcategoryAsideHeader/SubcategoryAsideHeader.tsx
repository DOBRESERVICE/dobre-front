import { FC } from 'react';

import styles from './SubcategoryAsideHeader.module.scss';

interface SubcategoryAsideHeader {
  headerName: string;
  id?: string;
}
export const SelectHeader: FC<SubcategoryAsideHeader> = ({ headerName, id }) => {
  return (
    <label htmlFor={id} className={styles.selectHeader}>
      {headerName}
    </label>
  );
};
