'use client';

import Image from 'next/image';
import { FC } from 'react';

import styles from './ProductAsideInfo.module.scss';

import { YandexMaps } from '@/features/map/yandexMaps/YandexMaps';
import {
  cardPayment,
  cashPayment,
  cryptoPayment,
  cube,
  dpd,
  kce,
  mockUser,
  phoneIcon,
  russiaMail,
  sdek,
  sendMessageIcon,
  verified,
  yandexGo,
} from '@/shared/image';
import { RatingComponent } from '@/shared/ui/RatingComponent/RatingComponent';

import { blueNextArrow } from '../../../../../../../shared/image';

interface ProductAsideInfoProps {
  lon: number;
  lan: number;
}

export const ProductAsideInfo: FC<ProductAsideInfoProps> = ({ lon, lan }) => {
  return (
    <aside className={styles.asideWrapper}>
      <div className={styles.userInfo}>
        <div className={styles.userData}>
          <div className={styles.imageWrapper}>
            <Image src={mockUser} alt='user' />
          </div>
          <div className={styles.ratingWrapper}>
            <div>
              <p>Viola. K</p> <Image src={verified} alt='verified' />
            </div>
            <RatingComponent feedbackType='textFeedback' rating={4.9} feedbackCount={0} />
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <Image src={sendMessageIcon} alt='message' />
          </div>
          <div>
            <Image src={phoneIcon} alt='phone' />
          </div>
        </div>
      </div>
      <YandexMaps lon={lon} lan={lan} />
      <div className={styles.wrapper}>
        <div className={styles.deliveryHeader}>
          <div>
            <Image src={cube} alt='cube' />
            <p>Доставка</p>
          </div>
          <div className={styles.headerTerms}>
            <p>Условия доставки</p>
            <Image src={blueNextArrow} alt='delivery terms' />
          </div>
        </div>
        <div className={styles.deliveryServices}>
          <Image src={yandexGo} alt='yandex go' />
          <Image src={dpd} alt='dpd' />
          <Image src={sdek} alt='cdek' />
          <Image src={kce} alt='kce' />
          <Image src={russiaMail} alt='russia mail' />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.deliveryHeader}>
          <p className={styles.paymentMethods}>Оплата</p>
          <div className={styles.headerTerms}>
            <p>Условия оплаты</p>
            <Image src={blueNextArrow} alt='payment terms' />
          </div>
        </div>
        <div className={styles.paymentMethodsContent}>
          <div>
            <div className={styles.paymentIconWrapper}>
              <Image src={cardPayment} alt='card' />
            </div>
            <p>Безопасная оплата онлайн</p>
          </div>
          <div>
            <div className={styles.paymentIconWrapper}>
              <Image src={cashPayment} alt='cash' />
            </div>
            <p>Наличными при получении</p>
          </div>
          <div>
            <div className={styles.paymentIconWrapper}>
              <Image src={cryptoPayment} alt='crypto' />
            </div>
            <p>Оплата криптовалютой</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
