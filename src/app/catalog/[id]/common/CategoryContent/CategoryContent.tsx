import styles from './CategoryContent.module.scss';
import { Aside } from '@/app/catalog/[id]/common/Aside/Aside';
import { CategoryCatalog } from '@/app/catalog/[id]/common/CategoryCatalog/CategoryCatalog';
export const CategoryContent = () => {
  return (
    <div className={styles.categoryContent}>
      <Aside />
      <CategoryCatalog />
    </div>
  );
};
