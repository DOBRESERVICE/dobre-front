'use client';

import { Button, Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from './CreateAccountForm.module.scss';

import { AuthHeader } from '@/features/forms/ui/AuthHeader/AuthHeader';
import { AuthServices } from '@/features/forms/ui/AuthServices/AuthServices';
import { DifficultyProgressBar } from '@/features/forms/ui/DifficultyProgressBar/DifficultyProgressBar';
import { PasswordInput } from '@/features/forms/ui/PasswordInput/PasswordInput';
import { emailRules } from '@/shared/constants/validation';
import { authButton, authCheckBox, authCustomInput } from '@/shared/styles/buttonStyles';

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
  // const { isRegistered, handleRegister } = useAuthData();
  // const router = useRouter();
  function handleCaptchaSubmission(token: string | null) {
    if (token) {
      setIsVerified(true);
    }
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isValidEmail = emailRules.test(value);
    setEmailValue(value);
    setEmailError(!isValidEmail);
  };
  //
  // useEffect(() => {
  //   if (isRegistered) {
  //     router.push('/');
  //   }
  // }, [isRegistered, router]);
  return (
    <>
      <div className={styles.content}>
        <AuthHeader title='Создание аккаунта' text='Вы уже зарегистрированы?' actionType='Войти' link='login' />
        <AuthServices />
      </div>
      <div className={styles.inputWrapper}>
        <TextField
          label='Email'
          variant='outlined'
          error={emailError}
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

      {/*<ReCAPTCHA*/}
      {/*  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY as string}*/}
      {/*  ref={recaptchaRef}*/}
      {/*  onChange={handleCaptchaSubmission}*/}
      {/*  style={{ transform: 'scale(1.26)', alignSelf: 'center' }}*/}
      {/*/>*/}

      <div className={styles.createWrapperAccept}>
        <Checkbox id='rules' onChange={() => setIsAccept(!isAccept)} sx={authCheckBox} />
        <label htmlFor='rules' className={styles.savePass}>
          Я принимаю <span>условия пользовательского соглашения</span>
        </label>
      </div>
      <Button
        variant='contained'
        disabled={isDisabled}
        sx={authButton}
        // onClick={() => handleRegister(emailValue, passwordValue)}
      >
        Создать аккаунт
      </Button>
    </>
  );
};
