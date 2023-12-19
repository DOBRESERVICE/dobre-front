import { Button } from '@mui/material';
import Image from 'next/image';

import styles from './RentIntroduction.module.scss';

import { customRentButton } from '@/shared/styles/buttonStyles';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

import { plusIcon } from '../../shared/image';

export const RentIntroduction = () => {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Разместите свою первую вещь
            <span> легко и быстро</span>
          </h2>
          <h3 className={styles.description}>Получай деньги за аренду, когда удобно на любую вашу карту</h3>
        </div>
        <Button variant='contained' disableRipple size='medium' sx={customRentButton}>
          <Image src={plusIcon} alt='plus' />
          Сдать в аренду
        </Button>
      </div>
    </Wrapper>
  );
};
