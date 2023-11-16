import styles from './SubcategoryAside.module.scss';
import Image from 'next/image';
import { backArrow } from '../../../../shared/image';

import { optionsData } from '../../../../shared/data';
import { SubcategoriesList } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/SubcategoriesList/SubcategoriesList';
import { CustomSelect } from '@/shared/ui/CustomSelect/CustomSelect';
import { OptionsComponent } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/OptionsComponent/OptionsComponent';
import { RentPriceFilter } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/RentPriceFilter/RentPriceFilter';
import { SellerTypeFilter } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/SellerTypeFilter/SellerTypeFilter';
import { ProductQualityFilter } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/ProductQualityFilter/ProductQualityFilter';
import { FC } from 'react';
import { Product, Variety } from '@/interfaces/categories';
import { customDateFormSelect, customLabel, customSelect } from '@/shared/styles/selectStyles';
import { SelectHeader } from '@/widgets/SubcategoryContent/components/SubcategoryAside/ui/SubcategoryAsideHeader/SubcategoryAsideHeader';

interface AsideProps {
  title: string;
  varietiesList: Variety[];
  products: Product[];
}
export const SubcategoryAside: FC<AsideProps> = ({ title, varietiesList, products }) => {
  return (
    <aside className={styles.asideWrapper}>
      <div className={styles.title}>
        <Image src={backArrow} alt='back' />
        <h2>{title}</h2>
      </div>
      <SubcategoriesList varietiesList={varietiesList} />
      <hr />
      {products?.length ? (
        <div className={styles.chooseContent}>
          <div>
            <SelectHeader headerName={'Бренд'} />
            <CustomSelect
              formControlStyles={customDateFormSelect}
              selectData={['sss']}
              label='Все бренды'
              selectStyles={customSelect}
              labelStyles={customLabel}
            />
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
