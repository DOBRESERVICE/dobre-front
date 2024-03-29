'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import styles from './SubcategoriesList.module.scss';

import { Variety } from '@/interfaces/categories';
import { useShownData } from '@/shared/hooks/useShownData';
import { ShowAllButton } from '@/shared/ui/ShowAllButton/ShowAllButton';
import { SubCategoryItem } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/SubcategoryListItem/SubcategoryListItem';

interface SubCategoriesProps {
  varietiesList: Variety[];
}
export const SubcategoriesList: FC<SubCategoriesProps> = ({ varietiesList }) => {
  const params = useSearchParams();
  const pathName = usePathname();
  const newSearchParams = new URLSearchParams(params);
  const router = useRouter();
  const trVariety = newSearchParams.get('variety') ?? 'all';

  const [activeVariety, setActiveVariety] = useState(trVariety);
  const { itemsToShow, shouldRenderExpandButton, showAll, setShowAll } = useShownData(varietiesList, 9);
  const varietyPosition = varietiesList.findIndex((variety) => variety.tr_name_variety === trVariety);

  useEffect(() => {
    if (trVariety === 'all') {
      const searchParams = new URLSearchParams(params);
      searchParams.set('variety', 'all');
      const search = searchParams.toString();
      const query = search ? `?${search}` : '';
      router.push(`${pathName}${query}`, { scroll: false });
    }
  }, [params, router, trVariety, pathName]);

  useEffect(() => {
    varietyPosition > 8 ? setShowAll(true) : setShowAll(false);
  }, [setShowAll, varietyPosition]);
  return (
    <div className={styles.subCategoriesContainer}>
      <ul className={styles.subCategoriesList}>
        <SubCategoryItem
          varietyName='Все'
          isActive={activeVariety === 'all'}
          setActiveVariety={() => setActiveVariety('all')}
          varietyTrName='all'
        />
        {itemsToShow.map((item) => (
          <SubCategoryItem
            varietyName={item.name_variety}
            varietyTrName={item.tr_name_variety}
            key={item.id_variety}
            isActive={trVariety === item.tr_name_variety}
            setActiveVariety={() => setActiveVariety(item.tr_name_variety)}
          />
        ))}
      </ul>
      {shouldRenderExpandButton && <ShowAllButton showAll={showAll} setShowAll={() => setShowAll(!showAll)} />}
    </div>
  );
};
