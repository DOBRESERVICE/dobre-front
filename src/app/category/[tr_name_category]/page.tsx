import { NoProductsFound } from '@/entities/NoProductsFound/NoProductsFound';
import { BreadCrumbs } from '@/features/BreadCrumbs/BreadCrumbs';
import { getCertainCategory, getNewCategoryProducts, getSubCategory } from '@/shared/api/categoriesApi';
import { getSEOContent } from '@/shared/api/contentApi';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { Blog } from '@/widgets/Blog/Blog';
import { Brands } from '@/widgets/Brands/Brands';
import { CatalogBlocks } from '@/widgets/CatalogBlocks/CatalogBlocks';
import { Construction } from '@/widgets/Construction/Construction';
import { PopularTools } from '@/widgets/PopularTools/PopularTools';
import { NewProducts } from '@/widgets/NewProducts/NewProducts';

export default async function CategoryPage({ params }: { params: { tr_name_category: string } }) {
  const { data: certainCategoryData } = await getCertainCategory(params.tr_name_category);
  const { data: newProductsData } = await getNewCategoryProducts(params.tr_name_category);
  const { data: SEOData } = await getSEOContent('category', params.tr_name_category);
  const fetchSubCategoriesData = async () => {
    return await Promise.all(
      certainCategoryData.subcategories.map(async (subCategory) => {
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
      {certainCategoryData.products.length > 0 && <NewProducts newProducts={newProductsData} />}
      <CatalogBlocks subcategories={subCategoriesData} />
      {isEveryVarietyEmpty && <NoProductsFound />}
      <Blog SEOData={SEOData} />
    </>
  );
}
