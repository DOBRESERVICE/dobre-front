import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { FC, useState } from 'react';
import { useSwiper } from 'swiper/react';

import styles from './SwiperButtons.module.scss';

import { Direction } from '@/features/Slider/Slider';

import { sliderLeftBlur, sliderRightBlur } from '../../../../shared/image';

interface SwiperButtonsProps {
  nextIcon: StaticImageData;
  prevIcon: StaticImageData;
  direction: Direction;
  blur: boolean;
}

export const SwiperButtons: FC<SwiperButtonsProps> = ({ direction, blur, prevIcon, nextIcon }) => {
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
      <button onClick={handlePrev}>
        <Image src={prevIcon} alt='prev' />
      </button>
      <button onClick={handleNext}>
        <Image src={nextIcon} alt='next' />
      </button>
    </div>
  );
};
