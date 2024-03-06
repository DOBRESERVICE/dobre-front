import { Button } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { FC, ForwardedRef, forwardRef } from 'react';

import styles from './ModalContent.module.scss';

import { customModalButton } from '@/shared/styles/buttonStyles';

interface ModalContentProps {
  imageIcon: StaticImageData;
  title: string;
  text: string;
  onClick: () => void;
}
export const ModalContent: FC<ModalContentProps> = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const { imageIcon, title, text, onClick } = props;

  return (
    <div className={styles.modalContent} ref={ref}>
      <div className={styles.contentWrapper}>
        <Image src={imageIcon} alt='email icon' />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Button disableRipple sx={customModalButton} onClick={onClick}>
        Посмотреть
      </Button>
    </div>
  );
});
