import { RatingComponent } from '@/ui/RatingComponent/RatingComponent';
import { StatusBar } from '@/components/ProductsContainer/common/StatusBar';
import styles from './ProductItemContainer.module.scss';
import Image from 'next/image';
import { favouriteIcon, mock1Image, mock2Image, mock3Image, mockBrandImage, mockMainImage } from '@/assets/image';
import { ProductDescription } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/ProductDescription/ProductDescription';
import { descriptionProductData } from '@/data';
import { ProductDetails } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/ProductDetails/ProductDetails';
import { RentInfoPannel } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/RentInfoPannel/RentInfoPannel';
export const ProductItemContainer = () => {
  const count = 3;
  const availableQuantityArray = Array.from({ length: count }, (_, index) => index + 1);
  console.log(availableQuantityArray);
  return (
    <div className={styles.productContentWrapper}>
      <div className={styles.productHeader}>
        <div className={styles.headerInfo}>
          <h2 className={styles.productName}>Комбинир. перфоратор Hilti TE 70-AVR 230V 2208672</h2>
          <div className={styles.content}>
            <RatingComponent feedbackType='textFeedback' rating={4.4} feedbackCount={31} />
            <StatusBar status={4} />
            <div className={styles.availableCountWrapper}>
              <p>Доступно {count} шт.</p>
            </div>
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.favouriteImageWrapper}>
            <Image src={favouriteIcon} alt='favourite' />
          </div>
          <div className={styles.priceSegment}>от 450 руб.</div>
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
          <Image src={mockMainImage} alt={'ss'} />
        </div>
        <RentInfoPannel count={count} availableQuantityArray={availableQuantityArray} />
      </div>
      <ProductDescription
        secondDescription={descriptionProductData.secondDescription}
        firstDescription={descriptionProductData.firstDescription}
        mainAdvantages={descriptionProductData.mainAdvantages}
      />
      <ProductDetails />
    </div>
  );
};
