'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './ProductItem.module.scss';

import { StatusBar } from '@/entities/StatusBar/StatusBar';
import { Term } from '@/interfaces/categories';
import { IMAGE_BASE_URL } from '@/shared/constants/urls';
import { ProductRentStatus } from '@/shared/ui/ProductRentStatus/ProductRentStatus';
import { RatingComponent } from '@/shared/ui/RatingComponent/RatingComponent';
import { RentInfoContainer } from '@/widgets/ProductsContainer/ui/RentInfoContainer/RentInfoContainer';

import { favouriteIcon, mockUser, verified } from '../../shared/image';

export interface ProductItem {
  id: number;
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
  rentInfoArray: Term[];
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
  id,
  trSubCategoryName,
  trCategoryName,
}) => {
  return (
    <div className={styles.newProductWrapper}>
      <Image width={45} height={45} src={mockUser} alt='user' />
      <div className={styles.imageWrapper}>
        <Image src={favouriteIcon} alt='favourite' />
      </div>
      <Link href={`/category/${trCategoryName}/${trSubCategoryName}/${productId}`} className={styles.mainImageWrapper}>
        <Image src={`${IMAGE_BASE_URL}${photoUrl}`} alt='item' width={340} height={260} />
      </Link>
      <div className={styles.content}>
        <StatusBar status={status} />
        <div className={styles.infoWrapper}>
          <ProductRentStatus isAvailable={isAvailable} rentEndDate={rentEndDate} />
          <RatingComponent feedbackType='textFeedback' rating={rating} feedbackCount={feedbackCount} />
        </div>
        <p className={styles.itemName}>
          {itemName} {description}
        </p>
        <RentInfoContainer rentInfoArray={rentInfoArray} productId={productId} />
        <div className={styles.sellerInfoContainer}>
          {isConfirmed && <Image src={verified} alt='verified' />}
          <p className={styles.sellerInfo}>{sellerInfo}</p>
        </div>
      </div>
    </div>
  );
};
