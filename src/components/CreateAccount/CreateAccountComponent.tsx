'use client';
import TextField from '@mui/material/TextField';
import styles from './CreateAccount.module.scss';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { ModalComponent } from '@/components/ModalComponent';
import { CreateAccountMess } from '../NotificationMessageModal/CreateAccount';
import { AutorizPropsType } from '../LogIn/LogInComponent';
import ReCAPTCHA from 'react-google-recaptcha';
import { verifyCaptcha } from '../VeryfiCaptcha';
import { googleIcon, appleIcon, vkIcon, yandexIcon, eyeOpen, eyeClosed } from '@/assets/image';
import { registerUser } from '@/api/authApi';
import { StatusCode } from '@/enums';
import { AxiosError } from 'axios';
import { authButton, authCheckBox, authCustomInput } from '@/styles/buttonStyles';
import { emailRules, mediumPasswordRules, strongPasswordRules } from '@/constants';
import { DifficultyProgressBar } from '@/app/login/common/DifficultyProgressBar/DifficultyProgressBar';

export const CreateAccountComponent = ({ setActiveStep }: AutorizPropsType) => {
  const [isPassword, setIsPassword] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [strengthPassword, setStrengthPassword] = useState(1);
  const [strengthText, setStrengthText] = useState('Слабый');

  const isPasswordStrong = passwordValue.length >= 8;
  const isDisabled = !isAccept || emailError || !isPasswordStrong || !isVerified;
  console.log(isVerified);
  function handleCaptchaSubmission(token: string | null) {
    if (token) {
      setIsVerified(true);
    }
  }

  const handleRegister = async () => {
    try {
      const result = await registerUser(emailValue, passwordValue);
      if (result && result.status === StatusCode.OK) {
        setIsShowModal(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error during registration:', axiosError.message);
      setIsShowModal(false);
    }
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValidEmail = emailRules.test(value);
    setEmailValue(value);
    setEmailError(!isValidEmail);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPasswordValue(value);
  };
  useEffect(() => {
    if (strongPasswordRules.test(passwordValue)) {
      setStrengthPassword(3);
      setStrengthText('Сильный');
    } else if (mediumPasswordRules.test(passwordValue)) {
      setStrengthPassword(2);
      setStrengthText('Средний');
    } else {
      setStrengthPassword(1);
      setStrengthText('Слабый');
    }
  }, [passwordValue, strengthPassword, strengthText]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Создание аккаунта</h2>
        <p className={styles.text}>
          Вы уже зарегистрированны?
          <span className={styles.blueText} onClick={() => setActiveStep('login')}>
            Войти
          </span>
        </p>
        <div className={styles.iconsWrapper}>
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
      <div className={styles.inputWrapper}>
        <TextField
          id='outlined-basic'
          label='Email'
          error={emailError}
          variant='outlined'
          size='small'
          value={emailValue}
          sx={authCustomInput}
          onChange={handleEmailChange}
          helperText={emailError ? 'invalid email' : ''}
        />
        <div>
          <TextField
            id='outlined-basic'
            label='Пароль'
            type={!isPassword ? 'password' : 'text'}
            variant='outlined'
            size='small'
            sx={authCustomInput}
            value={passwordValue}
            onChange={handlePasswordChange}
          />
          <Image
            src={isPassword ? eyeOpen : eyeClosed}
            alt='open'
            className={styles.passwordIcon}
            onClick={() => setIsPassword(!isPassword)}
          />
        </div>
        <DifficultyProgressBar strength={strengthPassword} strengthText={strengthText} />
      </div>

      <div className={styles.captchaStyle}>
        <ReCAPTCHA
          sitekey='6Le6LlYoAAAAADp_IBK6AYMf73sp2XnyNJKmPnyz'
          ref={recaptchaRef}
          onChange={handleCaptchaSubmission}
          style={{ transform: 'scale(1)' }}
        />
      </div>

      <div className={styles.createWrapperAccept}>
        <Checkbox onChange={() => setIsAccept(!isAccept)} sx={authCheckBox} />
        <div className={styles.savePass}>
          Я принимаю <span>условия пользовательского соглашения</span>
        </div>
      </div>
      <Button variant='contained' disabled={isDisabled} sx={authButton} onClick={handleRegister}>
        Создать аккаунт
      </Button>
      <ModalComponent open={isShowModal} handleClose={() => setIsShowModal(false)}>
        <CreateAccountMess setActiveStep={setActiveStep} />
      </ModalComponent>
    </div>
  );
};
