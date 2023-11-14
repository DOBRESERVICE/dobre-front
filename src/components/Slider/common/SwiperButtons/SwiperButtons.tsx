import Image, { StaticImageData } from 'next/image';
import { useSwiper } from 'swiper/react';
import styles from './SwiperButtons.module.scss';
import { sliderLeftBlur, sliderRightBlur } from '@/assets/image';
import classNames from 'classnames';
import { FC } from 'react';

interface SwiperButtonsProps {
  rightIcon: StaticImageData;
  leftIcon: StaticImageData;
  onNext: () => void;
}

export const SwiperButtons: FC<SwiperButtonsProps> = ({ rightIcon, leftIcon, onNext }) => {
  return (
    <div className={styles.swiperButtonsWrapper}>
      <div className={classNames(styles.blur, styles.leftBlur)}>
        <Image src={sliderLeftBlur} alt='blur' />
      </div>
      <div className={classNames(styles.blur, styles.rightBlur)}>
        <Image src={sliderRightBlur} alt='blur' />
      </div>
      <button onClick={onNext}>
        <Image src={leftIcon} alt='prev' />
      </button>
      <button onClick={onNext}>
        <Image src={rightIcon} alt='next' />
      </button>
    </div>
  );
};
