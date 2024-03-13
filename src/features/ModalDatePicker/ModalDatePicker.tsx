'use client';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Calendar, Value } from 'react-multi-date-picker';

import styles from './ModalDatePicker.module.scss';

import { useAuthData } from '@/shared/context/authContext';
import { closePopup } from '@/shared/image';
import { parseToUnix, parseUnixDate } from '@/shared/lib';
import { modalStyles } from '@/shared/styles/ModalStyles';
import { CustomDatePicker } from '@/shared/ui/CustomDatePicker/CustomDatePicker';

interface ModalDatePickerProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalDatePicker: FC<ModalDatePickerProps> = ({ isModalOpen, setIsModalOpen }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { isPending, startTransition } = useAuthData();
  const [dateRange, setDateRange] = useState<Value>(null);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (Array.isArray(dateRange) && dateRange.length > 1) {
      const startDate = parseToUnix(dateRange[0]);
      const endDate = parseToUnix(dateRange[1]);
      startTransition(() => {
        params.set('dateStart', String(startDate));
        params.set('dateEnd', String(endDate));
        const search = params.toString();
        const query = search ? `?${search}` : '';
        router.push(`${pathname}${query}`, { scroll: false });
      });
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
  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} sx={modalStyles}>
      <div className={styles.modalContent}>
        <button className={styles.closeIcon} onClick={() => setIsModalOpen(false)}>
          <Image src={closePopup} alt='close' />
        </button>
        <CustomDatePicker rent={false} onOpen={() => false} />
        <Calendar
          className={styles.calendar}
          numberOfMonths={2}
          disabled={isPending}
          range
          format='DD/MM/YY'
          rangeHover
          onChange={setDateRange}
          value={dateRange}
        />
      </div>
    </Modal>
  );
};
