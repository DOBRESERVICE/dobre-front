import { NoProductsFound } from '@/entities/NoProductsFound/NoProductsFound';
import { BreadCrumbs } from '@/features/BreadCrumbs/BreadCrumbs';
import { getCertainCategory, getSubCategory } from '@/shared/api/categoriesApi';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { Blog } from '@/widgets/Blog/Blog';
import { Brands } from '@/widgets/Brands/Brands';
import { CatalogBlocks } from '@/widgets/CatalogBlocks/CatalogBlocks';
import { Construction } from '@/widgets/Construction/Construction';
import { NewProducts } from '@/widgets/NewProducts/NewProducts';
import { PopularTools } from '@/widgets/PopularTools/PopularTools';

export default async function CategoryPage({ params }: { params: { tr_name_category: string } }) {
  const { data: certainCategoryData } = await getCertainCategory(params.tr_name_category);
  const { subcategories } = certainCategoryData;
  const fetchSubCategoriesData = async () => {
    return await Promise.all(
      subcategories.map(async (subCategory) => {
        const { data } = await getSubCategory(subCategory.tr_name_sub);
        return data;
      })
    );
  };
  const subCategoriesData = await fetchSubCategoriesData();
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
  const isEveryVarietyEmpty = certainCategoryData.subcategories.every((item) => item.varieties.length === 0);
  if (!subCategoriesData) {
    return <NoProductsFound />;
  }
  return (
    <>
      <Wrapper>
        <BreadCrumbs breadCrumbsData={breadCrumbsData} />
      </Wrapper>
      <Construction title={certainCategoryData.name_category} subCategories={certainCategoryData.subcategories} />
      <Brands />
      <PopularTools />
      {certainCategoryData.products.length > 0 && <NewProducts newProducts={certainCategoryData.products} />}
      <CatalogBlocks subcategories={subCategoriesData} />
      {isEveryVarietyEmpty && <NoProductsFound />}
      <Blog
        text='Добро пожаловать в мир ремонта и стройки, где креативность встречается с качеством, а ваш дом становится идеальным местом для жизни! Мы - ваш надежный партнер в создании и обновлении вашего жилья. Независимо от того, нужен ли вам косметический ремонт или полноценное строительство, у нас есть решения, которые сделают вашу мечту о идеальном доме реальностью.'
        header='Профессиональный ремонт и стройка: ваш путь к идеальному дому'
      />
    </>
  );
}
