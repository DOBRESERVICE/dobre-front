import {
  aeg,
  blueArrow,
  bosch,
  camping,
  checkedIcon,
  clothes,
  constructionEquipment,
  dewalt,
  drill,
  electroic,
  electroTools,
  festool,
  forKids,
  furniture,
  handMadeTools,
  hilti,
  houseAndyarn,
  houseHold,
  karcher,
  makita,
  metabo,
  mockItem,
  mockUser,
  paymentIcon,
  renovation,
  secureIcon,
  smartDelivery,
  specialTechnique,
  sport,
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
    title: 'Кемпинг и путешествия ',
  },
  {
    id: 3,
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
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Частное лицо',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 2,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18 сен. 2023',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Частное лицо',
    isAvailable: false,
    isConfirmed: false,
    rentInfoArray: rentInfoData,
  },
  {
    id: 3,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18.23',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.BAD,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Организация',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 4,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18.23',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.USED,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Организация',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 5,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18.23',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.GOOD,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Организация',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 6,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18 сен. 2023',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Организация',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 7,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18 сен. 2023',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Организация',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 8,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18 сен. 2023',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Организация',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 9,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18 сен. 2023',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Организация',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 10,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18 сен. 2023',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Организация',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 11,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18 сен. 2023',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Организация',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 12,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18.23',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Частное лицо',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
  {
    id: 13,
    photoUrl: mockItem,
    userUrl: mockUser,
    rentEndDate: '18.23',
    itemName: 'Горный велосипед Denton Stor аренда',
    status: ProductStatus.LIKE_NEW,
    rating: 4,
    feedbackCount: 32,
    sellerInfo: 'Частное лицо',
    isAvailable: true,
    isConfirmed: true,
    rentInfoArray: rentInfoData,
  },
];

export const constuctionData = [
  {
    id: 1,
    imageUrl: handMadeTools,
    title: 'Ручные инструменты',
  },
  {
    id: 2,
    imageUrl: electroTools,
    title: 'Электроинструменты',
  },
  {
    id: 3,
    imageUrl: specialTechnique,
    title: 'Спецтехника',
  },
  {
    id: 4,
    imageUrl: constructionEquipment,
    title: 'Строительное оборудование',
  },
  {
    id: 5,
    imageUrl: constructionEquipment,
    title: 'Строительное оборудование',
  },
  {
    id: 6,
    imageUrl: constructionEquipment,
    title: 'Строительное оборудование',
  },
  {
    id: 7,
    imageUrl: constructionEquipment,
    title: 'Строительное оборудование',
  },
  {
    id: 8,
    imageUrl: constructionEquipment,
    title: 'Строительное оборудование',
  },
  {
    id: 9,
    imageUrl: constructionEquipment,
    title: 'Строительное оборудование',
  },
  {
    id: 10,
    imageUrl: constructionEquipment,
    title: 'Строительное оборудование',
  },
  {
    id: 11,
    imageUrl: constructionEquipment,
    title: 'Строительное оборудование',
  },
  {
    id: 12,
    imageUrl: constructionEquipment,
    title: 'Строительное оборудование',
  },
  {
    id: 13,
    imageUrl: constructionEquipment,
    title: 'Строительное оборудование',
  },
];

export const brandsData = [
  {
    id: 1,
    imageUrl: bosch,
    brandName: 'Bosch',
  },
  {
    id: 2,
    imageUrl: makita,
    brandName: 'Makita',
  },
  {
    id: 3,
    imageUrl: karcher,
    brandName: 'Karcher',
  },
  {
    id: 4,
    imageUrl: hilti,
    brandName: 'Hilti',
  },
  {
    id: 5,
    imageUrl: dewalt,
    brandName: 'DeWalt',
  },
  {
    id: 6,
    imageUrl: festool,
  },
  {
    id: 7,
    imageUrl: aeg,
  },
  {
    id: 8,
    imageUrl: metabo,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
];

export const popularToolsData = [
  {
    id: 1,
    imageUrl: drill,
    title: 'Дрели и шуруповерты',
  },
  {
    id: 2,
    title: 'Аппараты высокого давления',
  },
  {
    id: 3,
    title: 'Компрессоры',
  },
  {
    id: 4,
    title: 'Тепловые пушки и обогреватели',
  },
  {
    id: 5,
    title: 'Болгарки УШМ',
  },
  {
    id: 6,
    title: 'Пылесосы строительные',
  },
  {
    id: 7,
    title: 'Электрофрезеры',
  },
];

export const catalogData = [
  {
    id: 1,
    title: 'Электроинструменты в аренду',
    subCategories: [
      {
        id: 1,
        title: 'Болгарки УШМ',
      },
      {
        id: 2,
        title: 'Дрели и шуруповерты',
      },
      {
        id: 3,
        title: 'Перфораторы',
      },
      {
        id: 4,
        title: 'Шлифовальные машины',
      },
      {
        id: 5,
        title: 'Электрорубанки',
      },
      {
        id: 6,
        title: 'Электрофрезеры',
      },
      {
        id: 7,
        title: 'Бензопилы и электрорезы',
      },
      {
        id: 8,
        title: 'Электропилы и электролобзики',
      },
      {
        id: 9,
        title: 'Аппараты высокого давления',
      },
      {
        id: 10,
        title: 'Пылесосы строительные ',
      },
      {
        id: 11,
        title: 'Сварочное оборудование',
      },
      {
        id: 12,
        title: 'Комрессоры',
      },
      {
        id: 13,
        title: 'Комрессоры',
      },
      {
        id: 14,
        title: 'Комрессоры',
      },
    ],
    items: productsData,
  },

  {
    id: 2,
    title: 'Спецтехника в аренду',
    subCategories: [
      {
        id: 1,
        title: 'Бетономешалки',
      },
      {
        id: 2,
        title: 'Самосвалы',
      },
      {
        id: 3,
        title: 'Прицепы',
      },
      {
        id: 4,
        title: 'Автовышки',
      },
      {
        id: 5,
        title: 'Эскаваторы',
      },
      {
        id: 6,
        title: 'Автокраны',
      },
      {
        id: 7,
        title: 'Тракторы',
      },
      {
        id: 8,
        title: 'Манипуляторы',
      },
      {
        id: 9,
        title: 'Эвакуаторы',
      },
      {
        id: 10,
        title: 'Катки',
      },
      {
        id: 11,
        title: 'Погрузчики',
      },
      {
        id: 12,
        title: 'Ямобуры',
      },
      {
        id: 13,
        title: 'Ямобуры',
      },
      {
        id: 14,
        title: 'Ямобуры',
      },
    ],
    items: productsData,
  },
  {
    id: 3,
    title: 'Ручные инструменты в аренду',
    subCategories: [
      {
        id: 1,
        title: 'Наборы инструментов',
      },
      {
        id: 2,
        title: 'Отбойные молотки, топоры, кувалды',
      },
      {
        id: 3,
        title: 'Плиткорезы, стеклорезы, захваты',
      },
      {
        id: 4,
        title: 'Лопаты, шуфели, грабли',
      },
      {
        id: 5,
        title: 'Пилы и лобзики',
      },
      {
        id: 6,
        title: 'Домкраты',
      },
      {
        id: 7,
        title: 'Домкраты',
      },
    ],
    items: productsData,
  },
  {
    id: 4,
    title: 'Строительное оборудование в аренду',
    subCategories: [
      {
        id: 1,
        title: 'Наборы инструментов',
      },
      {
        id: 2,
        title: 'Отбойные молотки, топоры, кувалды',
      },
      {
        id: 3,
        title: 'Плиткорезы, стеклорезы, захваты',
      },
      {
        id: 4,
        title: 'Лопаты, шуфели, грабли',
      },
      {
        id: 5,
        title: 'Пилы и лобзики',
      },
      {
        id: 6,
        title: 'Домкраты',
      },
      {
        id: 7,
        title: 'Домкраты',
      },
    ],
    items: productsData,
  },
];

export const qualityButtonsData = [
  {
    id: 1,
    qualityType: 'Новое',
  },
  {
    id: 2,
    qualityType: 'Как новое',
  },
  {
    id: 3,
    qualityType: 'Хорошее',
  },
  {
    id: 4,
    qualityType: 'Среднее',
  },
];

export const subCategoriesData = [
  {
    id: 1,
    text: 'Болгарки УШМ',
  },
  {
    id: 2,
    text: 'Дрели и шуруповерты',
  },
  {
    id: 3,
    text: 'Перфораторы',
  },
  {
    id: 4,
    text: 'Шлифовальные машины',
  },
  {
    id: 5,
    text: 'Электрорубанки',
  },
  {
    id: 6,
    text: 'Электрофрезеры',
  },
  {
    id: 7,
    text: 'Бензопилы и электрорезы',
  },
  {
    id: 8,
    text: 'Электропилы и электролобзики',
  },
  {
    id: 9,
    text: 'Аппараты высокого давления',
  },
  {
    id: 10,
    text: 'Болгарки УШМ',
  },
];

export const headerLinks = [
  {
    id: 1,
    linkName: 'Электроника',
    image: electroic,
  },
  {
    id: 2,
    linkName: 'Бытовая техника',
    image: houseHold,
  },
  {
    id: 3,
    linkName: 'Одежда и аксессуары',
    image: clothes,
  },
  {
    id: 4,
    linkName: 'Для родителей и детей',
    image: forKids,
  },
  {
    id: 5,
    linkName: 'Ремонт и стройка',
    image: renovation,
  },
  {
    id: 6,
    linkName: 'Дом и сад',
    image: houseAndyarn,
  },
  {
    id: 7,
    linkName: 'Мебель',
    image: furniture,
  },
  {
    id: 8,
    linkName: 'Кемпинг и путешествия',
    image: camping,
  },
  {
    id: 9,
    linkName: 'Спорт и активный отдых',
    image: sport,
  },
  {
    id: 10,
    linkName: 'Спорт и активный отдых',
    image: sport,
  },
  {
    id: 11,
    linkName: 'Спорт и активный отдых',
    image: sport,
  },
];

export const optionsData = [
  {
    id: 1,
    optionText: 'От сети',
  },
  {
    id: 2,
    optionText: 'От сети',
  },
  {
    id: 3,
    optionText: 'От сети',
  },
  {
    id: 4,
    optionText: 'От сети',
  },
  {
    id: 5,
    optionText: 'От сети',
  },
  {
    id: 6,
    optionText: 'От сети',
  },
];
