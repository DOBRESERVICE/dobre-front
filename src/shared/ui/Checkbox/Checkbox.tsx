import { FC, InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { checked, onChange, ...restProps } = props;
  return (
    <input {...restProps} type='checkbox' className={styles.customCheckbox} checked={checked} onChange={onChange} />
  );
};
