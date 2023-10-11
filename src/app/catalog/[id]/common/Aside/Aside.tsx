import styles from './Aside.module.scss';
import { SubCategories } from '@/app/catalog/[id]/common/SubCategories/SubCategories';
import Image from 'next/image';
import { backArrow } from '@/assets/image';
import { CustomSelect } from '@/app/catalog/[id]/common/CustomSelect/CustomSelect';
import { RentPrice } from '@/app/catalog/[id]/common/RentPrice/RentPrice';
import { SellerType } from '@/app/catalog/[id]/common/SellerType/SellerType';
import { ProductQuality } from '@/app/catalog/[id]/common/ProductQuality/ProductQuality';
export const Aside = () => {
  return (
    <aside className={styles.asideWrapper}>
      <div className={styles.title}>
        <Image src={backArrow} alt='back' />
        <h2>Электроинструмены</h2>
      </div>
      <SubCategories />
      <div className={styles.chooseContent}>
        <CustomSelect label='Все бренды' headerName='Бренд' />
        <CustomSelect label='Все организации' headerName='Организация' />
        <RentPrice />
        <SellerType />
        <ProductQuality />
      </div>
    </aside>
  );
};
