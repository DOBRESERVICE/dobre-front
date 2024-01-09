import { FC } from 'react';

import styles from './RangeInput.module.scss';

interface RangeInputProps {
  label: string;
  placeholder: string;
  min: string;
  max: string;
}
export const RangeInput: FC<RangeInputProps> = ({ label, placeholder, min, max }) => {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input className={styles.rangeInput} placeholder={placeholder} type='number' min={min} max={max} />
    </div>
  );
};
