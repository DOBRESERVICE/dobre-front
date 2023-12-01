'use client';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { customDatePicker, customDatePickerContainer } from '@/shared/styles/datePickerStyles';
import { Dateicon } from '@/shared/ui/DateIcon/Dateicon';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export const CustomDatePicker = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs('2023-10-12'));
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (newValue: dayjs.Dayjs | null) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} sx={customDatePickerContainer}>
        <DatePicker
          onChange={handleChange}
          label={'Выберите дату'}
          sx={customDatePicker}
          slots={{ openPickerIcon: Dateicon }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
