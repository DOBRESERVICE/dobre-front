'use client';
import classNames from 'classnames';
import { Children, FC, ReactElement, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';

import { SwiperButtons } from '@/features/Slider/ui/SwiperButtons/SwiperButtons';

export type Direction = 'vertical' | 'horizontal';

interface SliderProps {
  nextIcon: ReactElement;
  prevIcon: ReactElement;
  children: ReactNode;
  direction: Direction;
  blur: boolean;
  gap?: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

export const Slider: FC<SliderProps> = ({
  blur,
  direction,
  children,
  prevIcon,
  nextIcon,
  gap = 20,
  left,
  bottom,
  right,
  top,
}) => {
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
      <SwiperButtons
        left={left}
        right={right}
        top={top}
        bottom={bottom}
        blur={blur}
        direction={direction}
        nextIcon={nextIcon}
        prevIcon={prevIcon}
      />
    </Swiper>
  );
};
