import { ProductStatus } from '@/enums';

export const isGoodStatus = (status: number) =>
  [ProductStatus.NEW, ProductStatus.LIKE_NEW, ProductStatus.GOOD].includes(status);
export const PeriodMapping: Record<string, string> = {
  D: 'день',
  W: 'неделя',
  M: 'месяц',
  Y: 'год',
};
