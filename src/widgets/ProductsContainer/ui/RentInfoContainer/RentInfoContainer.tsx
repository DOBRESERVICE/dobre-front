'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import styles from './RentInfoContainer.module.scss';

import { RentInfoData } from '@/interfaces';
import { rentInfoCustomButton } from '@/shared/styles/buttonStyles';
import { RentInfoItem } from '@/widgets/ProductsContainer/ui/RentInfoItem/RentInfoItem';

import { rentButtonIcon } from '../../../../shared/image';

interface RentInfoContainer {
  rentInfoArray: RentInfoData[];
  trVarietyName?: string;
  trCategoryName?: string;
  trSubCategoryName?: string;
  productId: number;
}
export const RentInfoContainer: FC<RentInfoContainer> = ({
  rentInfoArray,
  trSubCategoryName,
  trCategoryName,
  trVarietyName,
  productId,
}) => {
  const router = useRouter();
  return (
    <div className={styles.rentTimeContainer}>
      <div className={styles.content}>
        {rentInfoArray.map((item) => (
          <RentInfoItem key={item.id} timeInRent={item.timeInRent} price={item.price} />
        ))}
      </div>
      <Button
        disableRipple
        sx={rentInfoCustomButton}
        onClick={() => router.push(`/category/${trCategoryName}/${trSubCategoryName}/${trVarietyName}/${productId}`)}
      >
        <Image src={rentButtonIcon} alt='rent' />
        Арендовать
      </Button>
    </div>
  );
};
