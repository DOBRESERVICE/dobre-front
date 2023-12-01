import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import styles from './SearchBlockCard.module.scss';

export interface SearchBlockCard {
  id?: number;
  cardHeader: string;
  cardText: string;
  iconUrl: string;
  inHowWeWork?: boolean;
}
export const SearchBlockCard: FC<SearchBlockCard> = ({ cardText, cardHeader, iconUrl, inHowWeWork }) => {
  return (
    <div
      className={classNames(styles.cardContainer, {
        [styles.howWeWorkCard]: inHowWeWork,
      })}
    >
      <div className={styles.textContent}>
        <h3>{cardHeader}</h3>
        <p>{cardText}</p>
      </div>
      <Image src={iconUrl} alt='icon card' />
    </div>
  );
};
