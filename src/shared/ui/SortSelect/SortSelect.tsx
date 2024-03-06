'use client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import Image, { StaticImageData } from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { useAuthData } from '@/shared/context/authContext';
import { whiteChecked } from '@/shared/image';
import { customMenuItem, customSelectMenuStyles, customSortLabel } from '@/shared/styles/selectStyles';
import { SortData } from '@/widgets/SubcategoryContent/components/SubcategoryCatalog/SubcategoryCatalog';

interface SortSelectProps {
  label?: string;
  labelImage?: StaticImageData;
  selectStyles: SxProps<Theme>;
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
    }
  }, [selectData, searchParams]);
  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
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
    <FormControl sx={formControlStyles} size='small'>
      <InputLabel sx={customSortLabel}>Сортировать по</InputLabel>
      <Select
        size='small'
        displayEmpty
        MenuProps={{
          disableScrollLock: true,
          PaperProps: {
            sx: customSelectMenuStyles,
          },
          MenuListProps: {
            sx: {
              paddingTop: '0',
              paddingBottom: '0',
            },
          },
        }}
        sx={selectStyles}
        IconComponent={ExpandMoreIcon}
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
