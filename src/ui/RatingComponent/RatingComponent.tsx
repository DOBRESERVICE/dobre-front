import styles from './RatingComponent.module.scss';
import Image from 'next/image';
import { starReviews } from '@/assets/image';
import { FC } from 'react';

interface RatingComponentProps {
  rating: number;
  feedbackCount: number;
}

export const RatingComponent: FC<RatingComponentProps> = ({ rating, feedbackCount }) => {
  return (
    <div className={styles.ratingWrapper}>
      <div>
        <Image src={starReviews} alt='star' />
        <span>{rating}</span>
      </div>
      <span>({feedbackCount} отзывов)</span>
    </div>
  );
};
