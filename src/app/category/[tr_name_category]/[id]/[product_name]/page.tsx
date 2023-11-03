import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './ProductPage.module.scss';
import { ProductAsideInfo } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductAsideInfo/ProductAsideInfo';
import { ProductItemContainer } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/ProductItemContainer';

export default async function ProductPage({ params }: { params: { product_name: string } }) {
  return (
    <section className={styles.productSection}>
      <div className={styles.breadCrumbsWrapper}>
        <BreadCrumbs />
        <p>ID объявления: 1325467</p>
      </div>
      <div className={styles.wrapper}>
        <ProductItemContainer />
        <ProductAsideInfo />
      </div>
    </section>
  );
}
