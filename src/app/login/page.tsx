import { AuthLayout } from '@/components/authLayout/AuthLayout';
import { LogInComponent } from '@/components/LogIn/LogInComponent';

export default function LoginPage() {
  return (
    <AuthLayout>
      <LogInComponent />
    </AuthLayout>
  );
}
