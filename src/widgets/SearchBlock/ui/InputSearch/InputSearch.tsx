import { Button } from '@mui/material';
import Input from '@mui/material/Input';
import Image from 'next/image';

import styles from './InputSearch.module.scss';

import { customSearchButton, customSearchInput } from '@/shared/styles/buttonStyles';

import { searchIcon } from '../../../../shared/image';

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
