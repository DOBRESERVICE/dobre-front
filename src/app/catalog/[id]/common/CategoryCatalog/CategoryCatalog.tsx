import styles from './CategoryCatalog.module.scss';
import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { productsData } from '@/data';
export const CategoryCatalog = () => {
  return (
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
  );
};
