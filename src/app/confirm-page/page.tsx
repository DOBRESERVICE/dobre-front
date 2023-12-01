import styles from './ConfirmPage.module.scss';

import { ConfirmContent } from '@/app/confirm-page/common/ConfirmContent/ConfirmContent';

export default function ConfirmPage() {
  return (
    <div className={styles.confirmPageWrapper}>
      <ConfirmContent />
    </div>
  );
}
