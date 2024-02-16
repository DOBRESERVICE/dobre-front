import { NoProductsFound } from '@/entities/NoProductsFound/NoProductsFound';
import { BreadCrumbs } from '@/features/BreadCrumbs/BreadCrumbs';
import { certainCategoryData, mainPageProducts, subCategoryData } from '@/shared/data';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
import { Blog } from '@/widgets/Blog/Blog';
import { Brands } from '@/widgets/Brands/Brands';
import { CatalogBlocks } from '@/widgets/CatalogBlocks/CatalogBlocks';
import { Construction } from '@/widgets/Construction/Construction';
import { NewProducts } from '@/widgets/NewProducts/NewProducts';
import { PopularTools } from '@/widgets/PopularTools/PopularTools';

export default async function CategoryPage({ params }: { params: { tr_name_category: string } }) {
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
  return (
    <>
      <Wrapper>
        <BreadCrumbs breadCrumbsData={breadCrumbsData} />
      </Wrapper>
      <Construction
        title={certainCategoryData.name_category}
        trCategoryName={certainCategoryData.tr_name_category}
        subCategories={certainCategoryData.subcategories}
      />
      <Brands />
      <PopularTools />
      {certainCategoryData.products.length > 0 && <NewProducts newProducts={mainPageProducts} />}
      <CatalogBlocks subcategories={subCategoryData} />
      {isEveryVarietyEmpty && <NoProductsFound />}
      <Blog />
    </>
  );
}
