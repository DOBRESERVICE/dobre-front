import styles from './RentInfoContainer.module.scss';
import { FC } from 'react';
import { RentInfoItem } from '@/components/ProductsContainer/common/RentInfoContainer/RentInfoItem';
import { RentInfoData } from '@/interfaces';

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
