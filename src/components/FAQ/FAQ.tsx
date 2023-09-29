import styles from './FAQ.module.scss';
import { FAQContainer } from '@/components/FAQ/common/FAQContainer/FAQContainer';
import Image from 'next/image';
import { linkButtonArrow } from '@/assets/image';
import { Button } from '@mui/material';
import { customRentButton } from '@/styles/buttonStyles';
export const FAQ = () => {
  return (
    <section className={styles.faqSectionWrapper}>
      <h2 className={styles.faqHeader}>Ответы на популярные вопросы</h2>
      <div className={styles.content}>
        <FAQContainer />
        <Button variant='contained' disableRipple size='medium' sx={customRentButton}>
          Смотреть все
          <Image src={linkButtonArrow} alt='plus' />
        </Button>
      </div>
    </section>
  );
};
