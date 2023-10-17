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
  const params = useSearchParams();
  const newSearchParams = new URLSearchParams(params);
  const token = newSearchParams.get('token');

  useEffect(() => {
    router.push(`${pathName}?${newSearchParams.toString()}`);
    if (!token) {
      router.push('/');
    }
  }, [token]);

  useEffect(() => {
    if (isSuccessfulRecovery) {
      router.push('/login');
    }
  }, [isSuccessfulRecovery]);

  if (token === null) {
    return;
  }

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
