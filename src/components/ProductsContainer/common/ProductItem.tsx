import styles from './ProductItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import { favouriteIcon, mockUser, starReviews, verified } from '@/assets/image';
import { FC } from 'react';
import { RentInfoContainer } from '@/components/ProductsContainer/common/RentInfoContainer/RentInfoContainer';
import { RentInfoData } from '@/interfaces';
import { StatusBar } from '@/components/ProductsContainer/common/StatusBar';
import { RatingComponent } from '@/ui/RatingComponent/RatingComponent';
import { ProductRentStatus } from '@/ui/ProductRentStatus/ProductRentStatus';

export interface ProductItem {
  id?: number;
  itemName: string;
  userUrl: string | StaticImageData | null;
  photoUrl: string | StaticImageData;
  status: number;
  rating: number;
  feedbackCount: number;
  sellerInfo: string;
  isAvailable: boolean;
  rentEndDate?: string;
  isConfirmed: boolean;
  rentInfoArray: RentInfoData[] | any;
  description: string;
}

export const ProductItem: FC<ProductItem> = ({
  sellerInfo,
  itemName,
  status,
  userUrl,
  isAvailable,
  rentEndDate,
  rating,
  feedbackCount,
  isConfirmed,
  photoUrl,
  description,
  rentInfoArray,
}) => {
  return (
    <div className={styles.newProductWrapper}>
      <Image src={userUrl ? userUrl : mockUser} alt='user' />
      <div className={styles.imageWrapper}>
        <Image src={favouriteIcon} alt='favourite' />
      </div>
      <div className={styles.mainImageWrapper}>
        <Image src={photoUrl} alt='item' width={340} height={260} />
      </div>
      <div className={styles.content}>
        <StatusBar status={status} />
        <div className={styles.infoWrapper}>
          <ProductRentStatus isAvailable={isAvailable} rentEndDate={rentEndDate} />
          <RatingComponent feedbackType='textFeedback' rating={rating} feedbackCount={feedbackCount} />
        </div>
        <p className={styles.itemName}>
          {itemName} {description}
        </p>
        <RentInfoContainer rentInfoArray={rentInfoArray} />
        <div className={styles.sellerInfoContainer}>
          {isConfirmed && <Image src={verified} alt='verified' />}
          <p className={styles.sellerInfo}>{sellerInfo}</p>
        </div>
      </div>
    </div>
  );
};
