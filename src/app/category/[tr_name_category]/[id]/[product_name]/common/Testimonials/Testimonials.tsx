'use client';

import { Button } from '@mui/material';
import { useState } from 'react';

import styles from './Testimonials.module.scss';

import { TabsComponent } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/TabsComponent/TabsComponent';
import { UserTestimonial } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/UserTestimotal/UserTestimonial';
import { FAQCustomButton, SeeAllCustomBigButton } from '@/shared/styles/buttonStyles';

import { FAQData, userTestimonialsData } from '../../../../../../../shared/data';

export const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(1);
  const countArray = [3, 11];
  return (
    <div className={styles.testimonialsWrapper}>
      <TabsComponent activeTab={activeTab} setActiveTab={setActiveTab} countArray={countArray} />
      {activeTab === 1 &&
        userTestimonialsData.map((testimonialItem) => (
          <UserTestimonial
            key={testimonialItem.id}
            userImage={testimonialItem.userImage}
            userName={testimonialItem.userName}
            feedBackDate={testimonialItem.feedbackDate}
            ownerImage={testimonialItem.ownerImage}
            status={testimonialItem.status}
            ratingCount={testimonialItem.feedbackCount}
            ownerResponse={testimonialItem.ownerResponse}
            userComment={testimonialItem.userComment}
            images={testimonialItem.images}
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
        <Button disableRipple sx={SeeAllCustomBigButton}>
          Просмотреть все
        </Button>
        <p>Отзывы могут оставлять только те, кто совершил аренду. Так мы формируем честный рейтинг.</p>
      </div>
    </div>
  );
};
