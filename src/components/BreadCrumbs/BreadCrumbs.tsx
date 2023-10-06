import styles from './BreadCrumbs.module.scss';
export const BreadCrumbs = () => {
  return (
    <div className={styles.breadCrumbsWrapper}>
      <span>Главная /</span>
      <span>Ремонт и стройка</span>
    </div>
  );
};
