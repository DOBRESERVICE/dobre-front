'use client';
import { Button } from '@mui/material';
import Input from '@mui/material/Input';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import styles from './Header.module.scss';

import { useAuthData } from '@/shared/context/authContext';
import { blueClose, mockUser, rentImage, searchIcon } from '@/shared/image';
import cart from '@/shared/image/cart.svg';
import categoriesIcon from '@/shared/image/categoriesIcon.svg';
import logo from '@/shared/image/dobreLogo.svg';
import group from '@/shared/image/iconGroup.svg';
import plus from '@/shared/image/plusIcon.svg';
import userIcon from '@/shared/image/userIcon.svg';
import {
  customCategoriesButton,
  customHeaderSearchInput,
  customLoginButton,
  customRentButton,
  customSearchHeaderButton,
} from '@/shared/styles/buttonStyles';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { UserPopup } from '@/widgets/Header/ui/UserPopup/UserPopup';
const DynamicMenu = dynamic(() => import('@/features/Menu/Menu'));
const DynamicHeaderLinks = dynamic(() => import('@/widgets/Header/ui/HeaderLinks/HeaderLinks'));
const DynamicHeaderTopBar = dynamic(() => import('@/widgets/Header/ui/HeaderTopBar/HeaderTopBar'));

export const Header = () => {
  const pathname = usePathname();
  const notMainPage = pathname !== '/';
  const router = useRouter();

  const { isMenuOpen, setIsMenuOpen, isLogged, setIsLogged, isUserMenuOpen, setIsUserMenuOpen } = useAuthData();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [setIsLogged]);

  return (
    <Wrapper>
      <header
        className={classNames(styles.header, {
          [styles.catalogHeader]: notMainPage,
        })}
      >
        {notMainPage && <DynamicHeaderTopBar />}
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
          </div>
        </div>
        <Link href='/' className={styles.logoWrapper}>
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
          {isLogged ? (
            <Image
              className={styles.userImage}
              src={mockUser}
              alt='mock user'
              role='button'
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            />
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
          {isUserMenuOpen && <UserPopup />}
        </div>
        {isMenuOpen && <DynamicMenu />}
      </header>
      {notMainPage && <DynamicHeaderLinks />}
    </Wrapper>
  );
};
