'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';

import styles from './Arrow.module.scss';

import { customArrow } from '@/shared/styles/buttonStyles';

interface ArrowProps {
  onClick?: () => void;
  isOpen?: boolean;
}
export const Arrow: FC<ArrowProps> = ({ onClick, isOpen }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div
      className={classNames(styles.arrow, {
        [styles.isOpen]: isOpen,
      })}
      role='button'
      onClick={onClick}
    >
      {isClient && <ExpandMoreIcon sx={customArrow} />}
    </div>
  );
};
