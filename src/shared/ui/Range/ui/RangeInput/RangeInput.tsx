import { ChangeEvent, FC, useEffect, useId, useState } from 'react';

import styles from './RangeInput.module.scss';
import { customRangeInput } from '@/shared/styles/buttonStyles';
import TextField from '@mui/material/TextField';
import { useAuthData } from '@/shared/context/authContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface RangeInputProps {
  label: string;
  placeholder: string;
  search_tr_name: string;
}
export const RangeInput: FC<RangeInputProps> = ({ label, placeholder, search_tr_name }) => {
  const [value, setValue] = useState('');
  const { isPending, startTransition } = useAuthData();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    const searchValue = e.target.value;
    setValue(searchValue);
    // params.set(search_tr_name, searchValue);
    // const search = params.toString();
    // const query = search ? `?${search}` : '';
    // router.push(`${pathname}${query}`, { scroll: false });
  };
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const param = params.get(search_tr_name);
    param && setValue(param);
  }, [search_tr_name, searchParams]);

  return (
    <div className={styles.inputWrapper}>
      <TextField
        value={value}
        autoComplete='off'
        onChange={handleChange}
        sx={customRangeInput}
        label={label}
        placeholder={placeholder}
      />
    </div>
  );
};
