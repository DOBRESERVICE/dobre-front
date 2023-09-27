import { Button } from '@mui/material';
import Image from 'next/image';
import messIcon from '@/assets/image/messageIcon.svg';

export const LinkResetMess = () => {
  return (
    <div className='modalWrapper'>
      <Image src={messIcon} alt='accept' />
      <div className='titleModal'>Ссылка для восстановления отправлена</div>
      <div className='descrModal'>На name@gmail.com адрес было отправлено письмо с ссылкой для восстановления</div>
      <div className='modalButtonWrapper'>
        <Button variant='contained' className='logInButton'>
          Просмотреть
        </Button>
      </div>
    </div>
  );
};
