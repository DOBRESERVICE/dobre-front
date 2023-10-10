'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss';
import { SwiperButtons } from '@/components/Slider/common/SwiperButtons/SwiperButtons';

export const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Swiper slidesPerView='auto' loop={true} spaceBetween={20} className={styles.swiper}>
        {children}
        <SwiperButtons />
      </Swiper>
    </>
  );
};
