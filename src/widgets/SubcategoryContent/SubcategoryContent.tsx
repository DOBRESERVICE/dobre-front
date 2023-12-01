import { FC } from 'react';

import styles from './SubcategoryContent.module.scss';

import { Product, SubCategory } from '@/interfaces/categories';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { SubcategoryAside } from '@/widgets/SubcategoryContent/components/SubcategoryAside/SubcategoryAside';
import { SubcategoryCatalog } from '@/widgets/SubcategoryContent/components/SubcategoryCatalog/SubcategoryCatalog';

interface CategoryContentProps {
  subCategoryData: SubCategory;
  products: Product[];
}
export const SubcategoryContent: FC<CategoryContentProps> = ({ subCategoryData, products }) => {
  return (
    <Wrapper>
      <div className={styles.categoryContent}>
        <SubcategoryAside
          title={subCategoryData.name_sub}
          varietiesList={subCategoryData.varieties}
          products={products}
        />
        <SubcategoryCatalog products={products} />
      </div>
    </Wrapper>
  );
};
