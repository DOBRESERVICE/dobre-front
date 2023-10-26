'use client';
import styles from './Construction.module.scss';
import { CardItem } from '@/components/CardItem/CardItem';
import { Slider } from '@/components/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { SwiperButtons } from '@/components/Slider/common/SwiperButtons/SwiperButtons';
import { nextArrow, previous } from '@/assets/image';
import { FC } from 'react';
import { Subcategory } from '@/interfaces/categories';

interface ConstructionProps {
  title: string;
  subCategories: Subcategory[];
}
export const Construction: FC<ConstructionProps> = ({ title, subCategories }) => {
  return (
    <section className={styles.constructionSectionWrapper}>
      <TopSectionBar barName={title} announcements='316 объявлений' hasLinkArrow={false} />
      <div className={styles.constructionItemsWrapper}>
        <Slider>
          {subCategories.map((product) => (
            <SwiperSlide key={product.id_sub}>
              <CardItem imageUrl={product.image_sub} title={product.name_sub} link={product.tr_name_sub} />
            </SwiperSlide>
          ))}
          <SwiperButtons rightIcon={nextArrow} leftIcon={previous} />
        </Slider>
      </div>
    </section>
  );
};
