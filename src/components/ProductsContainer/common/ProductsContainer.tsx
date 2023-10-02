import styles from './ProductsContainer.module.scss';
import classNames from 'classnames';
import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { productsData, rentInfoData } from '@/data';

export const ProductsContainer = () => {
  return (
    <div className={styles.productsWrapper}>
      <div className={classNames(styles.blur, styles.leftBlur)}></div>
      <div className={classNames(styles.blur, styles.rightBlur)}></div>
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
  );
};
