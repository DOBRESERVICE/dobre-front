import styles from './SearchBlock.module.scss';
import Image from 'next/image';
import { firstLampGroup, secondLampGroup } from '../../shared/image';
import { InputSearch } from '@/widgets/SearchBlock/ui/InputSearch/InputSearch';
import { SearchCardsContainer } from '@/features/SearchCardsContainer/SearchCardsContainer';
import { searchCardsData } from '../../shared/data';
import { SectionHeader } from '@/shared/ui/SectionHeader/SectionHeader';

const SearchBlock = () => {
  return (
    <section className={styles.searchBlockWrapper}>
      <div className={styles.leftImageWrapper}>
        <Image src={firstLampGroup} alt='lamp group' />
      </div>
      <div className={styles.content}>
        <SectionHeader>
          <h1>
            Легко арендовать и <br /> безопасно сдавать
          </h1>
          <h3>Найдите всё и даже больше</h3>
        </SectionHeader>
        <InputSearch />
      </div>
      <div className={styles.rightImageWrapper}>
        <Image src={secondLampGroup} alt='lamp group' loading='eager' />
      </div>
      <SearchCardsContainer inHowWeWork={false} cardsData={searchCardsData} />
    </section>
  );
};
export default SearchBlock;
