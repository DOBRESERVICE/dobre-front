'use client';
import styles from './ProductsContainer.module.scss';

import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Slider } from '@/components/Slider/Slider';
import { nextArrow, previous } from '@/assets/image';
import { SwiperButtons } from '@/components/Slider/common/SwiperButtons/SwiperButtons';
import { Product } from '@/interfaces/categories';
import { ProductStatus } from '@/enums';

interface ProductsContainer {
  products: Product[] | any[];
}

console.log('test');
export const ProductsContainer: FC<ProductsContainer> = ({ products }) => {
  const arr = [
    {
      id: 1,
      timeInRent: 'string',
      price: '123',
    },
  ];

  return (
    <div className={styles.productsContainer}>
      <Slider>
        {products.map((product) => (
          <SwiperSlide key={product.id_product}>
            <ProductItem
              photoUrl={product.image}
              userUrl={product.userId}
              rentEndDate={product.rent_terms}
              itemName={product.name_product}
              status={ProductStatus.GOOD}
              rating={2}
              feedbackCount={2}
              sellerInfo={'asfasf'}
              isAvailable={product.enabled_product}
              isConfirmed={true}
              rentInfoArray={arr}
            />
          </SwiperSlide>
        ))}
        <SwiperButtons rightIcon={nextArrow} leftIcon={previous} />
      </Slider>
    </div>
  );
};
