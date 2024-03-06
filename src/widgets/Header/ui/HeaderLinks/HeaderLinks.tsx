'use client';

import styles from './HeaderLinks.module.scss';

import { Slider } from '@/features/Slider/Slider';
import { HeaderLink } from '@/widgets/Header/ui/HeaderLink/HeaderLink';
import { SwiperHeaderNextButton } from '@/widgets/Header/ui/SwiperHeaderButtons/SwiperHeaderNextButton/SwiperHeaderNextButton';
import { SwiperHeaderPrevButton } from '@/widgets/Header/ui/SwiperHeaderButtons/SwiperHeaderPrevButton/SwiperHeaderPrevButton';

import { headerLinks } from '@/shared/data';

const HeaderLinks = () => {
  return (
    <div className={styles.headerLinks}>
      <Slider
        blur={false}
        direction='horizontal'
        nextIcon={<SwiperHeaderNextButton />}
        prevIcon={<SwiperHeaderPrevButton />}
        gap={33}
        left={5}
        right={5}
      >
        {headerLinks.map((link) => (
          <HeaderLink key={link.id} linkName={link.linkName} link={link.link} image={link.image} />
        ))}
      </Slider>
    </div>
  );
};
export default HeaderLinks;
