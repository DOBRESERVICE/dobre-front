import styles from './Construction.module.scss';
import { constuctionData } from '@/data';
import { CardItem } from '@/components/CardItem/CardItem';
import classNames from 'classnames';
import Image from 'next/image';
import { sliderBlur, sliderLeftBlur, sliderRightBlur } from '@/assets/image';
export const Construction = () => {
  return (
    <section className={styles.constructionSectionWrapper}>
      <div className={styles.textWrapper}>
        <h3>Ремонт и стройка</h3>
        <p>1322 объявления</p>
      </div>
      <div className={styles.constructionItemsContainer}>
        <div className={classNames(styles.blur, styles.leftBlur)}>
          <Image src={sliderLeftBlur} alt='blur' />
        </div>
        <div className={classNames(styles.blur, styles.rightBlur)}>
          <Image src={sliderRightBlur} alt='blur' />
        </div>
        {constuctionData.map((product) => (
          <CardItem key={product.id} imageUrl={product.imageUrl} title={product.title} />
        ))}
      </div>
    </section>
  );
};
