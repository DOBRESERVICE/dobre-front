'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import DatePicker, { DateObject, DatePickerRef, Value } from 'react-multi-date-picker';
import styles from './CustomDatePicker.module.scss';
import { useAuthData } from '@/shared/context/authContext';
import classNames from 'classnames';
import InputIcon from 'react-multi-date-picker/components/input_icon';
import { parseDate } from '@/shared/lib';

export const CustomDatePicker = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { isPending, startTransition } = useAuthData();
  const [dateRange, setDateRange] = useState<Value>(null);
  const datePickerRef = useRef<DatePickerRef>(null);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (Array.isArray(dateRange) && dateRange.length > 1 && datePickerRef.current) {
      const startDate = parseDate(dateRange[0]);
      const endDate = parseDate(dateRange[1]);
      startTransition(() => {
        params.set('dateStart', startDate);
        params.set('dateEnd', endDate);
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
      setDateRange([start, end]);
    }
  }, [searchParams]);

  return (
    <DatePicker
      disabled={isPending}
      ref={datePickerRef}
      range
      editable={false}
      dateSeparator='-'
      format='DD/MM/YY'
      className={styles.datePickerCalendar}
      containerClassName={classNames(styles.datePicker)}
      rangeHover
      onChange={setDateRange}
      value={dateRange}
      render={<InputIcon placeholder='Выберите дату' />}
    />
  );
};
