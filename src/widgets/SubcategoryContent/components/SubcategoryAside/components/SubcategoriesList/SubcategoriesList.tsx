'use client';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import styles from './SubcategoriesList.module.scss';

import { Variety } from '@/interfaces/categories';
import { useShownData } from '@/shared/hooks/useShownData';
import { SubCategoryItem } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/SubcategoryListItem/SubcategoryListItem';

import { blueNextArrow } from '../../../../../../shared/image';

interface SubCategoriesProps {
  varietiesList: Variety[];
}
export const SubcategoriesList: FC<SubCategoriesProps> = ({ varietiesList }) => {
  const params = useSearchParams();
  const pathName = usePathname();
  const newSearchParams = new URLSearchParams(params);
  const trVariety = newSearchParams.get('variety') ?? 'all';
  const router = useRouter();
  useEffect(() => {
    if (trVariety === 'all') {
      router.replace(`${pathName}?variety=all`);
    }
  }, [router, trVariety, pathName]);
  const [activeSubCategory, setActiveSubCategory] = useState(trVariety);
  const { itemsToShow, shouldRenderExpandButton, showAll, setShowAll } = useShownData(varietiesList, 9);
  return (
    <div className={styles.subCategoriesContainer}>
      <ul className={styles.subCategoriesList}>
        <SubCategoryItem
          varietyName='Все'
          isActive={activeSubCategory === 'all'}
          onClick={() => setActiveSubCategory('all')}
          varietyTrName='all'
        />
        {itemsToShow.map((item) => (
          <SubCategoryItem
            varietyName={item.name_variety}
            varietyTrName={item.tr_name_variety}
            key={item.id_variety}
            isActive={activeSubCategory === item.tr_name_variety}
            onClick={() => setActiveSubCategory(item.tr_name_variety)}
          />
        ))}
      </ul>
      {shouldRenderExpandButton && (
        <div className={styles.seeAll} role='button' onClick={() => setShowAll(!showAll)}>
          <p>{!showAll ? 'Развернуть все' : 'Свернуть все'}</p>
          <Image src={blueNextArrow} alt='next' />
        </div>
      )}
    </div>
  );
};
