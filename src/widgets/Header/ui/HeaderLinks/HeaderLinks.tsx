'use client';
import styles from './HeaderLinks.module.scss';
import { constuctionData, headerLinks } from '../../../../shared/data';
import { HeaderLink } from '@/widgets/Header/ui/HeaderLink/HeaderLink';
import { Slider } from '@/features/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { SwiperButtons } from '@/features/Slider/ui/SwiperButtons/SwiperButtons';
import { leftWhiteSliderIcon, rightWhiteSliderIcon } from '../../../../shared/image';
import { useCategories } from '@/shared/hooks/useCategories';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
export const HeaderLinks = () => {
  return (
    <div className={styles.headerLinks}>
      <Slider nextIcon={rightWhiteSliderIcon} prevIcon={leftWhiteSliderIcon}>
        {headerLinks.map((link) => (
          <HeaderLink key={link.id} linkName={link.linkName} image={link.image} />
        ))}
      </Slider>
    </div>
  );
};
