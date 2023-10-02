import {
  blueArrow,
  checkedIcon,
  mockItem,
  mockUser,
  paymentIcon,
  secureIcon,
  smartDelivery,
  sportImage,
  travelling,
} from '@/assets/image';
import { ProductStatus } from '@/enums';

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
export const popularProductsData = [
  {
    id: 1,
    title: 'Электроника ',
  },
  {
    id: 2,
    imageUrl: travelling,
    title: 'Кемпинг и путешествия ',
  },
  {
    id: 3,
    imageUrl: sportImage,
    title: 'Спорт и активный отдых ',
  },
  {
    id: 4,
    title: 'Бытовая техника ',
  },
  {
    id: 5,
    title: 'Для родителей и дедей ',
  },
  {
    id: 6,
    title: 'Игры и развлечения ',
  },
  {
    id: 7,
    title: 'Хобби и творчество ',
  },
];

export const descriptionData = [
  {
    id: 1,
    title: 'Что делать, если мою вещь испортят?',
    text: 'Я регулярно пользуюсь сервисом, по мне очень выгодно и очень удобно, быстрая доставка, единственное не получилось оплатить apple pay. Познакомились с Александром, нашли много общего, очень рада, что есть кто-то кто заботится о людях искренне...',
  },
  {
    id: 2,
    title: 'Что делать, если мою вещь испортят?',
    text: 'Я регулярно пользуюсь сервисом, по мне очень выгодно и очень удобно, быстрая доставка, единственное не получилось оплатить apple pay. Познакомились с Александром, нашли много общего, очень рада, что есть кто-то кто заботится о людях искренне...',
  },
  {
    id: 3,
    title: 'Что делать, если мою вещь испортят?',
    text: 'Я регулярно пользуюсь сервисом, по мне очень выгодно и очень удобно, быстрая доставка, единственное не получилось оплатить apple pay. Познакомились с Александром, нашли много общего, очень рада, что есть кто-то кто заботится о людях искренне...',
  },
  {
    id: 4,
    title: 'Что делать, если мою вещь испортят?',
    text: 'Я регулярно пользуюсь сервисом, по мне очень выгодно и очень удобно, быстрая доставка, единственное не получилось оплатить apple pay. Познакомились с Александром, нашли много общего, очень рада, что есть кто-то кто заботится о людях искренне...',
  },
];

export const productsData = [
  {
    id: 1,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18.23',
    itemName: 'ssssss',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'seller',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 2,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18.23',
    itemName: 'ssssss',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'seller',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 3,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18.23',
    itemName: 'ssssss',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'seller',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 4,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18.23',
    itemName: 'ssssss',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'seller',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 5,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18.23',
    itemName: 'ssssss',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'seller',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 6,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18.23',
    itemName: 'ssssss',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'seller',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
];
