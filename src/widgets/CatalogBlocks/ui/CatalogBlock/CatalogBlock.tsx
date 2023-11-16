'use client';
import styles from './CatalogBlock.module.scss';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { ProductsContainer } from '@/widgets/ProductsContainer/ProductsContainer';
import { FC, useState } from 'react';
import { ToolContainer } from '@/widgets/ToolContainer/ToolContainer';
import { Product, Variety } from '@/interfaces/categories';
import { useShownData } from '@/shared/hooks/useShownData';

interface CatalogBlock {
  barName: string;
  toolsData: Variety[];
  productsData: Product[];
  subCategoryTrName: string;
}
export const CatalogBlock: FC<CatalogBlock> = ({ barName, toolsData, productsData, subCategoryTrName }) => {
  const { itemsToShow, setShowAll, showAll } = useShownData(toolsData, 14);
  return (
    <>
      {toolsData.length ? (
        <div className={styles.content}>
          <TopSectionBar barName={barName} hasLinkArrow onClick={() => setShowAll(!showAll)} />
          <ToolContainer subCategoryTrName={subCategoryTrName} toolsData={itemsToShow} />
        </div>
      ) : (
        ''
      )}
      {productsData.length ? <ProductsContainer products={productsData} /> : ''}
    </>
  );
};
