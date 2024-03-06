import classNames from 'classnames';
import Image from 'next/image';
import { FC, ReactElement, useState } from 'react';
import { useSwiper } from 'swiper/react';

import styles from './SwiperButtons.module.scss';

import { Direction } from '@/features/Slider/Slider';

import { sliderLeftBlur, sliderRightBlur } from '../../../../shared/image';

interface SwiperButtonsProps {
  nextIcon: ReactElement;
  prevIcon: ReactElement;
  direction: Direction;
  blur?: boolean;
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
}

export const SwiperButtons: FC<SwiperButtonsProps> = ({
  direction,
  blur,
  prevIcon,
  nextIcon,
  right,
  left,
  bottom,
  top,
}) => {
  const [_, setTrigger] = useState(0);
  const swiper = useSwiper();
  const handleNext = () => {
    swiper.slideNext();
    setTrigger((prev) => prev + 1);
  };
  const handlePrev = () => {
    swiper.slidePrev();
    setTrigger((prev) => prev + 1);
  };
  return (
    <div
      className={classNames(styles.swiperButtonsWrapper, {
        [styles.noblur]: !blur,
        [styles.verticalButtons]: direction === 'vertical',
        [styles.isBeginning]: swiper.isBeginning,
        [styles.isEnd]: swiper.isEnd,
      })}
    >
      <div className={classNames(styles.blur, styles.leftBlur)}>
        <Image src={sliderLeftBlur} alt='blur' />
      </div>
      <div className={classNames(styles.blur, styles.rightBlur)}>
        <Image src={sliderRightBlur} alt='blur' />
      </div>
      <button onClick={handlePrev} style={{ left: left, top: top }}>
        {prevIcon}
      </button>
      <button onClick={handleNext} style={{ right: right, bottom: bottom }}>
        {nextIcon}
      </button>
    </div>
  );
};
