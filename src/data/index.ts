import { paymentIcon, secureIcon, smartDelivery } from '@/assets/image';
import { StaticImageData } from 'next/image';
import { ProductStatus } from '@/enums';
import { RentInfoData } from '@/interfaces';

export const searchCardsData = [
  {
    id: 1,
    cardHeader: 'Страхование вещей',
    cardText: 'Безопасность ваших вещей важна, сдавайте и берите в аренду с полной уверенностью',
    iconUrl: secureIcon,
  },
  {
    id: 2,
    cardHeader: 'Умные онлайн-платежи',
    cardText: 'Будьте уверены при оплате за аренду, ваши средства зачисляются арендодателю только при получении',
    iconUrl: paymentIcon,
  },
  {
    id: 3,
    cardHeader: 'Удобная доставка',
    cardText: 'Отправляйте или получайте  быстро с помощью интегрированных сервисов доставки',
    iconUrl: smartDelivery,
  },
];
export const rentInfoData = [
  {
    id: 1,
    timeInRent: '1 неделя',
    price: '799 pуб.',
  },
  {
    id: 2,
    timeInRent: '1 неделя',
    price: '799 pуб.',
  },
  {
    id: 3,
    timeInRent: '1 неделя',
    price: '799 pуб.',
  },
];
