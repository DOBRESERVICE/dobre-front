import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './ProductItem.module.scss';

import { StatusBar } from '@/entities/StatusBar/StatusBar';
import { RentInfoData } from '@/interfaces';
import { ProductRentStatus } from '@/shared/ui/ProductRentStatus/ProductRentStatus';
import { RatingComponent } from '@/shared/ui/RatingComponent/RatingComponent';
import { RentInfoContainer } from '@/widgets/ProductsContainer/ui/RentInfoContainer/RentInfoContainer';

import { favouriteIcon, mockUser, verified } from '../../shared/image';

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
  trCategoryName?: string;
  trSubCategoryName?: string;
  trVarietyName?: string;
  productId: number;
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
  productId,
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
        <RentInfoContainer
          rentInfoArray={rentInfoArray}
          // trVarietyName={trVarietyName}
          // trCategoryName={trCategoryName}
          // trSubCategoryName={trSubCategoryName}
          productId={productId}
        />
        <div className={styles.sellerInfoContainer}>
          {isConfirmed && <Image src={verified} alt='verified' />}
          <p className={styles.sellerInfo}>{sellerInfo}</p>
        </div>
      </div>
    </div>
  );
};