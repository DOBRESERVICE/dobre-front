import styles from './ProductItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import { favouriteIcon, starReviews, verified } from '@/assets/image';
import { ProductStatus } from '@/enums';
import { FC } from 'react';
import { availableNow, inRent, isGoodStatus } from '@/constants';
import classNames from 'classnames';
import { RentInfoContainer } from '@/components/ProductsContainer/common/RentInfoContainer/RentInfoContainer';
import { RentInfoData } from '@/interfaces';
import { StatusBar } from '@/components/ProductsContainer/common/StatusBar';

interface ProductItem {
  itemName: string;
  userUrl: string | StaticImageData;
  photoUrl: string | StaticImageData;
  status: ProductStatus;
  rating: number;
  feedbackCount: number;
  sellerInfo: string;
  isAvailable: boolean;
  rentEndDate?: string;
  isConfirmed: boolean;
  rentInfoArray: RentInfoData[];
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
  rentInfoArray,
}) => {
  return (
    <div className={styles.newProductWrapper}>
      <Image src={userUrl} alt='user' />
      <Image src={favouriteIcon} alt='favourite' />
      <div>
        <Image src={photoUrl} alt='item' />
      </div>
      <div className={styles.statusWrapper}>
        <p
          className={classNames(styles.status, {
            [styles.goodStatus]: isGoodStatus(status),
            [styles.mediumStatus]: !isGoodStatus(status),
          })}
        >
          {status}
        </p>
        <StatusBar status={status} />
      </div>
      <RentInfoContainer rentInfoArray={rentInfoArray} />
      <div className={styles.infoWrapper}>
        <div
          className={classNames(styles.notification, {
            [styles.availableItem]: isAvailable,
            [styles.unAvailableItem]: !isAvailable,
          })}
        >
          <p>{isAvailable ? availableNow : `${inRent} ${rentEndDate}`}</p>
        </div>
        <Image src={starReviews} alt='star' />
        <span>{rating}</span>
        <span>({feedbackCount} отзывов)</span>
      </div>
      <p className={styles.itemName}>{itemName}</p>
      <div className={styles.sellerInfoContainer}>
        {isConfirmed && <Image src={verified} alt='verified' />}
        <p className={styles.sellerInfo}>{sellerInfo}</p>
      </div>
    </div>
  );
};