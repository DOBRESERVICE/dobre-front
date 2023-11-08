import styles from './ProductDetails.module.scss';
import { blueTypesArray, generalInfo } from '@/data';
import classNames from 'classnames';

export const ProductDetails = () => {
  return (
    <div className={styles.detailsWrapper}>
      {generalInfo.map((section) => (
        <div className={styles.contentWrapper}>
          <h3>{section.title}</h3>
          <div key={section.id} className={styles.detailsContent}>
            <div className={styles.detailsColumn}>
              {section.array.map((item, index) => (
                <div className={styles.detailTypesWrapper}>
                  <span key={index}>{item.key}</span>
                  <div className={styles.dashedLine}> </div>
                </div>
              ))}
            </div>
            <div></div>
            <div className={styles.detailsColumn}>
              {section.array.map((item) => (
                <span className={blueTypesArray.includes(item.key) ? styles.blueType : ''} key={item.value}>
                  {item.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
