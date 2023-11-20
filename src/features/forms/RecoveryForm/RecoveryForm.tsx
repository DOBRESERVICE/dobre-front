'use client';

import { Button } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

import styles from './RecoveryForm.module.scss';

import { ResetPasswordHeader } from '@/features/forms/ResetPasswordForm/ui/ResetPasswordHeader/ResetPasswordHeader';
import { DifficultyProgressBar } from '@/features/forms/ui/DifficultyProgressBar/DifficultyProgressBar';
import { PasswordInput } from '@/features/forms/ui/PasswordInput/PasswordInput';
import { useAuthData } from '@/shared/context/authContext';
import { authButton, customRecoveryLightButton } from '@/shared/styles/buttonStyles';

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
  }, [token, newSearchParams, pathName, router]);

  useEffect(() => {
    if (isSuccessfulRecovery) {
      router.push('/login');
    }
  }, [isSuccessfulRecovery, router]);

  if (token === null) {
    router.push('/');
    return <div>Invalid</div>;
  }

  return (
    <>
      <ResetPasswordHeader title='Восстановление пароля' text='Введите новый пароль' />
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
    </>
  );
};
