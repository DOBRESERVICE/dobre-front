import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './ProductPage.module.scss';

export default async function ProductPage({ params }: { params: { product_name: string } }) {
  console.log(params.product_name);
  return (
    <>
      <div className={styles.breadCrumbsWrapper}>
        <BreadCrumbs />
        <p>ID 123213213</p>
      </div>
    </>
  );
}
