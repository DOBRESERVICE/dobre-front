'use client';
import styles from './Construction.module.scss';
import { constuctionData } from '@/data';
import { CardItem } from '@/components/CardItem/CardItem';
import { Slider } from '@/components/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { SwiperButtons } from '@/components/Slider/common/SwiperButtons/SwiperButtons';
import { nextArrow, previous } from '@/assets/image';
export const Construction = () => {
  return (
    <section className={styles.constructionSectionWrapper}>
      <TopSectionBar barName='Ремонт и стройка' announcements='316 объявлений' hasLinkArrow={false} />
      <div className={styles.constructionItemsWrapper}>
        <Slider>
          {constuctionData.map((product) => (
            <SwiperSlide key={product.id}>
              <CardItem imageUrl={product.imageUrl} title={product.title} />
            </SwiperSlide>
          ))}
          <SwiperButtons rightIcon={nextArrow} leftIcon={previous} />
        </Slider>
      </div>
    </section>
  );
};
