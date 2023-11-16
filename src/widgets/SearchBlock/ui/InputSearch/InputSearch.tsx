import Image from 'next/image';
import { searchIcon } from '../../../../shared/image';
import Input from '@mui/material/Input';
import { customSearchButton, customSearchInput } from '@/shared/styles/buttonStyles';
import { Button } from '@mui/material';
import styles from './InputSearch.module.scss';

export const InputSearch = () => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.content}>
        <Image src={searchIcon} alt='search' />
        <Input placeholder='Что вы ищете?' disableUnderline sx={customSearchInput} />
      </div>
      <Button variant='contained' disableRipple size='medium' sx={customSearchButton}>
        Найти
      </Button>
    </div>
  );
};
