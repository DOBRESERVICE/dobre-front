'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';

import styles from './RentInfoContainer.module.scss';

import { RentInfoData } from '@/interfaces';
import { rentInfoCustomButton } from '@/shared/styles/buttonStyles';
import { RentInfoItem } from '@/widgets/ProductsContainer/ui/RentInfoItem/RentInfoItem';

import { rentButtonIcon, rentTimeArrow } from '../../../../shared/image';
import classNames from 'classnames';

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
  const [isClient, setIsClient] = useState(false);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(2);
  useEffect(() => {
    setIsClient(true);
  }, [setIsClient, isClient]);
  const scrollNext = () => {
    setCount((prev) => prev + 1);
    setOffset((prev) => prev - 84);
  };
  const scrollPrev = () => {
    setCount((prev) => prev - 1);
    setOffset((prev) => prev + 84);
  };
  return (
    <div className={styles.rentTimeContainer}>
      <div className={styles.container}>
        <button
          className={classNames(styles.rentTimeButton, {
            [styles.prevVisible]: count > 2,
          })}
          onClick={scrollPrev}
        >
          <Image src={rentTimeArrow} alt='arrow' />
        </button>

        <div className={styles.rentContent}>
          <div className={styles.content} style={{ transform: `translateX(${offset}px)` }}>
            {rentInfoArray.map((item) => (
              <RentInfoItem key={item.id} timeInRent={item.timeInRent} price={item.price} />
            ))}
          </div>
        </div>
        {rentInfoArray.length > 3 ? (
          <button className={styles.rentTimeButton} onClick={scrollNext} disabled={rentInfoArray.length === count}>
            <Image src={rentTimeArrow} alt='arrow' />
          </button>
        ) : null}
      </div>
      {isClient && (
        <Button
          disableRipple
          sx={rentInfoCustomButton}
          onClick={() => router.push(`/category/${trCategoryName}/${trSubCategoryName}/${trVarietyName}/${productId}`)}
        >
          <Image src={rentButtonIcon} alt='rent' />
          Арендовать
        </Button>
      )}
    </div>
  );
};
