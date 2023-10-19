'use client';
import styles from './Menu.module.scss';
import { useEffect, useState } from 'react';
import { CategoryItem } from '@/components/Menu/common/CategoryItem/CategoryItem';
import { getCategories } from '@/api/categoriesApi';
import { fetcher, useCategories } from '@/hooks/useCategories';
import useSWR from 'swr';
import { Categories } from '@/interfaces/categories';

export const Menu = () => {
  useEffect(() => {
    document.documentElement.classList.add(styles.disabledScroll);
    return () => document.documentElement.classList.remove(styles.disabledScroll);
  }, []);
  const [activeCategory, setActiveCategory] = useState(0);
  // const { categories, isError, isLoading } = useCategories();
  // console.log(categories);
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
