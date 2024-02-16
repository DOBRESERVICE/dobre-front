import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import Image, { StaticImageData } from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useState } from 'react';

import styles from '@/shared/ui/CustomSelect/CustomSelect.module.scss';

import { useAuthData } from '@/shared/context/authContext';
import { whiteChecked } from '@/shared/image';
import { customLabel, customMenuItem } from '@/shared/styles/selectStyles';

interface CustomSelect {
  label?: string;
  labelImage?: StaticImageData;
  firstPartLabel?: string;
  labelSecondImage?: StaticImageData;
  secondPartLabel?: string;
  selectStyles: SxProps<Theme>;
  labelStyles: SxProps<Theme>;
  formControlStyles: SxProps<Theme>;
  selectData: string[];
  search_tr_name: string;
}
export const MultipleSelect: FC<CustomSelect> = ({
  selectData,
  selectStyles,
  formControlStyles,
  search_tr_name,
  label,
}) => {
  const { isPending, startTransition } = useAuthData();
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params);
  const [values, setValues] = useState<string[]>(searchParams.getAll(search_tr_name));
  const router = useRouter();
  const pathname = usePathname();
  const addNewParamValue = (value: string) => {
    const allParams = searchParams.getAll(search_tr_name);
    startTransition(() => {
      if (!value || allParams.includes(value)) {
        searchParams.delete(search_tr_name, value);
      } else {
        searchParams.append(search_tr_name, value);
      }
      const search = searchParams.toString();
      const query = search ? `?${search}` : '';
      router.push(`${pathname}${query}`, { scroll: false });
    });
  };
  const handleChange = (e: SelectChangeEvent<typeof values>) => {
    setValues(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value);
  };
  return (
    <FormControl sx={formControlStyles}>
      <InputLabel sx={customLabel} id='demo-simple-select'>
        {label}
      </InputLabel>
      <Select
        multiple
        MenuProps={{
          disableScrollLock: true,
        }}
        sx={selectStyles}
        label={label}
        IconComponent={ExpandMoreIcon}
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={values}
        onChange={handleChange}
      >
        {selectData.map((item) => (
          <MenuItem
            disabled={isPending}
            key={item}
            value={item}
            sx={customMenuItem}
            disableRipple
            onClick={() => addNewParamValue(item)}
          >
            {item} <Image src={whiteChecked} alt='checked' className={styles.checked} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
