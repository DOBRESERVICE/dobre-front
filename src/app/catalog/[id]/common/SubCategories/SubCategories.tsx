import styles from './SubCategories.module.scss';
import Image from 'next/image';
import { blueNextArrow } from '@/assets/image';
import { SubCategoryItem } from '@/app/catalog/[id]/common/SubCategoryItem/SubCategoryItem';
export const SubCategories = () => {
  return (
    <div className={styles.subCategoriesContainer}>
      <ul className={styles.subCategoriesList}>
        <SubCategoryItem subCategoryName='Все' />
        <SubCategoryItem subCategoryName='Болгарки УШМ' />
        <SubCategoryItem subCategoryName='Болгарки УШМ' />
        <SubCategoryItem subCategoryName='Болгарки УШМ' />
        <SubCategoryItem subCategoryName='Болгарки УШМ' />
        <SubCategoryItem subCategoryName='Болгарки УШМ' />
        <SubCategoryItem subCategoryName='Болгарки УШМ' />
        <SubCategoryItem subCategoryName='Болгарки УШМ' />
        <SubCategoryItem subCategoryName='Болгарки УШМ' />
      </ul>
      <div className={styles.seeAll}>
        <p>Развернуть все</p>
        <Image src={blueNextArrow} alt='next' />
      </div>
    </div>
  );
};
