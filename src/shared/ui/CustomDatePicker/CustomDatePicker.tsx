'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DateRangePicker } from 'rsuite';
import { DateRange } from 'rsuite/DateRangePicker';

import 'rsuite/dist/rsuite-no-reset.css';
import styles from './CustomDatePicker.module.scss';

import { useAuthData } from '@/shared/context/authContext';
import { parseDate } from '@/shared/lib';

export const CustomDatePicker = () => {
  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { isPending, startTransition } = useAuthData();
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const dateStart = parseDate(params.get('dateStart'));
    const dateEnd = parseDate(params.get('dateEnd'));
    if (dateStart && dateEnd) {
      setDateRange([dateStart, dateEnd]);
    }
  }, [searchParams]);
  const handleChange = (value: DateRange | null) => {
    const params = new URLSearchParams(searchParams);
    setDateRange(value);
    const formattedDates = value
      ?.filter((dateElement) => dateElement !== null)
      .map((dateElement) => {
        const date = new Date(dateElement);
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
      });
    if (formattedDates) {
      startTransition(() => {
        params.set('dateStart', formattedDates[0]);
        params.set('dateEnd', formattedDates[1]);
        const search = params.toString();
        const query = search ? `?${search}` : '';
        router.push(`${pathname}${query}`, { scroll: false });
      });
    }
  };

  return (
    <DateRangePicker
      disabled={isPending}
      format='dd-MM-yyyy'
      appearance='default'
      value={dateRange}
      onChange={(value) => handleChange(value)}
      placeholder='Выберите дату'
      style={{ width: 230 }}
      cleanable={false}
      className={styles.datePicker}
    />
  );
};
