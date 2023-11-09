'use client';
import styles from './HeaderLinks.module.scss';
import { constuctionData, headerLinks } from '@/data';
import { HeaderLink } from '@/components/Header/common/HeaderLink/HeaderLink';
import { Slider } from '@/components/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { SwiperButtons } from '@/components/Slider/common/SwiperButtons/SwiperButtons';
import { leftWhiteSliderIcon, rightWhiteSliderIcon } from '@/assets/image';
import { useCategories } from '@/hooks/useCategories';
import { Wrapper } from '@/components/Wrapper/Wrapper';
export const HeaderLinks = () => {
  return (
    <div className={styles.headerLinks}>
      <Slider>
        {headerLinks.map((link) => (
          <SwiperSlide key={link.id}>
            <HeaderLink linkName={link.linkName} image={link.image} />
          </SwiperSlide>
        ))}
        <SwiperButtons leftIcon={leftWhiteSliderIcon} rightIcon={rightWhiteSliderIcon} />
      </Slider>
    </div>
  );
};
