'use client';
import { Button } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';

import styles from './RentInfoPannel.module.scss';

import { InsuranceCard } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/InsuranceCard/InsuranceCard';
import { TariffCard } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/TariffCard/TariffCard';
import { StatusBar } from '@/entities/StatusBar/StatusBar';
import { Term } from '@/interfaces/categories';
import { useAuthData } from '@/shared/context/authContext';
import { rentInfoCustomBigButton } from '@/shared/styles/buttonStyles';
import {
  customDateLabel,
  customProductQuantityFormSelect,
  customProductQuantitySelect,
} from '@/shared/styles/selectStyles';
import { CustomDatePicker } from '@/shared/ui/CustomDatePicker/CustomDatePicker';
import { CustomSelect } from '@/shared/ui/CustomSelect/CustomSelect';
import { ProductRentStatus } from '@/shared/ui/ProductRentStatus/ProductRentStatus';
import { RatingComponent } from '@/shared/ui/RatingComponent/RatingComponent';

import { blueNextArrow, rentButtonIcon } from '../../../../../../../shared/image';

interface RentInfoPannelProps {
  count: number;
  availableQuantityArray: number[];
  terms: Term[];
  price: string;
  productName: string;
  qualityControl: number;
  deposit: number;
  hasInsurance: boolean;
}

export const RentInfoPannel: FC<RentInfoPannelProps> = ({
  productName,
  price,
  count,
  availableQuantityArray,
  terms,
  qualityControl,
  deposit,
  hasInsurance,
}) => {
  const searchParams = useSearchParams();
  const { isPending } = useAuthData();
  const params = new URLSearchParams(searchParams);
  const isDisabled = params.get('dateStart') === null && params.get('dateEnd') === null;
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
        <CustomDatePicker rent />
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
      <div
        className={classNames(styles.depositeInfo, {
          [styles.noDeposit]: !deposit,
        })}
      >
        <p>{deposit ? `Залог ${deposit} руб.` : 'Без залога'}</p>
      </div>
      {hasInsurance && <InsuranceCard />}
      <div className={styles.rentInfoWrapper}>
        {isPending && (
          <div className={styles.loader}>
            <div className={styles.spinner} />
          </div>
        )}
        {isDisabled ? (
          <p className={styles.disabledText}>Для расчета и оформления аренды выберите дату </p>
        ) : (
          <div className={styles.rentInfo}>
            <div className={styles.rentInfoHeader}>
              <p>Стоимость аренды :</p>
              <p>300 руб.</p>
            </div>
            <div className={styles.rentInfoContent}>
              <p>Тариф:</p>
              <p>1-7 дней</p>
            </div>
            <div className={styles.rentInfoContent}>
              <p>Кол-во дней:</p>
              <p>2 дня</p>
            </div>
          </div>
        )}
        <Button disabled={isDisabled} disableRipple sx={rentInfoCustomBigButton}>
          <Image src={rentButtonIcon} alt='rent' />
          Оформить аренду
        </Button>
      </div>
    </div>
  );
};
