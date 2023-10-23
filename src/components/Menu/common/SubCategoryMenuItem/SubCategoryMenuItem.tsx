import styles from './SubCategoryMenuItem.module.scss';
import { Variety } from '@/interfaces/categories';
import { FC, useState } from 'react';
import { VarietyMenuItem } from '@/components/Menu/common/VarietyMenuItem/VarietyMenuItem';
import { useShownData } from '@/hooks/useShownData';

interface SubCategoryItemProps {
  title: string;
  varieties: Variety[];
}
export const SubCategoryMenuItem: FC<SubCategoryItemProps> = ({ title, varieties }) => {
  const { itemsToShow, shouldRenderExpandButton, handleShowAll } = useShownData(varieties, 6);

  return (
    <div className={styles.subCategoryWrapper}>
      <h3>{title}</h3>
      <div className={styles.varietiesWrapper}>
        {itemsToShow.map((item) => (
          <VarietyMenuItem varietyName={item.name_variety} />
        ))}
      </div>
      {shouldRenderExpandButton && (
        <div className={styles.seeAll} role='button' onClick={handleShowAll}>
          <p>Развернуть все</p>
          <div className={styles.arrow}></div>
        </div>
      )}
    </div>
  );
};
