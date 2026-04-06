import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import OptionalImage from "@/components/OptionalImage";
import { brand, contacts } from "@/data/contacts";

export const metadata: Metadata = {
  title: "О мастерах — Август, Хамовники",
  description:
    "Татьяна Шублетова: 5000+ бровей, 5 лет опыта. Мария: наращивание ресниц в натуральных техниках.",
  openGraph: {
    title: "О мастерах — Август, Хамовники",
    description: "Татьяна Шублетова: 5000+ бровей, 5 лет опыта. Мария: наращивание ресниц в натуральных техниках.",
    url: "https://avgustbrows.ru/about",
  },
  alternates: { canonical: "https://avgustbrows.ru/about" },
};

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: brand.owner,
    jobTitle: "Бровист-эксперт",
    worksFor: {
      "@type": "BeautySalon",
      name: brand.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="max-w-[1020px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "О мастерах" }]} />
      </div>

      <section className="py-[88px] px-6">
        <div className="max-w-[1020px] mx-auto">
          <div className="text-center max-w-[520px] mx-auto mb-14">
            <FadeIn>
              <p className="eyebrow mb-[14px]">О мастерах</p>
              <h1 className="heading-section mb-[14px]" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
                Наша команда
              </h1>
            </FadeIn>
          </div>

          {/* Татьяна */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <OptionalImage
                  src="/images/team/tatyana.jpg"
                  alt="Татьяна Шублетова"
                  aspectRatio="4/5"
                  radius="8px"
                  placeholderText="Фото Татьяны"
                />
                <div className="absolute -inset-[10px] border border-bloom/40 rounded-[14px] pointer-events-none" />
              </div>
            </FadeIn>
            <FadeIn>
              <p className="eyebrow mb-4">Основатель студии</p>
              <h2 className="font-display text-[34px] font-light text-ink leading-[1.20]">
                {brand.owner}
              </h2>
              <div className="mt-6 space-y-4 font-body text-[15px] font-light text-ink-soft leading-[1.65]">
                <p>
                  Основатель студии Август. Моя специализация — натуральный результат,
                  который подчёркивает вашу индивидуальность, а не маскирует её.
                </p>
                <p>
                  За 5 лет в индустрии я прошла более 10 повышений квалификации у топовых мастеров.
                  Глубокое знание химии составов, колористики и анатомии позволяет подбирать
                  идеальные решения для каждого клиента.
                </p>
                <p>
                  Помимо работы с клиентами, я обучаю мастеров по авторской методике «Бьюти формула»
                  уже более 3 лет.
                </p>
              </div>
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
                href={contacts.yclients}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all"
              >
                Записаться к Татьяне
              </a>
            </FadeIn>
          </div>

          {/* Мария */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="md:order-2 relative">
                <OptionalImage
                  src="/images/team/mariya.jpg"
                  alt="Мария"
                  aspectRatio="4/5"
                  radius="8px"
                  placeholderText="Фото Марии"
                />
                <div className="absolute -inset-[10px] border border-bloom/40 rounded-[14px] pointer-events-none" />
              </div>
            </FadeIn>
            <FadeIn>
              <p className="eyebrow mb-4">Мастер по ресницам</p>
              <h2 className="font-display text-[34px] font-light text-ink leading-[1.20]">
                Мария
              </h2>
              <div className="mt-6 space-y-4 font-body text-[15px] font-light text-ink-soft leading-[1.65]">
                <p>
                  Мастер по наращиванию ресниц в студии Август. Натуральные техники до 2D —
                  лисий эффект, стрелка, эффект лами. Каждая работа выглядит естественно
                  и подчёркивает ваш взгляд.
                </p>
              </div>
              <a
                href={contacts.yclients}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all"
              >
                Записаться к Марии
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
