import styles from './RatingComponent.module.scss';
import Image from 'next/image';
import { feedbackIcon, starReviews } from '@/assets/image';
import { FC } from 'react';
import classNames from 'classnames';

type feedbackVariant = 'default' | 'textFeedback' | 'iconFeedback' | 'outOfFive';

interface RatingComponentProps {
  rating: number;
  feedbackCount?: number;
  feedbackType: feedbackVariant;
}

export const RatingComponent: FC<RatingComponentProps> = ({ rating, feedbackCount, feedbackType }) => {
  return (
    <div className={styles.ratingWrapper}>
      <div
        className={classNames(styles.defaultRating, {
          [styles.bigRating]: feedbackType === 'outOfFive',
        })}
      >
        <Image src={starReviews} alt='star' />
        <span>
          {rating} {feedbackType === 'outOfFive' && '/ 5'}
        </span>
      </div>
      {feedbackType === 'textFeedback' && <span className={styles.textFeedback}>({feedbackCount} отзывов)</span>}
      {feedbackType === 'iconFeedback' && (
        <>
          <Image src={feedbackIcon} alt='feedback' />
          <span>{feedbackCount}</span>
        </>
      )}
    </div>
  );
};
