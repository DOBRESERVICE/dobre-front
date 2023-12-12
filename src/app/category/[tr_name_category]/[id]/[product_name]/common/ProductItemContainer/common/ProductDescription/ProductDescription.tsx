import { FC } from 'react';

import styles from './ProductDescription.module.scss';


interface ProductDescriptionProps {
  firstDescription: string;
  mainAdvantages: any[];
  secondDescription: string;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
  firstDescription,
  secondDescription,
  mainAdvantages,
}) => {
  return (
    <div className={styles.descriptionWrapper}>
      <h3>Описание</h3>
      <div className={styles.descriptionContent}>
        <p>{firstDescription}</p>
        <div className={styles.advantagesContent}>
          <p>Основные преимущества модели:</p>
          <ul className={styles.advantagesList}>
            {mainAdvantages.map((advantage) => (
              <li key={advantage.id}>{advantage.info}</li>
            ))}
          </ul>
          <p>{secondDescription}</p>
        </div>
      </div>
    </div>
  );
};
