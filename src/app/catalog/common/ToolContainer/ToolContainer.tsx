import styles from './ToolContainer.module.scss';
import { PopularToolItem } from '@/app/catalog/common/ToolItem/ToolItem';
import { FC } from 'react';
import { SubCategoriesData } from '@/interfaces';

interface TollContainer {
  toolsData: SubCategoriesData[];
}
export const ToolContainer: FC<TollContainer> = ({ toolsData }) => {
  return (
    <div className={styles.popularToolsWrapper}>
      {toolsData.map((item) => (
        <PopularToolItem key={item.id} imageUrl={item.imageUrl} title={item.title} />
      ))}
    </div>
  );
};
