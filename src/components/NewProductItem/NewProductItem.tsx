import styles from './NewProductItem.module.scss';
import Image from 'next/image';
import { favouriteIcon, mockItem, mockUser, starReviews, verified } from '@/assets/image';

export const NewProductItem = () => {
  return (
    <div className={styles.newProductWrapper}>
      <Image src={mockUser} alt='user' />
      <Image src={favouriteIcon} alt='favourite' />
      <div>
        <Image src={mockItem} alt='item' />
      </div>
      <div className={styles.statusWrapper}>
        <p className={styles.status}>Новое</p>
        <div className={styles.statusBarContainer}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.rentTimeContainer}>
        <div>
          <p>1 неделя</p>
          <span> 799 руб.</span>
        </div>
        <span className={styles.line}></span>
        <div>
          <p>1 месяц</p>
          <span> 1 930 руб.</span>
        </div>
        <span className={styles.line}></span>
        <div>
          <p>2 месяца</p>
          <span> 3 450 руб.</span>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.notification}>
          <p>В аренде до 18 сен. 2023</p>
        </div>
        <Image src={starReviews} alt='star' />
        <span>4.4</span>
        <span>(31 отзывов)</span>
      </div>
      <p className={styles.itemName}>Детское автокресло Recaro Privia аренда</p>
      <div className={styles.sellerInfoContainer}>
        <Image src={verified} alt='verified' />
        <p className={styles.sellerInfo}>Частное лицо</p>
      </div>
    </div>
  );
};
