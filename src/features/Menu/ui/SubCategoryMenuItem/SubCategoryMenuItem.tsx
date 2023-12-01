import classNames from 'classnames';
import { FC } from 'react';

import styles from './SubCategoryMenuItem.module.scss';

import { VarietyMenuItem } from '@/features/Menu/ui/VarietyMenuItem/VarietyMenuItem';
import { Variety } from '@/interfaces/categories';
import { useShownData } from '@/shared/hooks/useShownData';

interface SubCategoryItemProps {
  title: string;
  varieties: Variety[];
  category: string;
  subcategory: string;
}
export const SubCategoryMenuItem: FC<SubCategoryItemProps> = ({ title, varieties, category, subcategory }) => {
  const { itemsToShow, shouldRenderExpandButton, showAll, setShowAll } = useShownData(varieties, 6);

  return (
    <div className={styles.subCategoryWrapper}>
      <h3>{title}</h3>
      <div className={styles.varietiesWrapper}>
        {itemsToShow.map((item) => (
          <VarietyMenuItem
            varietyName={item.name_variety}
            key={item.tr_name_variety}
            category={category}
            subcategory={subcategory}
            tr_name_variety={item.tr_name_variety}
          />
        ))}
      </div>
      {shouldRenderExpandButton && (
        <div className={styles.seeAll} role='button' onClick={() => setShowAll(!showAll)}>
          <p>{!showAll ? 'Развернуть все' : 'Свернуть'}</p>
          <div
            className={classNames(styles.arrow, {
              [styles.rotateArrow]: showAll,
            })}
          />
        </div>
      )}
    </div>
  );
};
