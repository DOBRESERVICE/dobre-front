import styles from './SubcategoryContent.module.scss';
import { SubcategoryCatalog } from '@/widgets/SubcategoryContent/components/SubcategoryCatalog/SubcategoryCatalog';
import { SubcategoryAside } from '@/widgets/SubcategoryContent/components/SubcategoryAside/SubcategoryAside';
import { Product, SubCategory } from '@/interfaces/categories';
import { FC } from 'react';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

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
