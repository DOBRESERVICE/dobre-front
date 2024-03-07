'use client';

import { CSSProperties } from 'react';

import styles from './HeaderLinks.module.scss';

import { Slider } from '@/features/Slider/Slider';
import { headerLinks } from '@/shared/data';
import { HeaderLink } from '@/widgets/Header/ui/HeaderLink/HeaderLink';
import { SwiperHeaderNextButton } from '@/widgets/Header/ui/SwiperHeaderButtons/SwiperHeaderNextButton/SwiperHeaderNextButton';
import { SwiperHeaderPrevButton } from '@/widgets/Header/ui/SwiperHeaderButtons/SwiperHeaderPrevButton/SwiperHeaderPrevButton';

const HeaderLinks = () => {
  const nextButtonStyles: CSSProperties = {
    right: '30px',
  };
  const prevButtonsStyles: CSSProperties = {
    left: '30px',
  };
  return (
    <div className={styles.headerLinks}>
      <Slider
        blur={false}
        direction='horizontal'
        nextIcon={<SwiperHeaderNextButton />}
        prevIcon={<SwiperHeaderPrevButton />}
        gap={33}
        ButtonProps={{ nextButtonStyles: nextButtonStyles, prevBtnStyles: prevButtonsStyles }}
      >
        {headerLinks.map((link) => (
          <HeaderLink key={link.id} linkName={link.linkName} link={link.link} image={link.image} />
        ))}
      </Slider>
    </div>
  );
};
export default HeaderLinks;
