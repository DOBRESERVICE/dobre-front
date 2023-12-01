'use client';

import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

import { ResetPasswordHeader } from '@/features/forms/ResetPasswordForm/ui/ResetPasswordHeader/ResetPasswordHeader';
import { emailRules } from '@/shared/constants/validation';
import { useAuthData } from '@/shared/context/authContext';
import { authButton, authCustomInput } from '@/shared/styles/buttonStyles';

export const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const isEmailDirty = email.length > 0;
  const isDisabled = emailError || !isEmailDirty;
  const router = useRouter();
  const { isLetterSent, handleSendEmailLetter } = useAuthData();
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isValidEmail = emailRules.test(value);
    setEmail(value);
    setEmailError(!isValidEmail);
  };

  useEffect(() => {
    if (isLetterSent) {
      router.push('/');
    }
  }, [isLetterSent, router]);

  return (
    <>
      <ResetPasswordHeader
        title='Восстановление пароля'
        text='Введите e-mail адрес на который был зарегистрирован ваш аккаунт и мы отправим ссылку для восстановления'
      />
      <TextField
        id='outlined-basic'
        label='Email'
        error={emailError}
        variant='outlined'
        size='small'
        value={email}
        sx={authCustomInput}
        onChange={handleEmailChange}
        helperText={emailError ? 'invalid email' : ''}
      />
      <Button variant='contained' disabled={isDisabled} sx={authButton} onClick={() => handleSendEmailLetter(email)}>
        Получить ссылку
      </Button>
    </>
  );
};
