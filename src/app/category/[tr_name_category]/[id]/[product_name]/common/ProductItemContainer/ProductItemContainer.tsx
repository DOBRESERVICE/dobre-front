'use client';
import Image, { StaticImageData } from 'next/image';
import { FC, useState } from 'react';

import styles from './ProductItemContainer.module.scss';

import { ProductDescription } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/ProductDescription/ProductDescription';
import { RuleAccordion } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/RuleAccordion/RuleAccordion';
import { RentInfoPannel } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/RentInfoPannel/RentInfoPannel';
import { Slider } from '@/features/Slider/Slider';
import { Term } from '@/interfaces/categories';
import { IMAGE_BASE_URL } from '@/shared/constants/urls';
import { deliveryIcons, descriptionProductData, productPageSliderImages } from '@/shared/data';

import {
  mockBrandImage,
  verticalNextIcon,
  verticalPrevIcon,
} from '../../../../../../../shared/image';
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
  const [image, setImage] = useState<StaticImageData>();
  return (
    <div className={styles.productContentWrapper}>
      <div className={styles.productBody}>
        <div className={styles.productContent}>
          <div className={styles.productImages}>
            <Slider blur={false} direction='vertical' nextIcon={verticalNextIcon} prevIcon={verticalPrevIcon}>
              {productPageSliderImages.map((slideItem) => (
                <div key={slideItem.id} className={styles.imageWrapper} onClick={() => setImage(slideItem.image)}>
                  <Image src={slideItem.image} alt='mock' />
                </div>
              ))}
            </Slider>
            <div className={styles.mainImageWrapper}>
              <div className={styles.brandWrapper}>
                <Image src={mockBrandImage} alt='brand' />
              </div>
              <Image
                src={image ? image : `${IMAGE_BASE_URL}${productImage}`}
                width={576}
                height={576}
                alt='product image'
              />
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
