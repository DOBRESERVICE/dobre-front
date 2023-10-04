import styles from './Construction.module.scss';
import { constuctionData } from '@/data';
import { CardItem } from '@/components/CardItem/CardItem';
import classNames from 'classnames';
export const Construction = () => {
  return (
    <section className={styles.constructionSectionWrapper}>
      <div className={styles.textWrapper}>
        <h3>Ремонт и стройка</h3>
        <p>1322 объявления</p>
      </div>
      <div className={styles.constructionItemsContainer}>
        <div className={classNames(styles.blur, styles.leftBlur)}></div>
        <div className={classNames(styles.blur, styles.rightBlur)}></div>
        {constuctionData.map((product) => (
          <CardItem key={product.id} imageUrl={product.imageUrl} title={product.title} />
        ))}
      </div>
    </section>
  );
};
