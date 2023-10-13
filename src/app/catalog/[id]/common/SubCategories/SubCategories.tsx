'use client';
import styles from './SubCategories.module.scss';
import Image from 'next/image';
import { blueNextArrow } from '@/assets/image';
import { SubCategoryItem } from '@/app/catalog/[id]/common/SubCategoryItem/SubCategoryItem';
import { useState } from 'react';
import { subCategoriesData } from '@/data';
export const SubCategories = () => {
  const [activeSubCategory, setActiveSubCategory] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? subCategoriesData : subCategoriesData.slice(0, 9);
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
      {subCategoriesData.length > 5 && !showAll && (
        <div className={styles.seeAll} role='button' onClick={() => setShowAll(true)}>
          <p>Развернуть все</p>
          <Image src={blueNextArrow} alt='next' />
        </div>
      )}
    </div>
  );
};
