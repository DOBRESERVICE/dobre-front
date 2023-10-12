'use client';
import styles from './Construction.module.scss';
import { constuctionData } from '@/data';
import { CardItem } from '@/components/CardItem/CardItem';
import { Slider } from '@/components/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
export const Construction = () => {
  return (
    <section className={styles.constructionSectionWrapper}>
      <div className={styles.textWrapper}>
        <h3>Ремонт и стройка</h3>
        <p>1322 объявления</p>
      </div>
      <div className={styles.constructionItemsWrapper}>
        <Slider>
          {constuctionData.map((product) => (
            <SwiperSlide key={product.id}>
              <CardItem imageUrl={product.imageUrl} title={product.title} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};
