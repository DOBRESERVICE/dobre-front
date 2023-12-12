import { BreadCrumbs } from '@/features/BreadCrumbs/BreadCrumbs';
import { getSEOContent } from '@/shared/api/contentApi';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { Blog } from '@/widgets/Blog/Blog';
import { SubcategoryContent } from '@/widgets/SubcategoryContent/SubcategoryContent';
import { SubcategoryToolsContainer } from '@/widgets/SubcategoryToolsContainer/SubcategoryToolsContainer';

import { getCertainVariety, getSubCategory } from '../../../../shared/api/categoriesApi';

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  const variety = searchParams?.variety ?? 'all';
  const { data: certainSubCategoryData } = await getSubCategory(params.id);
  const { data: certainVarietyData } = await getCertainVariety(variety);
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
      <Wrapper>
        <BreadCrumbs breadCrumbsData={breadCrumbsData} />
      </Wrapper>
      <SubcategoryToolsContainer
        varietyProducts={certainSubCategoryData.varieties}
        subCategoryTitle={certainSubCategoryData.name_sub}
        subCategoryTrName={certainSubCategoryData.tr_name_sub}
      />
      <SubcategoryContent products={certainVarietyData.products} subCategoryData={certainSubCategoryData} />
      <Blog SEOData={SEOData} />
    </>
  );
}
