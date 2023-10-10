'use client';
import TextField from '@mui/material/TextField';
import styles from './CreateAccount.module.scss';
import Image from 'next/image';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { ModalComponent } from '@/components/ModalComponent';
import { CreateAccountMess } from '../NotificationMessageModal/CreateAccount';
import ReCAPTCHA from 'react-google-recaptcha';
import { eyeClosed, eyeOpen } from '@/assets/image';
import { authButton, authCheckBox, authCustomInput } from '@/styles/buttonStyles';
import { emailRules, mediumPasswordRules, strongPasswordRules } from '@/constants';
import { DifficultyProgressBar } from '@/app/login/common/DifficultyProgressBar/DifficultyProgressBar';
import { useAuthData } from '@/context/authContext';
import { AuthServices } from '@/app/login/common/AuthServices/AuthServices';
import { AuthHeader } from '@/app/login/common/AuthHeader/AuthHeader';
import { AuthStep, AutorizPropsType } from '@/components/AuthForm/AuthForm';

export const CreateAccountComponent = ({ setActiveStep }: AutorizPropsType) => {
  const [isPassword, setIsPassword] = useState(true);
  const [isAccept, setIsAccept] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [strengthPassword, setStrengthPassword] = useState(1);
  const [strengthText, setStrengthText] = useState('Слабый');
  const isPasswordAcceptable = passwordValue.length >= 8;
  const isEmailDirty = emailValue.length > 0;
  const isDisabled = !isAccept || emailError || !isEmailDirty || !isPasswordAcceptable || !isVerified;
  const { isModalShown, setIsModalShown, handleRegister } = useAuthData();

  function handleCaptchaSubmission(token: string | null) {
    if (token) {
      setIsVerified(true);
    }
  }
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
    <>
      <div className={styles.content}>
        <AuthHeader
          title='Создание аккаунта'
          text='Вы уже зарегистрированы?'
          actionType='Войти'
          setActiveStep={() => setActiveStep(AuthStep.LOGIN)}
        />
        <AuthServices />
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
            type={isPassword ? 'password' : 'text'}
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

      <ReCAPTCHA
        sitekey='6Le6LlYoAAAAADp_IBK6AYMf73sp2XnyNJKmPnyz'
        ref={recaptchaRef}
        onChange={handleCaptchaSubmission}
        style={{ transform: 'scale(1.26)', alignSelf: 'center' }}
      />

      <div className={styles.createWrapperAccept}>
        <Checkbox onChange={() => setIsAccept(!isAccept)} sx={authCheckBox} />
        <div className={styles.savePass}>
          Я принимаю <span>условия пользовательского соглашения</span>
        </div>
      </div>
      <Button
        variant='contained'
        disabled={isDisabled}
        sx={authButton}
        onClick={() => handleRegister(emailValue, passwordValue)}
      >
        Создать аккаунт
      </Button>
      <ModalComponent open={isModalShown} handleClose={() => setIsModalShown(false)}>
        <CreateAccountMess setActiveStep={setActiveStep} />
      </ModalComponent>
    </>
  );
};
