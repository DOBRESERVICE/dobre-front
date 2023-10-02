'use client';
import TextField from '@mui/material/TextField';
import styles from './CreateAccount.module.scss';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { ModalComponent } from '@/components/ModalComponent';
import { CreateAccountMess } from '../NotificationMessageModal/CreateAccount';
import { AutorizPropsType } from '../LogIn/LogInComponent';
import ReCAPTCHA from 'react-google-recaptcha';
import { verifyCaptcha } from '../VeryfiCaptcha';
import { googleIcon, appleIcon, vkIcon, yandexIcon, eyeOpen, eyeClosed } from '@/assets/image';

export const CreateAccountComponent = ({ setActiveStep }: AutorizPropsType) => {
  const [isPassword, setIsPassword] = useState(false);

  const [isAccept, setIsAccept] = useState(false);

  const [passInput, setPassInput] = useState('');

  const [isShowModal, setIsShowModal] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);

  async function handleCaptchaSubmission(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

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
        <TextField id='outlined-basic' label='Email' variant='outlined' className={styles.inputSyle} size='small' />
        <div className={styles.passwordWrapper}>
          <TextField
            id='outlined-basic'
            label='Пароль'
            type={!isPassword ? 'password' : 'text'}
            variant='outlined'
            className={styles.inputSyle}
            size='small'
            value={passInput}
            onChange={(e) => setPassInput(e.target.value)}
          />
          {isPassword ? (
            <Image src={eyeOpen} alt='open' className={styles.passwordIcon} onClick={() => setIsPassword(false)} />
          ) : (
            <Image src={eyeClosed} alt='close' className={styles.passwordIcon} onClick={() => setIsPassword(true)} />
          )}
        </div>
      </div>

      <>
        <div className={styles.checkLvlPass}>
          <div className={styles.checkPassLvl}>Уровень сложности пароля</div>
          <div
            className={styles.valuePassLvl}
            style={{
              color: `rgba(37, 64, 228, 1)`,
            }}
          >
            {passInput.length >= 8 ? 'Сложный' : 'Слабый'}
          </div>
        </div>
        <div className={styles.lvlPass}>
          {passInput.length < 8 ? (
            <>
              <div className={styles.blueLine} />
              <div className={styles.grayLine} />
            </>
          ) : (
            <div className={styles.fullLine} />
          )}
        </div>
      </>

      <div className={styles.captchaStyle}>
        <ReCAPTCHA
          sitekey='6Le6LlYoAAAAADp_IBK6AYMf73sp2XnyNJKmPnyz'
          ref={recaptchaRef}
          onChange={handleCaptchaSubmission}
        />
        {/* <Button type="submit" disabled={!isVerified}>
          Submit feedback
        </Button> */}
      </div>

      <div className={styles.createWrapperAccept}>
        <Checkbox onChange={() => setIsAccept(!isAccept)} style={{ margin: '0 10px;' }} />
        <div className={styles.savePass}>
          Я принимаю <span>условия пользовательского соглашения</span>
        </div>
      </div>
      <Button
        variant='contained'
        className={styles.logInButton}
        disabled={!isAccept}
        onClick={() => setIsShowModal(true)}
      >
        Создать аккаунт
      </Button>
      <ModalComponent open={isShowModal} handleClose={() => setIsShowModal(false)}>
        <CreateAccountMess />
      </ModalComponent>
    </div>
  );
};
