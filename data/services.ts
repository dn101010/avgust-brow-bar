export interface Service {
  id: string;
  slug: string;
  name: string;
  master: string;
  duration: string;
  price: string;
  description: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: "dolgovremennaya-ukladka",
    slug: "dolgovremennaya-ukladka",
    name: "Долговременная укладка бровей",
    master: "Татьяна",
    duration: "70 мин",
    price: "3 900 ₽",
    description: "Мягкие составы, 3-ступенчатый уход, эффект 4-6 недель",
    image: "/images/dolgovremennaya-ukladka.jpg",
  },
  {
    id: "arhitektura-brovej",
    slug: "arhitektura-brovej",
    name: "Архитектура бровей",
    master: "Татьяна",
    duration: "45-60 мин",
    price: "2 900 ₽",
    description: "Создание гармоничной формы с окрашиванием под тип лица",
    image: "/images/arhitektura-brovej.jpg",
  },
  {
    id: "okrashivanie-brovej",
    slug: "okrashivanie-brovej",
    name: "Окрашивание бровей краской",
    master: "Татьяна",
    duration: "30-45 мин",
    price: "1 800 ₽",
    description: "Графика, натуральное, тонирование, цветное",
    image: "/images/okrashivanie-brovej.jpg",
  },
  {
    id: "laminirovanie-resnic",
    slug: "laminirovanie-resnic",
    name: "Ламинирование ресниц",
    master: "Татьяна",
    duration: "60-75 мин",
    price: "4 200 ₽",
    description: "С окрашиванием и 3-ступенчатым уходом, эффект 6-8 недель",
    image: "/images/laminirovanie-resnic.jpg",
  },
  {
    id: "muzhskoe-oformlenie",
    slug: "muzhskoe-oformlenie",
    name: "Мужское оформление бровей",
    master: "Татьяна",
    duration: "20-30 мин",
    price: "2 900 ₽",
    description: "Аккуратная коррекция, ухоженный образ",
    image: "/images/muzhskoe-oformlenie.jpg",
  },
  {
    id: "osvetlenie-brovej",
    slug: "osvetlenie-brovej",
    name: "Осветление бровей",
    master: "Татьяна",
    duration: "45-90 мин",
    price: "4 200–4 700 ₽",
    description: "Химическое и механическое, безопасные составы",
    image: "/images/osvetlenie-brovej.jpg",
  },
  {
    id: "combo-brovi-lami",
    slug: "combo-brovi-lami",
    name: "Комбо: брови + ламинирование ресниц",
    master: "Татьяна",
    duration: "~120 мин",
    price: "7 500 ₽",
    description: "Комплекс + удаление пушка над губой бонусом",
  },
  {
    id: "narashhivanie-resnic",
    slug: "narashhivanie-resnic",
    name: "Наращивание ресниц",
    master: "Мария",
    duration: "~120 мин",
    price: "3 000 ₽",
    description: "Любой эффект и изгиб, натуральные техники до 2D. Эффекты: лисий, стрелка, эффект лами",
  },
  {
    id: "korrekciya-narashhivaniya",
    slug: "korrekciya-narashhivaniya",
    name: "Коррекция наращивания (наше)",
    master: "Мария",
    duration: "60-90 мин",
    price: "2 000 ₽",
    description: "Коррекция в течение месяца после наращивания",
  },
  {
    id: "snyatie-narashhivaniya",
    slug: "snyatie-narashhivaniya",
    name: "Снятие чужого наращивания",
    master: "Мария",
    duration: "30-45 мин",
    price: "500 ₽",
    description: "Безопасное снятие",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
