'use client';
import styles from './TabsComponent.module.scss';
import { Tab } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/Tab/Tab';
import { Dispatch, FC, SetStateAction, useState } from 'react';

interface TabsComponentProps {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  countArray: number[];
}
export const TabsComponent: FC<TabsComponentProps> = ({ setActiveTab, activeTab, countArray }) => {
  const tabsData = [
    {
      id: 1,
      tabName: 'Отзывы',
    },
    {
      id: 2,
      tabName: 'Вопрос-ответ',
    },
  ];
  return (
    <div>
      <div className={styles.tabsWrapper}>
        {tabsData.map((tab) => (
          <Tab
            name={tab.tabName}
            isActive={activeTab === tab.id}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            count={countArray[tab.id - 1]}
          />
        ))}
      </div>
    </div>
  );
};
