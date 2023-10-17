import { AuthLayout } from '@/components/authLayout/AuthLayout';
import { CreateAccountComponent } from '@/components/CreateAccount/CreateAccountComponent';

export default function CreatePage() {
  return (
    <AuthLayout>
      <CreateAccountComponent />
    </AuthLayout>
  );
}
