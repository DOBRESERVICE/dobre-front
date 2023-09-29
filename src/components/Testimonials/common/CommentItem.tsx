import Image from 'next/image';
import styles from './CommentItem.module.scss';
import { FC } from 'react';
import { emoji } from '@/assets/image';

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
        <div className={styles.itemTitle}>{title}</div>
      </div>
      <div className={styles.itemDescr}>{description}</div>
      <div className={styles.userWrapper}>
        <div className={styles.userIcon}></div>
        <div>
          <div className={styles.userStatus}>{userStatus}</div>
          <div className={styles.userName}>{userName}</div>
        </div>
      </div>
      <Image src={emoji} alt='emoji' className={styles.emoji} />
    </div>
  );
};
