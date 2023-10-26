'use client';
import styles from './SubCategories.module.scss';
import Image from 'next/image';
import { blueNextArrow } from '@/assets/image';
import { FC, useState } from 'react';
import { subCategoriesData } from '@/data';
import { useShownData } from '@/hooks/useShownData';
import { SubCategoryItem } from '@/app/category/[tr_name_category]/[id]/common/SubCategoryItem/SubCategoryItem';
import { Variety } from '@/interfaces/categories';

interface SubCategoriesProps {
  varietiesList: Variety[];
}
export const SubCategories: FC<SubCategoriesProps> = ({ varietiesList }) => {
  const [activeSubCategory, setActiveSubCategory] = useState('0');
  const { handleShowAll, itemsToShow, shouldRenderExpandButton } = useShownData(varietiesList, 9);
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
        <div className={styles.seeAll} role='button' onClick={handleShowAll}>
          <p>Развернуть все</p>
          <Image src={blueNextArrow} alt='next' />
        </div>
      )}
    </div>
  );
};
