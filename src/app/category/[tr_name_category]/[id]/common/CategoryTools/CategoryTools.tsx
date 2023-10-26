'use client';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import styles from './CategoryTools.module.scss';
import { ToolContainer } from '@/app/category/common/ToolContainer/ToolContainer';
import { Arrow } from '@/app/category/[tr_name_category]/[id]/common/Arrow/Arrow';
import { Product, Variety } from '@/interfaces/categories';
import { FC } from 'react';
import { useShownData } from '@/hooks/useShownData';

interface CategoryToolsProps {
  varietyProducts: Variety[];
  subCategoryTitle: string;
}
export const CategoryTools: FC<CategoryToolsProps> = ({ varietyProducts, subCategoryTitle }) => {
  const { shouldRenderExpandButton, itemsToShow, showAll, setShowAll } = useShownData(varietyProducts, 7);
  const barName = `${subCategoryTitle + ' ' + 'в аренду'}`;
  return (
    <section className={styles.categoryToolsWrapper}>
      <TopSectionBar barName={barName} hasLinkArrow={false} announcements='316 объявлений' />
      <ToolContainer toolsData={itemsToShow} />
      <div className={styles.seeAllContainer}>
        <hr />
        <div className={styles.content} role='button' onClick={() => setShowAll(!showAll)}>
          <p>{showAll ? 'Свернуть' : 'Развернуть все'}</p>
          <Arrow isOpen={showAll} />
        </div>
        <hr />
      </div>
    </section>
  );
};
