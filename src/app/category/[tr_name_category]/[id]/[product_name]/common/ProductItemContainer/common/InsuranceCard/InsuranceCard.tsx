import styles from './InsuranceCard.module.scss';
import Image from 'next/image';
import { imkliva, secureIcon, secureProduct } from '@/assets/image';
export const InsuranceCard = () => {
  return (
    <div className={styles.insuranceCard}>
      <div className={styles.content}>
        <div className={styles.secureImageWrapper}>
          <Image src={secureProduct} alt='secure' />
        </div>
        <div>
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
