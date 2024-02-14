'use client';
import { FC } from 'react';

import styles from './RentInfoItem.module.scss';

import { Term } from '@/interfaces/categories';
import { PeriodMapping } from '@/shared/lib';

interface RentInfoItem {
  term: Term;
}
export const RentInfoItem: FC<RentInfoItem> = ({ term }) => {
  const { teek, price, period } = term;
  const periodText = PeriodMapping[period];
  return (
    <div className={styles.rentInfoItem}>
      <p>{teek} день</p>
      <span>{price} руб.</span>
    </div>
  );
};
