export const contacts = {
  phonePrimary: "+7 (999) 563-76-12",
  phonePrimaryHref: "tel:+79995637612",
  email: "shubletovabrows@yandex.ru",
  telegram: "https://t.me/avgust_brows",
  whatsapp: "https://wa.me/message/5GXN3D3JUVQ5P1",
  yclients: "https://n1330893.yclients.com",
  yclientsMax: "+79995637612",
  legal: "ИП Шублетова Т.В.",
  inn: "663905966030",
} as const;

export const location = {
  address: "Фрунзенская набережная 30с5",
  floor: "2 этаж, 205 кабинет",
  landmark: "Ориентир для входа в здание — офис Озон",
  district: "Хамовники",
  city: "Москва",
  metro: "Фрунзенская",
  metroWalk: "5 минут",
  parking: "Бесплатная на территории",
  hours: "12:00–21:00 по предварительной записи",
  lat: 55.7282,
  lng: 37.578,
} as const;

export const brand = {
  name: "Август",
  tagline: "Студия бровей и ресниц в Хамовниках",
  owner: "Татьяна Шублетова",
  secondMaster: "Мария",
  credentials: [
    "5000+ оформленных бровей",
    "10+ повышений квалификации у топов индустрии",
    "5 лет в бьюти",
    "Обучаю мастеров по авторской методике более 3 лет",
    "Глубокое знание химии составов, колористики, типажей и анатомии",
  ],
} as const;

export const trustItems = [
  { number: "5000+", label: "оформленных бровей" },
  { number: "10+", label: "повышений квалификации" },
  { number: "5 лет", label: "в бьюти" },
  { number: "5 мин", label: "от м. Фрунзенская" },
] as const;

export const atmosphere = [
  { icon: "coffee", title: "Зерновой кофе", description: "Сезонные авторские напитки" },
  { icon: "cake", title: "Правильные сладости", description: "Ягоды, шоколад, угощения" },
  { icon: "sofa", title: "Ортопедическая кушетка", description: "Комфорт для ламинирования" },
  { icon: "quiet", title: "Ваше пространство", description: "Открыта для разговора, но уважаю тишину" },
] as const;

export const domain =
  process.env.NEXT_PUBLIC_DOMAIN || "https://avgustbrows.ru";
