'use client';
import classNames from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';
import DatePicker, { DatePickerRef, Value } from 'react-multi-date-picker';
import InputIcon from 'react-multi-date-picker/components/input_icon';

import styles from './CustomDatePicker.module.scss';

import { useAuthData } from '@/shared/context/authContext';
import { parseToUnix, parseUnixDate } from '@/shared/lib';

interface CustomDatePickerProps {
  rent: boolean;
}

export const CustomDatePicker: FC<CustomDatePickerProps> = ({ rent }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { isPending, startTransition } = useAuthData();
  const [dateRange, setDateRange] = useState<Value>(null);
  const datePickerRef = useRef<DatePickerRef>(null);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (Array.isArray(dateRange) && dateRange.length > 1 && datePickerRef.current) {
      const startDate = parseToUnix(dateRange[0]);
      const endDate = parseToUnix(dateRange[1]);
      startTransition(() => {
        params.set('dateStart', String(startDate));
        params.set('dateEnd', String(endDate));
        const search = params.toString();
        const query = search ? `?${search}` : '';
        router.push(`${pathname}${query}`, { scroll: false });
      });
      datePickerRef.current.closeCalendar();
    }
  }, [startTransition, pathname, router, searchParams, dateRange]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const start = params.get('dateStart');
    const end = params.get('dateEnd');
    if (start && end) {
      const startDate = parseUnixDate(start);
      const endDate = parseUnixDate(end);
      setDateRange([startDate, endDate]);
    }
  }, [searchParams]);
  const handleClear = () => {
    const params = new URLSearchParams(searchParams);
    setDateRange(null);
    startTransition(() => {
      params.delete('dateStart');
      params.delete('dateEnd');
      const search = params.toString();
      const query = search ? `?${search}` : '';
      router.push(`${pathname}${query}`, { scroll: false });
    });
  };
  return (
    <DatePicker
      disabled={isPending}
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
      onChange={setDateRange}
      value={dateRange}
      render={<InputIcon style={{ right: '15px' }} placeholder='Выберите дату' />}
    />
  );
};
