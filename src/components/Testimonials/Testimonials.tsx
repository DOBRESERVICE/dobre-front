import Image from 'next/image';
import styles from './Testimonials.module.scss';
import { testimonialsImage } from '@/assets/image';
import { CommentItem } from './common/CommentItem';
import { commentData } from './common/data';

export const Testimonials = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Истории, которые нас сближают</div>
      <div className={styles.contentWrapper}>
        <div>
          <Image src={testimonialsImage} alt='testimonialsImage' className={styles.testimonialsImage} />
        </div>
        <div className={styles.commentWrapper}>
          {commentData.map((item) => (
            <CommentItem
              key={item.id}
              title={item.title}
              description={item.description}
              userName={item.userName}
              userStatus={item.userStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
