'use client';

import { FC } from 'react';

import styles from './Construction.module.scss';

import { CardItem } from '@/entities/CardItem/CardItem';
import { SubCategoryy } from '@/interfaces/categories';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

interface ConstructionProps {
  title: string;
  subCategories: SubCategoryy[];
  trCategoryName: string;
}
export const Construction: FC<ConstructionProps> = ({ title, subCategories, trCategoryName }) => {
  return (
    <Wrapper>
      <section className={styles.constructionSectionWrapper}>
        <TopSectionBar barName={title} announcements='316 объявлений' hasLinkArrow={false} />
        <div className={styles.constructionItemsWrapper}>
          {subCategories.map((subCategory) => (
            <CardItem
              key={subCategory.id}
              link={`/category/${trCategoryName}/${subCategory.publicationAlias}`}
              // imageUrl={subCategory.imageId}
              title={subCategory.name}
            />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};
