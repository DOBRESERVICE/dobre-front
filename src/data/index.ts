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
  stanki,
  tesnimonialToolImage,
  testimonialsImage,
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
    imageUrl: travelling,
  },
  {
    id: 3,
    title: 'Спорт и активный отдых ',
    imageUrl: sportImage,
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
    id_product: 6,
    name_product: 'Chair',
    tr_name_product: 'Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    quality_control: 3,
    price_segment: 'middle',
    rent_period: '1D',
    rent_terms: 'ssssssssssssssss',
    quantity: 1,
    specs_product: 'ssssssssssssssss',
    price: '33.00',
    image: mockItem,
    enabled_product: true,
    is_moderate: true,
    userId: null,
    brandIdBrand: null,
    categoryIdCategory: 6,
    subcategoryIdSub: 24,
    varietyIdVariety: 104,
  },
  {
    id_product: 7,
    name_product: 'Chair',
    tr_name_product: 'Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    quality_control: 4,
    price_segment: 'middle',
    rent_period: '1D',
    rent_terms: 'ssssssssssssssss',
    quantity: 1,
    specs_product: 'ssssssssssssssss',
    price: '33.00',
    image: mockItem,
    enabled_product: true,
    is_moderate: true,
    userId: null,
    brandIdBrand: null,
    categoryIdCategory: 6,
    subcategoryIdSub: 24,
    varietyIdVariety: 104,
  },
  {
    id_product: 8,
    name_product: 'Chair',
    tr_name_product: 'Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    quality_control: 2,
    price_segment: 'middle',
    rent_period: '1D',
    rent_terms: 'ssssssssssssssss',
    quantity: 1,
    specs_product: 'ssssssssssssssss',
    price: '33.00',
    image: mockItem,
    enabled_product: true,
    is_moderate: true,
    userId: null,
    brandIdBrand: null,
    categoryIdCategory: 6,
    subcategoryIdSub: 24,
    varietyIdVariety: 104,
  },
  {
    id_product: 9,
    name_product: 'Chair',
    tr_name_product: 'Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    quality_control: 1,
    price_segment: 'middle',
    rent_period: '1D',
    rent_terms: 'ssssssssssssssss',
    quantity: 1,
    specs_product: 'ssssssssssssssss',
    price: '33.00',
    image: mockItem,
    enabled_product: true,
    is_moderate: true,
    userId: null,
    brandIdBrand: null,
    categoryIdCategory: 6,
    subcategoryIdSub: 24,
    varietyIdVariety: 104,
  },
  {
    id_product: 16,
    name_product: 'Chair',
    tr_name_product: 'Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    quality_control: 3,
    price_segment: 'middle',
    rent_period: '1D',
    rent_terms: 'ssssssssssssssss',
    quantity: 1,
    specs_product: 'ssssssssssssssss',
    price: '33.00',
    image: mockItem,
    enabled_product: true,
    is_moderate: true,
    userId: null,
    brandIdBrand: null,
    categoryIdCategory: 6,
    subcategoryIdSub: 24,
    varietyIdVariety: 104,
  },
  {
    id_product: 12,
    name_product: 'Chair',
    tr_name_product: 'Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    quality_control: 5,
    price_segment: 'middle',
    rent_period: '1D',
    rent_terms: 'ssssssssssssssss',
    quantity: 1,
    specs_product: 'ssssssssssssssss',
    price: '33.00',
    image: mockItem,
    enabled_product: true,
    is_moderate: true,
    userId: null,
    brandIdBrand: null,
    categoryIdCategory: 6,
    subcategoryIdSub: 24,
    varietyIdVariety: 104,
  },
  {
    id_product: 116,
    name_product: 'Chair',
    tr_name_product: 'Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    quality_control: 5,
    price_segment: 'middle',
    rent_period: '1D',
    rent_terms: 'ssssssssssssssss',
    quantity: 1,
    specs_product: 'ssssssssssssssss',
    price: '33.00',
    image: mockItem,
    enabled_product: true,
    is_moderate: true,
    userId: null,
    brandIdBrand: null,
    categoryIdCategory: 6,
    subcategoryIdSub: 24,
    varietyIdVariety: 104,
  },
  {
    id_product: 126,
    name_product: 'Chair',
    tr_name_product: 'Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    quality_control: 5,
    price_segment: 'middle',
    rent_period: '1D',
    rent_terms: 'ssssssssssssssss',
    quantity: 1,
    specs_product: 'ssssssssssssssss',
    price: '33.00',
    image: mockItem,
    enabled_product: true,
    is_moderate: true,
    userId: null,
    brandIdBrand: null,
    categoryIdCategory: 6,
    subcategoryIdSub: 24,
    varietyIdVariety: 104,
  },
  {
    id_product: 136,
    name_product: 'Chair',
    tr_name_product: 'Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    quality_control: 5,
    price_segment: 'middle',
    rent_period: '1D',
    rent_terms: 'ssssssssssssssss',
    quantity: 1,
    specs_product: 'ssssssssssssssss',
    price: '33.00',
    image: mockItem,
    enabled_product: true,
    is_moderate: true,
    userId: null,
    brandIdBrand: null,
    categoryIdCategory: 6,
    subcategoryIdSub: 24,
    varietyIdVariety: 104,
  },
  {
    id_product: 146,
    name_product: 'Chair',
    tr_name_product: 'Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    quality_control: 5,
    price_segment: 'middle',
    rent_period: '1D',
    rent_terms: 'ssssssssssssssss',
    quantity: 1,
    specs_product: 'ssssssssssssssss',
    price: '33.00',
    image: mockItem,
    enabled_product: true,
    is_moderate: true,
    userId: null,
    brandIdBrand: null,
    categoryIdCategory: 6,
    subcategoryIdSub: 24,
    varietyIdVariety: 104,
  },
  {
    id_product: 156,
    name_product: 'Chair',
    tr_name_product: 'Chair',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    quality_control: 4,
    price_segment: 'middle',
    rent_period: '1D',
    rent_terms: 'ssssssssssssssss',
    quantity: 1,
    specs_product: 'ssssssssssssssss',
    price: '33.00',
    image: mockItem,
    enabled_product: true,
    is_moderate: true,
    userId: null,
    brandIdBrand: null,
    categoryIdCategory: 6,
    subcategoryIdSub: 24,
    varietyIdVariety: 104,
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
];

export const popularToolsData = [
  {
    id_variety: '1',
    image_variety: drill,
    name_variety: 'Дрели и шуруповерты',
    tr_name_variety: 'sss',
    rate_variety: 1,
    enabled_variety: true,
  },
  {
    id_variety: '2',
    image_variety: stanki,
    name_variety: 'Аппараты высокого давления',
    tr_name_variety: 'sss',
    rate_variety: 1,
    enabled_variety: true,
  },
  {
    id_variety: '3',
    name_variety: 'Компрессоры',
    tr_name_variety: 'sss',
    rate_variety: 1,
    enabled_variety: true,
  },
  {
    id_variety: '4',
    name_variety: 'Тепловые пушки и обогреватели',
    tr_name_variety: 'sss',
    rate_variety: 1,
    enabled_variety: true,
  },
  {
    id_variety: '5',
    name_variety: 'Болгарки УШМ',
    tr_name_variety: 'sss',
    rate_variety: 1,
    enabled_variety: true,
  },
  {
    id_variety: '6',
    name_variety: 'Пылесосы строительные',
    tr_name_variety: 'sss',
    rate_variety: 1,
    enabled_variety: true,
  },
  {
    id_variety: '7',
    name_variety: 'Электрофрезеры',
    tr_name_variety: 'sss',
    rate_variety: 1,
    enabled_variety: true,
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

const advantages = [
  {
    id: 1,
    info: 'производительность — 2760 уд/мин;',
  },
  {
    id: 2,
    info: 'диаметр ударного бурения — 12–40 мм;',
  },
  {
    id: 3,
    info: 'антивибрационная система;',
  },

  {
    id: 4,
    info: 'регулировка уровня мощности.',
  },
];

export const descriptionProductData = {
  id: 1,
  firstDescription:
    'Комбинированный перфоратор Hilti TE 70-ATC/AVR совместим с насадками диаметром 12–150 мм и предназначен для сверления отверстий, каналов, демонтажа кладки и декоративных покрытий, а также создания проемов. Устройство подходит для работ по бетону, камню, кирпичу, металлу, древесине.',
  mainAdvantages: advantages,
  secondDescription:
    'Перфоратор оснащен дополнительной боковой ручкой, положение которой пользователь меняет в соответствии с собственными потребностями.',
};

export const generalInfo = [
  {
    id: 1,
    title: 'Общая информация',
    array: [
      { key: 'Тип', value: 'Перфоратор' },
      { key: 'Бренд', value: 'Hilti' },
      { key: 'Модель', value: 'TE 70-AVR 230V 2208672' },
      { key: 'Страна-изготовитель', value: 'Китай' },
      { key: 'Цвет', value: 'Красный' },
      { key: 'Класс инструмента', value: 'Профессиональный' },
      { key: 'Особенности', value: 'Кейс в комплекте' },
    ],
  },
  {
    id: 2,
    title: 'Технические характеристики',
    array: [
      { key: 'Тип питания', value: 'От сети' },
      { key: 'Мощность, Вт', value: '780 Вт' },
      { key: 'Режим работы', value: 'Сверление, Сверление с ударом, Долбление' },
      { key: 'Тип потрона', value: 'SDS-Plus' },
      { key: 'Количество ударов, уд./мин', value: '4500' },
      { key: 'Количество скоростей', value: '1' },
    ],
  },
  {
    id: 3,
    title: 'Габариты',
    array: [
      { key: 'Тип упаковки', value: 'Кейс' },
      { key: 'Габариты, см', value: '200х200х40' },
      { key: 'Вес, кг', value: '1.5 ' },
    ],
  },
];

export const blueTypesArray = [
  'Бренд',
  'Страна-изготовитель',
  'Класс инструмента',
  'Особенности',
  'Тип питания',
  'Мощность, Вт',
];

export const userTestimonialsData = [
  {
    id: 1,
    userImage: mockUser,
    userName: 'Viola',
    userComment: 'Дрель в очень хорошем состоянии, почти как новое. Ирина очень отзывчивая, помогла разобраться.',
    status: 4,
    images: [
      {
        id: 1,
        img: tesnimonialToolImage,
      },
      {
        id: 2,
        img: tesnimonialToolImage,
      },
    ],
    feedbackCount: 4.5,
    feedbackDate: '1 сентября 2023',
  },
  {
    id: 2,
    userImage: mockUser,
    userName: 'Anton',
    userComment:
      'Дрель отличная, рекомендую. Состояние очень хорошее, думаю почти как новое. Виола очень хороший человек, помогла с доставкой! Буду обращаться еще !',
    status: 3,
    feedbackCount: 4,
    feedbackDate: '1 сентября 2023',
    ownerResponse: 'Антон, спасибо! Обращайтесь ко мне снова!',
    ownerImage: mockUser,
  },
  {
    id: 3,
    userImage: mockUser,
    userName: 'Виктория',
    userComment: 'Все ок!',
    status: 3,
    feedbackCount: 5,
    feedbackDate: '1 сентября 2023',
    ownerImage: mockUser,
  },
];

export const FAQData = [
  {
    id: 1,
    userImage: mockUser,
    userName: 'Anton',
    userComment: 'Подскажите, дрель сдается с кейсом?',
    feedbackDate: '1 сентября 2023',
    ownerResponse: 'Да, конечно. Дрель упакована в специальный кейс.',
    ownerImage: mockUser,
  },
];
