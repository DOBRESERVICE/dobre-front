import styles from './SearchBlock.module.scss';
import Image from 'next/image';
import { firstLampGroup, secondLampGroup } from '@/assets/image';
import { InputSearch } from '@/components/InputSearch/InputSearch';
import { SearchCardsContainer } from '@/components/SearchCardsContainer/SearchCardsContainer';
import { searchCardsData } from '@/data';
import { SectionHeader } from '@/ui/SectionHeader/SectionHeader';

export const SearchBlock = () => {
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
        <Image src={secondLampGroup} alt='lamp group' />
      </div>
      <SearchCardsContainer data={searchCardsData} />
    </section>
  );
};
