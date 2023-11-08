import styles from './Generalrating.module.scss';
import { RatingComponent } from '@/ui/RatingComponent/RatingComponent';
import { StatusBar } from '@/components/ProductsContainer/common/StatusBar';
export const GeneralRating = () => {
  return (
    <div className={styles.generalRatingWrapper}>
      <div className={styles.ratingContent}>
        <RatingComponent rating={4.4} feedbackType='outOfFive' />
        <p>На основе 3 оценок</p>
      </div>
      <div className={styles.conditionInfo}>
        <p>Оценка состояния:</p>
        <StatusBar status={4} />
      </div>
      <p className={styles.opinionText}>
        По мнению арендаторов, состояние товара соответствует заявленному арендодателем.
      </p>
    </div>
  );
};