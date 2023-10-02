import { acceptIcon } from '@/assets/image';
import { Button } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { AutorizPropsType } from '@/components/LogIn/LogInComponent';

export const CreateAccountMess: FC<AutorizPropsType> = ({ setActiveStep }) => {
  return (
    <div className='modalWrapper'>
      <Image src={acceptIcon} alt='accept' />
      <div className='titleModal'>Ваш аккаунт успешно создан!</div>
      <div className='descrModal'>На name@gmail.com адрес было отправлено письмо с подтверждением </div>
      <div className='modalButtonWrapper'>
        <Button variant='contained' className='logInButton' onClick={() => setActiveStep('login')}>
          Подтвердить регистрацию
        </Button>
      </div>
    </div>
  );
};
