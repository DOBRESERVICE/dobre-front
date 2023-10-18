'use client';
import styles from './Menu.module.scss';
import { useEffect, useState } from 'react';
import { CategoryItem } from '@/components/Menu/common/CategoryItem/CategoryItem';
import { getCategories } from '@/api/categoriesApi';

export const Menu = () => {
  useEffect(() => {
    document.documentElement.classList.add(styles.disabledScroll);
  }, []);
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <div className={styles.menuWrapper}>
      <aside className={styles.menuAside}>
        {/*{categories?.map((item) => (*/}
        {/*  <CategoryItem*/}
        {/*    isActive={activeCategory === Number(item.id_category)}*/}
        {/*    onClick={() => setActiveCategory(Number(item.id_category))}*/}
        {/*    categoryName={item.name_category}*/}
        {/*    key={item.id_category}*/}
        {/*  />*/}
        {/*))}*/}
      </aside>
    </div>
  );
};
