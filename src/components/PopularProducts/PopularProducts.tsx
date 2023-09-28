import styles from './PopularProducts.module.scss';
import Image from 'next/image';
import { sportImage } from '@/assets/image';
export const PopularProducts = () => {
  return (
    <section>
      <div className={styles.gridContainer}>
        <div className=''>
          <h3>Электроника</h3>
        </div>
        <div className=''>Кемпинг и путешествия</div>
        <div className={styles.cardWrapper}>
          <Image src={sportImage} alt='sport image' />
          Спорт и активный отдых
        </div>
        <div className=''>
          Бытовая <br /> техника
        </div>
        <div className=''>
          Для родителей <br /> и дедей
        </div>
        <div className=''>
          Игры и <br /> развлечения
        </div>
        <div className=''>
          Хобби и <br /> творчество
        </div>
      </div>
    </section>
  );
};
