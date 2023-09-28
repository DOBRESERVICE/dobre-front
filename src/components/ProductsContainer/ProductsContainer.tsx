import styles from './ProductsContainer.module.scss';
import classNames from 'classnames';
import { ProductItem } from '@/components/ProductsContainer/ProductItem';
import { ProductStatus } from '@/enums';
import { mockItem, mockUser } from '@/assets/image';

const rentInfoData = [
  {
    id: 1,
    timeInRent: '1 неделя',
    price: '799 pуб.',
  },
  {
    id: 2,
    timeInRent: '1 неделя',
    price: '799 pуб.',
  },
  {
    id: 3,
    timeInRent: '1 неделя',
    price: '799 pуб.',
  },
];

export const ProductsContainer = () => {
  return (
    <div className={styles.productsWrapper}>
      <div className={classNames(styles.blur, styles.leftBlur)}></div>
      <div className={classNames(styles.blur, styles.rightBlur)}></div>
      <ProductItem
        photoUrl={mockItem}
        userUrl={mockUser}
        rentEndDate={'18.23'}
        itemName='ssssss'
        isInFavourites={true}
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
