'use client';

import { FC } from 'react';
import 'swiper/css';

import styles from './ProductsContainer.module.scss';

import { ProductItem } from '@/entities/ProductItem/ProductItem';
import { Slider } from '@/features/Slider/Slider';
import { Product } from '@/interfaces/categories';
import { BlackNextButton } from '@/features/Slider/ui/ButtonVariants/BlackButtons/BlackNextButton';
import { BlackPrevButton } from '@/features/Slider/ui/ButtonVariants/BlackButtons/BlackPrevButton';

interface ProductsContainer {
  products: Product[];
}

export const ProductsContainer: FC<ProductsContainer> = ({ products }) => {
  return (
    <div className={styles.productsWrapper}>
      <Slider blur direction='horizontal' nextIcon={<BlackNextButton />} prevIcon={<BlackPrevButton />}>
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
            rentInfoArray={product.terms}
            trCategoryName={product.category?.tr_name_category}
            trSubCategoryName={product.subcategory?.tr_name_sub}
            trProductName={product.tr_name_product}
          />
        ))}
      </Slider>
    </div>
  );
};
