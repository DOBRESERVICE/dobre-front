import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { Blog } from '@/components/Blog/Blog';
import { CategoryTools } from '@/app/category/[tr_name_category]/[id]/common/CategoryTools/CategoryTools';
import { CategoryContent } from '@/app/category/[tr_name_category]/[id]/common/CategoryContent/CategoryContent';
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
