'use client';

import Image from 'next/image';
import { FC } from 'react';

import styles from './OptionsComponent.module.scss';

import { useShownData } from '@/shared/hooks/useShownData';
import { Option } from '@/widgets/SubcategoryContent/components/SubcategoryAside/components/Option/Option';

import { blueNextArrow } from '../../../../../../shared/image';

interface OptionsComponent {
  title: string;
  optionsData: any[];
}

export const OptionsComponent: FC<OptionsComponent> = ({ optionsData, title }) => {
  const { itemsToShow, shouldRenderExpandButton, showAll, setShowAll } = useShownData(optionsData, 5);
  return (
    <div className={styles.optionsWrapper}>
      <h2>{title}</h2>
      {itemsToShow.map((item) => (
        <Option key={item.id} optionText={item.optionText} />
      ))}
      {shouldRenderExpandButton && (
        <div className={styles.content} role='button' onClick={() => setShowAll(!showAll)}>
          <p>{!showAll ? 'Развернуть все' : 'Свернуть все'}</p>
          <Image src={blueNextArrow} alt='next' />
        </div>
      )}
    </div>
  );
};
