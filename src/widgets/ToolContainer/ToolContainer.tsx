import { FC } from 'react';

import styles from './ToolContainer.module.scss';

import { Varietyy } from '@/interfaces/categories';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

import { ToolItem } from './ui/ToolItem/ToolItem';

interface TollContainer {
  toolsData: Varietyy[] | any[];
  subCategoryTrName: string;
}
export const ToolContainer: FC<TollContainer> = ({ toolsData, subCategoryTrName }) => {
  return (
    <Wrapper>
      <div className={styles.popularToolsWrapper}>
        {toolsData.map((item) => (
          <ToolItem
            varietyTrName={item.publicationAlias}
            subCategoryTrName={subCategoryTrName}
            key={item.id}
            imageUrl={item.imageId}
            title={item.name}
          />
        ))}
      </div>
    </Wrapper>
  );
};
