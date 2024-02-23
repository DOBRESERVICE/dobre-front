import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';

import styles from './ShowAllButton.module.scss';

import { blueNextArrow } from '@/shared/image';

interface ShowAllButtonProps {
  showAll: boolean;
  setShowAll: Dispatch<SetStateAction<boolean>>;
}

export const ShowAllButton: FC<ShowAllButtonProps> = ({ showAll, setShowAll }) => {
  return (
    <div className={styles.seeAll} role='button' onClick={() => setShowAll(!showAll)}>
      <p>{!showAll ? 'Развернуть все' : 'Свернуть все'}</p>
      <Image src={blueNextArrow} alt='next' />
    </div>
  );
};
