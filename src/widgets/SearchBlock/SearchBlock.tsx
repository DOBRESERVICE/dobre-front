import Image from 'next/image';

import styles from './SearchBlock.module.scss';

import { SearchCardsContainer } from '@/features/SearchCardsContainer/SearchCardsContainer';
import { SectionHeader } from '@/shared/ui/SectionHeader/SectionHeader';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { InputSearch } from '@/widgets/SearchBlock/ui/InputSearch/InputSearch';

import { searchCardsData } from '../../shared/data';
import { firstLampGroup, secondLampGroup } from '../../shared/image';

const SearchBlock = async () => {
  // const { data: searchCardsData } = await getPost(SectionType.MAIN_HEADER);
  console.log('ssss');
  const handleClick = () => {
    console.log('f1');
  };
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default SearchBlock;
