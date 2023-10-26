'use client';
import styles from './OptionsComponent.module.scss';
import { FC, useState } from 'react';
import { Option } from '@/app/category/[tr_name_category]/[id]/common/Option/Option';
import Image from 'next/image';
import { blueNextArrow } from '@/assets/image';
import { useShownData } from '@/hooks/useShownData';

interface OptionsComponent {
  title: string;
  optionsData: any[];
}

export const OptionsComponent: FC<OptionsComponent> = ({ optionsData, title }) => {
  const { itemsToShow, handleShowAll, shouldRenderExpandButton } = useShownData(optionsData, 5);
  return (
    <div className={styles.optionsWrapper}>
      <h2>{title}</h2>
      {itemsToShow.map((item) => (
        <Option key={item.id} optionText={item.optionText} />
      ))}
      {shouldRenderExpandButton && (
        <div className={styles.content} role='button' onClick={handleShowAll}>
          <p>Развернуть все</p>
          <Image src={blueNextArrow} alt='next' />
        </div>
      )}
    </div>
  );
};
