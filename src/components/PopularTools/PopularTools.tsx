import styles from './PopularTools.module.scss';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { popularToolsData } from '@/data';
import { ToolContainer } from '@/app/catalog/common/ToolContainer/ToolContainer';
export const PopularTools = () => {
  return (
    <section className={styles.popularToolsSectionWrapper}>
      <TopSectionBar barName='Популярные инструменты и оборудование в аренду' hasLinkArrow />
      <ToolContainer toolsData={popularToolsData} />
    </section>
  );
};
