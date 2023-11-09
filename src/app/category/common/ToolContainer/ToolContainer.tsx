'use client';
import styles from './ToolContainer.module.scss';
import { FC } from 'react';
import { PopularToolItem } from '@/app/category/common/ToolItem/ToolItem';
import { Variety } from '@/interfaces/categories';
import { Wrapper } from '@/components/Wrapper/Wrapper';

interface TollContainer {
  toolsData: Variety[] | any[];
  subCategoryTrName: string;
}
export const ToolContainer: FC<TollContainer> = ({ toolsData, subCategoryTrName }) => {
  return (
    <Wrapper>
      <div className={styles.popularToolsWrapper}>
        {toolsData.map((item) => (
          <PopularToolItem
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
