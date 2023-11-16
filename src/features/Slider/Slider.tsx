'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss';
import { Children, FC, ReactNode } from 'react';
import { SwiperButtons } from '@/features/Slider/ui/SwiperButtons/SwiperButtons';
import { StaticImageData } from 'next/image';

interface SliderProps {
  nextIcon: StaticImageData;
  prevIcon: StaticImageData;
  children: ReactNode;
}

export const Slider: FC<SliderProps> = ({ children, prevIcon, nextIcon }) => {
  return (
    <>
      <Swiper
        uniqueNavElements
        allowTouchMove={false}
        noSwiping={true}
        slidesPerView='auto'
        loop={true}
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
    </>
  );
};
