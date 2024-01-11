import { getSEOContent } from '@/shared/api/contentApi';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { Blog } from '@/widgets/Blog/Blog';
import { SubcategoryContent } from '@/widgets/SubcategoryContent/SubcategoryContent';
import { SubcategoryToolsContainer } from '@/widgets/SubcategoryToolsContainer/SubcategoryToolsContainer';

import { getFilteredSubcategory, getFilteredVariety, getSubCategory } from '../../../../shared/api/categoriesApi';

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string };
}) {
  const variety = searchParams?.variety;
  const { data: certainSubCategoryData } = await getSubCategory(params.id);
  const { data: certainVarietyData } =
    variety !== 'all'
      ? await getFilteredVariety(variety, searchParams)
      : await getFilteredSubcategory(params.id, searchParams);
  const { data: SEOData } = await getSEOContent('subcategory', params.id);
  const breadCrumbsData = [
    {
      id: 1,
      link: '/',
      linkName: 'Главная',
    },
    {
      id: 2,
      link: `/category/remont-i-strojka `,
      linkName: 'remont-i-strojka ',
    },
    {
      id: 3,
      link: `/category/'remont-i-strojka'/${certainSubCategoryData.tr_name_sub}`,
      linkName: certainSubCategoryData.name_sub,
    },
    {
      id: 4,
      link: `/category/'remont-i-strojka '/${certainSubCategoryData.tr_name_sub}`,
      linkName: variety,
    },
  ];
  return (
    <>
      <Wrapper>{/*<BreadCrumbs breadCrumbsData={breadCrumbsData} />*/}</Wrapper>
      <SubcategoryToolsContainer
        varietyProducts={certainSubCategoryData.varieties}
        subCategoryTitle={certainSubCategoryData.name_sub}
        subCategoryTrName={certainSubCategoryData.tr_name_sub}
      />
      <SubcategoryContent
        pagination={certainVarietyData.pagination}
        products={certainVarietyData.data}
        subCategoryData={certainSubCategoryData}
      />
      <Blog SEOData={SEOData} />
    </>
  );
}
