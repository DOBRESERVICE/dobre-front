'use client';
import classNames from 'classnames';
import { usePathname, useSearchParams } from 'next/navigation';
import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import DatePicker, { DatePickerRef, Value } from 'react-multi-date-picker';
import InputIcon from 'react-multi-date-picker/components/input_icon';

import styles from './CustomDatePicker.module.scss';

import { parseToUnix, parseUnixDate } from '@/shared/lib';

interface CustomDatePickerProps {
  rent: boolean;
  onOpen?: () => boolean;
  dateRange: Value;
  setDateRange: Dispatch<SetStateAction<Value>>;
}

export const CustomDatePicker: FC<CustomDatePickerProps> = ({ rent, onOpen, setDateRange, dateRange }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const datePickerRef = useRef<DatePickerRef>(null);
  console.log(dateRange);
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (Array.isArray(dateRange) && dateRange.length > 1 && datePickerRef.current) {
      const startDate = parseToUnix(dateRange[0]);
      const endDate = parseToUnix(dateRange[1]);
      params.set('dateStart', String(startDate));
      params.set('dateEnd', String(endDate));
      history.replaceState(null, '', `${pathname}?${params.toString()}`);
      datePickerRef.current.closeCalendar();
    }
  }, [pathname, searchParams, dateRange]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const start = params.get('dateStart');
    const end = params.get('dateEnd');
    if (start && end) {
      const startDate = parseUnixDate(start);
      const endDate = parseUnixDate(end);
      setDateRange([startDate, endDate]);
    }
  }, [setDateRange, searchParams]);

  return (
    <DatePicker
      ref={datePickerRef}
      range
      editable={false}
      dateSeparator='-'
      format='DD/MM/YY'
      className={styles.datePickerCalendar}
      containerClassName={classNames(styles.datePicker, {
        [styles.rentDatePicker]: rent,
      })}
      rangeHover
      onOpen={onOpen}
      onChange={setDateRange}
      value={dateRange}
      render={<InputIcon style={{ right: '15px' }} placeholder='Выберите дату' />}
    />
  );
};
