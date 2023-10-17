'use client';
import { Swiper } from 'swiper/react';
import styles from './Slider.module.scss';

export const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Swiper
        allowTouchMove={false}
        noSwiping={true}
        slidesPerView='auto'
        loop={true}
        spaceBetween={20}
        className={styles.swiper}
      >
        {children}
      </Swiper>
    </>
  );
};
