import { FC } from 'react';
import styles from './TariffCard.module.scss';
interface TariffCardProps {
  time: string;
  price: string;
}
export const TariffCard: FC<TariffCardProps> = ({ time, price }) => {
  return (
    <div className={styles.tariffCard}>
      <div className={styles.content}>
        <p>{time}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
