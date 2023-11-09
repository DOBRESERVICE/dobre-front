import styles from './CategoryContent.module.scss';
import { CategoryCatalog } from '@/app/category/[tr_name_category]/[id]/common/CategoryCatalog/CategoryCatalog';
import { Aside } from '@/app/category/[tr_name_category]/[id]/common/Aside/Aside';
import { Product, SubCategory } from '@/interfaces/categories';
import { FC } from 'react';
import { Wrapper } from '@/components/Wrapper/Wrapper';

interface CategoryContentProps {
  subCategoryData: SubCategory;
  products: Product[];
}
export const CategoryContent: FC<CategoryContentProps> = ({ subCategoryData, products }) => {
  return (
    <Wrapper>
      <div className={styles.categoryContent}>
        <Aside title={subCategoryData.name_sub} varietiesList={subCategoryData.varieties} products={products} />
        <CategoryCatalog products={products} />
      </div>
    </Wrapper>
  );
};
