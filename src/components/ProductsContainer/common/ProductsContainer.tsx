'use client';
import styles from './ProductsContainer.module.scss';

import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { nextArrow, previous } from '@/assets/image';
import { SwiperButtons } from '@/components/Slider/common/SwiperButtons/SwiperButtons';
import { Product } from '@/interfaces/categories';
import 'swiper/css';
import { Carousel } from '@/components/Carousel/Carousel';

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
    <Carousel>
      {products.map((product) => (
        <ProductItem
          productId={product.id_product}
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
      ))}
    </Carousel>
  );
};
