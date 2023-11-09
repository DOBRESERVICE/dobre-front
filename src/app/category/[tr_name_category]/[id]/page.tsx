import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { Blog } from '@/components/Blog/Blog';
import { CategoryTools } from '@/app/category/[tr_name_category]/[id]/common/CategoryTools/CategoryTools';
import { CategoryContent } from '@/app/category/[tr_name_category]/[id]/common/CategoryContent/CategoryContent';
import { getCertainVariety, getSubCategory } from '@/api/categoriesApi';
import { Wrapper } from '@/components/Wrapper/Wrapper';
export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const variety = searchParams?.variety;
  const { data: certainSubCategoryData } = await getSubCategory(params.id);
  const { data: certainVarietyData } = await getCertainVariety(variety);
  console.log(certainVarietyData, 'category');
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
      <CategoryTools
        varietyProducts={certainSubCategoryData.varieties}
        subCategoryTitle={certainSubCategoryData.name_sub}
        subCategoryTrName={certainSubCategoryData.tr_name_sub}
      />
      <CategoryContent products={certainVarietyData.products} subCategoryData={certainSubCategoryData} />
      <Blog
        header='Профессиональный ремонт и стройка: ваш путь к идеальному дому'
        text='Добро пожаловать в мир ремонта и стройки, где креативность встречается с качеством, а ваш дом становится идеальным местом для жизни! Мы - ваш надежный партнер в создании и обновлении вашего жилья. Независимо от того, нужен ли вам косметический ремонт или полноценное строительство, у нас есть решения, которые сделают вашу мечту о идеальном доме реальностью.'
      />
    </>
  );
}
