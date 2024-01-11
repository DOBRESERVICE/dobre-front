import Image from 'next/image';
import { FC } from 'react';

import styles from './CommentItem.module.scss';

import { emoji } from '../../../shared/image';

type AboutItemType = {
  title: string;
  description: string;
  userName: string;
  userStatus: string;
};

export const CommentItem: FC<AboutItemType> = ({ title, description, userName, userStatus }) => {
  return (
    <div className={styles.mainItem}>
      <div className={styles.itemWrapper}>
        <div className={styles.imageItem} />
        <Image src={emoji} alt='emoji' className={styles.emoji} />
      </div>
      <p className={styles.itemTitle}>{title}</p>
      <div className={styles.itemDescr}>{description}</div>
      <div className={styles.userWrapper}>
        <div className={styles.userIcon} />
        <div>
          <div className={styles.userStatus}>{userStatus}</div>
          <div className={styles.userName}>{userName}</div>
        </div>
      </div>
    </div>
  );
};
