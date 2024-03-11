import classNames from 'classnames';
import Image from 'next/image';
import { CSSProperties, FC, ReactElement, useState } from 'react';
import { useSwiper } from 'swiper/react';

import styles from './SwiperButtons.module.scss';

import { Direction } from '@/features/Slider/Slider';

import { sliderLeftBlur, sliderRightBlur } from '../../../../shared/image';

interface SwiperButtonsProps {
  ButtonProps?: { prevBtnStyles: CSSProperties; nextButtonStyles: CSSProperties };
  nextIcon: ReactElement;
  prevIcon: ReactElement;
  direction: Direction;
  blur?: boolean;
}

export const SwiperButtons: FC<SwiperButtonsProps> = ({ direction, blur, prevIcon, nextIcon, ButtonProps }) => {
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
      <button onClick={handlePrev} style={ButtonProps?.prevBtnStyles}>
        {prevIcon}
      </button>
      <button onClick={handleNext} style={ButtonProps?.nextButtonStyles}>
        {nextIcon}
      </button>
    </div>
  );
};
