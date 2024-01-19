import {
  aeg,
  blueArrow,
  bosch,
  camping,
  checkedIcon,
  cleaningPopularTools,
  clothes,
  dewalt,
  drill,
  electroic,
  electroPopularTools,
  favouritePopupIcon,
  festool,
  forKids,
  furniture,
  gamingPopularTools,
  hilti,
  houseAndyarn,
  houseHold,
  karcher,
  makita,
  messagesIcon,
  metabo,
  mockItem,
  paymentIcon,
  photographyPopularTools,
  renovation,
  rentIcon,
  secureIcon,
  smartDelivery,
  sport,
  sportImage,
  sportPopularTools,
  stanki,
  travelling,
} from '../image';
import yandex from '../image/delivery/yandexGo.svg';
import dpd from '../image/delivery/dpd.svg';
import sdek from '../image/delivery/sdek.svg';
import russiaMail from '../image/delivery/russiaMail.svg';
import { StaticImageData } from 'next/image';
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
    title: 'Фото и видео оборудование',
    imageUrl: photographyPopularTools,
  },
  {
    id: 2,
    title: 'Оборудование для походов и кемпинга',
    imageUrl: travelling,
  },
  {
    id: 3,
    title: 'Велосипеды ',
    imageUrl: sportImage,
  },
  {
    id: 4,
    title: 'Уборка и клининг',
    imageUrl: cleaningPopularTools,
  },
  {
    id: 5,
    title: 'Спортивные тренажеры',
    imageUrl: sportPopularTools,
  },
  {
    id: 6,
    title: 'Игровые консоли и аксессуары',
    imageUrl: gamingPopularTools,
  },
  {
    id: 7,
    title: 'Электроинструменты',
    imageUrl: electroPopularTools,
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
    terms: [
      {
        id_term: 1,
        teek: '1',
        period: 'D',
        price: 1,
        term_visible: true,
        is_moderate: true,
      },
    ],
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
    terms: [
      {
        id_term: 1,
        teek: '1',
        period: 'D',
        price: 1,
        term_visible: true,
        is_moderate: true,
      },
    ],
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
    terms: [
      {
        id_term: 1,
        teek: '1',
        period: 'D',
        price: 1,
        term_visible: true,
        is_moderate: true,
      },
    ],
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
    terms: [
      {
        id_term: 1,
        teek: '1',
        period: 'D',
        price: 1,
        term_visible: true,
        is_moderate: true,
      },
    ],
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
    terms: [
      {
        id_term: 1,
        teek: '1',
        period: 'D',
        price: 1,
        term_visible: true,
        is_moderate: true,
      },
    ],
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
    terms: [
      {
        id_term: 1,
        teek: '1',
        period: 'D',
        price: 1,
        term_visible: true,
        is_moderate: true,
      },
    ],
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
    terms: [
      {
        id_term: 1,
        teek: '1',
        period: 'D',
        price: 1,
        term_visible: true,
        is_moderate: true,
      },
    ],
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
    terms: [
      {
        id_term: 1,
        teek: '1',
        period: 'D',
        price: 1,
        term_visible: true,
        is_moderate: true,
      },
    ],
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
    terms: [
      {
        id_term: 1,
        teek: '1',
        period: 'D',
        price: 1,
        term_visible: true,
        is_moderate: true,
      },
    ],
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
    terms: [
      {
        id_term: 1,
        teek: '1',
        period: 'D',
        price: 1,
        term_visible: true,
        is_moderate: true,
      },
    ],
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
    terms: [
      {
        id_term: 1,
        teek: '1',
        period: 'D',
        price: 1,
        term_visible: true,
        is_moderate: true,
      },
    ],
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

export const userMenuData = [
  {
    id: 1,
    img: rentIcon,
    text: 'Аренда',
  },
  {
    id: 2,
    img: messagesIcon,
    text: 'Сообщения',
  },
  {
    id: 3,
    img: favouritePopupIcon,
    text: 'Избранные',
  },
];
export const rulesAccordionData = [
  {
    id: 1,
    ruleName: 'Условия доставки и возврата ',
    text:
      'Доставка курьером не входит в стоимость аренды.\nДоставка до ПВЗ осуществляется в случае одобрения аренды до 18:00. В случае одобрения аренды после 18:00 доставка до ПВЗ осуществляется на следующий день в первой половине дня.\n' +
      'Самовывоз товаров осуществляется по адресу: г. Минск, ул. Интернациональная, 29А',
    features: ['Самовывоз', 'Доставка курьером', 'Доставка до ПВЗ'],
  },
  {
    id: 2,
    ruleName: 'Условия оплаты',
    text:
      'Доставка курьером не входит в стоимость аренды.\nДоставка до ПВЗ осуществляется в случае одобрения аренды до 18:00. В случае одобрения аренды после 18:00 доставка до ПВЗ осуществляется на следующий день в первой половине дня.\n' +
      'Самовывоз товаров осуществляется по адресу: г. Минск, ул. Интернациональная, 29А',
    features: ['Самовывоз', 'Доставка курьером', 'Доставка до ПВЗ'],
  },
  {
    id: 3,
    ruleName: 'Условия аренды',
    text:
      'Доставка курьером не входит в стоимость аренды.\nДоставка до ПВЗ осуществляется в случае одобрения аренды до 18:00. В случае одобрения аренды после 18:00 доставка до ПВЗ осуществляется на следующий день в первой половине дня.\n' +
      'Самовывоз товаров осуществляется по адресу: г. Минск, ул. Интернациональная, 29А',
    features: ['Самовывоз', 'Доставка курьером', 'Доставка до ПВЗ'],
  },
];

export const deliveryIcons = [
  {
    id: 1,
    icon: yandex,
  },
  {
    id: 2,
    icon: dpd,
  },
  {
    id: 3,
    icon: sdek,
  },
  {
    id: 4,
    icon: russiaMail,
  },
];
