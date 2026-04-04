export interface Service {
  id: string;
  slug: string;
  name: string;
  short: string;
  duration: string;
  priceFrom: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "dolgovremennaya-ukladka",
    slug: "dolgovremennaya-ukladka",
    name: "Долговременная укладка бровей",
    short: "Мягкие составы, 3-ступенчатый уход",
    duration: "60 мин",
    priceFrom: "по запросу",
    image: "/images/dolgovremennaya-ukladka.jpg",
    description:
      "Выполняется на мягких составах с трёхступенчатым уходом. Эффект сохраняется 4-6 недель. Подходит для непослушных бровей, создаёт эффект «причёсанных» волосков.",
  },
  {
    id: "arhitektura-brovej",
    slug: "arhitektura-brovej",
    name: "Архитектура бровей",
    short: "Гармоничная форма с окрашиванием",
    duration: "45-60 мин",
    priceFrom: "по запросу",
    image: "/images/arhitektura-brovej.jpg",
    description:
      "Создание гармоничной формы бровей под тип лица с окрашиванием. Индивидуальный подбор с учётом ваших пожеланий и особенностей.",
  },
  {
    id: "okrashivanie-brovej",
    slug: "okrashivanie-brovej",
    name: "Окрашивание бровей",
    short: "Графика, натуральные, тонирование, цветные",
    duration: "30-45 мин",
    priceFrom: "по запросу",
    image: "/images/okrashivanie-brovej.jpg",
    description:
      "Все виды окрашивания: графика, натуральное, тонирование, цветное. Краска — эффект теней, хна — эффект карандаша. Мастер подберёт оптимальный вариант под ваш цветотип и запрос.",
  },
  {
    id: "laminirovanie-resnic",
    slug: "laminirovanie-resnic",
    name: "Ламинирование ресниц",
    short: "С окрашиванием и 3-ступенчатым уходом",
    duration: "60-75 мин",
    priceFrom: "по запросу",
    image: "/images/laminirovanie-resnic.jpg",
    description:
      "Ламинирование ресниц с окрашиванием и тройным уходом. Процедура проходит на ортопедической кушетке с поддержкой поясницы и колен. Эффект — выразительный изгиб на 6-8 недель.",
  },
  {
    id: "muzhskoe-oformlenie",
    slug: "muzhskoe-oformlenie",
    name: "Мужское оформление бровей",
    short: "Аккуратная коррекция без лишнего",
    duration: "20-30 мин",
    priceFrom: "по запросу",
    image: "/images/muzhskoe-oformlenie.jpg",
    description:
      "Правильная коррекция для создания ухоженного мужского образа. Быстро, аккуратно, без лишнего. Подчёркивает мужественные черты лица.",
  },
  {
    id: "osvetlenie-brovej",
    slug: "osvetlenie-brovej",
    name: "Осветление бровей",
    short: "Химическое и механическое",
    duration: "30-45 мин",
    priceFrom: "по запросу",
    image: "/images/osvetlenie-brovej.jpg",
    description:
      "Химическое и механическое осветление бровей. Безопасные составы, индивидуальный подход к каждому клиенту.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
