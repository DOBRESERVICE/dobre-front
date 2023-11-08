'use client';
import styles from './ProductsContainer.module.scss';

import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Slider } from '@/components/Slider/Slider';
import { nextArrow, previous } from '@/assets/image';
import { SwiperButtons } from '@/components/Slider/common/SwiperButtons/SwiperButtons';
import { Product } from '@/interfaces/categories';

interface ProductsContainer {
  products: Product[] | any[];
}

export const ProductsContainer: FC<ProductsContainer> = ({ products }) => {
  const arr = [
    {
      id: 1,
      timeInRent: '1 неделя',
      price: '1 799 руб.',
    },
    {
      id: 2,
      timeInRent: '1 месяц',
      price: '3 930 руб.',
    },
    {
      id: 3,
      timeInRent: '2 месяца',
      price: '13 450 руб.',
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
              description={product.description}
              status={product.quality_control}
              rating={2}
              feedbackCount={2}
              sellerInfo={'Организация'}
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
