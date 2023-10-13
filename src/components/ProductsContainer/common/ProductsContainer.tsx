'use client';
import styles from './ProductsContainer.module.scss';

import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Slider } from '@/components/Slider/Slider';
import { nextArrow, previous } from '@/assets/image';
import { SwiperButtons } from '@/components/Slider/common/SwiperButtons/SwiperButtons';

interface ProductsContainer {
  productsData: ProductItem[];
}
export const ProductsContainer: FC<ProductsContainer> = ({ productsData }) => {
  return (
    <div className={styles.productsContainer}>
      <Slider>
        {productsData.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem
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
          </SwiperSlide>
        ))}
        <SwiperButtons rightIcon={nextArrow} leftIcon={previous} />
      </Slider>
    </div>
  );
};
