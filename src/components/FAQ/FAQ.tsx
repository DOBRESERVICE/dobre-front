import styles from './FAQ.module.scss';
import { FAQContainer } from '@/components/FAQ/common/FAQContainer/FAQContainer';
export const FAQ = () => {
  return (
    <section className={styles.faqSectionWrapper}>
      <h2 className={styles.faqHeader}>Ответы на популярные вопросы</h2>
      <FAQContainer />
    </section>
  );
};
