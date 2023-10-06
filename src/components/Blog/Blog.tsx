import styles from './Blog.module.scss';
export const Blog = () => {
  return (
    <section className={styles.sectionBlogWrapper}>
      <div className={styles.content}>
        <div className={styles.emptyBlock}></div>
        <div className={styles.textBlock}>
          <h2>Профессиональный ремонт и стройка: ваш путь к идеальному дому</h2>
          <p>
            Добро пожаловать в мир ремонта и стройки, где креативность встречается с качеством, а ваш дом становится
            идеальным местом для жизни! Мы - ваш надежный партнер в создании и обновлении вашего жилья. Независимо от
            того, нужен ли вам косметический ремонт или полноценное строительство, у нас есть решения, которые сделают
            вашу мечту о идеальном доме реальностью.
          </p>
        </div>
      </div>
    </section>
  );
};
