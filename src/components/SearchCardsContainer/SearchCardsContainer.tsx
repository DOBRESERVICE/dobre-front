import styles from './SearchCardsContainer.module.scss';
import { SearchBlockCard } from '@/components/SearchBlockCard/SearchBlockCard';
import { FC } from 'react';

interface SearchCardsContainer {
  data: SearchBlockCard[];
}
export const SearchCardsContainer: FC<SearchCardsContainer> = ({ data }) => {
  return (
    <div className={styles.searchCardsContainer}>
      {data.map((card) => (
        <SearchBlockCard key={card.id} cardHeader={card.cardHeader} cardText={card.cardText} iconUrl={card.iconUrl} />
      ))}
    </div>
  );
};
