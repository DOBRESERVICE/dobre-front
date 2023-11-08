import Image from 'next/image';
import { greenCheckedIcon, infoIcon, rentButtonIcon } from '@/assets/image';
import styles from './PriceInfoCard.module.scss';
import { Button } from '@mui/material';
import { rentInfoCustomBigButton } from '@/styles/buttonStyles';

export const PriceInfoCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3>Оценочная стоимость</h3>
        <div className={styles.wrapper}>
          <div className={styles.contentItem}>
            <div>
              <Image src={infoIcon} alt='infoIcon' />
              <p>Стоимость нового:</p>
            </div>
            <p>25 930 руб.</p>
          </div>
          <div className={styles.contentItem}>
            <div>
              <Image src={infoIcon} alt='infoIcon' />
              <p>Стоимость выкупа:</p>
            </div>
            <p>8 430 руб.</p>
          </div>
        </div>
      </div>
      <div className={styles.additionalContent}>
        <div className={styles.text}>
          <Image src={greenCheckedIcon} alt='checked' />
          <p> Товар можно выкупить</p>
        </div>
        <Button disableRipple sx={rentInfoCustomBigButton}>
          Отправить запрос
        </Button>
      </div>
    </div>
  );
};
