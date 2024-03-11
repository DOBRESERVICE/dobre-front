'use client';
import classNames from 'classnames';
import { Children, CSSProperties, FC, ReactElement, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';

import { SwiperButtons } from '@/features/Slider/ui/SwiperButtons/SwiperButtons';

export type Direction = 'vertical' | 'horizontal';

interface SliderProps {
  nextIcon: ReactElement;
  prevIcon: ReactElement;
  children: ReactNode;
  direction: Direction;
  ButtonProps?: {
    prevBtnStyles: CSSProperties;
    nextButtonStyles: CSSProperties;
  };
  blur: boolean;
  gap?: number;
}

export const Slider: FC<SliderProps> = ({ blur, direction, children, prevIcon, nextIcon, gap = 20, ButtonProps }) => {
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
        ButtonProps={ButtonProps}
        blur={blur}
        direction={direction}
        nextIcon={nextIcon}
        prevIcon={prevIcon}
      />
    </Swiper>
  );
};
