import classNames from 'classnames';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';

import styles from './FAQItem.module.scss';

import { defaultWhiteArrow } from '@/shared/image';

import { openedArrow } from '../../../../shared/image/index';

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
        <button className={classNames(styles.arrow)}>
          <Image src={isSelected ? openedArrow : defaultWhiteArrow} alt='arrow' />
        </button>
      </div>
      <div className={styles.description}>
        <p>{text}</p>
      </div>
    </div>
  );
};
