'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, FormControl, MenuItem, Select, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import Image, { StaticImageData } from 'next/image';
import { FC, useState } from 'react';

import styles from './CustomSelect.module.scss';

import { whiteChecked } from '@/shared/image';
import { customMenuItem } from '@/shared/styles/selectStyles';

type selectData = string[] | number[];

interface CustomSelect {
  label?: string;
  labelImage?: StaticImageData;
  firstPartLabel?: string;
  labelSecondImage?: StaticImageData;
  secondPartLabel?: string;
  selectStyles: SxProps<Theme>;
  labelStyles: SxProps<Theme>;
  formControlStyles: SxProps<Theme>;
  selectData: selectData;
}

export const CustomSelect: FC<CustomSelect> = ({ labelImage, selectStyles, formControlStyles, selectData }) => {
  const [value, setValue] = useState(selectData[0]);
  return (
    <FormControl sx={formControlStyles}>
      {/*<InputLabel shrink={false} sx={labelStyles} id='demo-simple-select-label'>*/}
      {/*  <div className={styles.labelContent}>*/}
      {/*    {labelImage && <Image src={labelImage} alt='date' />}*/}
      {/*    {label && value}*/}
      {/*    {firstPartLabel && firstPartLabel}*/}
      {/*    {labelSecondImage && <Image src={labelSecondImage} alt='image' />}*/}
      {/*    {secondPartLabel && secondPartLabel}*/}
      {/*  </div>*/}
      {/*</InputLabel>*/}
      <Select
        MenuProps={{
          disableScrollLock: true,
        }}
        sx={selectStyles}
        IconComponent={ExpandMoreIcon}
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        renderValue={(value) => {
          return (
            <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {labelImage && <Image src={labelImage} alt='saf' />}
              {value}
            </Box>
          );
        }}
      >
        {selectData.map((item) => (
          <MenuItem key={item} value={item} sx={customMenuItem} disableRipple>
            {item} <Image src={whiteChecked} alt='checked' className={styles.checked} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
