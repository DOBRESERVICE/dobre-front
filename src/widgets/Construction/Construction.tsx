'use client';

import { FC } from 'react';
import styles from './Construction.module.scss';
import { CardItem } from '@/entities/CardItem/CardItem';
import { Subcategory } from '@/interfaces/categories';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

interface ConstructionProps {
  title: string;
  subCategories: Subcategory[];
  trCategoryName: string;
}
export const Construction: FC<ConstructionProps> = ({ title, subCategories, trCategoryName }) => {
  return (
    <Wrapper>
      <section className={styles.constructionSectionWrapper}>
        <TopSectionBar barName={title} announcements='316 объявлений' hasLinkArrow={false} />
        <div className={styles.constructionItemsWrapper}>
          {subCategories.map((product) => (
            <CardItem
              key={product.tr_name_sub}
              link={`/category/${trCategoryName}/${product.tr_name_sub}`}
              imageUrl={product.image_sub}
              title={product.name_sub}
            />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};
