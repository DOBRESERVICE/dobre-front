import { ChangeEvent, FC, useEffect, useId, useState } from 'react';

import styles from './RangeInput.module.scss';
import { customRangeInput } from '@/shared/styles/buttonStyles';
import TextField from '@mui/material/TextField';
import { useAuthData } from '@/shared/context/authContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from '@/shared/hooks/use-debounce';

interface RangeInputProps {
  label: string;
  placeholder: string;
  search_tr_name: string;
  searchKey: string;
}
export const RangeInput: FC<RangeInputProps> = ({ searchKey, label, placeholder, search_tr_name }) => {
  const [value, setValue] = useState('');
  const { isPending, startTransition } = useAuthData();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const debouncedValue = useDebounce(value, 1000);
  const [inFocus, setInFocus] = useState(false);
  useEffect(() => {
    const handleBlur = () => {
      const params = new URLSearchParams(searchParams);
      startTransition(() => {
        if (value) {
          params.set(`${search_tr_name} + ${searchKey}`, value);
        } else {
          params.delete(`${search_tr_name} + ${searchKey}`);
        }

        const search = params.toString();
        const query = search ? `?${search}` : '';
        router.push(`${pathname}${query}`, { scroll: false });
      });
    };

    if (!inFocus) {
      handleBlur();
    }
  }, [inFocus, startTransition, searchKey, pathname, router, searchParams, search_tr_name, value]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const param = params.get(`${search_tr_name} + ${searchKey}`);
    param && setValue(param);
  }, [searchKey, search_tr_name, searchParams]);

  return (
    <div className={styles.inputWrapper}>
      <TextField
        value={value}
        disabled={isPending}
        onFocus={() => setInFocus(true)}
        onBlur={() => setInFocus(false)}
        autoComplete='off'
        onChange={(e) => setValue(e.target.value)}
        sx={customRangeInput}
        label={label}
        placeholder={placeholder}
      />
    </div>
  );
};
