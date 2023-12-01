import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import styles from './SubcategoryListItem.module.scss';

interface SubcategoryListItem {
  varietyName: string;
  isActive: boolean;
  onClick: () => void;
  varietyTrName: string;
}
export const SubCategoryItem: FC<SubcategoryListItem> = ({ varietyName, isActive, onClick, varietyTrName }) => {
  return (
    <Link
      scroll={false}
      href={`?${new URLSearchParams({ variety: varietyTrName })}`}
      className={classNames(styles.subCategoryItem, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
      role='button'
    >
      {varietyName}
    </Link>
  );
};
