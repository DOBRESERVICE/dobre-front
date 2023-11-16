import styles from './HowWeWork.module.scss';
import { SectionHeader } from '@/shared/ui/SectionHeader/SectionHeader';
import { SearchCardsContainer } from '@/features/SearchCardsContainer/SearchCardsContainer';
import { howWeWorkData } from '../../shared/data';
import { ButtonsContainer } from '@/widgets/HowWeWork/ui/ButtonsContainer/ButtonsContainer';
import Image from 'next/image';
import { howWeWorkFirstGroup, howWeWorkSecondGroup } from '../../shared/image';
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
