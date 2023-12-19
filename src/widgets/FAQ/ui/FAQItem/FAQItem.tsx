import classNames from 'classnames';
import { Dispatch, FC, SetStateAction } from 'react';
import { defaultWhiteArrow } from '@/shared/image';

import styles from './FAQItem.module.scss';
import Image from 'next/image';

interface FAQItem {
  title: string;
  text: string;
  activeCard: number;
  id: number;
  setActiveCard: Dispatch<SetStateAction<number>>;
}
export const FAQItem: FC<FAQItem> = ({ text, title, setActiveCard, activeCard, id }) => {
  const isSelected = activeCard === id;
  const handleToggle = () => {
    setActiveCard(isSelected ? 0 : id);
  };
  return (
    <div
      className={classNames(styles.faqItem, {
        [styles.opened]: isSelected,
      })}
      role='button'
      aria-label='question'
      onClick={handleToggle}
    >
      <div className={styles.content}>
        <h2>{title}</h2>
        <button className={styles.arrow}>
          <Image src={defaultWhiteArrow} alt='arrow' />
        </button>
      </div>
      <div className={styles.description}>
        <p>{text}</p>
      </div>
    </div>
  );
};
