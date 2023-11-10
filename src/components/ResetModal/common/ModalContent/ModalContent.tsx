import styles from './ModalContent.module.scss';
import Image, { StaticImageData } from 'next/image';
import { emailIcon } from '@/assets/image';
import { Button } from '@mui/material';
import { customModalButton } from '@/styles/buttonStyles';
import { FC, ForwardedRef, forwardRef } from 'react';

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
