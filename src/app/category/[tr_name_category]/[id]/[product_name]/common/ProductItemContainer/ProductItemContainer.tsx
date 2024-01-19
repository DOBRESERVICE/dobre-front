'use client';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import styles from './ProductItemContainer.module.scss';
import { RentInfoPannel } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/RentInfoPannel/RentInfoPannel';
import { Term } from '@/interfaces/categories';
import { IMAGE_BASE_URL } from '@/shared/constants/urls';
import {
  mock2Image,
  mock3Image,
  mockBrandImage,
  mockUser,
  phoneIcon,
  sendMessageIcon,
  verified,
} from '../../../../../../../shared/image';
import { ProductDescription } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/ProductDescription/ProductDescription';
import { deliveryIcons, descriptionProductData } from '@/shared/data';
import { RuleAccordion } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/RuleAccordion/RuleAccordion';
import { deliveryIcon } from '../../../../../../../shared/image';

interface ProductItemContainerProps {
  productName: string;
  productDescription: string;
  qualityControl: number;
  quantity: number;
  price: string;
  productImage: string | StaticImageData;
  hasInsurance: boolean;
  terms: Term[];
  deposit: number;
  lan: number;
  lon: number;
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
  deposit,
  lan,
  lon,
}) => {
  const availableQuantityArray = Array.from({ length: quantity }, (_, index) => index + 1);

  return (
    <div className={styles.productContentWrapper}>
      <div className={styles.productBody}>
        <div className={styles.productContent}>
          <div className={styles.productImages}>
            <div className={styles.imagesContainer}>
              <div className={styles.imageWrapper}>
                <Image src={mock3Image} alt='mock' />
              </div>
              <div className={styles.imageWrapper}>
                <Image src={mock2Image} alt='mock' />
              </div>
            </div>
            <div className={styles.mainImageWrapper}>
              <div className={styles.brandWrapper}>
                <Image src={mockBrandImage} alt='brand' />
              </div>
              <Image src={`${IMAGE_BASE_URL}${productImage}`} width={576} height={576} alt='ss' />
            </div>
          </div>
        </div>
        <ProductDescription
          secondDescription={descriptionProductData.secondDescription}
          firstDescription={productDescription}
          mainAdvantages={descriptionProductData.mainAdvantages}
          lan={lan}
          lon={lon}
        />
      </div>
      <div className={styles.asideInfo}>
        <RentInfoPannel
          qualityControl={qualityControl}
          productName={productName}
          price={price}
          count={quantity}
          availableQuantityArray={availableQuantityArray}
          terms={terms}
          deposit={deposit}
          hasInsurance={hasInsurance}
        />
        <RuleAccordion
          setActiveRule={() => {}}
          id={0}
          deliveryIcons={deliveryIcons}
          deliveryIcon={deliveryIcon}
          ruleName='Рассчитать доставку'
        />
      </div>
    </div>
  );
};
