'use client';

import { AuthHeader } from '@/app/login/common/AuthHeader/AuthHeader';
import { AuthStep, useAuthData } from '@/context/authContext';
import TextField from '@mui/material/TextField';
import { authButton, authCustomInput } from '@/styles/buttonStyles';
import { ChangeEvent, useState } from 'react';
import { emailRules } from '@/constants';
import { Button } from '@mui/material';
import { ResetModal } from '@/components/ResetModal/ResetModal';
import { useRouter } from 'next/navigation';
import { ResetPasswordHeader } from '@/components/ResetPassword/common/ResetPasswordHeader/ResetPasswordHeader';

export const ResetPasswordComponent = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const { handleLogin, setActiveStep } = useAuthData();
  const isEmailDirty = email.length > 0;
  const isDisabled = emailError || !isEmailDirty;
  const router = useRouter();
  const { setIsResetModalShown } = useAuthData();
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValidEmail = emailRules.test(value);
    setEmail(value);
    setEmailError(!isValidEmail);
  };
  const handleClick = () => {
    router.push('/');
    setIsResetModalShown(true);
  };
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
      <Button variant='contained' disabled={isDisabled} sx={authButton} onClick={handleClick}>
        Получить ссылку
      </Button>
    </>
  );
};
