import styles from './CategoryContent.module.scss';
import { CategoryCatalog } from '@/app/category/[tr_name_category]/[id]/common/CategoryCatalog/CategoryCatalog';
import { Aside } from '@/app/category/[tr_name_category]/[id]/common/Aside/Aside';
import { Product, SubCategory } from '@/interfaces/categories';
import { FC } from 'react';

interface CategoryContentProps {
  subCategoryData: SubCategory;
  products: Product[];
}
export const CategoryContent: FC<CategoryContentProps> = ({ subCategoryData, products }) => {
  return (
    <div className={styles.categoryContent}>
      <Aside title={subCategoryData.name_sub} varietiesList={subCategoryData.varieties} />
      <CategoryCatalog products={products} />
    </div>
  );
};
