import styles from './ModalContent.module.scss';
import Image, { StaticImageData } from 'next/image';
import { emailIcon } from '@/assets/image';
import { Button } from '@mui/material';
import { customModalButton } from '@/styles/buttonStyles';
import { FC } from 'react';

interface ModalContentProps {
  imageIcon: StaticImageData;
  title: string;
  text: string;
  onClick: () => void;
}
export const ModalContent: FC<ModalContentProps> = ({ imageIcon, title, text, onClick }) => {
  return (
    <div className={styles.modalContent}>
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
};
