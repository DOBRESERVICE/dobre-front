import { ProductStatus } from '@/enums';

export const availableNow = 'Доступен сейчас';
export const inRent = 'В аренде до';

export const isGoodStatus = (status: ProductStatus) =>
  [ProductStatus.NEW, ProductStatus.LIKE_NEW, ProductStatus.GOOD].includes(status);

export const emailRules =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export const mediumPasswordRules =
  /^(?=.*[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[\w!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
export const strongPasswordRules = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
