import styles from './StatusBar.module.scss';
import { ProductStatus } from '@/enums';
import { FC } from 'react';
import classNames from 'classnames';

interface StatusBar {
  status: ProductStatus;
}

export const StatusBar: FC<StatusBar> = ({ status }) => {
  return (
    <div
      className={classNames(styles.statusBarContainer, {
        [styles.newQuality]: status === ProductStatus.NEW,
        [styles.likeNewQuality]: status === ProductStatus.LIKE_NEW,
        [styles.goodQuality]: status === ProductStatus.GOOD,
        [styles.usedQuality]: status === ProductStatus.USED,
        [styles.badQuality]: status === ProductStatus.BAD,
      })}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
