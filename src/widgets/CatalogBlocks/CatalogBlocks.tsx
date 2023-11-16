import styles from './CatalogBlocks.module.scss';
import { CatalogBlock } from '@/widgets/CatalogBlocks/ui/CatalogBlock/CatalogBlock';
import { Product, SubCategory, Subcategory } from '@/interfaces/categories';
import { FC } from 'react';
import { getSubCategory } from '../../shared/api/categoriesApi';

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
