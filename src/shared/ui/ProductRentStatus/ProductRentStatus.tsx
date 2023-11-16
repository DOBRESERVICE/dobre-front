import classNames from 'classnames';
import styles from './ProductRentStatus.module.scss';
import { availableNow, inRent } from '../../constants';
import { FC } from 'react';

interface ProductRentStatusProps {
  isAvailable: boolean;
  rentEndDate?: string;
}

export const ProductRentStatus: FC<ProductRentStatusProps> = ({ isAvailable, rentEndDate }) => {
  return (
    <div
      className={classNames(styles.notification, {
        [styles.availableItem]: isAvailable,
        [styles.unAvailableItem]: !isAvailable,
      })}
    >
      <p>{isAvailable ? availableNow : `${inRent} ${rentEndDate}`}</p>
    </div>
  );
};
