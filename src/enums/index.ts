export const enum ProductStatus {
  NEW = 5,
  LIKE_NEW = 4,
  GOOD = 3,
  USED = 2,
  BAD = 1,
}

export const qualityMap: Record<number, string> = {
  [ProductStatus.NEW]: 'Новое',
  [ProductStatus.LIKE_NEW]: 'Как новое',
  [ProductStatus.GOOD]: 'Хорошее',
  [ProductStatus.USED]: 'Среднее',
  [ProductStatus.BAD]: 'Не очень',
};
export const enum RentState {
  TakeRent = 'Беру',
  GiveRent = 'Сдаю',
}

export const enum StatusCode {
  OK = 200,
  Unauthorized = 403,
  NotFound = 422,
}
export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
  INIT = 'init',
}
