'use client';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import { Calendar, Value } from 'react-multi-date-picker';

import styles from './ModalDatePicker.module.scss';

import { closePopup } from '@/shared/image';
import { calcDayRentTime, formatDate, parseToUnix, parseUnixDate } from '@/shared/lib';
import { modalStyles } from '@/shared/styles/ModalStyles';
import { CustomDatePicker } from '@/shared/ui/CustomDatePicker/CustomDatePicker';

interface ModalDatePickerProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  dateRange: Value;
  setDateRange: Dispatch<SetStateAction<Value>>;
}

export const ModalDatePicker: FC<ModalDatePickerProps> = ({ isModalOpen, setIsModalOpen, setDateRange, dateRange }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const startDate = Number(params.get('dateStart'));
  const endDate = Number(params.get('dateEnd'));
  const daysNumber = calcDayRentTime(startDate, endDate);
  const periodString = `${formatDate(new Date(startDate))} - ${formatDate(new Date(endDate))}`;
  const calendarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (Array.isArray(dateRange) && dateRange.length > 1) {
      const startDate = parseToUnix(dateRange[0]);
      const endDate = parseToUnix(dateRange[1]);
      params.set('dateStart', String(startDate));
      params.set('dateEnd', String(endDate));
      console.log('sss');
      history.replaceState(null, '', `${pathname}?${params.toString()}`);
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

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);
    setDateRange(null);
    params.delete('dateStart');
    params.delete('dateEnd');
    history.replaceState(null, '', `${pathname}?${params.toString()}`);
  };
  const startDateValue = parseUnixDate(startDate);
  console.log(startDateValue);
  const endDateValue = parseUnixDate(endDate);
  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} sx={modalStyles}>
      <div className={styles.modalContent}>
        <button className={styles.closeIcon} onClick={() => setIsModalOpen(false)}>
          <Image src={closePopup} alt='close' />
        </button>
        <div className={styles.contentWrapper}>
          <div className={styles.dateInfoWrapper}>
            {daysNumber ? (
              <>
                <p>{daysNumber} суток</p>
                <p>{periodString}</p>
              </>
            ) : null}
          </div>
          <CustomDatePicker rent={false} onOpen={() => false} setDateRange={setDateRange} dateRange={dateRange} />
        </div>
        <Calendar
          ref={calendarRef}
          className={styles.calendar}
          numberOfMonths={2}
          range
          format='DD/MM/YY'
          rangeHover
          onChange={setDateRange}
          value={dateRange}
        />
        <div>
          <Button>Готово</Button>
          <Button onClick={handleClear}>Сбросить даты</Button>
        </div>
        <div>
          <TextField value={startDateValue} placeholder='Выберите дату' />
          <TextField />
        </div>
      </div>
    </Modal>
  );
};
