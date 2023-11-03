'use client';
import styles from './TabsComponent.module.scss';
import { Tab } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/Tab/Tab';
import { useState } from 'react';
export const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabsData = [
    {
      id: 1,
      tabName: 'Описание',
    },
    {
      id: 2,
      tabName: 'Отзывы',
    },
    {
      id: 3,
      tabName: 'Вопрос-ответ',
    },
  ];
  return (
    <div>
      <div className={styles.tabsWrapper}>
        {tabsData.map((tab) => (
          <Tab name={tab.tabName} isActive={activeTab === tab.id} key={tab.id} onClick={() => setActiveTab(tab.id)} />
        ))}
      </div>
    </div>
  );
};
