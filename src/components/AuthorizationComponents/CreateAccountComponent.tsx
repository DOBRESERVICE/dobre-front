'use client';
import TextField from '@mui/material/TextField';
import './authorizationStyle.scss';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { ModalComponent } from '@/components/ModalComponent';
import { CreateAccountMess } from '../NotificationMessageModal/CreateAccount';
import { AutorizPropsType } from './LogInComponent';
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
    <div className='wrapper'>
      <div className='title'>Создание аккаунта</div>
      <div className='rowContent'>
        <p className='text'>Вы уже зарегистрированны?</p>
        <span className='blueText' style={{ marginLeft: '6px' }} onClick={() => setActiveStep('login')}>
          Войти
        </span>
      </div>

      <div className='otherSiteConnection' style={{ justifyContent: 'flex-start', marginLeft: '20px' }}>
        <div className='siteConnect'>
          <Image src={googleIcon} alt='google' />
        </div>
        <div className='siteConnect'>
          <Image src={appleIcon} alt='apple' />
        </div>
        <div className='siteConnect'>
          <Image src={vkIcon} alt='vk' />
        </div>
        <div className='siteConnect'>
          <Image src={yandexIcon} alt='yandex' />
        </div>
      </div>

      <div className='inputWrapper'>
        <TextField id='outlined-basic' label='Email' variant='outlined' className='inputSyle' size='small' />
        <div className='passwordWrapper'>
          <TextField
            id='outlined-basic'
            label='Пароль'
            type={!isPassword ? 'password' : 'text'}
            variant='outlined'
            className='inputSyle'
            size='small'
            value={passInput}
            onChange={(e) => setPassInput(e.target.value)}
          />
          {isPassword ? (
            <Image src={eyeOpen} alt='open' className='passwordIcon' onClick={() => setIsPassword(false)} />
          ) : (
            <Image src={eyeClosed} alt='close' className='passwordIcon' onClick={() => setIsPassword(true)} />
          )}
        </div>
      </div>

      {!!passInput.length && (
        <>
          <div className='checkLvlPass'>
            <div className='checkPassLvl'>Уровень сложности пароля</div>
            <div
              className='valuePassLvl'
              style={{
                color: `rgba(37, 64, 228, 1)`,
              }}
            >
              {passInput.length >= 8 ? 'Сложный' : 'Слабый'}
            </div>
          </div>
          <div className='lvlPass'>
            {passInput.length < 8 ? (
              <>
                <div className='blueLine' />
                <div className='grayLine' />
              </>
            ) : (
              <div className='blueLine fullLine' />
            )}
          </div>
        </>
      )}

      <div className='captchaStyle'>
        <ReCAPTCHA
          sitekey='6Le6LlYoAAAAADp_IBK6AYMf73sp2XnyNJKmPnyz'
          ref={recaptchaRef}
          onChange={handleCaptchaSubmission}
          className='testCap'
        />
        {/* <Button type="submit" disabled={!isVerified}>
          Submit feedback
        </Button> */}
      </div>

      <div className='createWrapperAccept'>
        <Checkbox onChange={() => setIsAccept(!isAccept)} style={{ margin: '0 10px;' }} />
        <div className='savePass'>
          Я принимаю <span>условия пользовательского соглашения</span>
        </div>
      </div>
      <Button variant='contained' className='logInButton' disabled={!isAccept} onClick={() => setIsShowModal(true)}>
        Создать аккаунт
      </Button>
      <ModalComponent open={isShowModal} handleClose={() => setIsShowModal(false)}>
        <CreateAccountMess />
      </ModalComponent>
    </div>
  );
};
