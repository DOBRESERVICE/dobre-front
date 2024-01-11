import { FC } from 'react';
import styles from './Range.module.scss';
import { RangeInput } from '@/shared/ui/Range/ui/RangeInput/RangeInput';

interface RangeProps {
  search_tr_name: string;
  features: string[];
}
export const Range: FC<RangeProps> = ({ features, search_tr_name }) => {
  const labels = ['От', 'До'];

  return (
    <div className={styles.rangeWrapper}>
      {features.map((feature, index) => (
        <RangeInput key={feature} search_tr_name={search_tr_name} label={labels[index]} placeholder={feature} />
      ))}
    </div>
  );
};
