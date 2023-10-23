'use client';
import styles from './CategoryCatalog.module.scss';
import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { productsData } from '@/data';
import { Pagination } from '@mui/material';
import { customPagination } from '@/styles/buttonStyles';
import { useState } from 'react';
import { sortSvg } from '@/assets/image';
import { AvailableNow } from '@/app/category/[tr_name_category]/[id]/common/AvailableNow/AvailableNow';
import { CustomDatePicker } from '@/app/category/[tr_name_category]/[id]/common/CustomDatePicker/CustomDatePicker';
import { CustomSelect } from '@/app/category/[tr_name_category]/[id]/common/CustomSelect/CustomSelect';
export const CategoryCatalog = () => {
  const [page, setPage] = useState<unknown>(0);
  return (
    <div className={styles.categoryCatalogWrapper}>
      <div className={styles.content}>
        <div className={styles.buttonsWrapper}>
          <AvailableNow />
          <CustomDatePicker />
        </div>
        <CustomSelect label='Сначала новые' labelImage={sortSvg} />
      </div>

      <div className={styles.categoryCatalog}>
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
      <Pagination
        onChange={(_, page) => {
          if (page !== null) {
            setPage(page);
          }
        }}
        sx={customPagination}
        count={64}
        variant='outlined'
        shape='rounded'
      />
    </div>
  );
};
