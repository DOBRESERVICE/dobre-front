'use client';

import { FC } from 'react';

import styles from './SubcategoryToolsContainer.module.scss';

import { Variety } from '@/interfaces/categories';
import { useShownData } from '@/shared/hooks/useShownData';
import { Arrow } from '@/shared/ui/Arrow/Arrow';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { ToolContainer } from '@/widgets/ToolContainer/ToolContainer';

interface CategoryToolsProps {
  varietyProducts: Variety[];
  subCategoryTitle: string;
  subCategoryTrName: string;
}
export const SubcategoryToolsContainer: FC<CategoryToolsProps> = ({
  varietyProducts,
  subCategoryTitle,
  subCategoryTrName,
}) => {
  const { shouldRenderExpandButton, itemsToShow, showAll, setShowAll } = useShownData(varietyProducts, 7);
  const barName = `${`${subCategoryTitle} ` + `в аренду`}`;
  return (
    <section className={styles.categoryToolsWrapper}>
      <TopSectionBar barName={barName} hasLinkArrow={false} announcements='316 объявлений' />
      <ToolContainer toolsData={itemsToShow} subCategoryTrName={subCategoryTrName} />
      <div className={styles.seeAllContainer}>
        <hr />
        {shouldRenderExpandButton && (
          <div className={styles.content} role='button' onClick={() => setShowAll(!showAll)}>
            <p>{showAll ? 'Свернуть все' : 'Развернуть все'}</p>
            <Arrow isOpen={showAll} />
          </div>
        )}
        <hr />
      </div>
    </section>
  );
};
