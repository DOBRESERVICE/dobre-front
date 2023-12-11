'use client';
import { FC } from 'react';

import styles from './RentInfoItem.module.scss';
import { Term } from '@/interfaces/categories';

interface RentInfoItem {
  term: Term;
}
export const RentInfoItem: FC<RentInfoItem> = ({ term }) => {
  const PeriodMapping: Record<string, string> = {
    D: 'день',
    W: 'неделя',
    M: 'месяц',
    Y: 'год',
  };

  const { teek, price, period } = term;
  const periodText = PeriodMapping[period];
  return (
    <div className={styles.rentInfoItem}>
      <p>
        {teek} {periodText}
      </p>
      <span>{price} руб.</span>
    </div>
  );
};
