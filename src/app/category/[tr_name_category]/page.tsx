import { NoProductsFound } from '@/entities/NoProductsFound/NoProductsFound';
import { BreadCrumbs } from '@/features/BreadCrumbs/BreadCrumbs';
import { getCategory } from '@/shared/api/categoriesApi';
import { certainCategoryData, mainPageProducts, subCategoryData } from '@/shared/data';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { Blog } from '@/widgets/Blog/Blog';
import { CatalogBlocks } from '@/widgets/CatalogBlocks/CatalogBlocks';
import { Construction } from '@/widgets/Construction/Construction';
import { NewProducts } from '@/widgets/NewProducts/NewProducts';
import { PopularTools } from '@/widgets/PopularTools/PopularTools';

export default async function CategoryPage({ params }: { params: { tr_name_category: string } }) {
  const { data: categoryData } = await getCategory(params.tr_name_category);

  console.log(categoryData);
  const breadCrumbsData = [
    {
      id: 1,
      link: '/',
      linkName: 'Главная',
    },
    {
      id: 2,
      link: `/category/${categoryData.publicationAlias}`,
      linkName: certainCategoryData.name_category,
    },
  ];
  const isEveryVarietyEmpty = certainCategoryData.subcategories.every((item) => item.varieties.length === 0);
  return (
    <>
      <Wrapper>
        <BreadCrumbs breadCrumbsData={breadCrumbsData} />
      </Wrapper>
      <Construction
        title={categoryData.name}
        trCategoryName={categoryData.publicationAlias}
        subCategories={categoryData.subCategories}
      />
      <PopularTools />
      {certainCategoryData.products.length > 0 && <NewProducts newProducts={mainPageProducts} />}
      <CatalogBlocks subcategories={subCategoryData} />
      {isEveryVarietyEmpty && <NoProductsFound />}
      <Blog />
    </>
  );
}
