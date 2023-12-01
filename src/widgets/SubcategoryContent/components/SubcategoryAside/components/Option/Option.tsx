import { Checkbox } from '@mui/material';
import { FC } from 'react';

import styles from './Option.module.scss';

import { authCheckBox } from '@/shared/styles/buttonStyles';

interface Option {
  optionText: string;
}
export const Option: FC<Option> = ({ optionText }) => {
  return (
    <div className={styles.optionContent}>
      <Checkbox sx={authCheckBox} />
      <p>{optionText}</p>
    </div>
  );
};
