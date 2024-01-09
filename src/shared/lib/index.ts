import { ProductStatus } from '@/enums';

export const isGoodStatus = (status: number) =>
  [ProductStatus.NEW, ProductStatus.LIKE_NEW, ProductStatus.GOOD].includes(status);
export const PeriodMapping: Record<string, string> = {
  D: 'день',
  W: 'неделя',
  M: 'месяц',
  Y: 'год',
};
export const parseDate = (dateString: string | null): Date | null => {
  if (!dateString) return null;

  const [day, month, year] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
};
