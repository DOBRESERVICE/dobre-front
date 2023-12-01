import { FC } from 'react';

import styles from './ToolContainer.module.scss';

import { Variety } from '@/interfaces/categories';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

import { ToolItem } from './ui/ToolItem/ToolItem';

interface TollContainer {
  toolsData: Variety[] | any[];
  subCategoryTrName: string;
}
export const ToolContainer: FC<TollContainer> = ({ toolsData, subCategoryTrName }) => {
  return (
    <Wrapper>
      <div className={styles.popularToolsWrapper}>
        {toolsData.map((item) => (
          <ToolItem
            varietyTrName={item.tr_name_variety}
            subCategoryTrName={subCategoryTrName}
            key={item.id_variety}
            imageUrl={item.image_variety}
            title={item.name_variety}
          />
        ))}
      </div>
    </Wrapper>
  );
};
