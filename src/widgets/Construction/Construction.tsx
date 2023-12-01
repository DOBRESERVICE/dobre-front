'use client';

import { FC } from 'react';

import styles from './Construction.module.scss';

import { CardItem } from '@/entities/CardItem/CardItem';
import { Slider } from '@/features/Slider/Slider';
import { Subcategory } from '@/interfaces/categories';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';

import { nextArrow, previous } from '../../shared/image';

interface ConstructionProps {
  title: string;
  subCategories: Subcategory[];
}
export const Construction: FC<ConstructionProps> = ({ title, subCategories }) => {
  return (
    <section className={styles.constructionSectionWrapper}>
      <TopSectionBar barName={title} announcements='316 объявлений' hasLinkArrow={false} />
      <div className={styles.constructionItemsWrapper}>
        <Slider prevIcon={previous} nextIcon={nextArrow}>
          {subCategories.map((product) => (
            <CardItem
              key={product.tr_name_sub}
              link={product.tr_name_sub}
              imageUrl={product.image_sub}
              title={product.name_sub}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
