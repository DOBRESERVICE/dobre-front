import { DateObject } from 'react-multi-date-picker';

import { ProductStatus } from '@/enums';

export const isGoodStatus = (status: number) =>
  [ProductStatus.NEW, ProductStatus.LIKE_NEW, ProductStatus.GOOD].includes(status);
export const PeriodMapping: Record<string, string> = {
  D: 'день',
  W: 'неделя',
  M: 'месяц',
  Y: 'год',
};
export const parseToUnix = (date: string | number | Date | DateObject) => {
  const strDate = date.toLocaleString();
  const parts = strDate.split('/');
  const year = parseInt(parts[2]) + 2000;
  const month = parseInt(parts[1]) - 1;
  const day = parseInt(parts[0]);
  return new Date(year, month, day).getTime();
};

export const parseUnixDate = (date: string | number) => {
  const formattedDate = new Date(Number(date));
  const day = formattedDate.getDate().toString().padStart(2, '0');
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
  const year = formattedDate.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
};

export const calcDayRentTime = (startDate: number, endDate: number) => {
  const difference = endDate - startDate;
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  return Math.floor(difference / millisecondsPerDay);
};

function getMonthName(monthIndex: number) {
  const monthNames = ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'];
  return monthNames[monthIndex];
}

export function formatDate(date: number) {
  const formattedDate = new Date(date);
  const day = formattedDate.getDate();
  const month = getMonthName(formattedDate.getMonth());
  const year = formattedDate.getFullYear();
  return `${day} ${month} ${year} г.`;
}
