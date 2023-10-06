import Image from 'next/image';
import { AuthLayout } from '@/components/authLayout/AuthLayout';
import { DOBRE, dobreBanner, dobreWhiteLogo } from '@/assets/image';
import styles from './Authorization.module.scss';
import { AuthForm } from '@/components/AuthForm/AuthForm';

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <div>
            <Image src={dobreWhiteLogo} alt='logo' />
          </div>
          <p>Легко арендовать и безопасно сдавать</p>
          <Image src={dobreBanner} alt='banner' />
        </div>
        <AuthForm />
      </div>
      <div className={styles.dobreImage}>
        <Image src={DOBRE} alt='DOBRE' />
      </div>
    </AuthLayout>
  );
}
