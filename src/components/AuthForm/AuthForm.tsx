'use client';
import { LogInComponent } from '@/components/LogIn/LogInComponent';
import { CreateAccountComponent } from '@/components/CreateAccount/CreateAccountComponent';
import { ResetPasswordComponent } from '@/components/ResetPassword/ResetPasswordComponent';
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './AuthForm.module.scss';

export const enum AuthStep {
  LOGIN = 'login',
  CREATE = 'create',
  RESET = 'reset',
}

export type AutorizPropsType = {
  setActiveStep: Dispatch<SetStateAction<AuthStep>>;
};
export const AuthForm = () => {
  const [activeStep, setActiveStep] = useState<AuthStep>(AuthStep.LOGIN);

  return (
    <div className={styles.wrapper}>
      {activeStep === AuthStep.LOGIN && <LogInComponent setActiveStep={setActiveStep} />}
      {activeStep === AuthStep.CREATE && <CreateAccountComponent setActiveStep={setActiveStep} />}
      {activeStep === AuthStep.RESET && <ResetPasswordComponent />}
    </div>
  );
};
