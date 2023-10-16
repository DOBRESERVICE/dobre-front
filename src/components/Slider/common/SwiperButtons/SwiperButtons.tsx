import Image from 'next/image';
import { useSwiper } from 'swiper/react';
import styles from './SwiperButtons.module.scss';
import { nextArrow, previous, sliderLeftBlur, sliderRightBlur } from '@/assets/image';
import classNames from 'classnames';

export const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.swiperButtonsWrapper}>
      <div className={classNames(styles.blur, styles.leftBlur)}>
        <Image src={sliderLeftBlur} alt='blur' />
      </div>
      <div className={classNames(styles.blur, styles.rightBlur)}>
        <Image src={sliderRightBlur} alt='blur' />
      </div>
      <button onClick={() => swiper.slidePrev()}>
        <Image src={previous} alt='prev' />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <Image src={nextArrow} alt='next' />
      </button>
    </div>
  );
};
