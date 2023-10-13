'use client';
import styles from './CustomDatePicker.module.scss';
import Image from 'next/image';
import { dateImage } from '@/assets/image';
import { Arrow } from '@/app/catalog/[id]/common/Arrow/Arrow';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { customDatePicker } from '@/styles/buttonStyles';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export const CustomDatePicker = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs('2023-10-12'));
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (newValue: dayjs.Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={styles.customDatePickerWrapper}>
        <div className={styles.content}>
          <Image src={dateImage} alt='dateImage' />
          <p>Выберите дату</p>
        </div>
        <Arrow onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </div>
      {isOpen && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            sx={customDatePicker}
            value={value}
            onClose={() => setIsOpen(false)}
            onAccept={(newValue) => handleChange(newValue)}
            onChange={(newValue) => handleChange(newValue)}
            slotProps={{
              actionBar: {
                actions: ['cancel', 'accept'],
              },
            }}
          />
        </LocalizationProvider>
      )}
    </>
  );
};
