import { CreateAccountForm } from '@/features/forms/CreateAccountForm/CreateAccountForm';
import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout';

export default function CreatePage() {
  return (
    <AuthLayout>
      <CreateAccountForm />
    </AuthLayout>
  );
}
