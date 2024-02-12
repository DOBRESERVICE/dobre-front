import { FC, useState } from 'react';
import styles from './Range.module.scss';
import { RangeInput } from '@/shared/ui/Range/ui/RangeInput/RangeInput';

interface RangeProps {
  search_tr_name: string;
  features: string[];
}
export const Range: FC<RangeProps> = ({ features, search_tr_name }) => {
  const labels = ['От', 'До'];
  const searchKeys = ['from', 'to'];

  return (
    <div className={styles.rangeWrapper}>
      {features.map((feature, index) => (
        <RangeInput
          key={feature}
          search_tr_name={search_tr_name}
          searchKey={searchKeys[index]}
          label={labels[index]}
          placeholder={feature}
        />
      ))}
    </div>
  );
};
