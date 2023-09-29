'use client';
import { ModalComponent } from '@/components/ModalComponent';
import { CreateAccountMess } from '@/components/NotificationMessageModal/CreateAccount';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HomeLayout } from '@/components/homeLayout/HomeLayout';
import { SearchBlock } from '@/components/SearchBlock/SearchBlock';
import { NewProducts } from '@/components/NewProducts/NewProducts';

import { FirstItem } from '@/components/FirstItem/FirstItem';
import { HowWeWork } from '@/components/HowWeWork/HowWeWork';

export default function HomePage() {
  const currentUrl = window.location;
  const router = useRouter();
  const [showModal, setIsShowModal] = useState<boolean>();

  useEffect(() => {
    setIsShowModal(!!currentUrl?.search.split('=')[1]);
  }, [currentUrl]);

  return (
    <HomeLayout>
      <ModalComponent
        open={showModal}
        handleClose={() => {
          router.push('/home');
          setIsShowModal(false);
        }}
      >
        <CreateAccountMess />
        {/* <LinkResetMess /> */}
      </ModalComponent>
      <HowWeWork />
    </HomeLayout>
  );
}
