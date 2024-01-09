import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './ProductItemContainer.module.scss';

import { InsuranceCard } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/InsuranceCard/InsuranceCard';
import { PriceInfoCard } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/PriceInfoCard/PriceInfoCard';
import { ProductDescription } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/ProductDescription/ProductDescription';
import { ProductDetails } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/ProductDetails/ProductDetails';
import { RentInfoPannel } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/RentInfoPannel/RentInfoPannel';
import { StatusBar } from '@/entities/StatusBar/StatusBar';
import { Term } from '@/interfaces/categories';
import { IMAGE_BASE_URL } from '@/shared/constants/urls';
import { RatingComponent } from '@/shared/ui/RatingComponent/RatingComponent';

import { descriptionProductData } from '../../../../../../../shared/data';
import { favouriteIcon, mock1Image, mock2Image, mock3Image, mockBrandImage } from '../../../../../../../shared/image';

interface ProductItemContainerProps {
  productName: string;
  productDescription: string;
  qualityControl: number;
  quantity: number;
  price: string;
  productImage: string | StaticImageData;
  hasInsurance: boolean;
  terms: Term[];
}
export const ProductItemContainer: FC<ProductItemContainerProps> = ({
  productDescription,
  productImage,
  productName,
  quantity,
  qualityControl,
  price,
  hasInsurance,
  terms,
}) => {
  const availableQuantityArray = Array.from({ length: quantity }, (_, index) => index + 1);
  return (
    <div className={styles.productContentWrapper}>
      <div className={styles.productHeader}>
        <div className={styles.headerInfo}>
          <h2 className={styles.productName}>{productName}</h2>
          <div className={styles.content}>
            <RatingComponent feedbackType='textFeedback' rating={4.4} feedbackCount={31} />
            <StatusBar status={qualityControl} />
            <div className={styles.availableCountWrapper}>
              <p>Доступно {quantity} шт.</p>
            </div>
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.favouriteImageWrapper}>
            <Image src={favouriteIcon} alt='favourite' />
          </div>
          <div className={styles.priceSegment}>от {price} руб.</div>
        </div>
      </div>
      <div className={styles.productBody}>
        <div className={styles.imagesContainer}>
          <div className={styles.imageWrapper}>
            <Image src={mock3Image} alt='mock' />
          </div>
          <div className={styles.imageWrapper}>
            <Image src={mock2Image} alt='mock' />
          </div>
          <div className={styles.imageWrapper}>
            <Image src={mock1Image} alt='mock' />
          </div>
        </div>
        <div className={styles.mainImageWrapper}>
          <div className={styles.brandWrapper}>
            <Image src={mockBrandImage} alt='brand' />
          </div>
          <Image src={`${IMAGE_BASE_URL}${productImage}`} width={500} height={500} alt='ss' />
        </div>
        <RentInfoPannel count={quantity} availableQuantityArray={availableQuantityArray} terms={terms} />
      </div>
      <ProductDescription
        secondDescription={descriptionProductData.secondDescription}
        firstDescription={productDescription}
        mainAdvantages={descriptionProductData.mainAdvantages}
      />
      <div className={styles.cardsWrapper}>
        <PriceInfoCard />
        {hasInsurance && <InsuranceCard />}
      </div>
      <ProductDetails />
    </div>
  );
};
