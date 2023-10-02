import { descriptionData } from '@/data';
import { FAQItem } from '@/components/FAQ/common/FAQItem/FAQItem';
import { useState } from 'react';
import styles from './FAQContainer.module.scss';

export const FAQContainer = () => {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className={styles.faqContainer}>
      {descriptionData.map((item) => (
        <FAQItem
          key={item.id}
          title={item.title}
          text={item.text}
          setActiveCard={setActiveCard}
          activeCard={activeCard}
          id={item.id}
        />
      ))}
    </div>
  );
};
