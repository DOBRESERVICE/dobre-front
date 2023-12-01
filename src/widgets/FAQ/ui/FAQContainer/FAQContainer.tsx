'use client';

import { useState } from 'react';

import styles from './FAQContainer.module.scss';

import { FAQItem } from '@/widgets/FAQ/ui/FAQItem/FAQItem';

import { descriptionData } from '../../../../shared/data';

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
