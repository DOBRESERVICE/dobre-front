import { FC } from 'react';

import styles from './MultiCheck.module.scss';

import { useShownData } from '@/shared/hooks/useShownData';
import { CheckItem } from '@/shared/ui/MultiCheck/ui/CheckItem/CheckItem';
import { ShowAllButton } from '@/shared/ui/ShowAllButton/ShowAllButton';

interface MultiCheckProps {
  features: string[];
  search_tr_name: string;
}
export const MultiCheck: FC<MultiCheckProps> = ({ features, search_tr_name }) => {
  const { itemsToShow, showAll, shouldRenderExpandButton, setShowAll } = useShownData(features, 5);
  return (
    <div className={styles.multiCheckWrapper}>
      {itemsToShow?.map((feature) => <CheckItem key={feature} search_tr_name={search_tr_name} value={feature} />)}
      {shouldRenderExpandButton && <ShowAllButton showAll={showAll} setShowAll={() => setShowAll(!showAll)} />}
    </div>
  );
};
