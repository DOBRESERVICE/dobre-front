import styles from './CatalogBlocks.module.scss';
import { CatalogBlock } from '@/components/CatalogBlocks/common/CatalogBlock/CatalogBlock';
import { Product, Subcategory } from '@/interfaces/categories';
import { FC } from 'react';
import { getSubCategory } from '@/api/categoriesApi';

interface CatalogBlocksProps {
  subcategories: Subcategory[];
}

export const CatalogBlocks: FC<CatalogBlocksProps> = async ({ subcategories }) => {
  const fetchData = async () => {
    try {
      return await Promise.all(
        subcategories.map(async (subCategory) => {
          const { data } = await getSubCategory(subCategory.tr_name_sub);
          return data;
        })
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const subCategoriesData = await fetchData();
  return (
    <section className={styles.catalogBlocksSectionWrapper}>
      {subCategoriesData?.map((subcategory) => (
        <CatalogBlock
          key={subcategory.id_sub}
          barName={subcategory.name_sub}
          toolsData={subcategory.varieties}
          productsData={subcategory.products}
        />
      ))}
    </section>
  );
};
