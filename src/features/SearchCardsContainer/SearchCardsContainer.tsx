import classNames from 'classnames';
import { FC } from 'react';

import styles from './SearchCardsContainer.module.scss';

import { SearchBlockCard } from '@/features/SearchCardsContainer/ui/SearchBlockCard/SearchBlockCard';

interface SearchCardsContainer {
  cardsData: SearchBlockCard[];
  inHowWeWork: boolean;
}
export const SearchCardsContainer: FC<SearchCardsContainer> = ({ cardsData, inHowWeWork }) => {
  return (
    <div
      className={classNames(styles.searchCardsContainer, {
        [styles.howWeWorkCards]: inHowWeWork,
      })}
    >
      {cardsData.map((card) => (
        <SearchBlockCard
          inHowWeWork={inHowWeWork}
          key={card.id}
          cardHeader={card.cardHeader}
          cardText={card.cardText}
          iconUrl={card.iconUrl}
        />
      ))}
    </div>
  );
};
