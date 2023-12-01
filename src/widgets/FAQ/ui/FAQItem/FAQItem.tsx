import classNames from 'classnames';
import { Dispatch, FC, SetStateAction } from 'react';

import styles from './FAQItem.module.scss';

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
        <div
          className={classNames(styles.arrowContainer, {
            [styles.activeArrow]: isSelected,
          })}
        >
          <div
            className={classNames(styles.arrow, {
              [styles.arrowUp]: isSelected,
              [styles.arrowDown]: !isSelected,
            })}
          />
        </div>
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
