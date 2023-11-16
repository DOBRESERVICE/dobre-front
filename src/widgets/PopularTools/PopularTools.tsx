import styles from './PopularTools.module.scss';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { popularToolsData } from '@/shared/data';
import { ToolContainer } from '@/widgets/ToolContainer/ToolContainer';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
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
