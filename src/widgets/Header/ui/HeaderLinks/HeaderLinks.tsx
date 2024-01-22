'use client';

import styles from './HeaderLinks.module.scss';

import { Slider } from '@/features/Slider/Slider';
import { HeaderLink } from '@/widgets/Header/ui/HeaderLink/HeaderLink';

import { headerLinks } from '../../../../shared/data';
import { leftWhiteSliderIcon, rightWhiteSliderIcon } from '../../../../shared/image';

const HeaderLinks = () => {
  return (
    <div className={styles.headerLinks}>
      <Slider blur direction='horizontal' nextIcon={rightWhiteSliderIcon} prevIcon={leftWhiteSliderIcon}>
        {headerLinks.map((link) => (
          <HeaderLink key={link.id} linkName={link.linkName} image={link.image} />
        ))}
      </Slider>
    </div>
  );
};
export default HeaderLinks;
