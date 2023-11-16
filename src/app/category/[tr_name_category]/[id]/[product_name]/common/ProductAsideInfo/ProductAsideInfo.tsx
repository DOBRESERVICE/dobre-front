'use client';
import styles from './ProductAsideInfo.module.scss';
import Image from 'next/image';
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
import { YandexMaps } from '@/features/map/yandexMaps/YandexMaps';
export const ProductAsideInfo = () => {
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
            <RatingComponent feedbackType='iconFeedback' rating={4.9} feedbackCount={31} />
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
      <YandexMaps />
      <div className={styles.wrapper}>
        <div className={styles.deliveryHeader}>
          <Image src={cube} alt='cube' />
          <p>Доставка</p>
        </div>
        <div className={styles.deliveryServices}>
          <Image src={yandexGo} alt='yandex go' />
          <Image src={dpd} alt='dpd' />
          <Image src={sdek} alt='cdek' />
          <Image src={kce} alt='kce' />
          <Image src={russiaMail} alt='russia mail' />
        </div>
        <p className={styles.deliveryText}>
          Бесплатная доставка при аренде от 7 дней по Москве. В остальных случаях стоимость доставки рассчитывается
          курьерской службой исход из вашего местоположения.
        </p>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.paymentMethods}>Способы оплаты</p>
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
