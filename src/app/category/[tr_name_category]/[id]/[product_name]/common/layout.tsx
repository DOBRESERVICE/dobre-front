import styles from '../../../CatalogLayout.module.scss';

import { Header } from '@/widgets/Header/Header';

export default function ProductPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div className={styles.catalogWrapper}>{children}</div>
      </main>
    </>
  );
}
