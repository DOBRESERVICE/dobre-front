import styles from './Aside.module.scss';
import Image from 'next/image';
import { backArrow } from '@/assets/image';

import { optionsData } from '@/data';
import { SubCategories } from '@/app/category/[tr_name_category]/[id]/common/SubCategories/SubCategories';
import { CustomSelect } from '@/app/category/[tr_name_category]/[id]/common/CustomSelect/CustomSelect';
import { OptionsComponent } from '@/app/category/[tr_name_category]/[id]/common/OptionsComponent/OptionsComponent';
import { RentPrice } from '@/app/category/[tr_name_category]/[id]/common/RentPrice/RentPrice';
import { SellerType } from '@/app/category/[tr_name_category]/[id]/common/SellerType/SellerType';
import { ProductQuality } from '@/app/category/[tr_name_category]/[id]/common/ProductQuality/ProductQuality';
import { FC } from 'react';
import { Product, Variety } from '@/interfaces/categories';
import { customDateFormSelect, customLabel, customSelect } from '@/styles/selectStyles';
import { SelectHeader } from '@/app/category/[tr_name_category]/[id]/common/SelectHeader/SelectHeader';

interface AsideProps {
  title: string;
  varietiesList: Variety[];
  products: Product[];
}
export const Aside: FC<AsideProps> = ({ title, varietiesList, products }) => {
  return (
    <aside className={styles.asideWrapper}>
      <div className={styles.title}>
        <Image src={backArrow} alt='back' />
        <h2>{title}</h2>
      </div>
      <SubCategories varietiesList={varietiesList} />
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
          <RentPrice />
          <SellerType />
          <ProductQuality />
        </div>
      ) : (
        ''
      )}
    </aside>
  );
};
