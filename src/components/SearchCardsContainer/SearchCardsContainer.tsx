import styles from './SearchCardsContainer.module.scss';
import { SearchBlockCard } from '@/components/SearchBlockCard/SearchBlockCard';
import { FC } from 'react';
import classNames from 'classnames';

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
        <SearchBlockCard key={card.id} cardHeader={card.cardHeader} cardText={card.cardText} iconUrl={card.iconUrl} />
      ))}
    </div>
  );
};
