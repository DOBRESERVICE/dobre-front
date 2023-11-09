import styles from './VarietyMenuItem.module.scss';
import Link from 'next/link';
import { Dispatch, FC, SetStateAction } from 'react';

interface VarietyMenuItemProps {
  varietyName: string;
  category: string;
  subcategory: string;
  tr_name_variety: string;
}
export const VarietyMenuItem: FC<VarietyMenuItemProps> = ({ varietyName, category, subcategory, tr_name_variety }) => {
  return (
    <Link href={`/category/${category}/${subcategory}?variety=${tr_name_variety}`} className={styles.variety}>
      {varietyName}
    </Link>
  );
};
