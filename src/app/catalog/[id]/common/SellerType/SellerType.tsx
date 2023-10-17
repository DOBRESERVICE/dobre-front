'use client';
import styles from './SellerType.module.scss';
import { SelectHeader } from '@/app/catalog/[id]/common/SelectHeader/SelectHeader';
import { Button, Checkbox } from '@mui/material';
import { authCheckBox, customSellerTypeButton } from '@/styles/buttonStyles';
import Image from 'next/image';
import { verified } from '@/assets/image';
import { useState } from 'react';
export const SellerType = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className={styles.sellerTypeContainer}>
      <SelectHeader headerName='Кто сдает' />
      <div className={styles.buttonsContainer}>
        <Button
          className={activeButton === 1 ? styles.active : ''}
          disableRipple
          sx={customSellerTypeButton}
          onClick={() => setActiveButton(1)}
        >
          Частное лицо
        </Button>
        <Button
          className={activeButton === 2 ? styles.active : ''}
          disableRipple
          sx={customSellerTypeButton}
          onClick={() => setActiveButton(2)}
        >
          Организация
        </Button>
      </div>
      <div className={styles.content}>
        <Checkbox sx={authCheckBox} />
        <div>
          <Image src={verified} alt='verified' />
          <p>Проверенный пользователь</p>
        </div>
      </div>
    </div>
  );
};
