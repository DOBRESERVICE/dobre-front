import Image from 'next/image';

import styles from './HowWeWork.module.scss';

import { SearchCardsContainer } from '@/features/SearchCardsContainer/SearchCardsContainer';
import { SectionHeader } from '@/shared/ui/SectionHeader/SectionHeader';
import { ButtonsContainer } from '@/widgets/HowWeWork/ui/ButtonsContainer/ButtonsContainer';

import { howWeWorkData } from '../../shared/data';
import { howWeWorkFirstGroup } from '../../shared/image';

export const HowWeWork = () => {
  return (
    <section className={styles.howWeWorkSection}>
      <div className={styles.imageWrapper}>
        <Image src={howWeWorkFirstGroup} alt='first group' priority />
      </div>
      <div className={styles.content}>
        <SectionHeader>
          <h2>Как работает сервис DOBRE</h2>
          <h3>Удобно, легко и безопасно</h3>
        </SectionHeader>
        <ButtonsContainer />
      </div>
      <SearchCardsContainer cardsData={howWeWorkData} inHowWeWork />
    </section>
  );
};
