import styles from './CategoryContent.module.scss';
import { CategoryCatalog } from '@/app/category/[tr_name_category]/[id]/common/CategoryCatalog/CategoryCatalog';
import { Aside } from '@/app/category/[tr_name_category]/[id]/common/Aside/Aside';
export const CategoryContent = () => {
  return (
    <div className={styles.categoryContent}>
      <Aside />
      <CategoryCatalog />
    </div>
  );
};
