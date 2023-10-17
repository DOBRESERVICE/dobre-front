'use client';
import styles from './OptionsComponent.module.scss';
import { FC, useState } from 'react';
import { Option } from '@/app/catalog/[id]/common/Option/Option';
import Image from 'next/image';
import { blueNextArrow } from '@/assets/image';

interface OptionsComponent {
  title: string;
  optionsData: any[];
}

export const OptionsComponent: FC<OptionsComponent> = ({ optionsData, title }) => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? optionsData : optionsData.slice(0, 5);

  return (
    <div className={styles.optionsWrapper}>
      <h2>{title}</h2>
      {itemsToShow.map((item) => (
        <Option key={item.id} optionText={item.optionText} />
      ))}
      {optionsData.length > 5 && !showAll && (
        <div className={styles.content} role='button' onClick={() => setShowAll(true)}>
          <p>Развернуть все</p>
          <Image src={blueNextArrow} alt='next' />
        </div>
      )}
    </div>
  );
};
