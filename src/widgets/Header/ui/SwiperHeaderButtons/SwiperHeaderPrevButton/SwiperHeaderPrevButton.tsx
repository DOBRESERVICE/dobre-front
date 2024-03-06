import styles from './SwiperHeaderPrevButton.module.scss';

export const SwiperHeaderPrevButton = () => {
  return (
    <div className={styles.prevBtn}>
      <svg width='7' height='9' viewBox='0 0 7 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M2.55343 5.21898L5.63238 8.02381L5.30327 8.32339L1.49223 4.84939L5.30376 1.37551L5.63262 1.67529L2.55347 4.4797L2.14764 4.84932L2.55343 5.21898Z'
          fill='white'
          stroke='#646E74'
        />
      </svg>
    </div>
  );
};
