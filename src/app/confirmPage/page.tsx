import { ConfirmContent } from '@/app/confirmPage/common/ConfirmContent/ConfirmContent';
import styles from './ConfirmPage.module.scss';

export default function ConfirmPage() {
  return (
    <div className={styles.confirmPageWrapper}>
      <ConfirmContent />
    </div>
  );
}
