import TextField from '@mui/material/TextField';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { useAuthData } from '@/shared/context/authContext';
import { customRangeInput } from '@/shared/styles/buttonStyles';
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
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();
  const debouncedValue = useDebounce(value, 1000);
  const handleBlur = () => {
    startTransition(() => {
      if (value) {
        params.set(`${search_tr_name} + ${searchKey}`, value);
      } else {
        params.delete(`${search_tr_name} + ${searchKey}`);
      }
      history.replaceState(null, '', `${pathname}?${params.toString()}`);
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const param = params.get(`${search_tr_name} + ${searchKey}`);
    param && setValue(param);
  }, [searchKey, search_tr_name, searchParams]);

  return (
    <TextField
      value={value}
      disabled={isPending}
      onBlur={handleBlur}
      autoComplete='off'
      onChange={(e) => setValue(e.target.value)}
      sx={customRangeInput}
      label={label}
      placeholder={placeholder}
    />
  );
};
