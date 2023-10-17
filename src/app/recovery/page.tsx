import { AuthLayout } from '@/components/authLayout/AuthLayout';
import styles from './Recovery.module.scss';
import { ResetPasswordHeader } from '@/components/ResetPassword/common/ResetPasswordHeader/ResetPasswordHeader';
import { RecoveryForm } from '@/app/recovery/common/RecoveryForm';
export default function Recovery() {
  return (
    <AuthLayout>
      <div className={styles.recoveryWrapper}>
        <ResetPasswordHeader title='Восстановление пароля' text='Введите новый пароль' />
        <RecoveryForm />
      </div>
    </AuthLayout>
  );
}
