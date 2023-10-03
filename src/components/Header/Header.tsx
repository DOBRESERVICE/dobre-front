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
  customLoginButton,
  customPremiumButton,
  customRentButton,
  customSearchButton,
  customSearchInput,
} from '@/styles/buttonStyles';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import TextField from '@mui/material/TextField';
import { searchIcon } from '@/assets/image';
import Input from '@mui/material/Input';

export const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header
      className={classNames(styles.header, {
        [styles.catalogHeader]: pathname === '/catalog',
      })}
    >
      <BurgerButton />
      <div className={styles.content}>
        <Button disableRipple variant='contained' size='medium' sx={customCategoriesButton}>
          <Image src={categoriesIcon} alt='categories icon' />
          Все категории
        </Button>
        <Button variant='contained' disableRipple size='medium' sx={customPremiumButton}>
          Premium
        </Button>
        <div className={styles.locationWrapper}>
          <Image src={geolocationIcon} alt='location' />
          <p>Вся Беларусь</p>
        </div>
      </div>
      <Image src={logo} alt='logo' className={styles.logo} />
      <div className={styles.inputWrapper}>
        <div className={styles.content}>
          <Image src={searchIcon} alt='search' />
          <Input placeholder='Что вы ищете?' disableUnderline sx={customSearchInput} />
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
        <Image src={group} alt='group' />
        <div className={styles.cartCircle}>
          <Image src={cart} alt='cart' />
        </div>
        <Button variant='outlined' disableRipple size='medium' sx={customLoginButton}>
          <Image src={userIcon} alt='user' />
          Войти
        </Button>
      </div>
    </header>
  );
};
