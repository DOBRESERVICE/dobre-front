import { FC } from 'react';
import styles from './TariffCard.module.scss';
import Image from 'next/image';
import { tarrifInfo } from '@/assets/image';
interface TariffCardProps {
  time: string;
  price: string;
  hasInfoIcon: boolean;
}
export const TariffCard: FC<TariffCardProps> = ({ time, price, hasInfoIcon }) => {
  return (
    <div className={styles.tariffCard}>
      {hasInfoIcon && <Image src={tarrifInfo} alt='info' />}
      <div className={styles.content}>
        <p>{time}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
