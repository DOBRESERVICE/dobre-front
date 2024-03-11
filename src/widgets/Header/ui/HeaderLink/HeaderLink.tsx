import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './HeaderLink.module.scss';

interface HeaderLink {
  linkName: string;
  image: StaticImageData;
  link: string;
}
export const HeaderLink: FC<HeaderLink> = ({ linkName, image, link }) => {
  return (
    <Link href={link} className={styles.headerLinkWrapper}>
      <Image src={image} alt='category' />
      <p>{linkName}</p>
    </Link>
  );
};
