import styles from './Option.module.scss';
import { Checkbox } from '@mui/material';
import { authCheckBox } from '@/styles/buttonStyles';
import { FC } from 'react';

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
