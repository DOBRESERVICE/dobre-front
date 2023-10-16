'use client';
import TextField from '@mui/material/TextField';
import styles from './LogIn.module.scss';
import Image from 'next/image';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { eyeClosed, eyeOpen } from '@/assets/image';
import { AuthStep, useAuthData } from '@/context/authContext';
import { emailRules } from '@/constants';
import { AuthServices } from '@/app/login/common/AuthServices/AuthServices';
import { AuthHeader } from '@/app/login/common/AuthHeader/AuthHeader';
import { authButton, authCheckBox, authCustomInput } from '@/styles/buttonStyles';
import { PasswordInput } from '@/app/login/common/PasswordInput/PasswordInput';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const LogInComponent = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [isSavePass, setIsSavePass] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const { handleLogin, isLogged, setIsLogged } = useAuthData();
  const isPasswordAcceptable = password.length >= 8;
  const isEmailDirty = email.length > 0;
  const isDisabled = emailError || !isEmailDirty || !isPasswordAcceptable;
  const router = useRouter();
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValidEmail = emailRules.test(value);
    setEmail(value);
    setEmailError(!isValidEmail);
  };
  useEffect(() => {
    if (isLogged) {
      router.push('/');
    }
  }, [isLogged]);
  return (
    <>
      <AuthHeader title='Вход' text='Новый пользователь?' actionType='Создать учетную запись' link='create' />
      <div className={styles.inputWrapper}>
        <TextField
          id='outlined-basic'
          label='Телефон или Email'
          error={emailError}
          variant='outlined'
          size='small'
          value={email}
          sx={authCustomInput}
          onChange={handleEmailChange}
          helperText={emailError ? 'invalid email' : ''}
        />
        <PasswordInput
          isPassword={isPassword}
          passwordValue={password}
          handlePasswordChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          setIsPassword={setIsPassword}
          label='Пароль'
        />
        <div className={styles.passActionsWrapper}>
          <div className={styles.savePass}>
            <Checkbox sx={authCheckBox} onChange={() => setIsSavePass(!isSavePass)} />
            <p>Запомнить пароль</p>
          </div>
          <Link className={styles.hidePass} href={'/reset'}>
            Забыли пароль?
          </Link>
        </div>
      </div>

      <Button variant='contained' disabled={isDisabled} sx={authButton} onClick={() => handleLogin(email, password)}>
        Войти
      </Button>
      <div className={styles.otherLogInLine}>
        <hr /> <p>или</p> <hr />
      </div>
      <div className={styles.servicesWrapper}>
        <AuthServices />
      </div>
    </>
  );
};
