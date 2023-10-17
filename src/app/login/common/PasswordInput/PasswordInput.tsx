import styles from './PasswordInput.module.scss';
import TextField from '@mui/material/TextField';
import { authCustomInput } from '@/styles/buttonStyles';
import Image from 'next/image';
import { eyeClosed, eyeOpen } from '@/assets/image';
import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

interface PasswordInput {
  isPassword: boolean;
  passwordValue: string;
  handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setIsPassword: Dispatch<SetStateAction<boolean>>;
  label: string;
}
export const PasswordInput: FC<PasswordInput> = ({
  passwordValue,
  isPassword,
  setIsPassword,
  handlePasswordChange,
  label,
}) => {
  return (
    <div className={styles.passwordInputWrapper}>
      <TextField
        id='outlined-basic'
        label={label}
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
  );
};
