import { FC } from 'react';

import styles from './SubcategoryContent.module.scss';

import { Pagination } from '@/interfaces';
import { SubcategoryData } from '@/interfaces/categories';
import { featuresData } from '@/shared/data';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { SubcategoryAside } from '@/widgets/SubcategoryContent/components/SubcategoryAside/SubcategoryAside';
import { SubcategoryCatalog } from '@/widgets/SubcategoryContent/components/SubcategoryCatalog/SubcategoryCatalog';

interface CategoryContentProps {
  subCategoryData: SubcategoryData;
  products: any;
  pagination: Pagination;
  searchParams: { [p: string]: string };
}
export const SubcategoryContent: FC<CategoryContentProps> = async ({ pagination, subCategoryData, products }) => {
  return (
    <Wrapper>
      <div className={styles.categoryContent}>
        <SubcategoryAside
          title={subCategoryData.name}
          varietiesList={subCategoryData.varieties}
          products={[]}
          varietyFeatures={featuresData}
        />
        <SubcategoryCatalog pagination={pagination} products={[]} />
      </div>
    </Wrapper>
  );
};
