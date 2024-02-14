'use client';
import { StaticImageData } from 'next/image';
import { Children, FC, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss';
import { SwiperButtons } from '@/features/Slider/ui/SwiperButtons/SwiperButtons';
import classNames from 'classnames';

export type Direction = 'vertical' | 'horizontal';

interface SliderProps {
  nextIcon: StaticImageData;
  prevIcon: StaticImageData;
  children: ReactNode;
  direction: Direction;
  blur: boolean;
  gap?: number;
}

export const Slider: FC<SliderProps> = ({ blur, direction, children, prevIcon, nextIcon, gap = 20 }) => {
  return (
    <Swiper
      allowTouchMove={false}
      noSwiping
      direction={direction}
      slidesPerView='auto'
      spaceBetween={gap}
      className={classNames(styles.swiper, {
        [styles.verticalSwiper]: direction === 'vertical',
      })}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide className={styles.slide} key={index}>
          {child}
        </SwiperSlide>
      ))}
      <SwiperButtons blur={blur} direction={direction} nextIcon={nextIcon} prevIcon={prevIcon} />
    </Swiper>
  );
};
