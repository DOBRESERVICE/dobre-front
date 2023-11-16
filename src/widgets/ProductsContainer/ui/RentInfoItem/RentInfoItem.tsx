import { FC } from 'react';
import styles from './RentInfoItem.module.scss';
interface RentInfoItem {
  timeInRent: string;
  price: string;
}
export const RentInfoItem: FC<RentInfoItem> = ({ timeInRent, price }) => {
  return (
    <div className={styles.rentInfoItem}>
      <p>{timeInRent}</p>
      <span>{price}</span>
    </div>
  );
};
