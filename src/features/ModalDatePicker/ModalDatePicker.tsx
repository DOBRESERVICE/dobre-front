import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Calendar, DateObject, Value } from 'react-multi-date-picker';

import styles from './ModalDatePicker.module.scss';

import { months, weekDays } from '@/shared/constants';
import { closePopup } from '@/shared/image';
import { calcDayRentTime, formatDate, parseToUnix, parseUnixDate } from '@/shared/lib';
import { calendarInputStyles, clearCalendarStyles, confirmCalendarButtonStyles } from '@/shared/styles/buttonStyles';
import { modalStyles } from '@/shared/styles/ModalStyles';
import { CalendarSvg } from '@/shared/ui/CalendarSvg/CalendarSvg';

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
  const periodString = startDate && endDate ? `${formatDate(startDate)} - ${formatDate(endDate)}` : '';
  const startDateValue = startDate ? parseUnixDate(startDate).split('/').join('.') : '';
  const endDateValue = endDate ? parseUnixDate(endDate).split('/').join('.') : '';

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);
    setDateRange(null);
    params.delete('dateStart');
    params.delete('dateEnd');
    history.replaceState(null, '', `${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (Array.isArray(dateRange) && dateRange.length > 1) {
      const startDate = parseToUnix(dateRange[0]);
      const endDate = parseToUnix(dateRange[1]);
      params.set('dateStart', String(startDate));
      params.set('dateEnd', String(endDate));
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
  const reserved = [
    new DateObject().setDay(1).format('DD/MM/YY'),
    new DateObject().setDay(5).format('DD/MM/YY'),
    new DateObject().setDay(7).format('DD/MM/YY'),
    new DateObject().setDay(8).format('DD/MM/YY'),
  ];
  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} sx={modalStyles}>
      <div className={styles.modalContent}>
        <button className={styles.closeIcon} onClick={() => setIsModalOpen(false)}>
          <Image src={closePopup} alt='close' />
        </button>
        <div className={styles.contentWrapper}>
          <div className={styles.dateInfoWrapper}>
            <p className={styles.daysNumber}>{daysNumber} суток</p>
            <p className={styles.periodString}>{periodString && periodString}</p>
          </div>
          <div className={styles.inputsWrapper}>
            <TextField
              size='small'
              label='Начало аренды'
              inputProps={{ readOnly: true }}
              value={startDateValue}
              sx={calendarInputStyles}
              focused={!!startDateValue}
              InputProps={{
                endAdornment: <CalendarSvg />,
              }}
            />
            <TextField
              size='small'
              value={endDateValue}
              label='Конец аренды'
              inputProps={{ readOnly: true }}
              sx={calendarInputStyles}
              focused={!!startDateValue}
              InputProps={{
                endAdornment: <CalendarSvg />,
              }}
            />
          </div>
        </div>
        <Calendar
          weekDays={weekDays}
          months={months}
          className={styles.calendar}
          numberOfMonths={2}
          range
          format='DD/MM/YY'
          rangeHover
          onChange={setDateRange}
          value={dateRange}
          mapDays={({ date }) => {
            let className;
            const strDate = date.format();
            if (reserved.includes(strDate)) className = 'reserved';
            if (className) return { className };
          }}
        />
        <div className={styles.buttonsWrapper}>
          <Button disableRipple sx={confirmCalendarButtonStyles} onClick={() => setIsModalOpen(false)}>
            Готово
          </Button>
          <Button onClick={handleClear} disableRipple sx={clearCalendarStyles}>
            Сбросить даты
          </Button>
        </div>
      </div>
    </Modal>
  );
};
