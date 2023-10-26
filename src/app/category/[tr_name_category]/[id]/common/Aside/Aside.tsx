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
import { Variety } from '@/interfaces/categories';

interface AsideProps {
  title: string;
  varietiesList: Variety[];
}
export const Aside: FC<AsideProps> = ({ title, varietiesList }) => {
  return (
    <aside className={styles.asideWrapper}>
      <div className={styles.title}>
        <Image src={backArrow} alt='back' />
        <h2>{title}</h2>
      </div>
      <SubCategories varietiesList={varietiesList} />
      <hr />
      <div className={styles.chooseContent}>
        <CustomSelect label='Все бренды' headerName='Бренд' />
        <CustomSelect label='Все организации' headerName='Организация' />
        <OptionsComponent title='Питание' optionsData={optionsData} />
        <RentPrice />
        <SellerType />
        <ProductQuality />
      </div>
    </aside>
  );
};
