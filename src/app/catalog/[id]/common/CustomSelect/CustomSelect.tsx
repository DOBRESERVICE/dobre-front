'use client';
import styles from './CustomSelect.module.scss';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC, useState } from 'react';
import { customLabel, customSelect } from '@/styles/buttonStyles';
import { SelectHeader } from '@/app/catalog/[id]/common/SelectHeader/SelectHeader';
import Image from 'next/image';
import { blueArrow, rentButtonIcon } from '@/assets/image';

interface CustomSelect {
  headerName: string;
  label: string;
}

export const CustomSelect: FC<CustomSelect> = ({ headerName, label }) => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.customSelectWrapper}>
      <SelectHeader headerName={headerName} />
      <FormControl fullWidth>
        <InputLabel sx={customLabel} id='demo-simple-select-label'>
          {label}
        </InputLabel>
        <Select
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
