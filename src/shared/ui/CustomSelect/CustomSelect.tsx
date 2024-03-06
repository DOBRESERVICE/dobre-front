'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControl, InputLabel, MenuItem, Select, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import Image, { StaticImageData } from 'next/image';
import { FC, useState } from 'react';

import styles from './CustomSelect.module.scss';

import { whiteChecked } from '@/shared/image';
import { customMenuItem, customSelectMenuStyles } from '@/shared/styles/selectStyles';

type selectData = string[] | number[];

interface CustomSelect {
  label?: string;
  labelImage?: StaticImageData;
  selectStyles: SxProps<Theme>;
  labelStyles: SxProps<Theme>;
  formControlStyles: SxProps<Theme>;
  selectData: selectData;
  checkedImage?: boolean;
}

export const CustomSelect: FC<CustomSelect> = ({
  labelStyles,
  selectStyles,
  formControlStyles,
  selectData,
  label,
  checkedImage,
}) => {
  const [value, setValue] = useState('');
  return (
    <FormControl sx={formControlStyles}>
      <InputLabel sx={labelStyles}>{label}</InputLabel>
      <Select
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
        label={label}
        onChange={(e) => setValue(e.target.value)}
      >
        {selectData.map((item) => (
          <MenuItem key={item} value={item} sx={customMenuItem} disableRipple>
            {item} {checkedImage && <Image src={whiteChecked} alt='checked' className={styles.checked} />}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
