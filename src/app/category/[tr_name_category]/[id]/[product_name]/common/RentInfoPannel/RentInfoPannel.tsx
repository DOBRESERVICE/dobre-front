import { Button } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

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

interface RentInfoPannelProps {
  count: number;
  availableQuantityArray: number[];
}

export const RentInfoPannel: FC<RentInfoPannelProps> = ({ count, availableQuantityArray }) => {
  return (
    <div className={styles.productInfo}>
      <div>
        <div className={styles.dateHeaderWrapper}>
          <p>Дата</p>
          <ProductRentStatus isAvailable />
        </div>
        <div className={styles.selectWrapper}>
          <CustomSelect
            formControlStyles={customDateFormSelect}
            selectStyles={customDateSelect}
            labelStyles={customDateLabel}
            labelImage={dateImage}
            firstPartLabel='10 окт.'
            secondPartLabel='12 окт.'
            labelSecondImage={dateArrow}
            selectData={['sss']}
          />
          {count > 0 && (
            <CustomSelect
              formControlStyles={customProductQuantityFormSelect}
              labelStyles={customDateLabel}
              selectStyles={customProductQuantitySelect}
              label={`${count} шт.`}
              selectData={availableQuantityArray}
            />
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
