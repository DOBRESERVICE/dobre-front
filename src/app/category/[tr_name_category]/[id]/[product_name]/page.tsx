import Image from 'next/image';

import styles from './ProductPage.module.scss';

import { GeneralRating } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/GeneralRating/GeneralRating';
import { ProductItemContainer } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/ProductItemContainer';
import { Testimonials } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/Testimonials/Testimonials';
import { BreadCrumbs } from '@/features/BreadCrumbs/BreadCrumbs';
import { productData, testimonialsData } from '@/shared/data';
import { Blog } from '@/widgets/Blog/Blog';

import { commentExclamation } from '../../../../../shared/image';

export default async function ProductPage() {
  const breadCrumbsData = [
    {
      id: 1,
      link: '/',
      linkName: 'Главная',
    },
    {
      id: 2,
      link: `/category/${productData.category.tr_name_category}`,
      linkName: productData.category.name_category,
    },
    {
      id: 3,
      link: `/category/${productData.category.tr_name_category}/${productData.subcategory.tr_name_sub}`,
      linkName: productData.subcategory.name_sub,
    },
    {
      id: 4,
      link: `/category/${productData.category.tr_name_category}/${productData.subcategory.tr_name_sub}?variety=${productData.variety.tr_name_variety}`,
      linkName: productData.variety.name_variety,
    },
    {
      id: 5,
      link: `/category/${productData.category.tr_name_category}/${productData.subcategory.tr_name_sub}/${productData.id_product}`,
      linkName: productData.name_product,
    },
  ];
  const lan = Number(productData.address.lan);
  const lon = Number(productData.address.lon);
  return (
    <>
      <section className={styles.productSection}>
        <div className={styles.breadCrumbsWrapper}>
          <BreadCrumbs breadCrumbsData={breadCrumbsData} />
          <div className={styles.info}>
            <Image src={commentExclamation} alt='comment' />
            <p>ID объявления: 1325467</p>
            <div className={styles.popup}>
              <p>Пожаловаться</p>
            </div>
          </div>
        </div>
        <ProductItemContainer
          productDescription={productData.description}
          productImage={productData.image}
          productName={productData.name_product}
          price={productData.price}
          qualityControl={productData.quality_control}
          quantity={productData.quantity}
          hasInsurance={productData.insurance}
          terms={productData.terms}
          deposit={productData.deposit}
          lan={lan}
          lon={lon}
        />
        <div className={styles.ratingWrapper}>
          <Testimonials testimonialsData={testimonialsData} />
          <GeneralRating />
        </div>
      </section>
      <Blog />
    </>
  );
}
