import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout';
import { ResetPasswordForm } from '@/features/forms/ResetPasswordForm/ResetPasswordForm';

export default function LoginPage() {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
}
