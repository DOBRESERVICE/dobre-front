import Image from 'next/image';

import styles from './InsuranceCard.module.scss';

import { imkliva, secureProduct } from '../../../../../../../../../shared/image';

export const InsuranceCard = () => {
  return (
    <div className={styles.insuranceCard}>
      <div className={styles.content}>
        <Image src={secureProduct} alt='secure' />
        <div className={styles.textContent}>
          <p>Данный товар застрахован</p>
          <p>В случае повреждения товара, страховая компания возместит ущерб арендодателю.</p>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={imkliva} alt='imkliva' />
      </div>
    </div>
  );
};
