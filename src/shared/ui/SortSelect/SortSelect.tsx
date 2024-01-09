'use client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import Image, { StaticImageData } from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { useAuthData } from '@/shared/context/authContext';
import { whiteChecked } from '@/shared/image';
import { customMenuItem, customSortLabel } from '@/shared/styles/selectStyles';
import { SortData, SortOptions } from '@/widgets/SubcategoryContent/components/SubcategoryCatalog/SubcategoryCatalog';

interface SortSelectProps {
  label?: string;
  labelImage?: StaticImageData;
  firstPartLabel?: string;
  labelSecondImage?: StaticImageData;
  secondPartLabel?: string;
  selectStyles: SxProps<Theme>;
  labelStyles: SxProps<Theme>;
  formControlStyles: SxProps<Theme>;
  selectData: SortData[];
}

export const SortSelect: FC<SortSelectProps> = ({ selectData, selectStyles, formControlStyles, labelImage }) => {
  const { isPending, startTransition } = useAuthData();
  const [value, setValue] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const sortValue = params.get('sort');
    const sortText = selectData.find((el) => el.value === Number(sortValue));
    if (sortText && sortValue) {
      setValue(sortText.text);
    } else {
      setValue('');
    }
  }, [selectData, searchParams]);
  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value as keyof typeof SortOptions);
    const params = new URLSearchParams(searchParams);
    const sortValue = selectData.find((el) => el.text === e.target.value);
    startTransition(() => {
      if (sortValue) {
        params.set('sort', sortValue.value.toString());
        const search = params.toString();
        const query = search ? `?${search}` : '';
        router.push(`${pathname}${query}`, { scroll: false });
      }
    });
  };
  return (
    <FormControl sx={formControlStyles}>
      <InputLabel sx={customSortLabel} id='demo-simple-select'>
        Сортировать по
      </InputLabel>
      <Select
        displayEmpty
        MenuProps={{
          disableScrollLock: true,
        }}
        sx={selectStyles}
        IconComponent={ExpandMoreIcon}
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        label='Сортировать по'
        onChange={handleChange}
        renderValue={(value) => {
          return (
            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', height: '21px' }}>
              {labelImage && <Image src={labelImage} alt='saf' />}
              {value}
            </Box>
          );
        }}
      >
        {selectData.map((item) => (
          <MenuItem
            disabled={isPending}
            key={item.value}
            value={item.text}
            sx={customMenuItem}
            disableRipple
            role='button'
          >
            {item.text} <Image src={whiteChecked} alt='checked' style={{ position: 'absolute', right: '12px' }} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
