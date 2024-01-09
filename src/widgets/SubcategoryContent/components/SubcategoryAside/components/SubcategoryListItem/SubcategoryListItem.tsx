import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';

import styles from './SubcategoryListItem.module.scss';

import { useAuthData } from '@/shared/context/authContext';

interface SubcategoryListItem {
  varietyName: string;
  isActive: boolean;
  setActiveVariety: () => void;
  varietyTrName: string;
}
export const SubCategoryItem: FC<SubcategoryListItem> = ({
  varietyName,
  isActive,
  setActiveVariety,
  varietyTrName,
}) => {
  const { startTransition } = useAuthData();
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    setActiveVariety();
    startTransition(() => {
      router.push(`${pathname}?variety=${varietyTrName}`, { scroll: false });
    });
  };
  return (
    <button
      className={classNames(styles.subCategoryItem, {
        [styles.active]: isActive,
      })}
      onClick={handleClick}
    >
      {varietyName}
    </button>
  );
};
