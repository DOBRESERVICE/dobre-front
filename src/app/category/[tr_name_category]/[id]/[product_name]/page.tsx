import Image from 'next/image';

import styles from './ProductPage.module.scss';

import { GeneralRating } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/GeneralRating/GeneralRating';
import { ProductAsideInfo } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductAsideInfo/ProductAsideInfo';
import { ProductItemContainer } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/ProductItemContainer';
import { Testimonials } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/Testimonials/Testimonials';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { Blog } from '@/widgets/Blog/Blog';
import { ProductsContainer } from '@/widgets/ProductsContainer/ProductsContainer';

import { getProductData } from '../../../../../shared/api/categoriesApi';
import { productsData } from '../../../../../shared/data';
import { commentExclamation } from '../../../../../shared/image';

export default async function ProductPage({ params }: { params: { product_name: string } }) {
  const { data: productData } = await getProductData(params.product_name);
  // const breadCrumbsData = [
  //   {
  //     id: 1,
  //     link: '/',
  //     linkName: 'Главная',
  //   },
  //   {
  //     id: 2,
  //     link: `/category/${productData.category.tr_name_category}`,
  //     linkName: productData.category.name_category,
  //   },
  //   {
  //     id: 3,
  //     link: `/category/${productData.category.tr_name_category}/${productData.subcategory.tr_name_sub}`,
  //     linkName: productData.subcategory.name_sub,
  //   },
  //   {
  //     id: 4,
  //     link: `/category/${productData.category.tr_name_category}/${productData.subcategory.tr_name_sub}`,
  //     linkName: productData.variety.name_variety,
  //   },
  //   {
  //     id: 5,
  //     link: `/category/${productData.category.tr_name_category}/${productData.subcategory.tr_name_sub}/${productData.id_product}`,
  //     linkName: productData.name_product,
  //   },
  // ];

  return (
    <>
      <section className={styles.productSection}>
        <div className={styles.breadCrumbsWrapper}>
          {/* <BreadCrumbs breadCrumbsData={breadCrumbsData} /> */}
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
          />
          <ProductAsideInfo />
        </div>
        <div className={styles.ratingWrapper}>
          <Testimonials />
          <GeneralRating />
        </div>
      </section>
      <section className={styles.similarProducts}>
        <TopSectionBar hasLinkArrow barName='Похожие товары' />
        <ProductsContainer products={productsData} />
      </section>
      <Blog
        header='Аренда Комбинир. перфоратор Hilti TE 70-AVR 230V 2208672'
        text='Прокат дрели в Минске – это чрезвычайно выгодное вложение средств. Мы сдаём свои инструменты в аренду физическим и юридическим лицам. Нашим клиентом может быть любой совершеннолетний гражданин Беларуси. У нас представлены такие проверенные бренды, как MAKITA, BOSCH, WORTEX и др. При желании клиент может продлить срок аренды, предварительно позвонив нам по телефону. При аренде товара более, чем на сутки, предусмотрена система скидок. Для того, чтобы арендовать у нас инструмент либо вернуть его обратно, потребителю достаточно посетить офис нашей компании.'
      />
    </>
  );
}
