import styles from './CatalogBlock.module.scss';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { ToolContainer } from '@/app/catalog/common/ToolContainer/ToolContainer';
import { ProductsContainer } from '@/components/ProductsContainer/common/ProductsContainer';
import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { FC } from 'react';

interface ToolsData {
  id: number;
  title: string;
}
interface CatalogBlock {
  barName: string;
  toolsData: ToolsData[];
  productsData: ProductItem[];
}
export const CatalogBlock: FC<CatalogBlock> = ({ barName, toolsData, productsData }) => {
  return (
    <>
      <div className={styles.content}>
        <TopSectionBar barName={barName} hasLinkArrow />
        <ToolContainer toolsData={toolsData} />
      </div>
      <ProductsContainer productsData={productsData} />
    </>
  );
};
