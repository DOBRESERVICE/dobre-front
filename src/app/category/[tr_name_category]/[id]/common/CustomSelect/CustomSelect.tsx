'use client';
import styles from './CustomSelect.module.scss';
import { FormControl, InputLabel, MenuItem, Select, Theme } from '@mui/material';
import { FC, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image, { StaticImageData } from 'next/image';
import { SxProps } from '@mui/system';

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

export const CustomSelect: FC<CustomSelect> = ({
  label,
  labelImage,
  labelSecondImage,
  secondPartLabel,
  firstPartLabel,
  selectStyles,
  labelStyles,
  formControlStyles,
  selectData,
}) => {
  const [value, setValue] = useState('');
  return (
    <FormControl sx={formControlStyles}>
      <InputLabel sx={labelStyles} id='demo-simple-select-label'>
        <div className={styles.labelContent}>
          {labelImage && <Image src={labelImage} alt='date' />}
          {label && label}
          {firstPartLabel && firstPartLabel}
          {labelSecondImage && <Image src={labelSecondImage} alt={'image'} />}
          {secondPartLabel && secondPartLabel}
        </div>
      </InputLabel>
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
      >
        {selectData.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
