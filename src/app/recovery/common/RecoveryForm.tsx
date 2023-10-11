'use client';
import { PasswordInput } from '@/app/login/common/PasswordInput/PasswordInput';
import { ChangeEvent, useState } from 'react';
import { DifficultyProgressBar } from '@/app/login/common/DifficultyProgressBar/DifficultyProgressBar';
import styles from './RecoveryForm.module.scss';
import { Button } from '@mui/material';
import { authButton, customRecoveryLightButton } from '@/styles/buttonStyles';
export const RecoveryForm = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const isDisabled = newPassword.length < 8;
  return (
    <div className={styles.formWrapper}>
      <div className={styles.content}>
        <PasswordInput
          isPassword={isPassword}
          passwordValue={newPassword}
          handlePasswordChange={(e: ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
          setIsPassword={setIsPassword}
          label='Введите новый пароль'
        />
        <PasswordInput
          isPassword={isPassword}
          passwordValue={repeatedPassword}
          handlePasswordChange={(e: ChangeEvent<HTMLInputElement>) => setRepeatedPassword(e.target.value)}
          setIsPassword={setIsPassword}
          label='Введите новый пароль еще раз'
        />
        <DifficultyProgressBar passwordValue={newPassword} />
      </div>
      <div className={styles.content}>
        <Button disableRipple variant='contained' sx={authButton} disabled={isDisabled}>
          Сохранить
        </Button>
        <Button disableRipple variant='contained' sx={customRecoveryLightButton}>
          Отменить восстановление
        </Button>
      </div>
    </div>
  );
};
