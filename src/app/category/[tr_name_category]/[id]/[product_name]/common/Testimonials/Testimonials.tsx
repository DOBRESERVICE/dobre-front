'use client';

import { Button } from '@mui/material';
import { FC, useState } from 'react';

import styles from './Testimonials.module.scss';

import { TabsComponent } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/TabsComponent/TabsComponent';
import { UserTestimonial } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/UserTestimotal/UserTestimonial';
import { ProductTestimonial } from '@/interfaces';
import { FAQCustomButton, rentInfoCustomBigButton, SeeAllCustomBigButton } from '@/shared/styles/buttonStyles';

interface TestimonialsProps {
  testimonialsData: ProductTestimonial[];
  FAQData: ProductTestimonial[];
}

export const Testimonials: FC<TestimonialsProps> = ({ testimonialsData, FAQData }) => {
  const [isFaq, setIsFaq] = useState(false);
  const countArray = [3, 11];
  return (
    <div className={styles.testimonialsWrapper}>
      <TabsComponent activeTab={isFaq} setActiveTab={setIsFaq} countArray={countArray} />
      {!isFaq &&
        testimonialsData.map((testimonialItem) => (
          <UserTestimonial
            key={testimonialItem.id_testimonial}
            userImage={testimonialItem.user.avatar}
            userName={testimonialItem.user.email}
            feedBackDate={testimonialItem.text}
            ownerImage={testimonialItem.user.avatar}
            status={testimonialItem.id_testimonial}
            ratingCount={testimonialItem.id_testimonial}
            ownerResponse={testimonialItem.userId}
            userComment={testimonialItem.text}
            // images={testimonialItem.images}
          />
        ))}
      {isFaq && (
        <>
          <div className={styles.askAQuestion}>
            <p>Не нашли ответ на свой вопрос? Задайте свой вопрос сейчас</p>
            <Button sx={FAQCustomButton}>Задать вопрос </Button>
          </div>
          {FAQData.map((faqItem) => (
            <UserTestimonial
              key={faqItem.userId}
              userImage={faqItem.user.avatar}
              userName={faqItem.user.email}
              userComment={faqItem.userId}
              feedBackDate={faqItem.text}
              ownerImage={faqItem.user.avatar}
              ownerResponse={faqItem.userId}
            />
          ))}
        </>
      )}
      <div className={styles.seeAll}>
        <Button disableRipple sx={rentInfoCustomBigButton}>
          Показать еще
        </Button>

        <p>Отзывы могут оставлять только те, кто совершил аренду. Так мы формируем честный рейтинг.</p>
      </div>
    </div>
  );
};
