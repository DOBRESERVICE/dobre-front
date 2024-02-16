import { FC, InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.scss';

import { useAuthData } from '@/shared/context/authContext';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { checked, onChange, ...restProps } = props;
  const { isPending } = useAuthData();
  return (
    <input
      {...restProps}
      disabled={isPending}
      type='checkbox'
      className={styles.customCheckbox}
      checked={checked}
      onChange={onChange}
    />
  );
};
