import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { Loader } from '@/features/Loader/Loader';
import { HomeLayout } from '@/layouts/homeLayout/HomeLayout';
import { mainPageProducts } from '@/shared/data';
import { AboutUs } from '@/widgets/AboutUs/AboutUs';
import { FAQ } from '@/widgets/FAQ/FAQ';
import GeneralTestimonials from '@/widgets/GeneralTestimonials/GeneralTestimonials';
import { HowWeWork } from '@/widgets/HowWeWork/HowWeWork';
import { NewProducts } from '@/widgets/NewProducts/NewProducts';
import { PopularProducts } from '@/widgets/PopularProducts/PopularProducts';
import Recommendations from '@/widgets/Recommendations/Recommendations';
import { RentIntroduction } from '@/widgets/RentIntroduction/RentIntroduction';
import SearchBlock from '@/widgets/SearchBlock/SearchBlock';

const DynamicAuthModals = dynamic(() => import('@/features/AuthModals/AuthModals'));
export default async function HomePage() {
  // const { data: newProductsData } = await getNewProducts();

  return (
    <HomeLayout>
      <DynamicAuthModals />
      <SearchBlock />
      <Suspense fallback={<Loader />}>
        <NewProducts newProducts={mainPageProducts} />
      </Suspense>
      <PopularProducts />
      <HowWeWork />
      <RentIntroduction />
      <Recommendations />
      <AboutUs />
      <GeneralTestimonials />
      <FAQ />
    </HomeLayout>
  );
}
