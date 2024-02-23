import { Suspense } from 'react';

import { RecoveryForm } from '@/features/forms/RecoveryForm/RecoveryForm';
import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout';

export default function Recovery() {
  return (
    <AuthLayout>
      <Suspense>
        <RecoveryForm />
      </Suspense>
    </AuthLayout>
  );
}
