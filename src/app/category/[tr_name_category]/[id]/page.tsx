import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { Blog } from '@/widgets/Blog/Blog';
import { SubcategoryContent } from '@/widgets/SubcategoryContent/SubcategoryContent';
import { SubcategoryToolsContainer } from '@/widgets/SubcategoryToolsContainer/SubcategoryToolsContainer';
import { BreadCrumbs } from '@/features/BreadCrumbs/BreadCrumbs';
import { certainVarietyData, subcategoryObject } from '@/shared/data';

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string };
}) {
  const variety = searchParams?.variety;
  const activeVarietyName = subcategoryObject.varieties.find((v) => v.tr_name_variety === variety)?.name_variety;
  const breadCrumbsData = [
    {
      id: 1,
      link: '/',
      linkName: 'Главная',
    },
    {
      id: 2,
      link: `/category/${certainVarietyData.data} `,
      linkName: 'remont-i-strojka ',
    },
    {
      id: 3,
      link: `/category/'remont-i-strojka'/${subcategoryObject.tr_name_sub}`,
      linkName: subcategoryObject.name_sub,
    },
    {
      id: 4,
      link: `/category/'remont-i-strojka'/${subcategoryObject.tr_name_sub}?variety=${variety}`,
      linkName: activeVarietyName,
    },
  ];
  return (
    <>
      <Wrapper>
        <BreadCrumbs breadCrumbsData={breadCrumbsData} />
      </Wrapper>
      <SubcategoryToolsContainer
        varietyProducts={subcategoryObject.varieties}
        subCategoryTitle={subcategoryObject.name_sub}
        subCategoryTrName={subcategoryObject.tr_name_sub}
      />
      <SubcategoryContent
        searchParams={searchParams}
        pagination={certainVarietyData.pagination}
        products={certainVarietyData.data}
        subCategoryData={subcategoryObject}
      />
      <Blog />
    </>
  );
}
