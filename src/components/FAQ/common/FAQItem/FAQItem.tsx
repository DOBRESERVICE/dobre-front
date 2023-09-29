import styles from './FAQItem.module.scss';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import classNames from 'classnames';

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
    <div className={styles.faqItem} role='button' aria-label='question' onClick={handleToggle}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <div className={styles.arrowUp}></div>
      </div>
      <div
        className={classNames(styles.description, {
          [styles.opened]: isSelected,
        })}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
