import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import OptionalImage from "@/components/OptionalImage";
import { brand, atmosphere, contacts } from "@/data/contacts";

export const metadata: Metadata = {
  title: "Август — Студия бровей и ресниц в Хамовниках, Москва",
  description:
    "Оформление бровей, ламинирование ресниц, наращивание. 5 мин от м. Фрунзенская. Онлайн-запись, бесплатная парковка.",
};

const homeServices = [
  { icon: "✦", slug: "dolgovremennaya-ukladka", name: "Долговременная укладка", description: "Мягкие составы с трёхступенчатым уходом. Эффект «причёсанных» бровей 4-6 недель.", duration: "70 мин" },
  { icon: "◇", slug: "arhitektura-brovej", name: "Архитектура бровей", description: "Гармоничная форма под тип лица с окрашиванием. Индивидуальный подбор.", duration: "45-60 мин" },
  { icon: "◐", slug: "okrashivanie-brovej", name: "Окрашивание бровей", description: "Хна, краска, графика, тонирование. Подберу под цветотип и запрос.", duration: "30-45 мин" },
  { icon: "◡", slug: "laminirovanie-resnic", name: "Ламинирование ресниц", description: "Эффект подкрученных ресниц без наращивания. Натуральность 6-8 недель.", duration: "60-75 мин" },
  { icon: "■", slug: "muzhskoe-oformlenie", name: "Мужское оформление", description: "Аккуратно убираю лишнее, сохраняя мужественность. Без нарисованных бровей.", duration: "20-30 мин" },
  { icon: "☼", slug: "osvetlenie-brovej", name: "Осветление бровей", description: "Для тех, кто хочет смягчить темные брови. Знание колористики.", duration: "45-90 мин" },
  { icon: "✶", slug: "combo-brovi-lami", name: "Комбо: брови + ресницы", description: "Комплекс + удаление пушка над губой бонусом.", duration: "~120 мин" },
  { icon: "❂", slug: "narashhivanie-resnic", name: "Наращивание ресниц", description: "Мастер Мария. Любой эффект и изгиб, натуральные техники до 2D.", duration: "~120 мин" },
  { icon: "✔", slug: "korrekciya-narashhivaniya", name: "Коррекция наращивания", description: "Коррекция нашего наращивания в течение месяца.", duration: "60-90 мин" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Услуги */}
      <section className="py-[88px] px-6">
        <div className="text-center max-w-[520px] mx-auto mb-14">
          <FadeIn>
            <p className="eyebrow mb-[14px]">Услуги</p>
            <h2 className="heading-section mb-[14px]" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
              Каждая бровь —<br />индивидуальный подход
            </h2>
            <p className="text-[15px] font-light leading-[1.6] text-stone">
              Подбираю технику и материалы под ваш тип лица, цветотип и пожелания
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1020px] mx-auto">
          {homeServices.map((s) => (
            <FadeIn key={s.slug}>
              <ServiceCard {...s} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Атмосфера */}
      <section className="bg-ink relative overflow-hidden py-[88px] px-6">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(197,164,126,0.07) 0%, transparent 50%)" }}
        />
        <div className="text-center max-w-[520px] mx-auto mb-14 relative">
          <FadeIn>
            <p className="eyebrow mb-[14px]">Пространство</p>
            <h2 className="font-display text-white leading-[1.15] mb-[14px]" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 300 }}>
              Не просто процедура —<br />ваш ритуал
            </h2>
            <p className="text-[15px] font-light leading-[1.6] text-[rgba(255,255,255,0.45)]">
              Каждая деталь студии создана для вашего комфорта
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1020px] mx-auto relative">
          {atmosphere.map((item, i) => (
            <FadeIn key={i}>
              <div className="border border-[rgba(197,164,126,0.12)] rounded-lg bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(197,164,126,0.05)] hover:border-[rgba(197,164,126,0.25)] transition-all duration-[350ms] overflow-hidden">
                <OptionalImage
                  src={item.image}
                  alt={item.title}
                  aspectRatio="4/3"
                  radius="0"
                  placeholderText="Фото скоро"
                  dark
                />
                <div className="p-5">
                  <h3 className="font-display text-[17px] font-normal text-white mb-[6px]">{item.title}</h3>
                  <p className="text-[13px] font-light leading-[1.5] text-[rgba(255,255,255,0.4)]">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* О мастере */}
      <section className="bg-warm-white py-[88px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1020px] mx-auto items-center">
          <FadeIn>
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden">
                <OptionalImage
                  src="/images/team/tatyana.jpg"
                  alt="Татьяна Шублетова — бровист-эксперт"
                  aspectRatio="4/5"
                  radius="12px"
                  placeholderText="Фото Татьяны"
                />
              </div>
              <div className="absolute -inset-[10px] border border-bloom/40 rounded-[14px] pointer-events-none" />
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <p className="eyebrow mb-[14px]">Мастер</p>
              <h2 className="font-display text-[34px] font-light leading-[1.2] text-ink mb-5">
                Татьяна Шублетова
              </h2>
              <p className="text-[15px] font-light leading-[1.7] text-[#4A4440] mb-7">
                Я люблю брови. Не абстрактно — я люблю разбираться в химии составов, подбирать форму под геометрию лица и видеть, как человек меняется, когда видит результат.
              </p>
              <div className="flex flex-col gap-[10px] mb-8">
                {brand.credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-[10px] text-[14px] font-light text-[#4A4440] leading-[1.45]">
                    <span className="shrink-0 w-[18px] h-[18px] flex items-center justify-center bg-[rgba(197,164,126,0.12)] rounded-full mt-[2px] text-gold-hover text-[10px]">✓</span>
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
              <a
                href={contacts.yclients}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[14px] font-medium py-[13px] px-8 bg-gold text-white rounded-sm hover:bg-gold-hover hover:shadow-gold-glow transition-all"
              >
                Записаться к Татьяне
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Мария — зеркальный layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1020px] mx-auto items-center mt-16">
          <FadeIn>
            <div className="md:order-2 relative">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden">
                <OptionalImage
                  src="/images/team/mariya.jpg"
                  alt="Мария — мастер по наращиванию ресниц"
                  aspectRatio="4/5"
                  radius="12px"
                  placeholderText="Фото Марии"
                />
              </div>
              <div className="absolute -inset-[10px] border border-bloom/40 rounded-[14px] pointer-events-none" />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="md:order-1">
              <p className="eyebrow mb-[14px]">Мастер</p>
              <h2 className="font-display text-[34px] font-light leading-[1.2] text-ink mb-5">
                Мария
              </h2>
              <p className="text-[15px] font-light leading-[1.7] text-[#4A4440] mb-7">
                Мастер по наращиванию ресниц. Работаю только в натуральных техниках до 2D. Эффекты: лисий, стрелка, эффект лами.
              </p>
              <a
                href={contacts.yclients}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[14px] font-medium py-[13px] px-8 bg-gold text-white rounded-sm hover:bg-gold-hover hover:shadow-gold-glow transition-all"
              >
                Записаться к Марии
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
