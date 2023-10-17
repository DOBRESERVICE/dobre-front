import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { ToolContainer } from '@/app/catalog/common/ToolContainer/ToolContainer';
import { popularToolsData } from '@/data';
import styles from './CategoryTools.module.scss';
import { Arrow } from '@/app/catalog/[id]/common/Arrow/Arrow';
export const CategoryTools = () => {
  return (
    <section className={styles.categoryToolsWrapper}>
      <TopSectionBar
        barName='Инструменты и оборудование в аренду'
        hasLinkArrow={false}
        announcements='316 объявлений'
      />
      <ToolContainer toolsData={popularToolsData} />
      <div className={styles.seeAllContainer}>
        <hr />
        <div className={styles.content}>
          <p>Развернуть все</p>
          <Arrow />
        </div>
        <hr />
      </div>
    </section>
  );
};
