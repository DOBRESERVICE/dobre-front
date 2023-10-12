import styles from './HeaderLinks.module.scss';
import { headerLinks } from '@/data';
import { HeaderLink } from '@/components/Header/common/HeaderLink/HeaderLink';
export const HeaderLinks = () => {
  return (
    <div className={styles.headerLinks}>
      {headerLinks.map((link) => (
        <HeaderLink key={link.id} linkName={link.linkName} image={link.image} />
      ))}
    </div>
  );
};
