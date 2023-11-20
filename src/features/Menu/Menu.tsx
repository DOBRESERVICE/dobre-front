'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import styles from './Menu.module.scss';

import { Error } from '@/features/Error/Error';
import { Loader } from '@/features/Loader/Loader';
import { CategoryMenuItem } from '@/features/Menu/ui/CategoryMenuItem/CategoryMenuItem';
import { SubCategoryMenuItem } from '@/features/Menu/ui/SubCategoryMenuItem/SubCategoryMenuItem';
import { useAuthData } from '@/shared/context/authContext';
import { useCategories } from '@/shared/hooks/useCategories';

export const Menu = () => {
  const router = useRouter();
  useEffect(() => {
    document.documentElement.classList.add(styles.disabledScroll);
    return () => document.documentElement.classList.remove(styles.disabledScroll);
  }, []);
  const { categories, isError, isLoading } = useCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const { setIsMenuOpen } = useAuthData();
  const selectedCategory = categories?.find((category) => category.id_category === selectedCategoryId);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuContent}>
        <aside className={styles.menuAside}>
          {categories?.map((category) => (
            <CategoryMenuItem
              isActive={selectedCategory?.id_category === category.id_category}
              onClick={() => {
                router.push(`/category/${category.tr_name_category}`);
                setIsMenuOpen(false);
              }}
              onMouseEnter={() => setSelectedCategoryId(category.id_category)}
              categoryName={category.name_category}
              key={category.id_category}
            />
          ))}
        </aside>
        <hr className={styles.menuLine} />
        <div className={styles.subCategoriesContent}>
          <h2 className={styles.currentCategory}>{selectedCategory?.name_category}</h2>
          <div className={styles.subCategoriesWrapper}>
            {selectedCategory?.subcategories?.map((subCategory) => (
              <SubCategoryMenuItem
                key={subCategory.id_sub}
                title={subCategory.name_sub}
                varieties={subCategory.varieties}
                category={selectedCategory.tr_name_category}
                subcategory={subCategory.tr_name_sub}
              />
            ))}
            {selectedCategory?.subcategories.length === 0 && <p>Empty category</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
