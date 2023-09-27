import styles from './SearchBlockCard.module.scss';
import Image from 'next/image';
import { FC } from 'react';

export interface SearchBlockCard {
  id?: number;
  cardHeader: string;
  cardText: string;
  iconUrl: string;
}
export const SearchBlockCard: FC<SearchBlockCard> = ({ cardText, cardHeader, iconUrl }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.textContent}>
        <h3>{cardHeader}</h3>
        <p>{cardText}</p>
      </div>
      <Image src={iconUrl} alt='icon card' />
    </div>
  );
};
