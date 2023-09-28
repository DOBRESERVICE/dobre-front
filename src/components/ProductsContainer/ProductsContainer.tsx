import styles from './ProductsContainer.module.scss';
import classNames from 'classnames';
import { NewProductItem } from '@/components/NewProductItem/NewProductItem';

export const ProductsContainer = () => {
  return (
    <div className={styles.productsWrapper}>
      <div className={classNames(styles.blur, styles.leftBlur)}></div>
      <div className={classNames(styles.blur, styles.rightBlur)}></div>
      <NewProductItem />
      <NewProductItem />
      <NewProductItem />
      <NewProductItem />
      <NewProductItem />
      <NewProductItem />
      <NewProductItem />
    </div>
  );
};
