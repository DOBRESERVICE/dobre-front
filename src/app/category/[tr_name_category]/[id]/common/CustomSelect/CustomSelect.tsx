'use client';
import styles from './CustomSelect.module.scss';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FC, useState } from 'react';
import { customLabel, customSelect } from '@/styles/buttonStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image, { StaticImageData } from 'next/image';
import { SelectHeader } from '@/app/category/[tr_name_category]/[id]/common/SelectHeader/SelectHeader';

interface CustomSelect {
  headerName?: string;
  label: string;
  labelImage?: StaticImageData;
}

export const CustomSelect: FC<CustomSelect> = ({ headerName, label, labelImage }) => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.customSelectWrapper}>
      {headerName && <SelectHeader headerName={headerName} />}
      <FormControl fullWidth>
        <InputLabel sx={customLabel} id='demo-simple-select-label'>
          <div className={styles.labelContent}>
            {labelImage && <Image src={labelImage} alt='date' />}
            {label}
          </div>
        </InputLabel>
        <Select
          IconComponent={ExpandMoreIcon}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          sx={customSelect}
          label={label}
          onChange={(e) => setValue(e.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
