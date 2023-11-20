import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './HeaderLink.module.scss';

interface HeaderLink {
  linkName: string;
  image: StaticImageData;
}
export const HeaderLink: FC<HeaderLink> = ({ linkName, image }) => {
  return (
    <Link href='/' className={styles.headerLinkWrapper}>
      <Image src={image} alt='category' />
      <p>{linkName}</p>
    </Link>
  );
};
