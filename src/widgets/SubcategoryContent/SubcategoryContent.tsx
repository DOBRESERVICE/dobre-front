import { FC } from 'react';

import styles from './SubcategoryContent.module.scss';

import { Pagination } from '@/interfaces';
import { SubCategory } from '@/interfaces/categories';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { SubcategoryAside } from '@/widgets/SubcategoryContent/components/SubcategoryAside/SubcategoryAside';
import { SubcategoryCatalog } from '@/widgets/SubcategoryContent/components/SubcategoryCatalog/SubcategoryCatalog';

interface CategoryContentProps {
  subCategoryData: SubCategory;
  products: any;
  pagination: Pagination;
}
export const SubcategoryContent: FC<CategoryContentProps> = ({ pagination, subCategoryData, products }) => {
  return (
    <Wrapper>
      <div className={styles.categoryContent}>
        <SubcategoryAside
          title={subCategoryData.name_sub}
          varietiesList={subCategoryData.varieties}
          products={products}
        />
        <SubcategoryCatalog pagination={pagination} products={products} />
      </div>
    </Wrapper>
  );
};
