'use client';
import { Button } from '@mui/material';
import Image from 'next/image';
import { FC, useState } from 'react';
import type { Value } from 'react-multi-date-picker';
import DatePicker from 'react-multi-date-picker';
import InputIcon from 'react-multi-date-picker/components/input_icon';

import styles from './RentInfoPannel.module.scss';

import { TariffCard } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/TariffCard/TariffCard';
import { Term } from '@/interfaces/categories';
import { rentInfoCustomBigButton } from '@/shared/styles/buttonStyles';
import {
  customDateLabel,
  customProductQuantityFormSelect,
  customProductQuantitySelect,
} from '@/shared/styles/selectStyles';
import { CustomSelect } from '@/shared/ui/CustomSelect/CustomSelect';
import { ProductRentStatus } from '@/shared/ui/ProductRentStatus/ProductRentStatus';

import { blueNextArrow, rentButtonIcon } from '../../../../../../../shared/image';
import { StatusBar } from '@/entities/StatusBar/StatusBar';
import { RatingComponent } from '@/shared/ui/RatingComponent/RatingComponent';

interface RentInfoPannelProps {
  count: number;
  availableQuantityArray: number[];
  terms: Term[];
  price: string;
  productName: string;
  qualityControl: number;
  deposit: number;
}

export const RentInfoPannel: FC<RentInfoPannelProps> = ({
  productName,
  price,
  count,
  availableQuantityArray,
  terms,
  qualityControl,
  deposit,
}) => {
  const [values, setValues] = useState<Value>(new Date());
  return (
    <div className={styles.productInfo}>
      <div className={styles.dateHeaderWrapper}>
        <ProductRentStatus isAvailable />
        <div className={styles.price}>от {price} руб.</div>
      </div>
      <h2 className={styles.productName}>{productName}</h2>
      <div className={styles.infoContent}>
        <StatusBar status={qualityControl} />
        <RatingComponent feedbackType='textFeedback' rating={4.4} feedbackCount={31} />
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
        ) : null}
      </div>
      <div className={styles.tarrifsWrapper}>
        <div className={styles.dateHeaderWrapper}>
          <p>Тарифы</p>
          <div className={styles.allTarrifs}>
            <p>Все тарифы</p>
            <Image src={blueNextArrow} alt='see all' />
          </div>
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
          <p>Залог {deposit} руб.</p>
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
