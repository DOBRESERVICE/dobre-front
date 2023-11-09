'use client';
import styles from './Menu.module.scss';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useCategories } from '@/hooks/useCategories';
import { CategoryMenuItem } from '@/components/Menu/common/CategoryMenuItem/CategoryMenuItem';
import { SubCategoryMenuItem } from '@/components/Menu/common/SubCategoryMenuItem/SubCategoryMenuItem';
import { Loader } from '@/components/Loader/Loader';
import { useRouter, useSearchParams } from 'next/navigation';
import { Error } from '@/components/Error/Error';

interface MenuProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}
export const Menu: FC<MenuProps> = ({ setIsMenuOpen }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('variety');
  const [prevSearch, setPrevSearch] = useState(search);
  useEffect(() => {
    document.documentElement.classList.add(styles.disabledScroll);
    return () => document.documentElement.classList.remove(styles.disabledScroll);
  }, []);
  useEffect(() => {
    if (prevSearch !== search) {
      setIsMenuOpen(false);
    }
    setPrevSearch(search);
  }, [search]);
  const { categories, isError, isLoading } = useCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState(3);

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
              onClick={() => router.push(`/category/${category.tr_name_category}`)}
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
                setIsMenuOpen={setIsMenuOpen}
              />
            ))}
            {!selectedCategory?.subcategories && <p>Empty category</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
