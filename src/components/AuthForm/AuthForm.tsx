'use client';
import { LogInComponent } from '@/components/LogIn/LogInComponent';
import { CreateAccountComponent } from '@/components/CreateAccount/CreateAccountComponent';
import { ResetPasswordComponent } from '@/components/ResetPassword/ResetPasswordComponent';
import { useState } from 'react';
import styles from './AuthForm.module.scss';

export const AuthForm = () => {
  const [activeStep, setActiveStep] = useState('login');

  return (
    <div className={styles.wrapper}>
      {activeStep === 'login' && <LogInComponent setActiveStep={setActiveStep} />}
      {activeStep === 'create' && <CreateAccountComponent setActiveStep={setActiveStep} />}
      {activeStep === 'reset' && <ResetPasswordComponent />}
    </div>
  );
};
