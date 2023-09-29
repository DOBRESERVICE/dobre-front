import styles from './HowWeWork.module.scss';
import { SectionHeader } from '@/ui/SectionHeader/SectionHeader';
import { SearchCardsContainer } from '@/components/SearchCardsContainer/SearchCardsContainer';
import { howWeWorkData } from '@/data';
import { ButtonsContainer } from '@/components/HowWeWork/common/ButtonsContainer/ButtonsContainer';
import Image from 'next/image';
import { howWeWorkFirstGroup, howWeWorkSecondGroup } from '@/assets/image';
export const HowWeWork = () => {
  return (
    <section className={styles.howWeWorkSection}>
      <div className={styles.imageWrapper}>
        <Image src={howWeWorkFirstGroup} alt='first group' />
      </div>
      <div className={styles.imageWrapper}>
        <Image src={howWeWorkSecondGroup} alt='first group' />
      </div>
      <div className={styles.content}>
        <SectionHeader>
          <h2>Как работает сервис DOBRE</h2>
          <h3>Удобно, легко и безопасно</h3>
        </SectionHeader>
        <ButtonsContainer />
      </div>
      <SearchCardsContainer cardsData={howWeWorkData} />
    </section>
  );
};
