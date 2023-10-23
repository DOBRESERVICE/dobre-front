'use client';
import styles from './SubCategories.module.scss';
import Image from 'next/image';
import { blueNextArrow } from '@/assets/image';
import { useState } from 'react';
import { subCategoriesData } from '@/data';
import { useShownData } from '@/hooks/useShownData';
import { SubCategoryItem } from '@/app/category/[tr_name_category]/[id]/common/SubCategoryItem/SubCategoryItem';
export const SubCategories = () => {
  const [activeSubCategory, setActiveSubCategory] = useState(0);
  const { handleShowAll, itemsToShow, shouldRenderExpandButton } = useShownData(subCategoriesData, 9);
  return (
    <div className={styles.subCategoriesContainer}>
      <ul className={styles.subCategoriesList}>
        <SubCategoryItem
          subCategoryName='Все'
          isActive={activeSubCategory === 0}
          onClick={() => setActiveSubCategory(0)}
        />
        {itemsToShow.map((item) => (
          <SubCategoryItem
            subCategoryName={item.text}
            key={item.id}
            isActive={activeSubCategory === item.id}
            onClick={() => setActiveSubCategory(item.id)}
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
