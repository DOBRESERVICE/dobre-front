'use client';
import styles from './AuthModals.module.scss';
import { useEffect } from 'react';
import { useAuthData } from '@/shared/context/authContext';
import Modal from '@mui/material/Modal';
import { ModalContent } from '@/features/AuthModals/ui/ModalContent/ModalContent';
import { emailIcon, successIcon } from '../../shared/image';
const AuthModals = () => {
  const {
    setIsResetModalShown,
    isRegistered,
    setIsRegistered,
    isResetModalShown,
    userEmail,
    isLetterSent,
    isSuccessModalShown,
    setIsSuccessModalShown,
    setIsLetterSent,
  } = useAuthData();
  const resetModalText = `На ${userEmail} адрес было отправлено письмо с ссылкой для восстановления`;
  const successText = `На ${userEmail} адрес было отправлено письмо с подтверждением `;
  useEffect(() => {
    if (isLetterSent) {
      setIsResetModalShown(true);
    }
    if (isRegistered) {
      setIsSuccessModalShown(true);
    }
  }, [isRegistered, isLetterSent]);
  const onResetModalClose = () => {
    setIsLetterSent(false);
    setIsResetModalShown(false);
  };
  const onSuccessModalClose = () => {
    setIsRegistered(false);
    setIsSuccessModalShown(false);
  };
  return (
    <div className={styles.authModalsWrapper}>
      <Modal
        open={isResetModalShown}
        onClose={onResetModalClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className={styles.modal}
      >
        <ModalContent
          onClick={onSuccessModalClose}
          imageIcon={emailIcon}
          title='Ссылка для восстановления отправлена'
          text={resetModalText}
        />
      </Modal>
      <Modal
        open={isSuccessModalShown}
        onClose={onSuccessModalClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className={styles.modal}
      >
        <ModalContent
          onClick={onSuccessModalClose}
          imageIcon={successIcon}
          title='Ваш аккаунт успешно создан!'
          text={successText}
        />
      </Modal>
    </div>
  );
};

export default AuthModals;
