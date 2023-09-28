import styles from './RentInfoContainer.module.scss';
import { RentInfoData } from '@/components/ProductsContainer/ProductItem';
import { FC } from 'react';
import { RentInfoItem } from '@/components/RentInfoContainer/RentInfoItem';

interface RentInfoContainer {
  rentInfoArray: RentInfoData[];
}
export const RentInfoContainer: FC<RentInfoContainer> = ({ rentInfoArray }) => {
  return (
    <div className={styles.rentTimeContainer}>
      {rentInfoArray.map((item) => (
        <RentInfoItem key={item.id} timeInRent={item.timeInRent} price={item.price} />
      ))}
    </div>
  );
};
