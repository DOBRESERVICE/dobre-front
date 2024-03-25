'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, Fragment } from 'react';

import styles from './SubcategoryAside.module.scss';

import { VarietyFeatureType } from '@/enums';
import { FeatureVariety } from '@/interfaces';
import { Product, Varietyy } from '@/interfaces/categories';
import { customDateFormSelect, customLabel, customSelect } from '@/shared/styles/selectStyles';
import { MultiArray } from '@/shared/ui/MultiArray/MultiArray';
import { MultiCheck } from '@/shared/ui/MultiCheck/MultiCheck';
import { MultipleSelect } from '@/shared/ui/MultipleSelect/MultipleSelect';
import { Range } from '@/shared/ui/Range/Range';
import { SubcategoriesList } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/SubcategoriesList/SubcategoriesList';
import { SelectHeader } from '@/widgets/SubcategoryContent/components/SubcategoryAside/ui/SubcategoryAsideHeader/SubcategoryAsideHeader';

import { backArrow } from '../../../../shared/image';

interface AsideProps {
  title: string;
  varietiesList: Varietyy[];
  products: Product[];
  varietyFeatures: any[];
}

export const SubcategoryAside: FC<AsideProps> = ({ varietyFeatures, title, varietiesList, products }) => {
  const router = useRouter();
  const renderFeature = (feature: FeatureVariety) => {
    switch (feature.type_feature) {
      case VarietyFeatureType.MSELECT:
        return (
          <div>
            <SelectHeader headerName={feature.name_feature} />
            <MultipleSelect
              search_tr_name={feature.tr_name_feature}
              label={feature.name_feature}
              selectStyles={customSelect}
              labelStyles={customLabel}
              formControlStyles={customDateFormSelect}
              selectData={feature.values_feature}
            />
          </div>
        );
      case VarietyFeatureType.MARRAY:
        return (
          <div>
            <SelectHeader headerName={feature.name_feature} />
            <MultiArray search_tr_name={feature.tr_name_feature} features={feature.values_feature} />
          </div>
        );
      case VarietyFeatureType.MCHECK:
        return (
          <div>
            <SelectHeader headerName={feature.name_feature} />
            <MultiCheck search_tr_name={feature.tr_name_feature} features={feature.values_feature} />
          </div>
        );
      case VarietyFeatureType.RANGE:
        return (
          <div>
            <SelectHeader headerName={feature.name_feature} />
            <Range search_tr_name={feature.tr_name_feature} features={feature.values_feature} />
          </div>
        );
      default:
        return <></>;
    }
  };
  return (
    <aside className={styles.asideWrapper}>
      <div className={styles.listWrapper}>
        <div className={styles.title}>
          <Image src={backArrow} className={styles.arrowBack} alt='back' role='button' onClick={() => router.back()} />
          <h2>{title}</h2>
        </div>
        <SubcategoriesList varietiesList={varietiesList} />
      </div>
      {products?.length ? (
        <div className={styles.chooseContent}>
          <SelectHeader headerName='Бренд' />
          {varietyFeatures?.map((feature) => <Fragment key={feature.id_feature}>{renderFeature(feature)}</Fragment>)}
        </div>
      ) : (
        ''
      )}
    </aside>
  );
};
