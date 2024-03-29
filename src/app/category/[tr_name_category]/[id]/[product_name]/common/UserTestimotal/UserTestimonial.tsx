import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './UserTestimonial.module.scss';

import { StatusBar } from '@/entities/StatusBar/StatusBar';
import { RatingComponent } from '@/shared/ui/RatingComponent/RatingComponent';

import { emoji } from '../../../../../../../shared/image';

interface TestimonialImages {
  id: string;
  img: StaticImageData;
}

interface UserTestimonialProps {
  userImage: StaticImageData;
  userName: string;
  userComment: string | undefined;
  status?: number;
  images?: TestimonialImages[];
  ratingCount?: number;
  feedBackDate: string;
  ownerResponse?: string;
  ownerImage?: StaticImageData;
  responseDate?: string;
}

export const UserTestimonial: FC<UserTestimonialProps> = ({
  userImage,
  images,
  userComment,
  userName,
  feedBackDate,
  status,
  ratingCount,
  ownerResponse,
  ownerImage,
  responseDate,
}) => {
  return (
    <div className={styles.userTestimonialWrapper}>
      <div className={styles.userContent}>
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <div>
              <Image src={userImage} alt='user' width={50} height={50} />
              <p>{userName}</p>
            </div>
            <div className={styles.ratingContent}>
              {ratingCount && <RatingComponent rating={ratingCount} feedbackType='default' />}
              <p>{feedBackDate}</p>
              {ratingCount && <Image src={emoji} alt='emoji' />}
            </div>
          </div>
          <p>{userComment}</p>
          {status && (
            <div className={styles.conditionInfo}>
              <p>Оценка состояния:</p>
              <StatusBar status={status} />
            </div>
          )}
          {images && (
            <div className={styles.images}>
              {images.map((item) => (
                <div className={styles.imageWrapper} key={item.id}>
                  <Image key={item.id} src={item.img} alt='img' width={82} height={82} />
                </div>
              ))}
            </div>
          )}
          {ownerResponse && ownerImage && (
            <div className={styles.responseWrapper}>
              <div className={styles.ownerContent}>
                <div className={styles.userImageWrapper}>
                  <Image src={ownerImage} alt='user' width={50} height={50} />
                  <p>Ответ от арендодателя</p>
                </div>
                <p>{responseDate}</p>
              </div>
              <div className={styles.ownerInfo}>
                <p>{ownerResponse}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
