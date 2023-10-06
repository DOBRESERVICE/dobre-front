import styles from './CatalogBlocks.module.scss';
import { catalogData } from '@/data';
import { CatalogBlock } from '@/components/CatalogBlocks/common/CatalogBlock/CatalogBlock';
export const CatalogBlocks = () => {
  return (
    <section className={styles.catalogBlocksSectionWrapper}>
      {catalogData.map((catalogItem) => (
        <CatalogBlock
          key={catalogItem.id}
          barName={catalogItem.title}
          toolsData={catalogItem.subCategories}
          productsData={catalogItem.items}
        />
      ))}
    </section>
  );
};
