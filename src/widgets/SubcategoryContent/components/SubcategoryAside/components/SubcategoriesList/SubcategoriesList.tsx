'use client';

import Image from 'next/image';
import { FC, useState } from 'react';

import styles from './SubcategoriesList.module.scss';

import { Variety } from '@/interfaces/categories';
import { useShownData } from '@/shared/hooks/useShownData';
import { SubCategoryItem } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/SubcategoryListItem/SubcategoryListItem';

import { blueNextArrow } from '../../../../../../shared/image';

interface SubCategoriesProps {
  varietiesList: Variety[];
}
export const SubcategoriesList: FC<SubCategoriesProps> = ({ varietiesList }) => {
  const [activeSubCategory, setActiveSubCategory] = useState('0');
  const { itemsToShow, shouldRenderExpandButton, showAll, setShowAll } = useShownData(varietiesList, 9);
  return (
    <div className={styles.subCategoriesContainer}>
      <ul className={styles.subCategoriesList}>
        <SubCategoryItem
          varietyName='Все'
          isActive={activeSubCategory === '0'}
          onClick={() => setActiveSubCategory('0')}
          varietyTrName='all'
        />
        {itemsToShow.map((item) => (
          <SubCategoryItem
            varietyName={item.name_variety}
            varietyTrName={item.tr_name_variety}
            key={item.id_variety}
            isActive={activeSubCategory === item.id_variety}
            onClick={() => setActiveSubCategory(item.id_variety)}
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
