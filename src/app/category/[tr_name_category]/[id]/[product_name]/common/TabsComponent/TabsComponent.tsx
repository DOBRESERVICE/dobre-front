'use client';

import { Dispatch, FC, SetStateAction } from 'react';

import styles from './TabsComponent.module.scss';

import { Tab } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/Tab/Tab';

interface TabsComponentProps {
  activeTab: boolean;
  setActiveTab: Dispatch<SetStateAction<boolean>>;
  countArray: number[];
}
export const TabsComponent: FC<TabsComponentProps> = ({ setActiveTab, activeTab, countArray }) => {
  const tabsData = [
    {
      id: 1,
      faq: false,
      tabName: 'Отзывы',
    },
    {
      id: 2,
      faq: true,
      tabName: 'Ответы на вопросы ',
    },
  ];
  return (
    <div>
      <div className={styles.tabsWrapper}>
        {tabsData.map((tab) => (
          <Tab
            name={tab.tabName}
            isActive={activeTab === tab.faq}
            key={tab.id}
            onClick={() => setActiveTab(tab.faq)}
            count={countArray[tab.id - 1]}
          />
        ))}
      </div>
    </div>
  );
};
