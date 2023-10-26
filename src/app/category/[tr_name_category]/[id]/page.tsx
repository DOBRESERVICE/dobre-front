import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { Blog } from '@/components/Blog/Blog';
import { CategoryTools } from '@/app/category/[tr_name_category]/[id]/common/CategoryTools/CategoryTools';
import { CategoryContent } from '@/app/category/[tr_name_category]/[id]/common/CategoryContent/CategoryContent';
import { getCertainVariety, getSubCategory } from '@/api/categoriesApi';

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string };
}) {
  const variety = searchParams.variety;
  const { data: certainSubCategoryData } = await getSubCategory(params.id);
  const { data: certainVarietyData } = await getCertainVariety(variety);
  const products = variety === 'all' ? certainSubCategoryData.products : certainVarietyData.products;
  return (
    <>
      <BreadCrumbs />
      <CategoryTools
        varietyProducts={certainSubCategoryData.varieties}
        subCategoryTitle={certainSubCategoryData.name_sub}
      />
      <CategoryContent products={products} subCategoryData={certainSubCategoryData} />
      <Blog />
    </>
  );
}
