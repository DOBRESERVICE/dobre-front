import styles from './PopularTools.module.scss';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { popularToolsData } from '@/data';
import { ToolContainer } from '@/app/category/common/ToolContainer/ToolContainer';
import { Wrapper } from '@/components/Wrapper/Wrapper';
export const PopularTools = () => {
  return (
    <Wrapper>
      <section className={styles.popularToolsSectionWrapper}>
        <TopSectionBar barName='Инструменты и оборудование в аренду' hasLinkArrow />
        <ToolContainer subCategoryTrName={'saa'} toolsData={popularToolsData} />
      </section>
    </Wrapper>
  );
};
