import styles from './CatalogBlocks.module.scss';
import { CatalogBlock } from '@/components/CatalogBlocks/common/CatalogBlock/CatalogBlock';
import { Product, SubCategory, Subcategory } from '@/interfaces/categories';
import { FC } from 'react';
import { getSubCategory } from '@/api/categoriesApi';

interface CatalogBlocksProps {
  subcategories: SubCategory[];
}

export const CatalogBlocks: FC<CatalogBlocksProps> = ({ subcategories }) => {
  return (
    <section className={styles.catalogBlocksSectionWrapper}>
      {subcategories?.map((subcategory) => (
        <CatalogBlock
          key={subcategory.id_sub}
          barName={subcategory.name_sub}
          toolsData={subcategory.varieties}
          productsData={subcategory.products}
          subCategoryTrName={subcategory.tr_name_sub}
        />
      ))}
    </section>
  );
};
