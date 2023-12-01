import { Button } from '@mui/material';
import Image from 'next/image';

import styles from './HeaderTopBar.module.scss';

import { smallPlus } from '@/shared/image';
import geolocationIcon from '@/shared/image/geolocation.svg';
import { customSmallRentButton } from '@/shared/styles/buttonStyles';

const HeaderTopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.contentGroup}>
        <p>Легко арендовать, безопасно сдавать 😍</p>
        <p className={styles.geoLocationInfo}>
          <Image src={geolocationIcon} alt='geolocation' />
          Минск
        </p>
      </div>
      <div className={styles.contentGroup}>
        <p>О проекте</p>
        <p>Как арендовать</p>
        <p>Как сдавать</p>
        <p>База знаний</p>
        <Button variant='contained' disableRipple size='medium' sx={customSmallRentButton}>
          <Image src={smallPlus} alt='plus' />
          Сдать в аренду
        </Button>
      </div>
    </div>
  );
};
export default HeaderTopBar;
