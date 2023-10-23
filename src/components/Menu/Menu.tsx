'use client';
import styles from './Menu.module.scss';
import { useEffect, useState } from 'react';
import { useCategories } from '@/hooks/useCategories';
import { CategoryMenuItem } from '@/components/Menu/common/CategoryMenuItem/CategoryMenuItem';
import { SubCategoryMenuItem } from '@/components/Menu/common/SubCategoryMenuItem/SubCategoryMenuItem';
import { Loader } from '@/components/Loader/Loader';
import { useRouter } from 'next/navigation';

export const Menu = () => {
  const router = useRouter();
  useEffect(() => {
    document.documentElement.classList.add(styles.disabledScroll);
    return () => document.documentElement.classList.remove(styles.disabledScroll);
  }, []);
  const [activeCategory, setActiveCategory] = useState(1);
  const { categories, isError, isLoading } = useCategories();
  const subCategories = categories && categories[activeCategory - 1].subcategories;
  const currentCategoryName = categories && categories[activeCategory - 1].name_category;
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuContent}>
        <aside className={styles.menuAside}>
          {categories?.map((item) => (
            <CategoryMenuItem
              isActive={activeCategory === Number(item.id_category)}
              onClick={() => router.push(`/category/${item.tr_name_category}`)}
              onMouseEnter={() => setActiveCategory(Number(item.id_category))}
              categoryName={item.name_category}
              key={item.id_category}
            />
          ))}
        </aside>
        <hr className={styles.menuLine} />
        <div className={styles.subCategoriesContent}>
          <h2 className={styles.currentCategory}>{currentCategoryName}</h2>
          <div className={styles.subCategoriesWrapper}>
            {subCategories?.map((subCategory) => (
              <SubCategoryMenuItem
                key={subCategory.id_sub}
                title={subCategory.name_sub}
                varieties={subCategory.varieties}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
