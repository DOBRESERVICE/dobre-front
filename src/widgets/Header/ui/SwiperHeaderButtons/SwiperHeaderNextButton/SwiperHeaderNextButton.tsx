import styles from './SwiperHeaderNextButton.module.scss';

export const SwiperHeaderNextButton = () => {
  return (
    <div className={styles.nextBtn}>
      <svg width='7' height='9' viewBox='0 0 7 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4.57157 4.47975L1.49262 1.67492L1.82173 1.37534L5.63277 4.84934L1.82124 8.32322L1.49238 8.02344L4.57153 5.21903L4.97736 4.84941L4.57157 4.47975Z'
          fill='white'
          stroke='#646E74'
        />
      </svg>
    </div>
  );
};
