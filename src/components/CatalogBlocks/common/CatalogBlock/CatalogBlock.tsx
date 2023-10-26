import styles from './CatalogBlock.module.scss';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { ProductsContainer } from '@/components/ProductsContainer/common/ProductsContainer';
import { FC } from 'react';
import { ToolContainer } from '@/app/category/common/ToolContainer/ToolContainer';
import { Product, Variety } from '@/interfaces/categories';

interface CatalogBlock {
  barName: string;
  toolsData: Variety[];
  productsData: Product[];
}
export const CatalogBlock: FC<CatalogBlock> = ({ barName, toolsData, productsData }) => {
  return (
    <>
      <div className={styles.content}>
        <TopSectionBar barName={barName} hasLinkArrow />
        <ToolContainer toolsData={toolsData} />
      </div>
      <ProductsContainer products={productsData} />
    </>
  );
};
