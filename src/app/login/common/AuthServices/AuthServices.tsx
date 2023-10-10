import styles from './AuthServices.module.scss';
import Image from 'next/image';
import { appleIcon, googleIcon, vkIcon, yandexIcon } from '@/assets/image';

export const AuthServices = () => {
  return (
    <div className={styles.iconsWrapper}>
      <div className={styles.siteConnect}>
        <Image src={googleIcon} alt='google' />
      </div>
      <div className={styles.siteConnect}>
        <Image src={appleIcon} alt='apple' />
      </div>
      <div className={styles.siteConnect}>
        <Image src={vkIcon} alt='vk' />
      </div>
      <div className={styles.siteConnect}>
        <Image src={yandexIcon} alt='yandex' />
      </div>
    </div>
  );
};
