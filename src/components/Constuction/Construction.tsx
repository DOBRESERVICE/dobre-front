import styles from './Construction.module.scss';
import { constuctionData } from '@/data';
import { CardItem } from '@/components/CardItem/CardItem';
import classNames from 'classnames';
import Image from 'next/image';
import { sliderLeftBlur, sliderRightBlur } from '@/assets/image';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
export const Construction = () => {
  return (
    <section className={styles.constructionSectionWrapper}>
      <TopSectionBar barName='Ремонт и стройка' announcements='316 объявлений' hasLinkArrow={false} />
      <div className={styles.constructionItemsWrapper}>
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
      </div>
    </section>
  );
};
