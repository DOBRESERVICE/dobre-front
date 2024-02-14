import { Button } from '@mui/material';
import Image from 'next/image';
import styles from './FAQ.module.scss';
import { customRentButton } from '@/shared/styles/buttonStyles';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { FAQContainer } from '@/widgets/FAQ/ui/FAQContainer/FAQContainer';
import { FAQBottomGroup, FAQTopGroup, linkButtonArrow } from '../../shared/image';
import { FAQData } from '@/shared/data';

export const FAQ = async () => {
  return (
    <Wrapper>
      <section className={styles.faqSectionWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={FAQBottomGroup} alt='group' />
        </div>
        <div className={styles.imageWrapper}>
          <Image src={FAQTopGroup} alt='group' />
        </div>
        <h2 className={styles.faqHeader}>Ответы на популярные вопросы</h2>
        <div className={styles.content}>
          <FAQContainer FAQData={FAQData} />
          <Button variant='contained' disableRipple size='medium' sx={customRentButton}>
            Смотреть все
            <Image src={linkButtonArrow} alt='plus' />
          </Button>
        </div>
      </section>
    </Wrapper>
  );
};
