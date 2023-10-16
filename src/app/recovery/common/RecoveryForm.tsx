'use client';
import { PasswordInput } from '@/app/login/common/PasswordInput/PasswordInput';
import { ChangeEvent, useEffect, useState } from 'react';
import { DifficultyProgressBar } from '@/app/login/common/DifficultyProgressBar/DifficultyProgressBar';
import styles from './RecoveryForm.module.scss';
import { Button } from '@mui/material';
import { authButton, customRecoveryLightButton } from '@/styles/buttonStyles';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useAuthData } from '@/context/authContext';
export const RecoveryForm = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [isRepeatedPassword, setIsRepeatedPassword] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const isDisabled = newPassword.length < 8;
  const router = useRouter();
  const pathName = usePathname();
  const { isSuccessfulRecovery, handleRecoveryPassword } = useAuthData();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4ZDA4NjM5LWU3MjYtNGZmOC05ODk1LTEzYjQ3YzYyMWE1MSIsImVtYWlsIjoici5lbnRpaW5uQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ0MzQ0OCwiZXhwIjoxNjk4MDQ4MjQ4fQ.8l53XQGxory9FZd0IqIxQWJiaA9jetq50T311iwwvMk';
  const params = useSearchParams();
  const newSearchParams = new URLSearchParams(params);
  newSearchParams.set('token', token);
  useEffect(() => {
    router.push(`${pathName}?${newSearchParams.toString()}`);
  }, []);
  useEffect(() => {
    if (isSuccessfulRecovery) {
      router.push('/login');
    }
  }, [isSuccessfulRecovery]);
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
          isPassword={isRepeatedPassword}
          passwordValue={repeatedPassword}
          handlePasswordChange={(e: ChangeEvent<HTMLInputElement>) => setRepeatedPassword(e.target.value)}
          setIsPassword={setIsRepeatedPassword}
          label='Введите новый пароль еще раз'
        />
        <DifficultyProgressBar passwordValue={newPassword} />
      </div>
      <div className={styles.content}>
        <Button
          disableRipple
          variant='contained'
          sx={authButton}
          disabled={isDisabled}
          onClick={() => handleRecoveryPassword(token, newPassword)}
        >
          Сохранить
        </Button>
        <Button disableRipple variant='contained' sx={customRecoveryLightButton} onClick={() => router.push('/')}>
          Отменить восстановление
        </Button>
      </div>
    </div>
  );
};
