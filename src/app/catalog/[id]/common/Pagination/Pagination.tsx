import styles from './Pagination.module.scss';
import { padinationData } from '@/data';
export const Pagination = () => {
  return (
    <div className={styles.paginationWrapper}>
      {padinationData.map((item) => (
        <div className={styles.paginationItem}>{item.id} </div>
      ))}
    </div>
  );
};
