import Image from 'next/image';

import styles from './GeneralTestimonials.module.scss';

import { commentData } from '@/widgets/GeneralTestimonials/data';
import { CommentItem } from '@/widgets/GeneralTestimonials/ui/CommentItem';

import { testimonialsImage } from '../../shared/image';

const GeneralTestimonials = () => {
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

export default GeneralTestimonials;
