import styles from './ToolContainer.module.scss';
import { FC } from 'react';
import { ToolItem } from '@/widgets/ToolContainer/ui/ToolItem/ToolItem';
import { Variety } from '@/interfaces/categories';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

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
