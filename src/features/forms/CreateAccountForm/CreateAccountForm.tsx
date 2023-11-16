'use client';
import TextField from '@mui/material/TextField';
import styles from './CreateAccountForm.module.scss';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { authButton, authCheckBox, authCustomInput } from '@/shared/styles/buttonStyles';
import { DifficultyProgressBar } from '@/features/forms/ui/DifficultyProgressBar/DifficultyProgressBar';
import { useAuthData } from '@/shared/context/authContext';
import { AuthServices } from '@/features/forms/ui/AuthServices/AuthServices';
import { AuthHeader } from '@/features/forms/ui/AuthHeader/AuthHeader';
import { PasswordInput } from '@/features/forms/ui/PasswordInput/PasswordInput';
import { useRouter } from 'next/navigation';
import { emailRules } from '@/shared/constants/validation';

export const CreateAccountForm = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [isAccept, setIsAccept] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(false);
  const isPasswordAcceptable = passwordValue.length >= 8;
  const isEmailDirty = emailValue.length > 0;
  const isDisabled = !isAccept || emailError || !isEmailDirty || !isPasswordAcceptable || !isVerified;
  const { isRegistered, handleRegister, status } = useAuthData();
  const router = useRouter();
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

  useEffect(() => {
    if (isRegistered) {
      router.push('/');
    }
  }, [isRegistered]);
  return (
    <>
      <div className={styles.content}>
        <AuthHeader title='Создание аккаунта' text='Вы уже зарегистрированы?' actionType='Войти' link='login' />
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
        <PasswordInput
          isPassword={isPassword}
          passwordValue={passwordValue}
          handlePasswordChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)}
          setIsPassword={setIsPassword}
          label='Пароль'
        />
        <DifficultyProgressBar passwordValue={passwordValue} />
      </div>

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY as string}
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
    </>
  );
};
