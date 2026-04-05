import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";
import { brand, atmosphere, contacts } from "@/data/contacts";

export const metadata: Metadata = {
  title: "Август — Студия бровей и ресниц в Хамовниках, Москва",
  description:
    "Оформление бровей, ламинирование ресниц, наращивание. 5 мин от м. Фрунзенская. Онлайн-запись, бесплатная парковка.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Услуги */}
      <section className="bg-cream py-22 px-6">
        <div className="max-w-[1020px] mx-auto">
          <FadeIn>
            <p className="eyebrow mb-4">Услуги</p>
            <h2
              className="heading-section"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Что мы делаем
            </h2>
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <FadeIn key={service.id}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Атмосфера */}
      <section className="bg-ink py-22 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(197,164,126,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-[1020px] mx-auto relative z-10">
          <FadeIn>
            <p className="eyebrow mb-4">Атмосфера</p>
            <h2
              className="font-display font-light text-white leading-[1.15]"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Больше, чем процедура
            </h2>
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {atmosphere.map((item, i) => (
              <FadeIn key={i}>
                <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(197,164,126,0.12)] rounded-md p-6 hover:bg-[rgba(197,164,126,0.05)] hover:border-[rgba(197,164,126,0.25)] transition-all">
                  <p className="font-display text-[17px] font-normal text-white mt-3">
                    {item.title}
                  </p>
                  <p className="font-body text-[13px] font-light text-[rgba(255,255,255,0.40)] mt-2">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* О мастере */}
      <section className="bg-warm-white py-22 px-6">
        <div className="max-w-[1020px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-linen to-petal flex items-center justify-center">
                  <span className="font-body text-[13px] text-stone">Фото мастера</span>
                </div>
                <div className="absolute -inset-[10px] border border-bloom/40 rounded-[14px] pointer-events-none" />
              </div>
            </FadeIn>
            <FadeIn>
              <p className="eyebrow mb-4">О мастере</p>
              <h2 className="font-display text-[34px] font-light text-ink leading-[1.20]">
                {brand.owner}
              </h2>
              <p className="mt-5 font-body text-[15px] font-light text-ink-soft leading-[1.65]">
                Основатель студии Август. Специализация — натуральный результат, который подчёркивает вашу индивидуальность.
              </p>
              <ul className="mt-6 space-y-3">
                {brand.credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-gold-light flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C5A47E" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span className="font-body text-[14px] font-light text-ink-soft">{cred}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/about"
                className="mt-8 inline-block font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all"
              >
                Подробнее
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="bg-cream py-22 px-6">
        <div className="max-w-[1020px] mx-auto">
          <FadeIn>
            <p className="eyebrow mb-4">Отзывы</p>
            <h2
              className="heading-section"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Что говорят клиенты
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="mt-10 bg-white border border-petal rounded-md p-6 text-center">
              <p className="font-body text-[14px] font-light text-stone">
                Виджет отзывов с Яндекс.Карт. Для подключения зарегистрируйте организацию в Яндекс.Бизнесе и вставьте iframe-код виджета.
              </p>
              <a
                href="/otzyvy"
                className="mt-4 inline-block font-body text-[14px] font-medium text-gold-hover hover:underline"
              >
                Все отзывы →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Обучение промо */}
      <section className="bg-warm-white py-22 px-6">
        <div className="max-w-[1020px] mx-auto text-center">
          <FadeIn>
            <p className="eyebrow mb-4">Обучение</p>
            <h2
              className="heading-section"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Бьюти формула
            </h2>
            <p className="mt-4 font-body text-[16px] font-light text-stone max-w-[520px] mx-auto leading-relaxed">
              Авторские курсы от Татьяны: профессия бровист с нуля, ламинирование ресниц, повышение квалификации. Индивидуально, с портфолио.
            </p>
            <a
              href="/courses"
              className="mt-8 inline-block font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all"
            >
              Подробнее о курсах
            </a>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
