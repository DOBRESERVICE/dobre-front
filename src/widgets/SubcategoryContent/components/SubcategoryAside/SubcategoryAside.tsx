'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import styles from './SubcategoryAside.module.scss';

import { VarietyFeatureType } from '@/enums';
import { FeatureVariety } from '@/interfaces';
import { Product, Variety } from '@/interfaces/categories';
import { customDateFormSelect, customLabel, customSelect } from '@/shared/styles/selectStyles';
import { BoolCheck } from '@/shared/ui/BoolCheck/BoolCheck';
import { MultiArray } from '@/shared/ui/MultiArray/MultiArray';
import { MultiCheck } from '@/shared/ui/MultiCheck/MultiCheck';
import { MultipleSelect } from '@/shared/ui/MultipleSelect/MultipleSelect';
import { Range } from '@/shared/ui/Range/Range';
import { SubcategoriesList } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/SubcategoriesList/SubcategoriesList';
import { SelectHeader } from '@/widgets/SubcategoryContent/components/SubcategoryAside/ui/SubcategoryAsideHeader/SubcategoryAsideHeader';

import { backArrow } from '../../../../shared/image';

interface AsideProps {
  title: string;
  varietiesList: Variety[];
  products: Product[];
  varietyFeatures: any[];
}

export const SubcategoryAside: FC<AsideProps> = ({ varietyFeatures, title, varietiesList, products }) => {
  const router = useRouter();
  const renderFeature = (feature: FeatureVariety) => {
    switch (feature.type_feature) {
      case VarietyFeatureType.MSELECT:
        return (
          <>
            <SelectHeader headerName={feature.name_feature} />
            <MultipleSelect
              search_tr_name={feature.tr_name_feature}
              label={feature.name_feature}
              selectStyles={customSelect}
              labelStyles={customLabel}
              formControlStyles={customDateFormSelect}
              selectData={feature.values_feature}
            />
          </>
        );
      case VarietyFeatureType.MARRAY:
        return (
          <>
            <SelectHeader headerName={feature.name_feature} />
            <MultiArray search_tr_name={feature.tr_name_feature} features={feature.values_feature} />
          </>
        );
      case VarietyFeatureType.MCHECK:
        return (
          <>
            <SelectHeader headerName={feature.name_feature} />
            <MultiCheck search_tr_name={feature.tr_name_feature} features={feature.values_feature} />
          </>
        );
      case VarietyFeatureType.BOOL:
        return <BoolCheck headerName={feature.name_feature} search_tr_name={feature.tr_name_feature} />;
      case VarietyFeatureType.RANGE:
        return (
          <>
            <SelectHeader headerName={feature.name_feature} />
            <Range search_tr_name={feature.tr_name_feature} features={feature.values_feature} />
          </>
        );
      default:
        return <></>;
    }
  };
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
          <SelectHeader headerName='Бренд' />
          {varietyFeatures?.map((feature) => <div key={feature.id_feature}>{renderFeature(feature)}</div>)}
        </div>
      ) : (
        ''
      )}
    </aside>
  );
};
