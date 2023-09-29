import Image from 'next/image';
import styles from './Testimonials.module.scss';
import { testimonialsImage } from '@/assets/image';
import { CommentItem } from './common/CommentItem';

export const Testimonials = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Истории, которые нас сближают</div>
      <div className={styles.contentWrapper}>
        <div>
          <Image src={testimonialsImage} alt='testimonialsImage' className={styles.testimonialsImage} />
        </div>
        <div className={styles.commentWrapper}>
          <CommentItem
            title='Аренда детского автокресла Recaro Privia EVO до 13 кг с рождения
'
            description='Кресло в очень хорошем состоянии, почти как новое. Ирина очень отзывчивая, помогла разобраться.
'
            userName='Viola Kapskaya
'
            userStatus='Пользователь'
          />
          <CommentItem
            title='Аренда спального мешка Northland Hypnos +4
'
            description='Я регулярно пользуюсь сервисом, по мне очень выгодно и очень удобно, быстрая доставка, единственное не получилось оплатить apple pay. Познакомились с Александром, нашли много общего, очень рада, что есть кто-то кто заботится о людях искренне...
'
            userName='Miila Fumushkina
'
            userStatus='Пользователь'
          />
        </div>
      </div>
    </div>
  );
};
