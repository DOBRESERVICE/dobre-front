import { FC } from 'react';
import styles from './Tab.module.scss';
import classNames from 'classnames';
interface TabProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}
export const Tab: FC<TabProps> = ({ isActive, name, onClick }) => {
  return (
    <div
      className={classNames(styles.tabWrapper, {
        [styles.activeBar]: isActive,
      })}
      role='button'
      onClick={onClick}
    >
      <p>{name}</p>
      <div></div>
    </div>
  );
};
