import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { Construction } from '@/components/Constuction/Construction';
import { Brands } from '@/components/Brands/Brands';
import { PopularTools } from '@/components/PopularTools/PopularTools';
import { NewProducts } from '@/components/NewProducts/NewProducts';
import { CatalogBlocks } from '@/components/CatalogBlocks/CatalogBlocks';
import { Blog } from '@/components/Blog/Blog';

export default function CatalogPage() {
  return (
    <>
      <BreadCrumbs />
      <Construction />
      <Brands />
      <PopularTools />
      <NewProducts />
      <CatalogBlocks />
      <Blog />
    </>
  );
}
