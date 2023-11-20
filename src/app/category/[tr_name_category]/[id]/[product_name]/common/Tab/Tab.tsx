import classNames from 'classnames';
import { FC } from 'react';

import styles from './Tab.module.scss';

interface TabProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
  count: number;
}
export const Tab: FC<TabProps> = ({ isActive, name, onClick, count }) => {
  return (
    <div
      className={classNames(styles.tabWrapper, {
        [styles.activeBar]: isActive,
      })}
      role='button'
      onClick={onClick}
    >
      <div className={styles.content}>
        <p>{name}</p>
        <span className={styles.count}>{count}</span>
      </div>
      <div className={styles.tabActiveLine} />
    </div>
  );
};
