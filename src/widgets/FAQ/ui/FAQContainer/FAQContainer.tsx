'use client';

import { FC, useState } from 'react';

import styles from './FAQContainer.module.scss';

import { Post } from '@/interfaces';
import { FAQItem } from '@/widgets/FAQ/ui/FAQItem/FAQItem';

interface FAQContainerProps {
  FAQData: Post[] | undefined;
}

export const FAQContainer: FC<FAQContainerProps> = ({ FAQData }) => {
  const [activeCard, setActiveCard] = useState(0);
  if (!FAQData) {
    return <p>LOAD</p>;
  }
  return (
    <div className={styles.faqContainer}>
      {FAQData.map((item) => (
        <FAQItem
          key={item.id_post}
          title={item.header_post}
          text={item.body_post}
          setActiveCard={setActiveCard}
          activeCard={activeCard}
          id={item.id_post}
        />
      ))}
    </div>
  );
};
