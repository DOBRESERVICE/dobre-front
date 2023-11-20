'use client';

import { Button } from '@mui/material';
import { useState } from 'react';

import styles from './ProductQualityFilter.module.scss';

import { customSellerTypeButton } from '@/shared/styles/buttonStyles';
import { SelectHeader } from '@/widgets/SubcategoryContent/components/SubcategoryAside/ui/SubcategoryAsideHeader/SubcategoryAsideHeader';

import { qualityButtonsData } from '../../../../../../shared/data';

export const ProductQualityFilter = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className={styles.productQualityContainer}>
      <SelectHeader headerName='Состояние' />
      <div className={styles.content}>
        {qualityButtonsData.map((item) => (
          <Button
            key={item.id}
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
