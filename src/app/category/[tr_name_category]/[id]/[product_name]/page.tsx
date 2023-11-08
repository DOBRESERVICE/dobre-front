import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './ProductPage.module.scss';
import { ProductAsideInfo } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductAsideInfo/ProductAsideInfo';
import { ProductItemContainer } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/ProductItemContainer';
import { Testimonials } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/Testimonials/Testimonials';
import { GeneralRating } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/GeneralRating/GeneralRating';
import Image from 'next/image';
import { commentExclamation } from '@/assets/image';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { ProductsContainer } from '@/components/ProductsContainer/common/ProductsContainer';
import { productsData } from '@/data';
import { Blog } from '@/components/Blog/Blog';

export default async function ProductPage({ params }: { params: { product_name: string } }) {
  return (
    <>
      <section className={styles.productSection}>
        <div className={styles.breadCrumbsWrapper}>
          <BreadCrumbs />
          <div className={styles.info}>
            <Image src={commentExclamation} alt='comment' />
            <p>ID объявления: 1325467</p>
            <div className={styles.popup}>
              <p>Пожаловаться</p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <ProductItemContainer />
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
