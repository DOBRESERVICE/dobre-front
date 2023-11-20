import Image from 'next/image';

import styles from './AboutUs.module.scss';

import { AboutUsItem } from './ui/AboutUsItem/AboutUsItem';
import { aboutUsAccept, aboutUsImage } from '../../shared/image';

export const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Image src={aboutUsAccept} alt='accept' className={styles.acceptImage} />
        <div className={styles.imageWrapper}>
          <Image src={aboutUsImage} alt='aboutUs' />
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.titleTextWrapper}>
            <div className={styles.titleText}>Надежный маркетплейс для аренды ваших вещей</div>
            <div className={styles.titleDescr}>Место, где ты можешь помогать людям, предлагая свою вещь в аренду</div>
          </div>
        </div>
      </div>
      <div className={styles.itemsWrapper}>
        <AboutUsItem
          title='Сдавайте в аренду и зарабатывайте легко'
          description='Сдавайте вещи, которые лежат без дела или редко используются могут стать дополнительным источником дохода
'
          position='bottom'
        />

        <AboutUsItem
          title='Берите в аренду и получайте желаемое'
          description='Находите нужную технику, продвинутые гаджеты или дизайнерскую одежду, которые вы хотите, быстро и за разумную стоимость.
          '
          position='left'
        />

        <AboutUsItem
          title='Развивайтесь и открывайте новое'
          description='С верифицированными пользователями, залогом, страховкой и отзывами процесс аренды с нами легкий и прозрачный.
          '
          position='right'
        />
      </div>
    </div>
  );
};
