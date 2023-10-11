'use client';
import styles from './ProductQuality.module.scss';
import { SelectHeader } from '@/app/catalog/[id]/common/SelectHeader/SelectHeader';
import { Button } from '@mui/material';
import { customSellerTypeButton } from '@/styles/buttonStyles';
import { useState } from 'react';
import { qualityButtonsData } from '@/data';

export const ProductQuality = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className={styles.productQualityContainer}>
      <SelectHeader headerName='Состояние' />
      <div className={styles.content}>
        {qualityButtonsData.map((item) => (
          <Button
            className={item.id === activeButton ? styles.active : ''}
            disableRipple
            sx={customSellerTypeButton}
            onClick={() => setActiveButton(item.id)}
          >
            {item.qualityType}
          </Button>
        ))}
      </div>
    </div>
  );
};
