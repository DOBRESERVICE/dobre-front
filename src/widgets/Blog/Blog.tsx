import { FC } from 'react';

import styles from './Blog.module.scss';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

interface BlogProps {
  header: string;
  text: string;
  image?: string;
}
export const Blog: FC<BlogProps> = ({ header, text }) => {
  return (
    <Wrapper>
      <section className={styles.sectionBlogWrapper}>
        <div className={styles.content}>
          <div className={styles.emptyBlock} />
          <div className={styles.textBlock}>
            <h2>{header}</h2>
            <p>{text}</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
