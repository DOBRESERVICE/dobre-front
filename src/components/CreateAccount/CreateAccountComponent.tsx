'use client';
import TextField from '@mui/material/TextField';
import styles from './CreateAccount.module.scss';
import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';
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
import { authCustomInput } from '@/styles/buttonStyles';
import { emailRules } from '@/constants';

export const CreateAccountComponent = ({ setActiveStep }: AutorizPropsType) => {
  const [isPassword, setIsPassword] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(false);

  const isPasswordStrong = passwordValue.length >= 8;
  const isDisabled = !isAccept || emailError || !isPasswordStrong;

  async function handleCaptchaSubmission(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsVerified(true))
      .catch(() => setIsVerified(false));
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Создание аккаунта</div>
      <div className={styles.rowContent}>
        <p className={styles.text}>Вы уже зарегистрированны?</p>
        <span className={styles.blueText} onClick={() => setActiveStep('login')}>
          Войти
        </span>
      </div>

      <div className={styles.otherSiteConnection}>
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
        <div className={styles.passwordWrapper}>
          <TextField
            id='outlined-basic'
            label='Пароль'
            type={!isPassword ? 'password' : 'text'}
            variant='outlined'
            size='small'
            sx={authCustomInput}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <Image
            src={isPassword ? eyeOpen : eyeClosed}
            alt='open'
            className={styles.passwordIcon}
            onClick={() => setIsPassword(!isPassword)}
          />
        </div>
      </div>
      <div className={styles.checkLvlPass}>
        <div className={styles.checkPassLvl}>Уровень сложности пароля</div>
        <div className={styles.valuePassLvl}>{isPasswordStrong ? 'Сложный' : 'Слабый'}</div>
      </div>
      <div className={styles.lvlPass}>
        {!isPasswordStrong ? (
          <>
            <div className={styles.blueLine} />
            <div className={styles.grayLine} />
          </>
        ) : (
          <div className={styles.fullLine} />
        )}
      </div>
      <div className={styles.captchaStyle}>
        <ReCAPTCHA
          sitekey='6Le6LlYoAAAAADp_IBK6AYMf73sp2XnyNJKmPnyz'
          ref={recaptchaRef}
          onChange={handleCaptchaSubmission}
        />
      </div>

      <div className={styles.createWrapperAccept}>
        <Checkbox onChange={() => setIsAccept(!isAccept)} style={{ margin: '0 10px;' }} />
        <div className={styles.savePass}>
          Я принимаю <span>условия пользовательского соглашения</span>
        </div>
      </div>
      <Button variant='contained' className={styles.logInButton} disabled={isDisabled} onClick={handleRegister}>
        Создать аккаунт
      </Button>
      <ModalComponent open={isShowModal} handleClose={() => setIsShowModal(false)}>
        <CreateAccountMess setActiveStep={setActiveStep} />
      </ModalComponent>
    </div>
  );
};
