import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import styles from './Userpopup.module.scss';

import { Loader } from '@/features/Loader/Loader';
import { useAuthData } from '@/shared/context/authContext';
import { userMenuData } from '@/shared/data';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';
import { logoutIcon, mockUser } from '@/shared/image';
export const UserPopup = () => {
  const [activeItem, setActiveItem] = useState(1);
  const { setIsLogged, setIsUserMenuOpen } = useAuthData();
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleOutsideClick = () => {
    setIsUserMenuOpen(false);
  };
  useOutsideClick(ref, handleOutsideClick);
  const logout = () => {
    localStorage.removeItem('token');
    setIsLogged(false);
    setIsLoading(true);
    setActiveItem(4);
  };
  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setIsUserMenuOpen(false);
      }
    }, 1000);
  }, [isLoading, setIsUserMenuOpen]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.userPopup} ref={ref}>
      <div className={styles.popupHeader}>
        <Image src={mockUser} alt='user image' />
        <p>Username</p>
      </div>
      <div className={styles.popupOptions}>
        {userMenuData.map((menuItem) => (
          <div
            key={menuItem.id}
            role='button'
            className={classNames(styles.option, {
              [styles.active]: activeItem === menuItem.id,
            })}
          >
            <div className={styles.optionContent}>
              <Image src={menuItem.img} alt={menuItem.text} />
              <p>{menuItem.text}</p>
            </div>
          </div>
        ))}
        <div
          role='button'
          onClick={logout}
          className={classNames(styles.option, {
            [styles.active]: activeItem === 4,
          })}
        >
          <div className={styles.optionContent}>
            <Image src={logoutIcon} alt='logout' />
            <p>Выйти</p>
          </div>
        </div>
      </div>
    </div>
  );
};
