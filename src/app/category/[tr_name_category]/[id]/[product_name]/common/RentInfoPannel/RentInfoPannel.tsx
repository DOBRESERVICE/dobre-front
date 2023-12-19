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
import { Term } from '@/interfaces/categories';

interface RentInfoPannelProps {
  count: number;
  availableQuantityArray: number[];
  terms: Term[];
}

export const RentInfoPannel: FC<RentInfoPannelProps> = ({ count, availableQuantityArray, terms }) => {
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
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [isClient, setIsClient]);

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
          {terms.map((term) => (
            <TariffCard term={term} key={term.id_term} />
          ))}
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
