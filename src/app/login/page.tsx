import { AuthLayout } from '@/components/authLayout/AuthLayout';
import { AuthForm } from '@/app/login/common/AuthForm/AuthForm';

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  );
}
