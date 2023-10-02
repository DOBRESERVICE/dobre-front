'use client';
import TextField from '@mui/material/TextField';
import styles from './ResetPassword.module.scss';
import { useState } from 'react';
import { Button } from '@mui/material';
import { ModalComponent } from '../ModalComponent';
import { LinkResetMess } from '../NotificationMessageModal/LinkReset';

export const ResetPasswordComponent = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Восстановление пароля</div>
      <div className={styles.resetText}>
        Введите e-mail адрес на который был зарегистрирован ваш аккаунт и мы отправим ссылку для восстановления
      </div>
      <div className={styles.inputWrapper}>
        <TextField id='outlined-basic' label='Email' variant='outlined' className={styles.inputSyle} size='small' />
      </div>
      <Button variant='contained' className={styles.logInButton}>
        Получить ссылку
      </Button>
      <ModalComponent open={isShowModal} handleClose={() => setIsShowModal(false)}>
        <LinkResetMess />
      </ModalComponent>
    </div>
  );
};
