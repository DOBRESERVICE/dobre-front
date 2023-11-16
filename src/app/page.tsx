import { HomeLayout } from '@/layouts/homeLayout/HomeLayout';
import { AboutUs } from '@/widgets/AboutUs/AboutUs';
import { NewProducts } from '@/widgets/NewProducts/NewProducts';
import { RentIntroduction } from '@/widgets/RentIntroduction/RentIntroduction';
import { HowWeWork } from '@/widgets/HowWeWork/HowWeWork';
import { PopularProducts } from '@/widgets/PopularProducts/PopularProducts';
import { FAQ } from '@/widgets/FAQ/FAQ';
// import { Recommendations } from '@/widgets/Recommendations/Recommendations';
import { getNewProducts, getRecommendedProducts } from '@/shared/api/categoriesApi';
import dynamic from 'next/dynamic';

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
