import styles from './ProductsContainer.module.scss';
import classNames from 'classnames';
import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { FC } from 'react';
import Image from 'next/image';
import { sliderLeftBlur, sliderRightBlur } from '@/assets/image';

interface ProductsContainer {
  productsData: ProductItem[];
}
export const ProductsContainer: FC<ProductsContainer> = ({ productsData }) => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsWrapper}>
        <div className={classNames(styles.blur, styles.leftBlur)}>
          <Image src={sliderLeftBlur} alt='blur' />
        </div>
        <div className={classNames(styles.blur, styles.rightBlur)}>
          <Image src={sliderRightBlur} alt='blur' />
        </div>
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            photoUrl={product.photoUrl}
            userUrl={product.userUrl}
            rentEndDate={product.rentEndDate}
            itemName={product.itemName}
            status={product.status}
            rating={product.rating}
            feedbackCount={product.feedbackCount}
            sellerInfo={product.sellerInfo}
            isAvailable={product.isAvailable}
            isConfirmed={product.isConfirmed}
            rentInfoArray={product.rentInfoArray}
          />
        ))}
      </div>
    </div>
  );
};
