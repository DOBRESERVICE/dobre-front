import { FC } from 'react';

import styles from './MultiArray.module.scss';

import { FeatureButton } from '@/shared/ui/MultiArray/ui/FeatureButton/FeatureButton';

interface MultiArrayProps {
  features: string[];
  search_tr_name: string;
}

export const MultiArray: FC<MultiArrayProps> = ({ features, search_tr_name }) => {
  return (
    <div className={styles.multiArrayWrapper}>
      {features?.map((feature) => <FeatureButton key={feature} search_tr_name={search_tr_name} value={feature} />)}
    </div>
  );
};
