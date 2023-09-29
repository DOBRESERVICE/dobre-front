import styles from './ProductsContainer.module.scss';
import classNames from 'classnames';
import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { ProductStatus } from '@/enums';
import { mockItem, mockUser } from '@/assets/image';
import { rentInfoData } from '@/data';

export const ProductsContainer = () => {
  return (
    <div className={styles.productsWrapper}>
      <div className={classNames(styles.blur, styles.leftBlur)}></div>
      <div className={classNames(styles.blur, styles.rightBlur)}></div>
      <ProductItem
        photoUrl={mockItem}
        userUrl={mockUser}
        rentEndDate='18.23'
        itemName='ssssss'
        status={ProductStatus.LIKE_NEW}
        rating={4}
        feedbackCount={32}
        sellerInfo='seller'
        isAvailable={true}
        isConfirmed={true}
        rentInfoArray={rentInfoData}
      />
    </div>
  );
};
