import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout';
import { RecoveryForm } from '@/features/forms/RecoveryForm/RecoveryForm';
export default function Recovery() {
  return (
    <AuthLayout>
      <RecoveryForm />
    </AuthLayout>
  );
}
