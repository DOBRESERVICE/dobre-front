'use client';
import TextField from '@mui/material/TextField';
import styles from './LogIn.module.scss';
import Image from 'next/image';
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { eyeOpen, eyeClosed, googleIcon, appleIcon, vkIcon, yandexIcon } from '@/assets/image';
import { loginUser } from '@/api/authApi';
import { StatusCode } from '@/enums';
import { useAuthData } from '@/context/authContext';
import { AxiosError } from 'axios';
import { emailRules } from '@/constants';

export type AutorizPropsType = {
  setActiveStep: Dispatch<SetStateAction<string>>;
};

export const LogInComponent: FC<AutorizPropsType> = ({ setActiveStep }) => {
  const [isPassword, setIsPassword] = useState(false);
  const [isSavePass, setIsSavePass] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorText, setErrorText] = useState('');
  const [emailError, setEmailError] = useState(false);
  const { setUserEmail } = useAuthData();

  const isDisabled = emailError || !password;

  const handleLogin = async () => {
    try {
      const result = await loginUser(email, password);
      if (result && result.status === StatusCode.OK) {
        setUserEmail(result.data.user.email);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === StatusCode.Unauthorized) {
        setErrorText('Доступ запрещен.');
      } else if (axiosError.response?.status === StatusCode.NotFound) {
        setErrorText('Неверные данные.');
      } else {
        setErrorText(`Неизвестная ошибка`);
      }
    }
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValidEmail = emailRules.test(value);
    setEmail(value);
    setEmailError(!isValidEmail);
  };

  return (
    <div className={styles.styles}>
      <div className={styles.title}>Вход</div>
      <div className={styles.rowContent}>
        <p className={styles.text}>Новый пользователь?</p>
        <span className={styles.blueText} onClick={() => setActiveStep('create')}>
          Создать учетную запись
        </span>
      </div>
      <div className={styles.inputWrapper}>
        <TextField
          id='outlined-basic'
          label='Телефон или Email'
          variant='outlined'
          error={emailError}
          className={styles.inputSyle}
          size='small'
          value={email}
          onChange={handleEmailChange}
          helperText={emailError ? 'invalid email' : ''}
        />
        <div className={styles.passwordWrapper}>
          <TextField
            id='outlined-basic'
            label='Пароль'
            type={!isPassword ? 'password' : 'text'}
            variant='outlined'
            className={styles.inputSyle}
            size='small'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Image
            src={isPassword ? eyeOpen : eyeClosed}
            alt='open'
            className={styles.passwordIcon}
            onClick={() => setIsPassword(!isPassword)}
          />
        </div>
      </div>
      <div className={styles.passActionsWrapper}>
        <div className={styles.savePass}>
          <Checkbox onChange={() => setIsSavePass(!isSavePass)} /> Запомнить пароль
        </div>
        <div className={styles.hidePass} onClick={() => setActiveStep('reset')}>
          Забыли пароль?
        </div>
      </div>
      <Button variant='contained' className={styles.logInButton} disabled={isDisabled} onClick={handleLogin}>
        Войти
      </Button>
      <div className={styles.otherLogInLine}>
        <hr /> <div className={styles.orWrapper}>или</div> <hr />
      </div>
      <div className={styles.otherSiteConnection} style={{ marginLeft: '20px' }}>
        <div className={styles.siteConnect}>
          <Image src={googleIcon} alt='google' />
        </div>
        <div className={styles.siteConnect}>
          <Image src={appleIcon} alt='apple' />
        </div>
        <div className={styles.siteConnect}>
          <Image src={vkIcon} alt='vk' />
        </div>
        <div className={styles.siteConnect}>
          <Image src={yandexIcon} alt='yandex' />
        </div>
      </div>
    </div>
  );
};
