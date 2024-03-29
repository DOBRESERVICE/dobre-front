import { FC } from 'react';

import styles from './Blog.module.scss';

import { SEOData } from '@/shared/data';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

// interface BlogProps {
//   SEOData: SEOContent;
// }
export const Blog: FC = () => {
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
