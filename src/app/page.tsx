import dynamic from 'next/dynamic';

import { HomeLayout } from '@/layouts/homeLayout/HomeLayout';
import { getNewProducts, getRecommendedProducts } from '@/shared/api/categoriesApi';
import { AboutUs } from '@/widgets/AboutUs/AboutUs';
import { FAQ } from '@/widgets/FAQ/FAQ';
import { HowWeWork } from '@/widgets/HowWeWork/HowWeWork';
import { NewProducts } from '@/widgets/NewProducts/NewProducts';
import { PopularProducts } from '@/widgets/PopularProducts/PopularProducts';
import { RentIntroduction } from '@/widgets/RentIntroduction/RentIntroduction';
const DynamicAuthModals = dynamic(() => import('@/features/AuthModals/AuthModals'));
const DynamicSearchBlock = dynamic(() => import('@/widgets/SearchBlock/SearchBlock'));
const DynamicGeneralTestimonials = dynamic(() => import('@/widgets/GeneralTestimonials/GeneralTestimonials'));
const DynamicRecommendations = dynamic(() => import('@/widgets/Recommendations/Recommendations'));
export default async function HomePage() {
  const { data: newProductsData } = await getNewProducts();
  const { data: recommendedProductsData } = await getRecommendedProducts();

  return (
    <HomeLayout>
      <DynamicAuthModals />
      <DynamicSearchBlock />
      <NewProducts newProducts={newProductsData} />
      <PopularProducts />
      <HowWeWork />
      <RentIntroduction />
      <DynamicRecommendations recommendedProducts={recommendedProductsData} />
      <AboutUs />
      <DynamicGeneralTestimonials />
      <FAQ />
    </HomeLayout>
  );
}
