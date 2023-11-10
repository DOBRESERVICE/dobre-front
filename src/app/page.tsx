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
import { AuthModals } from '@/components/AuthModals/AuthModals';
import { getNewProducts, getRecommendedProducts } from '@/api/categoriesApi';

export default async function HomePage() {
  const { data: newProductsData } = await getNewProducts();
  const { data: recommendedProductsData } = await getRecommendedProducts();
  return (
    <HomeLayout>
      <AuthModals />
      <SearchBlock />
      <NewProducts newProducts={newProductsData} />
      <PopularProducts />
      <HowWeWork />
      <FirstItem />
      <Recommendations recommendedProducts={recommendedProductsData} />
      <AboutUs />
      <Testimonials />
      <FAQ />
    </HomeLayout>
  );
}
