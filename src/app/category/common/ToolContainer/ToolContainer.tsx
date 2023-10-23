import styles from './ToolContainer.module.scss';
import { FC } from 'react';
import { SubCategoriesData } from '@/interfaces';
import { PopularToolItem } from '@/app/category/common/ToolItem/ToolItem';
import { Variety } from '@/interfaces/categories';

interface TollContainer {
  toolsData: Variety[] | any[];
}
export const ToolContainer: FC<TollContainer> = ({ toolsData }) => {
  return (
    <div className={styles.popularToolsWrapper}>
      {toolsData.map((item) => (
        <PopularToolItem key={item.id_variety} imageUrl={item.image_variety} title={item.name_variety} />
      ))}
    </div>
  );
};
