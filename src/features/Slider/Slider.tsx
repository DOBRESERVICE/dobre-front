'use client';

import { StaticImageData } from 'next/image';
import { Children, FC, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';

import { SwiperButtons } from '@/features/Slider/ui/SwiperButtons/SwiperButtons';

interface SliderProps {
  nextIcon: StaticImageData;
  prevIcon: StaticImageData;
  children: ReactNode;
}

export const Slider: FC<SliderProps> = ({ children, prevIcon, nextIcon }) => {
  return (
    <Swiper
      uniqueNavElements
      allowTouchMove={false}
      noSwiping
      slidesPerView='auto'
      loop
      spaceBetween={20}
      className={styles.swiper}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide className={styles.slide} key={index}>
          {child}
        </SwiperSlide>
      ))}
      <SwiperButtons rightIcon={nextIcon} leftIcon={prevIcon} />
    </Swiper>
  );
};
