import { Button } from '@mui/material';
import Image from 'next/image';

import styles from './PriceInfoCard.module.scss';

import { InfoIcon } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/PriceInfoCard/ui/InfoIcon';
import { rentInfoCustomBigButton } from '@/shared/styles/buttonStyles';

import { greenCheckedIcon } from '../../../../../../../../../shared/image';

export const PriceInfoCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.text}>
          <Image src={greenCheckedIcon} alt='checked' />
          <p> Товар можно выкупить</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.contentItem}>
            <div>
              <InfoIcon />
              <p>Стоимость нового:</p>
            </div>
            <p className={styles.price}>25 930 руб.</p>
          </div>
          <div className={styles.contentItem}>
            <div>
              <InfoIcon />
              <p>Стоимость выкупа:</p>
            </div>
            <p className={styles.price}>8 430 руб.</p>
          </div>
        </div>
      </div>
      <Button
        disableRipple
        style={{ background: 'transparent', color: '#2540E4', border: '2px solid #2540E4' }}
        sx={rentInfoCustomBigButton}
      >
        Отправить запрос
      </Button>
    </div>
  );
};
