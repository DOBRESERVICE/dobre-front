'use client';

import { Button, Checkbox } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

import styles from './SellerTypeFilter.module.scss';

import { authCheckBox, customSellerTypeButton } from '@/shared/styles/buttonStyles';
import { SelectHeader } from '@/widgets/SubcategoryContent/components/SubcategoryAside/ui/SubcategoryAsideHeader/SubcategoryAsideHeader';

import { verified } from '../../../../../../shared/image';

export const SellerTypeFilter = () => {
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
