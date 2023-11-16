'use client';
import styles from './Header.module.scss';
import { Button } from '@mui/material';
import Image from 'next/image';
import categoriesIcon from '@/shared/image/categoriesIcon.svg';
import geolocationIcon from '@/shared/image/geolocation.svg';
import logo from '@/shared/image/dobreLogo.svg';
import plus from '@/shared/image/plusIcon.svg';
import group from '@/shared/image/iconGroup.svg';
import cart from '@/shared/image/cart.svg';
import userIcon from '@/shared/image/userIcon.svg';
import {
  customCategoriesButton,
  customHeaderSearchInput,
  customLoginButton,
  customRentButton,
  customSearchHeaderButton,
  customSmallRentButton,
} from '@/shared/styles/buttonStyles';
import { usePathname, useRouter } from 'next/navigation';
import classNames from 'classnames';
import { blueClose, mockUser, rentImage, searchIcon, smallPlus } from '@/shared/image';
import Input from '@mui/material/Input';
import { HeaderLinks } from '@/widgets/Header/ui/HeaderLinks/HeaderLinks';
import { useEffect, useState } from 'react';
import { Menu } from '@/features/Menu/Menu';
import Link from 'next/link';
import { useAuthData } from '@/shared/context/authContext';
import { HeaderTopBar } from '@/widgets/Header/ui/HeaderTopBar/HeaderTopBar';

export const Header = () => {
  const pathname = usePathname();
  const notMainPage = pathname !== '/';
  const router = useRouter();
  const [token, setToken] = useState<string | null>('');
  const { isMenuOpen, setIsMenuOpen } = useAuthData();
  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, []);
  return (
    <>
      <header
        className={classNames(styles.header, {
          [styles.catalogHeader]: notMainPage,
        })}
      >
        {notMainPage && <HeaderTopBar />}
        <div className={styles.leftBlock}>
          <div className={styles.leftBlockContent}>
            <Button
              disableRipple
              variant='contained'
              size='medium'
              sx={customCategoriesButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image src={isMenuOpen ? blueClose : categoriesIcon} alt='categories icon' />
              Все категории
            </Button>
            <Button variant='contained' disableRipple size='medium' sx={customRentButton}>
              <Image src={plus} alt='plus' />
              Сдать в аренду
            </Button>
            <div className={styles.locationWrapper}>
              <Image src={geolocationIcon} alt='location' />
              <p>Беларусь</p>
            </div>
          </div>
        </div>
        <Link href={'/'} className={styles.logoWrapper}>
          <Image src={logo} alt='logo' />
        </Link>
        <div className={styles.inputWrapper}>
          <div className={styles.inputContent}>
            <Image src={searchIcon} alt='search' />
            <Input placeholder='Что вы ищете?' disableUnderline sx={customHeaderSearchInput} />
          </div>
          <Button variant='contained' disableRipple size='medium' sx={customSearchHeaderButton}>
            Найти
          </Button>
        </div>
        <div className={styles.content}>
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
            <Button
              variant='outlined'
              disableRipple
              size='medium'
              sx={customLoginButton}
              onClick={() => router.push('/login')}
            >
              <Image src={userIcon} alt='user' />
              Войти
            </Button>
          )}
        </div>
        {isMenuOpen && <Menu />}
      </header>
      {notMainPage && <HeaderLinks />}
    </>
  );
};
