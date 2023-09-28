import styles from './SearchCardsContainer.module.scss';
import { SearchBlockCard } from '@/components/SearchBlockCard/SearchBlockCard';
import { FC } from 'react';

interface SearchCardsContainer {
  cardsData: SearchBlockCard[];
}
export const SearchCardsContainer: FC<SearchCardsContainer> = ({ cardsData }) => {
  return (
    <div className={styles.searchCardsContainer}>
      {cardsData.map((card) => (
        <SearchBlockCard key={card.id} cardHeader={card.cardHeader} cardText={card.cardText} iconUrl={card.iconUrl} />
      ))}
    </div>
  );
};
