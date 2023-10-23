'use client';
import styles from './Arrow.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { customArrow } from '@/styles/buttonStyles';

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
