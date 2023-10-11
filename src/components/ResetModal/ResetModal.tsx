'use client';
import Modal from '@mui/material/Modal';
import { useAuthData } from '@/context/authContext';
import Image from 'next/image';
import { emailIcon } from '@/assets/image';
import { Button } from '@mui/material';
import styles from './ResetModal.module.scss';
import { customModalButton } from '@/styles/buttonStyles';

export const ResetModal = () => {
  const { isResetModalShown, setIsResetModalShown } = useAuthData();
  console.log(isResetModalShown);
  return (
    <Modal
      open={isResetModalShown}
      onClose={() => setIsResetModalShown(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      className={styles.resetModal}
    >
      <div className={styles.modalContent}>
        <div className={styles.contentWrapper}>
          <Image src={emailIcon} alt='email icon' />
          <h2> Ссылка для восстановления отправлена</h2>
          <p>На name@gmail.com адрес было отправлено письмо с ссылкой для восстановления</p>
        </div>
        <Button disableRipple sx={customModalButton}>
          Посмотреть
        </Button>
      </div>
    </Modal>
  );
};
