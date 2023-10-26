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
import { popularProductsData, productsData } from '@/data';

export default function HomePage() {
  return (
    <HomeLayout>
      <AuthModals />
      <SearchBlock />
      <NewProducts newProducts={productsData} />
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
