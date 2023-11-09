import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { Construction } from '@/components/Constuction/Construction';
import { Brands } from '@/components/Brands/Brands';
import { PopularTools } from '@/components/PopularTools/PopularTools';
import { NewProducts } from '@/components/NewProducts/NewProducts';
import { CatalogBlocks } from '@/components/CatalogBlocks/CatalogBlocks';
import { Blog } from '@/components/Blog/Blog';
import { getCertainCategory } from '@/api/categoriesApi';
import { Wrapper } from '@/components/Wrapper/Wrapper';

export default async function CatalogPage({ params }: { params: { tr_name_category: string } }) {
  const { data: certainCategoryData } = await getCertainCategory(params.tr_name_category);
  const breadCrumbsData = [
    {
      id: 1,
      link: '/',
      linkName: 'Главная',
    },
    {
      id: 2,
      link: `/category/${certainCategoryData.tr_name_category}`,
      linkName: certainCategoryData.name_category,
    },
  ];
  return (
    <>
      <Wrapper>
        <BreadCrumbs breadCrumbsData={breadCrumbsData} />
      </Wrapper>
      <Construction title={certainCategoryData.name_category} subCategories={certainCategoryData.subcategories} />
      <Brands />
      <PopularTools />
      <NewProducts newProducts={certainCategoryData.products} />
      <CatalogBlocks subcategories={certainCategoryData.subcategories} />
      <Blog
        text='Добро пожаловать в мир ремонта и стройки, где креативность встречается с качеством, а ваш дом становится идеальным местом для жизни! Мы - ваш надежный партнер в создании и обновлении вашего жилья. Независимо от того, нужен ли вам косметический ремонт или полноценное строительство, у нас есть решения, которые сделают вашу мечту о идеальном доме реальностью.'
        header={'Профессиональный ремонт и стройка: ваш путь к идеальному дому'}
      />
    </>
  );
}
