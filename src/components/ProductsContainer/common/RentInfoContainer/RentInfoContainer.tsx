import styles from './RentInfoContainer.module.scss';
import { FC } from 'react';
import { RentInfoItem } from '@/components/ProductsContainer/common/RentInfoItem/RentInfoItem';
import { RentInfoData } from '@/interfaces';
import { Button } from '@mui/material';
import Image from 'next/image';
import { blackArrowNext, rentButtonIcon } from '@/assets/image';
import { customRentButton, rentInfoCustomButton } from '@/styles/buttonStyles';

interface RentInfoContainer {
  rentInfoArray: RentInfoData[];
}
export const RentInfoContainer: FC<RentInfoContainer> = ({ rentInfoArray }) => {
  return (
    <div className={styles.rentTimeContainer}>
      <div className={styles.content}>
        {rentInfoArray.map((item) => (
          <RentInfoItem key={item.id} timeInRent={item.timeInRent} price={item.price} />
        ))}
      </div>
      <Button disableRipple sx={rentInfoCustomButton}>
        <Image src={rentButtonIcon} alt='rent' />
        Арендовать
      </Button>
    </div>
  );
};
