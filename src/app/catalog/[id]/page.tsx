import { BreadCrumbs } from '@/components/BreadCrumbs/BreadCrumbs';
import { CategoryTools } from '@/app/catalog/[id]/common/CategoryTools/CategoryTools';
export default function CategoryPage({ params }: { params: { id: string } }) {
  return (
    <>
      <BreadCrumbs />
      <CategoryTools />
    </>
  );
}
