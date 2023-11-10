import styles from './VarietyMenuItem.module.scss';
import Link from 'next/link';
import { Dispatch, FC, SetStateAction } from 'react';
import { useAuthData } from '@/context/authContext';

interface VarietyMenuItemProps {
  varietyName: string;
  category: string;
  subcategory: string;
  tr_name_variety: string;
}
export const VarietyMenuItem: FC<VarietyMenuItemProps> = ({ varietyName, category, subcategory, tr_name_variety }) => {
  const { setIsMenuOpen } = useAuthData();
  return (
    <Link
      href={`/category/${category}/${subcategory}?variety=${tr_name_variety}`}
      className={styles.variety}
      onClick={() => setIsMenuOpen(false)}
    >
      {varietyName}
    </Link>
  );
};
