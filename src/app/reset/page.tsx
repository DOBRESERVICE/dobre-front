import { AuthLayout } from '@/components/authLayout/AuthLayout';
import { ResetPasswordComponent } from '@/components/ResetPassword/ResetPasswordComponent';

export default function LoginPage() {
  return (
    <AuthLayout>
      <ResetPasswordComponent />
    </AuthLayout>
  );
}
