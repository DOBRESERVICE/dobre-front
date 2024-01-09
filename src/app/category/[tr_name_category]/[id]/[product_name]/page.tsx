import Image from 'next/image';

import styles from './ProductPage.module.scss';

import { GeneralRating } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/GeneralRating/GeneralRating';
import { ProductAsideInfo } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductAsideInfo/ProductAsideInfo';
import { ProductItemContainer } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/ProductItemContainer';
import { Testimonials } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/Testimonials/Testimonials';
import { BreadCrumbs } from '@/features/BreadCrumbs/BreadCrumbs';
import { getSEOContent } from '@/shared/api/contentApi';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { Blog } from '@/widgets/Blog/Blog';

import { getProductData, getProductFAQ, getProductTestimonials } from '../../../../../shared/api/categoriesApi';
import { commentExclamation } from '../../../../../shared/image';

export default async function ProductPage({ params }: { params: { product_name: string } }) {
  const { data: productData } = await getProductData(params.product_name);
  const { data: SEOData } = await getSEOContent('variety', params.product_name);
  const { data: testimonialsData } = await getProductTestimonials(productData.id_product);
  const { data: FAQData } = await getProductFAQ(productData.id_product);
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
        <div className={styles.wrapper}>
          <ProductItemContainer
            productDescription={productData.description}
            productImage={productData.image}
            productName={productData.name_product}
            price={productData.price}
            qualityControl={productData.quality_control}
            quantity={productData.quantity}
            hasInsurance={productData.insurance}
            terms={productData.terms}
          />
          <ProductAsideInfo lan={lan} lon={lon} />
        </div>
        <div className={styles.ratingWrapper}>
          <Testimonials testimonialsData={testimonialsData} FAQData={FAQData} />
          <GeneralRating />
        </div>
      </section>
      <section className={styles.similarProducts}>
        <TopSectionBar hasLinkArrow barName='Похожие товары' />
        {/*<ProductsContainer products={productsData} />*/}
      </section>
      <Blog SEOData={SEOData} />
    </>
  );
}
