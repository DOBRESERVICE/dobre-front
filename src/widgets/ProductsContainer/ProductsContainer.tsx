'use client';

import { FC } from 'react';
import 'swiper/css';

import styles from './ProductsContainer.module.scss';

import { ProductItem } from '@/entities/ProductItem/ProductItem';
import { Slider } from '@/features/Slider/Slider';
import { Product } from '@/interfaces/categories';

import { nextArrow, previous } from '../../shared/image';

interface ProductsContainer {
  products: Product[];
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
    <div className={styles.productsWrapper}>
      <Slider nextIcon={nextArrow} prevIcon={previous}>
        {products?.map((product) => (
          <ProductItem
            key={product.id_product}
            productId={product.id_product}
            photoUrl={product.image}
            userUrl={product.userId}
            rentEndDate={product.rent_terms}
            itemName={product.name_product}
            description={product.description}
            status={product.quality_control}
            rating={2}
            feedbackCount={2}
            sellerInfo='Организация'
            isAvailable={product.enabled_product}
            isConfirmed
            rentInfoArray={arr}
          />
        ))}
      </Slider>
    </div>
  );
};
