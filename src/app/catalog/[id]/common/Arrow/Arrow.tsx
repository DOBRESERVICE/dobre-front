'use client';
import styles from './Arrow.module.scss';
import { FC } from 'react';
import classNames from 'classnames';

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
      <svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'>
        <path
          d='M4.83257 6L9.66514 1.14343L8.52896 0L4.83257 3.71717L1.13698 0L1.4844e-09 1.14263L4.83257 6Z'
          fill='#646E74'
        />
      </svg>
    </div>
  );
};
