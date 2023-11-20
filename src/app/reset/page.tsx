import { ResetPasswordForm } from '@/features/forms/ResetPasswordForm/ResetPasswordForm';
import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout';

export default function LoginPage() {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
}
