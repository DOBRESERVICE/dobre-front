'use client';

import { Button } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import styles from './Testimonials.module.scss';

import { TabsComponent } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/TabsComponent/TabsComponent';
import { UserTestimonial } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/UserTestimotal/UserTestimonial';
import { FAQCustomButton, SeeAllCustomBigButton } from '@/shared/styles/buttonStyles';

import { FAQData, userTestimonialsData } from '../../../../../../../shared/data';
import { ProductTestimonial } from '@/interfaces';

interface TestimonialsProps {
  testimonialsData: ProductTestimonial[];
}

export const Testimonials: FC<TestimonialsProps> = ({ testimonialsData }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const countArray = [3, 11];
  useEffect(() => {
    setIsClient(true);
  }, [isClient]);
  return (
    <div className={styles.testimonialsWrapper}>
      <TabsComponent activeTab={activeTab} setActiveTab={setActiveTab} countArray={countArray} />
      {activeTab === 1 &&
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
            userComment={testimonialItem.userId}
            // images={testimonialItem.images}
          />
        ))}
      {activeTab === 2 && (
        <>
          <div className={styles.askAQuestion}>
            <p>Не нашли ответ на свой вопрос? Задайте свой вопрос сейчас</p>
            <Button sx={FAQCustomButton}>Задать вопрос </Button>
          </div>
          {FAQData.map((faqItem) => (
            <UserTestimonial
              key={faqItem.id}
              userImage={faqItem.userImage}
              userName={faqItem.userName}
              userComment={faqItem.userComment}
              feedBackDate={faqItem.feedbackDate}
              ownerImage={faqItem.ownerImage}
              ownerResponse={faqItem.ownerResponse}
            />
          ))}
        </>
      )}
      <div className={styles.seeAll}>
        {isClient && (
          <Button disableRipple sx={SeeAllCustomBigButton}>
            Просмотреть все
          </Button>
        )}
        <p>Отзывы могут оставлять только те, кто совершил аренду. Так мы формируем честный рейтинг.</p>
      </div>
    </div>
  );
};
