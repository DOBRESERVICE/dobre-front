import styles from './PopularTools.module.scss';

import { popularToolsData } from '@/shared/data';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { ToolContainer } from '@/widgets/ToolContainer/ToolContainer';

export const PopularTools = () => {
  return (
    <Wrapper>
      <section className={styles.popularToolsSectionWrapper}>
        <TopSectionBar barName='Инструменты и оборудование в аренду' hasLinkArrow />
        <ToolContainer subCategoryTrName='saa' toolsData={popularToolsData} />
      </section>
    </Wrapper>
  );
};
