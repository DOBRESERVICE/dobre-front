import { BreadCrumbs } from '@/features/BreadCrumbs/BreadCrumbs';
import { getSubcategory } from '@/shared/api/categoriesApi';
import { certainVarietyData } from '@/shared/data';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { Blog } from '@/widgets/Blog/Blog';
import { SubcategoryContent } from '@/widgets/SubcategoryContent/SubcategoryContent';
import { SubcategoryToolsContainer } from '@/widgets/SubcategoryToolsContainer/SubcategoryToolsContainer';

export default async function SubcategoryPage({
  searchParams,
  params,
}: {
  params: { id: string };
  searchParams: { [key: string]: string };
}) {
  const { data: subcategoryData } = await getSubcategory(params.id);
  const variety = searchParams.variety;
  const activeVarietyName = subcategoryData.varieties.find((v) => v.publicationAlias === variety)?.name;
  const breadCrumbsData = [
    {
      id: 1,
      link: '/',
      linkName: 'Главная',
    },
    {
      id: 2,
      link: `/category/${subcategoryData.categoryPublicationAlias} `,
      linkName: subcategoryData.categoryPublicationAlias,
    },
    {
      id: 3,
      link: `/category/${subcategoryData.categoryPublicationAlias}/${subcategoryData.publicationAlias}`,
      linkName: subcategoryData.name,
    },
    {
      id: 4,
      link: `/category/${subcategoryData.categoryPublicationAlias}/${subcategoryData.publicationAlias}?variety=${variety}`,
      linkName: activeVarietyName,
    },
  ];
  return (
    <>
      <Wrapper>
        <BreadCrumbs breadCrumbsData={breadCrumbsData} />
      </Wrapper>
      <SubcategoryToolsContainer
        varietyProducts={subcategoryData.varieties}
        subCategoryTitle={subcategoryData.name}
        subCategoryTrName={subcategoryData.publicationAlias}
      />
      <SubcategoryContent
        searchParams={searchParams}
        pagination={certainVarietyData.pagination}
        products={certainVarietyData.data}
        subCategoryData={subcategoryData}
      />
      <Blog />
    </>
  );
}
