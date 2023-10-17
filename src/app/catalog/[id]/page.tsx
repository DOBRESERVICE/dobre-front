import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { CategoryTools } from '@/app/catalog/[id]/common/CategoryTools/CategoryTools';
import { Aside } from '@/app/catalog/[id]/common/Aside/Aside';
import { CategoryContent } from '@/app/catalog/[id]/common/CategoryContent/CategoryContent';
import { Blog } from '@/components/Blog/Blog';
export default function CategoryPage({ params }: { params: { id: string } }) {
  return (
    <>
      <BreadCrumbs />
      <CategoryTools />
      <CategoryContent />
      <Blog />
    </>
  );
}
