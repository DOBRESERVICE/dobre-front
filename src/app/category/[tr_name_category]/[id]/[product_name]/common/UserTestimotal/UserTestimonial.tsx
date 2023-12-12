import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './UserTestimonial.module.scss';

import { StatusBar } from '@/entities/StatusBar/StatusBar';
import { IMAGE_BASE_URL } from '@/shared/constants/urls';
import { RatingComponent } from '@/shared/ui/RatingComponent/RatingComponent';

import { emoji } from '../../../../../../../shared/image';

interface TestimonialImages {
  id: number;
  img: StaticImageData;
}

interface UserTestimonialProps {
  userImage: StaticImageData;
  userName: string;
  userComment: string;
  status?: number;
  images?: TestimonialImages[];
  ratingCount?: number;
  feedBackDate: string;
  ownerResponse?: string;
  ownerImage?: StaticImageData;
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
}) => {
  return (
    <div className={styles.userTestimonialWrapper}>
      <div className={styles.userContent}>
        <div className={styles.userImageWrapper}>
          <Image src={`${IMAGE_BASE_URL}${userImage}`} alt='user' width={50} height={50} />
        </div>
        <div className={styles.content}>
          <p>{userName}</p>
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
                  <Image key={item.id} src={`${IMAGE_BASE_URL}${item.img}`} alt='img' width={85} height={85} />
                </div>
              ))}
            </div>
          )}
          {ownerResponse && ownerImage && (
            <div className={styles.responseWrapper}>
              <div className={styles.ownerContent}>
                <div className={styles.line} />
                <div className={styles.userImageWrapper}>
                  <Image src={`${IMAGE_BASE_URL}${ownerImage}`} alt='user' width={50} height={50} />
                </div>
              </div>
              <div className={styles.ownerInfo}>
                <p>Ответ от арендодателя</p>
                <p>{ownerResponse}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.ratingContent}>
        {ratingCount && <RatingComponent rating={ratingCount} feedbackType='default' />}
        <p>{feedBackDate}</p>
        {ratingCount && <Image src={emoji} alt='emoji' />}
      </div>
    </div>
  );
};
