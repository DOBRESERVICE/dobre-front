'use client';
import TextField from '@mui/material/TextField';
import styles from './LogInForm.module.scss';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { useAuthData } from '@/shared/context/authContext';
import { AuthServices } from '@/features/forms/ui/AuthServices/AuthServices';
import { AuthHeader } from '@/features/forms/ui/AuthHeader/AuthHeader';
import { authButton, authCheckBox, authCustomInput } from '@/shared/styles/buttonStyles';
import { PasswordInput } from '@/features/forms/ui/PasswordInput/PasswordInput';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { emailRules } from '@/shared/constants/validation';

export const LoginForm = () => {
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
            <Checkbox id='rememberMe' sx={authCheckBox} onChange={() => setIsSavePass(!isSavePass)} />
            <label htmlFor='rememberMe'>Запомнить пароль</label>
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
