'use client';
import { BurgerButton } from '@/ui/BurgerButton/BurgerButton';
import styles from './Header.module.scss';
import { Button } from '@mui/material';
import Image from 'next/image';
import categoriesIcon from '../../assets/image/categoriesIcon.svg';
import geolocationIcon from '../../assets/image/geolocation.svg';
import logo from '../../assets/image/dobreLogo.svg';
import plus from '../../assets/image/plusIcon.svg';
import group from '../../assets/image/iconGroup.svg';
import cart from '../../assets/image/cart.svg';
import userIcon from '../../assets/image/userIcon.svg';
import {
  customCategoriesButton,
  customHeaderSearchInput,
  customLoginButton,
  customRentButton,
  customSearchButton,
  customSearchInput,
} from '@/styles/buttonStyles';
import { usePathname, useRouter } from 'next/navigation';
import classNames from 'classnames';
import { mockUser, rentImage, searchIcon } from '@/assets/image';
import Input from '@mui/material/Input';

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const token = localStorage.getItem('token');

  return (
    <header
      className={classNames(styles.header, {
        [styles.catalogHeader]: pathname.includes('/catalog'),
      })}
    >
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
          <p>Помощь</p>
        </div>
      </div>
      <BurgerButton />
      <div className={styles.content}>
        <Button
          disableRipple
          variant='contained'
          size='medium'
          sx={customCategoriesButton}
          onClick={() => router.push('/catalog')}
        >
          <Image src={categoriesIcon} alt='categories icon' />
          Все категории
        </Button>
        <div className={styles.locationWrapper}>
          <Image src={geolocationIcon} alt='location' />
          <p>Вся Беларусь</p>
        </div>
      </div>
      <Image src={logo} alt='logo' className={styles.logo} />
      <div className={styles.inputWrapper}>
        <div className={styles.inputContent}>
          <Image src={searchIcon} alt='search' />
          <Input placeholder='Что вы ищете?' disableUnderline sx={customHeaderSearchInput} />
        </div>
        <Button variant='contained' disableRipple size='medium' sx={customSearchButton}>
          Найти
        </Button>
      </div>
      <div className={styles.content}>
        <Button variant='contained' disableRipple size='medium' sx={customRentButton}>
          <Image src={plus} alt='plus' />
          Сдать в аренду
        </Button>
        <div className={styles.iconsWrapper}>
          <div>
            <div className={styles.cartCircle}>
              <Image src={group} alt='group' />
            </div>
            <p>Избранное</p>
          </div>
          <div>
            <div className={styles.cartCircle}>
              <Image src={cart} alt='cart' />
              <div className={styles.circleInfo}>3</div>
            </div>
            <p>Корзина</p>
          </div>
          <div>
            <div className={styles.cartCircle}>
              <Image src={rentImage} alt='rent' />
              <div className={styles.circleInfo}>12</div>
            </div>
            <p>Аренда</p>
          </div>
        </div>
        {token ? (
          <Image src={mockUser} alt='mock user' />
        ) : (
          <Button variant='outlined' disableRipple size='medium' sx={customLoginButton}>
            <Image src={userIcon} alt='user' />
            Войти
          </Button>
        )}
      </div>
    </header>
  );
};
