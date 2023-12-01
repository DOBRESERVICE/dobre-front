import Image from 'next/image';

import styles from './NoProductsFound.module.scss';

import { emptyProduct } from '../../shared/image';

export const NoProductsFound = () => {
  return (
    <div className={styles.noProductsWrapper}>
      <Image src={emptyProduct} alt='emptyProduct' />
      <p>В этом разделе пока нет объявлений</p>
    </div>
  );
};
