'use client';
import TextField from '@mui/material/TextField';
import styles from './LogIn.module.scss';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { useRouter } from 'next/navigation';
import { eyeOpen, eyeClosed, googleIcon, appleIcon, vkIcon, yandexIcon } from '@/assets/image';

export type AutorizPropsType = {
  setActiveStep: Dispatch<SetStateAction<string>>;
};

export const LogInComponent = ({ setActiveStep }: AutorizPropsType) => {
  const [isPassword, setIsPassword] = useState(false);

  const router = useRouter();

  const [isSavePass, setIsSavePass] = useState(false);

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
          className={styles.inputSyle}
          size='small'
        />
        <div className={styles.passwordWrapper}>
          <TextField
            id='outlined-basic'
            label='Пароль'
            type={!isPassword ? 'password' : 'text'}
            variant='outlined'
            className={styles.inputSyle}
            size='small'
          />
          {isPassword ? (
            <Image src={eyeOpen} alt='open' className={styles.passwordIcon} onClick={() => setIsPassword(false)} />
          ) : (
            <Image src={eyeClosed} alt='close' className={styles.passwordIcon} onClick={() => setIsPassword(true)} />
          )}
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
      <Button variant='contained' className={styles.logInButton} onClick={() => router.push('/?authoriz=1')}>
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
