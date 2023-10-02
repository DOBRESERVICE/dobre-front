'use client';
import { LogInComponent } from '@/components/LogIn/LogInComponent';
import { CreateAccountComponent } from '@/components/CreateAccount/CreateAccountComponent';
import { ResetPasswordComponent } from '@/components/ResetPassword/ResetPasswordComponent';
import Image from 'next/image';
import { useState } from 'react';
import { AuthLayout } from '@/components/authLayout/AuthLayout';
import { autorizBanner, whiteLogo, DOBRE } from '@/assets/image';
import styles from './Authorization.module.scss';

export default function LoginPage() {
  const [activeStep, setActiveStep] = useState('login');

  return (
    <AuthLayout>
      <div className={styles.autorizationWrapper}>
        <div className={styles.componentWrapper}>
          <div className={styles.leftBanner} style={{ backgroundImage: `url(${autorizBanner.src}` }}>
            <div className={styles.leftBannerTitle}>
              <img alt='logo' src={whiteLogo.src} />
            </div>
            <div className={styles.leftBannerDescr}>Легко арендовать и безопасно сдавать</div>
          </div>
          {activeStep === 'login' && <LogInComponent setActiveStep={setActiveStep} />}
          {activeStep === 'create' && <CreateAccountComponent setActiveStep={setActiveStep} />}
          {activeStep === 'reset' && <ResetPasswordComponent />}
        </div>

        <Image src={DOBRE} alt='DOBRE' className={styles.dobreImage} />
      </div>
    </AuthLayout>
  );
}
