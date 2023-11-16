import { LoginForm } from '@/features/forms/LoginForm/LoginForm';
import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout';

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
