import { BreadCrumbs } from '@/features/BreadCrumbs/BreadCrumbs';
import { Blog } from '@/widgets/Blog/Blog';
import { SubcategoryToolsContainer } from '@/widgets/SubcategoryToolsContainer/SubcategoryToolsContainer';
import { SubcategoryContent } from '@/widgets/SubcategoryContent/SubcategoryContent';
import { getCertainCategory, getCertainVariety, getSubCategory } from '../../../../shared/api/categoriesApi';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  const variety = searchParams?.variety ?? 'ss';
  const { data: certainSubCategoryData } = await getSubCategory(params.id);
  const { data: certainVarietyData } = await getCertainVariety(variety);
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
      <Blog
        header='Профессиональный ремонт и стройка: ваш путь к идеальному дому'
        text='Добро пожаловать в мир ремонта и стройки, где креативность встречается с качеством, а ваш дом становится идеальным местом для жизни! Мы - ваш надежный партнер в создании и обновлении вашего жилья. Независимо от того, нужен ли вам косметический ремонт или полноценное строительство, у нас есть решения, которые сделают вашу мечту о идеальном доме реальностью.'
      />
    </>
  );
}
