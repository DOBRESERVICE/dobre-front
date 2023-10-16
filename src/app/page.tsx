'use client';
import { ModalComponent } from '@/components/ModalComponent';
import { CreateAccountMess } from '@/components/NotificationMessageModal/CreateAccount';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HomeLayout } from '@/components/homeLayout/HomeLayout';
import { SearchBlock } from '@/components/SearchBlock/SearchBlock';
import { AboutUs } from '@/components/AboutUs/AboutUs';
import { NewProducts } from '@/components/NewProducts/NewProducts';
import { FirstItem } from '@/components/FirstItem/FirstItem';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { HowWeWork } from '@/components/HowWeWork/HowWeWork';
import { PopularProducts } from '@/components/PopularProducts/PopularProducts';
import { FAQ } from '@/components/FAQ/FAQ';
import { Recommendations } from '@/components/Recommendations/Recommendations';
import { ResetModal } from '@/components/ResetModal/ResetModal';

export default function HomePage() {
  return (
    <HomeLayout>
      <ModalComponent
        open={showModal}
        handleClose={() => {
          router.push('/');
          setIsShowModal(false);
        }}
      >
        <CreateAccountMess />
      </ModalComponent>
      <ResetModal />
      <SearchBlock />
      <NewProducts />
      <PopularProducts />
      <HowWeWork />
      <FirstItem />
      <Recommendations />
      <AboutUs />
      <Testimonials />
      <FAQ />
    </HomeLayout>
  );
}
