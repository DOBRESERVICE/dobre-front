import styles from './Blog.module.scss';
import { FC } from 'react';

interface BlogProps {
  header: string;
  text: string;
  image?: string;
}
export const Blog: FC<BlogProps> = ({ header, text, image }) => {
  return (
    <section className={styles.sectionBlogWrapper}>
      <div className={styles.content}>
        <div className={styles.emptyBlock}></div>
        <div className={styles.textBlock}>
          <h2>{header}</h2>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};
