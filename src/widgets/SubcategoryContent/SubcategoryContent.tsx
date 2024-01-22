import { FC } from 'react';
import styles from './SubcategoryContent.module.scss';
import { Pagination } from '@/interfaces';
import { SubCategory } from '@/interfaces/categories';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { SubcategoryAside } from '@/widgets/SubcategoryContent/components/SubcategoryAside/SubcategoryAside';
import { SubcategoryCatalog } from '@/widgets/SubcategoryContent/components/SubcategoryCatalog/SubcategoryCatalog';
import { getVarietyFeatures } from '@/shared/api/categoriesApi';

interface CategoryContentProps {
  subCategoryData: SubCategory;
  products: any;
  pagination: Pagination;
  searchParams: { [p: string]: string };
}
export const SubcategoryContent: FC<CategoryContentProps> = async ({
  searchParams,
  pagination,
  subCategoryData,
  products,
}) => {
  const trVariety = searchParams.variety ?? 'all';
  const { data: varietyFeatures } = await getVarietyFeatures(trVariety);
  return (
    <Wrapper>
      <div className={styles.categoryContent}>
        <SubcategoryAside
          title={subCategoryData.name_sub}
          varietiesList={subCategoryData.varieties}
          products={products}
          varietyFeatures={varietyFeatures}
        />
        <SubcategoryCatalog pagination={pagination} products={products} />
      </div>
    </Wrapper>
  );
};
