'use client';

import { useAuthData } from '@/shared/context/authContext';
import TextField from '@mui/material/TextField';
import { authButton, authCustomInput } from '@/shared/styles/buttonStyles';
import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ResetPasswordHeader } from '@/features/forms/ResetPasswordForm/ui/ResetPasswordHeader/ResetPasswordHeader';
import { emailRules } from '@/shared/constants/validation';

export const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const isEmailDirty = email.length > 0;
  const isDisabled = emailError || !isEmailDirty;
  const router = useRouter();
  const { isLetterSent, handleSendEmailLetter, setIsLetterSent } = useAuthData();
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValidEmail = emailRules.test(value);
    setEmail(value);
    setEmailError(!isValidEmail);
  };

  useEffect(() => {
    if (isLetterSent) {
      router.push('/');
    }
  }, [isLetterSent]);

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
