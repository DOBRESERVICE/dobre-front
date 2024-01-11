import { FC } from 'react';

import styles from './TariffCard.module.scss';

import { Term } from '@/interfaces/categories';
import { PeriodMapping } from '@/shared/lib';

interface TariffCardProps {
  term: Term;
}
export const TariffCard: FC<TariffCardProps> = ({ term }) => {
  const { teek, price, period } = term;
  const periodText = PeriodMapping[period];
  return (
    <div className={styles.tariffCard}>
      <div className={styles.content}>
        <p>
          {teek} {periodText}
        </p>
        <span>{price} руб.</span>
      </div>
    </div>
  );
};
