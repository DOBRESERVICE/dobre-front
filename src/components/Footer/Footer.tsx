import { fbIcon, iconVk, inIcon, instIcon, logoDobre, tgIcon, ytIcon } from '@/assets/image';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import { customRentButton } from '@/styles/buttonStyles';
import { Wrapper } from '@/components/Wrapper/Wrapper';

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.linksWrapper}>
        <div className={styles.colWrapper}>
          <Image src={logoDobre} alt='logo' className={styles.logo} />
          <div className={styles.logoText}>Безопасная площадка для удобной аренды вещей или товаров.</div>
          <div className={styles.iconsWrapper}>
            <div className={styles.icon}>
              <Image alt='' src={tgIcon} />
            </div>
            <div className={styles.icon}>
              <Image alt='' src={fbIcon} />
            </div>
            <div className={styles.icon}>
              <Image alt='' src={inIcon} />
            </div>
            <div className={styles.icon}>
              <Image alt='' src={instIcon} />
            </div>
            <div className={styles.icon}>
              <Image alt='' src={iconVk} />
            </div>
            <div className={styles.icon}>
              <Image alt='' src={ytIcon} />
            </div>
          </div>
        </div>
        <div className={styles.colWrapper}>
          <div className={styles.linksTitle}>DOBRE</div>
          <Link href={'#'} className={styles.linkText}>
            О проекте
          </Link>
          <Link href={'#'} className={styles.linkText}>
            Как арендовать
          </Link>
          <Link href={'#'} className={styles.linkText}>
            Как сдавать
          </Link>
          <Link href={'#'} className={styles.linkText}>
            База знаний
          </Link>
          <Link href={'#'} className={styles.linkText}>
            Правовые документы
          </Link>
          <Link href={'#'} className={styles.linkText}>
            Правила размещения
          </Link>
          <Link href={'#'} className={styles.linkText}>
            Вопрос-ответ
          </Link>
        </div>

        <div className={styles.colWrapper}>
          <div className={styles.linksTitle}>Для бизнеса</div>
          <Link href={'#'} className={styles.linkText}>
            Тарифы
          </Link>
          <Link href={'#'} className={styles.linkText}>
            Партнёрская программа
          </Link>
          <Link href={'#'} className={styles.linkText}>
            Стать частью DOBRE
          </Link>
          <Link href={'#'} className={styles.linkText}>
            Реклама
          </Link>
        </div>

        <div className={styles.colWrapper}>
          <div className={styles.linksTitle}>Контакты</div>
          <div className={styles.linkText}>
            Пн-Пт: 10:00 – 18:00; Сб, Вс: Выходной  ООО «Процесс Диджитал Эдженси»,  УНП 191767445 220030, г. Минск,
            Старовиленский тракт, 87 (пом. 77) <div className={styles.mail}>help@dobre.by</div>
          </div>
          <div className={styles.buttonWrapper}>
            <Button variant='contained' disableRipple size='medium' sx={customRentButton}>
              Написать в поддержку
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.copuWrapper}>
        <div className={styles.copuText}>© 2012–2023 DOBRE.BY</div>
        <div className={styles.copuText}>Пользовательское соглашение</div>
        <div className={styles.copuText}>Политика обработки персональны данных</div>
        <div className={styles.copuText}>Правила обработки cookie</div>
      </div>
    </div>
  );
};
