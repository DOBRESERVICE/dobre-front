'use client';
import { LogInComponent } from '@/components/LogIn/LogInComponent';
import { CreateAccountComponent } from '@/components/CreateAccount/CreateAccountComponent';
import { ResetPasswordComponent } from '@/components/ResetPassword/ResetPasswordComponent';
import styles from './AuthForm.module.scss';
import { AuthStep, useAuthData } from '@/context/authContext';

export const AuthForm = () => {
  const { activeStep } = useAuthData();
  return (
    <div className={styles.wrapper}>
      {activeStep === AuthStep.LOGIN && <LogInComponent />}
      {activeStep === AuthStep.CREATE && <CreateAccountComponent />}
      {activeStep === AuthStep.RESET && <ResetPasswordComponent />}
    </div>
  );
};
