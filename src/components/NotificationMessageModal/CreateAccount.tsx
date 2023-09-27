import { acceptIcon } from '@/assets/image';
import { Button } from '@mui/material';
import Image from 'next/image';

export const CreateAccountMess = () => {
  return (
    <div className='modalWrapper'>
      <Image src={acceptIcon} alt='accept' />
      <div className='titleModal'>Ваш аккаунт успешно создан!</div>
      <div className='descrModal'>На name@gmail.com адрес было отправлено письмо с подтверждением </div>
      <div className='modalButtonWrapper'>
        <Button variant='contained' className='logInButton'>
          Подтвердить регистрацию
        </Button>
      </div>
    </div>
  );
};
