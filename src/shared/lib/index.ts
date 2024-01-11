import { ProductStatus } from '@/enums';
import { DateObject } from 'react-multi-date-picker';

export const isGoodStatus = (status: number) =>
  [ProductStatus.NEW, ProductStatus.LIKE_NEW, ProductStatus.GOOD].includes(status);
export const PeriodMapping: Record<string, string> = {
  D: 'день',
  W: 'неделя',
  M: 'месяц',
  Y: 'год',
};
export const parseDate = (date: string | number | Date | DateObject) => {
  return date.toLocaleString().split('/').join('-');
};
