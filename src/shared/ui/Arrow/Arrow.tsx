'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classNames from 'classnames';
import { FC } from 'react';

import styles from './Arrow.module.scss';

import { customArrow } from '@/shared/styles/buttonStyles';

interface ArrowProps {
  onClick?: () => void;
  isOpen?: boolean;
}
export const Arrow: FC<ArrowProps> = ({ onClick, isOpen }) => {
  return (
    <div
      className={classNames(styles.arrow, {
        [styles.isOpen]: isOpen,
      })}
      role='button'
      onClick={onClick}
    >
      <ExpandMoreIcon sx={customArrow} />
    </div>
  );
};
