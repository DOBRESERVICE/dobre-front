import { blueArrow, checkedIcon, paymentIcon, secureIcon, smartDelivery } from '@/assets/image';

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
export const howWeWorkData = [
  {
    id: 1,
    cardHeader: '1. Поиск',
    cardText: 'Быстро и легко находите находите желаемое без ограничений сэкономив время и деньги.',
    iconUrl: blueArrow,
  },
  {
    id: 2,
    cardHeader: '2. Аренда',
    cardText:
      'Не беспокойтесь, если повредите или нанесете большой ущерб арендуемому товару, страховка защитит и возместит все убытки.',
    iconUrl: blueArrow,
  },
  {
    id: 3,
    cardHeader: '3. Возврат',
    cardText:
      'Получить и вернуть в срок товар теперь просто и быстро, интегрированный сервис доставки сделает это за вас.',
    iconUrl: checkedIcon,
  },
];
