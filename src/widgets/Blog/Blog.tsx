import { FC } from 'react';

import styles from './Blog.module.scss';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { SEOContent } from '@/interfaces';

interface BlogProps {
  SEOData: SEOContent;
}
export const Blog: FC<BlogProps> = ({ SEOData }) => {
  return (
    <Wrapper>
      <section className={styles.sectionBlogWrapper}>
        <div className={styles.content}>
          <div className={styles.emptyBlock} />
          <div className={styles.textBlock}>
            <h2>{SEOData.header_seo || 'здесь будет хедер'}</h2>
            <p>{SEOData.body_seo || 'здесь будет тело '}</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
