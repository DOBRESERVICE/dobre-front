'use client';
import { Button } from '@mui/material';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

import styles from './RentInfoPannel.module.scss';

import { TariffCard } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/TariffCard/TariffCard';
import { rentInfoCustomBigButton } from '@/shared/styles/buttonStyles';
import {
  customDateFormSelect,
  customDateLabel,
  customDateSelect,
  customProductQuantityFormSelect,
  customProductQuantitySelect,
} from '@/shared/styles/selectStyles';
import { CustomSelect } from '@/shared/ui/CustomSelect/CustomSelect';
import { ProductRentStatus } from '@/shared/ui/ProductRentStatus/ProductRentStatus';

import { dateArrow, dateImage, rentButtonIcon } from '../../../../../../../shared/image';
import DatePicker from 'react-multi-date-picker';
import type { Value } from 'react-multi-date-picker';
import InputIcon from 'react-multi-date-picker/components/input_icon';

interface RentInfoPannelProps {
  count: number;
  availableQuantityArray: number[];
}

export const RentInfoPannel: FC<RentInfoPannelProps> = ({ count, availableQuantityArray }) => {
  // const selectData = [
  //   {
  //     id: 1,
  //     firstDate: '10 окт.',
  //     secondDate: '12 окт.',
  //   },
  //   {
  //     id: 2,
  //     firstDate: '10 окт.',
  //     secondDate: '12 окт.',
  //   },
  //   {
  //     id: 3,
  //     firstDate: '10 окт.',
  //     secondDate: '12 окт.',
  //   },
  // ];
  const [values, setValues] = useState<Value>(new Date());
  const strSVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='11' height='9' viewBox='0 0 11 9' fill='none'>
      <path
        d='M9.7885 3.38505L6.40345 0L5.2885 1.11495L7.88505 3.71149H0V5.28851H7.88505L5.2885 7.88505L6.40345 9L9.7885 5.61495C10.0841 5.31921 10.2502 4.91817 10.2502 4.5C10.2502 4.08183 10.0841 3.68079 9.7885 3.38505Z'
        fill='#646E74'
      />
    </svg>`;
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [isClient, setIsClient]);
  const svg = new Blob([strSVG], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(svg);

  return (
    <div className={styles.productInfo}>
      <div>
        <div className={styles.dateHeaderWrapper}>
          <p>Дата</p>
          <ProductRentStatus isAvailable />
        </div>
        <div className={styles.selectWrapper}>
          <DatePicker render={<InputIcon />} range value={values} onChange={setValues} />
          {count > 0 ? (
            <CustomSelect
              formControlStyles={customProductQuantityFormSelect}
              labelStyles={customDateLabel}
              selectStyles={customProductQuantitySelect}
              label={`${count} шт.`}
              selectData={availableQuantityArray}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div>
        <div className={styles.dateHeaderWrapper}>
          <p>Тарифы</p>
          <p>Смотреть все</p>
        </div>
        <div className={styles.cardsWrapper}>
          <TariffCard time='1 час' price='450 руб.' hasInfoIcon />
          <TariffCard time='1 час' price='450 руб.' hasInfoIcon={false} />
          <TariffCard time='1 час' price='450 руб.' hasInfoIcon={false} />
        </div>
      </div>
      <div className={styles.depositeWrapper}>
        <p>При оформлении аренды взымается залог</p>
        <div>
          <p>20 000 руб.</p>
        </div>
      </div>
      <div className={styles.rentInfoWrapper}>
        <div className={styles.rentInfoHeader}>
          <p>Стоимость аренды :</p>
          <p>300 руб.</p>
        </div>
        <div>
          <div className={styles.rentInfoContent}>
            <p>Тариф:</p>
            <p>1-7 дней</p>
          </div>
          <div className={styles.rentInfoContent}>
            <p>Кол-во дней:</p>
            <p>2 дня</p>
          </div>
        </div>
        <Button disableRipple sx={rentInfoCustomBigButton}>
          <Image src={rentButtonIcon} alt='rent' />
          Оформить аренду
        </Button>
      </div>
    </div>
  );
};
