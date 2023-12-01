'use client';
import Image from 'next/image';
import { FC } from 'react';

import styles from './SubcategoryAside.module.scss';

import { Product, Variety } from '@/interfaces/categories';
import { customDateFormSelect, customLabel, customSelect } from '@/shared/styles/selectStyles';
import { CustomSelect } from '@/shared/ui/CustomSelect/CustomSelect';
import { OptionsComponent } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/OptionsComponent/OptionsComponent';
import { ProductQualityFilter } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/ProductQualityFilter/ProductQualityFilter';
import { RentPriceFilter } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/RentPriceFilter/RentPriceFilter';
import { SellerTypeFilter } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/SellerTypeFilter/SellerTypeFilter';
import { SubcategoriesList } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/SubcategoriesList/SubcategoriesList';
import { SelectHeader } from '@/widgets/SubcategoryContent/components/SubcategoryAside/ui/SubcategoryAsideHeader/SubcategoryAsideHeader';

import { optionsData } from '../../../../shared/data';
import { backArrow } from '../../../../shared/image';
import { useRouter } from 'next/navigation';

interface AsideProps {
  title: string;
  varietiesList: Variety[];
  products: Product[];
}
export const SubcategoryAside: FC<AsideProps> = ({ title, varietiesList, products }) => {
  const router = useRouter();
  return (
    <aside className={styles.asideWrapper}>
      <div className={styles.title}>
        <Image src={backArrow} className={styles.arrowBack} alt='back' role='button' onClick={() => router.back()} />
        <h2>{title}</h2>
      </div>
      <SubcategoriesList varietiesList={varietiesList} />
      <hr />
      {products?.length ? (
        <div className={styles.chooseContent}>
          <div>
            <SelectHeader headerName='Бренд' />
          </div>
          <div>
            <SelectHeader headerName='Организация' />
            <CustomSelect
              label='Все организации'
              selectData={['sss']}
              formControlStyles={customDateFormSelect}
              selectStyles={customSelect}
              labelStyles={customLabel}
            />
          </div>
          <OptionsComponent title='Питание' optionsData={optionsData} />
          <RentPriceFilter />
          <SellerTypeFilter />
          <ProductQualityFilter />
        </div>
      ) : (
        ''
      )}
    </aside>
  );
};
