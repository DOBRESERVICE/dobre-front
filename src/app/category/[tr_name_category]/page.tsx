import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { Construction } from '@/components/Constuction/Construction';
import { Brands } from '@/components/Brands/Brands';
import { PopularTools } from '@/components/PopularTools/PopularTools';
import { NewProducts } from '@/components/NewProducts/NewProducts';
import { CatalogBlocks } from '@/components/CatalogBlocks/CatalogBlocks';
import { Blog } from '@/components/Blog/Blog';
import { getCertainCategory } from '@/api/categoriesApi';

export default async function CatalogPage({ params }: { params: { tr_name_category: string } }) {
  const { data: certainCategoryData } = await getCertainCategory(params.tr_name_category);
  return (
    <>
      <BreadCrumbs />
      <Construction title={certainCategoryData.name_category} subCategories={certainCategoryData.subcategories} />
      <Brands />
      <PopularTools />
      <NewProducts newProducts={certainCategoryData.products} />
      <CatalogBlocks subcategories={certainCategoryData.subcategories} />
      <Blog />
    </>
  );
}
