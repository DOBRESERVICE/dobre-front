import classNames from 'classnames';
import { FC } from 'react';

import styles from './StatusBar.module.scss';

import { ProductStatus, qualityMap } from '@/enums';
import { isGoodStatus } from '@/shared/lib';

interface StatusBar {
  status: number;
}

export const StatusBar: FC<StatusBar> = ({ status }) => {
  return (
    <div className={styles.statusWrapper}>
      <p
        className={classNames(styles.status, {
          [styles.goodStatus]: isGoodStatus(status),
          [styles.mediumStatus]: !isGoodStatus(status),
        })}
      >
        {qualityMap[status]}
      </p>
      <div
        className={classNames(styles.statusBarContainer, {
          [styles.newQuality]: status === ProductStatus.NEW,
          [styles.likeNewQuality]: status === ProductStatus.LIKE_NEW,
          [styles.goodQuality]: status === ProductStatus.GOOD,
          [styles.usedQuality]: status === ProductStatus.USED,
          [styles.badQuality]: status === ProductStatus.BAD,
        })}
      >
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
