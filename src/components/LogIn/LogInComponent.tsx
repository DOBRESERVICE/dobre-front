'use client';
import TextField from '@mui/material/TextField';
import styles from './LogIn.module.scss';
import Image from 'next/image';
import { ChangeEvent, FC, useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { eyeClosed, eyeOpen } from '@/assets/image';
import { AuthStep, useAuthData } from '@/context/authContext';
import { emailRules } from '@/constants';
import { AuthServices } from '@/app/login/common/AuthServices/AuthServices';
import { AuthHeader } from '@/app/login/common/AuthHeader/AuthHeader';
import { authButton, authCheckBox, authCustomInput } from '@/styles/buttonStyles';
import { PasswordInput } from '@/app/login/common/PasswordInput/PasswordInput';

export const LogInComponent = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [isSavePass, setIsSavePass] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const { handleLogin, setActiveStep } = useAuthData();
  const isPasswordAcceptable = password.length >= 8;
  const isEmailDirty = email.length > 0;
  const isDisabled = emailError || !isEmailDirty || !isPasswordAcceptable;

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValidEmail = emailRules.test(value);
    setEmail(value);
    setEmailError(!isValidEmail);
  };
  return (
    <>
      <AuthHeader
        title='Вход'
        text='Новый пользователь?'
        actionType='Создать учетную запись'
        setActiveStep={() => setActiveStep(AuthStep.CREATE)}
      />
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
          <div className={styles.hidePass} onClick={() => setActiveStep(AuthStep.RESET)}>
            Забыли пароль?
          </div>
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
