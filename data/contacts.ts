export const contacts = {
  phonePrimary: "+7 (995) 895-75-80",
  phonePrimaryHref: "tel:+79958957580",
  phoneSecondary: "+7 (960) 079-20-90",
  phoneSecondaryHref: "tel:+79600792090",
  email: "shubletovabrows@yandex.ru",
  telegram: "https://t.me/shubletova_brows",
  whatsapp: "https://wa.me/9958957580",
  yclients: "https://n1330893.yclients.com",
  coursesUrl: "https://shubletovabrows.ru",
  inn: "663905966030",
  legal: "ИП Шублетова Т.В.",
} as const;

export const location = {
  district: "Хамовники",
  city: "Москва",
  metro: "Фрунзенская",
  metroWalk: "5 минут",
  parking: "Бесплатный паркинг на территории",
  lat: 55.7282,
  lng: 37.578,
} as const;

export const brand = {
  name: "Avgust Brow Bar",
  tagline: "Натуральные брови и ресницы в Хамовниках",
  owner: "Татьяна Шублетова",
  credentials: [
    "4000+ оформленных бровей",
    "10+ повышений у топов рынка (Kris Black, Евгения Устюгова, Анастасия Тихонова)",
    "Призёр международного чемпионата",
    "3+ лет в бьюти, знание химии и колористики",
  ],
} as const;

export const atmosphere = [
  "Зерновой кофе и сезонные авторские напитки",
  "Правильные сладости, ягоды, шоколад",
  "Ортопедическая кушетка (для ламинирования)",
  "Комфортное, продуманное пространство",
  "Ненавязчивое общение — открыта для разговора, но уважаю тишину",
  "Клиентские дни с подарками",
] as const;

export const domain =
  process.env.NEXT_PUBLIC_DOMAIN || "https://avgustbrows.ru";
