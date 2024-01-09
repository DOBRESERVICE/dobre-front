'use client';

import { Button } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

import styles from './RentInfoContainer.module.scss';

import { Term } from '@/interfaces/categories';
import { rentInfoCustomButton } from '@/shared/styles/buttonStyles';
import { RentInfoItem } from '@/widgets/ProductsContainer/ui/RentInfoItem/RentInfoItem';

import { rentButtonIcon, rentTimeArrow } from '../../../../shared/image';

interface RentInfoContainer {
  rentInfoArray: Term[];
  productId: number;
}
export const RentInfoContainer: FC<RentInfoContainer> = ({ rentInfoArray }) => {
  const [isClient, setIsClient] = useState(false);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(3);
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
            [styles.prevVisible]: count > 3,
          })}
          onClick={scrollPrev}
        >
          <Image src={rentTimeArrow} alt='arrow' />
        </button>
        <div className={styles.rentContent}>
          <div className={styles.content} style={{ transform: `translateX(${offset}px)` }}>
            {rentInfoArray ? (
              rentInfoArray.map((term) => <RentInfoItem key={term.id_term} term={term} />)
            ) : (
              <p>здесь ничего нет</p>
            )}
          </div>
        </div>
        {rentInfoArray?.length > 3 ? (
          <button
            className={classNames(styles.rentTimeButton, {
              [styles.prevVisible]: count != rentInfoArray.length,
            })}
            onClick={scrollNext}
            disabled={rentInfoArray.length === count}
          >
            <Image src={rentTimeArrow} alt='arrow' />
          </button>
        ) : null}
      </div>
      <Button disableRipple sx={rentInfoCustomButton}>
        <Image src={rentButtonIcon} alt='rent' />
        Арендовать
      </Button>
    </div>
  );
};
