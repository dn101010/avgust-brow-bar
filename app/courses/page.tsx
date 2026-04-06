import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { coursePrograms, faqCourses } from "@/data/faq";
import { contacts } from "@/data/contacts";

export const metadata: Metadata = {
  title: "Обучение бровистов — Бьюти формула, Москва",
  description:
    "Курсы бровиста с нуля и повышение квалификации. Индивидуально, с портфолио. От 20 000 ₽.",
  openGraph: {
    title: "Обучение бровистов — Бьюти формула, Москва",
    description: "Курсы бровиста с нуля и повышение квалификации. Индивидуально, с портфолио. От 20 000 ₽.",
    url: "https://avgustbrows.ru/courses",
  },
  alternates: { canonical: "https://avgustbrows.ru/courses" },
};

export default function CoursesPage() {
  const brovist = coursePrograms.find((c) => c.id === "brovist")!;
  const lami = coursePrograms.find((c) => c.id === "lami")!;
  const upgrade = coursePrograms.find((c) => c.id === "upgrade")!;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCourses.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-[1020px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Обучение" }]} />
      </div>

      <section className="py-[88px] px-6">
        <div className="max-w-[1020px] mx-auto">
          <div className="text-center max-w-[520px] mx-auto mb-14">
            <FadeIn>
              <p className="eyebrow mb-[14px]">Обучение</p>
              <h1
                className="heading-section mb-[14px]"
                style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
              >
                Бьюти формула
              </h1>
              <p className="text-[15px] font-light leading-[1.6] text-stone">
                Авторские курсы от Татьяны Шублетовой. Индивидуальный подход, создание портфолио, поддержка после обучения.
              </p>
            </FadeIn>
          </div>

          {/* Профессия бровист */}
          <FadeIn>
            <div className="mt-16 bg-white rounded-md border border-petal p-8 sm:p-10">
              <p className="eyebrow mb-3">{brovist.target}</p>
              <h2 className="font-display text-[28px] font-light text-ink leading-[1.15]">
                {brovist.name}
              </h2>
              <p className="mt-3 font-body text-[15px] font-light text-stone leading-relaxed">
                {brovist.format}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 font-body text-[13px]">
                <span className="text-gold-hover font-medium">от {brovist.priceFrom}</span>
                {brovist.installment && <span className="text-stone">Рассрочка</span>}
                {brovist.certificate && <span className="text-stone">Сертификат</span>}
                <span className="text-stone">{brovist.groupSize}</span>
              </div>

              {brovist.features && (
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {brovist.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 rounded-full bg-gold-light flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#C5A47E" strokeWidth="3">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span className="font-body text-[14px] font-light text-ink-soft">{f}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Тарифы */}
              {brovist.tiers && (
                <div className="mt-10">
                  <h3 className="font-display text-[20px] font-normal text-ink mb-4">Тарифы</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {brovist.tiers.map((tier) => (
                      <div key={tier.name} className="border border-petal rounded-md p-6 hover:border-bloom transition-colors">
                        <p className="font-display text-[18px] font-normal text-ink">{tier.name}</p>
                        <p className="font-body text-[12px] font-normal text-stone mt-1">{tier.days}</p>
                        <p className="font-body text-[14px] font-light text-ink-soft mt-3">{tier.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Ламинирование */}
          <FadeIn>
            <div className="mt-8 bg-white rounded-md border border-petal p-8 sm:p-10">
              <p className="eyebrow mb-3">{lami.target}</p>
              <h2 className="font-display text-[28px] font-light text-ink leading-[1.15]">
                {lami.name}
              </h2>
            </div>
          </FadeIn>

          {/* Повышение квалификации */}
          <FadeIn>
            <div className="mt-8 bg-white rounded-md border border-petal p-8 sm:p-10">
              <p className="eyebrow mb-3">{upgrade.target}</p>
              <h2 className="font-display text-[28px] font-light text-ink leading-[1.15]">
                {upgrade.name}
              </h2>
              {upgrade.format && (
                <p className="mt-3 font-body text-[15px] font-light text-stone leading-relaxed">
                  {upgrade.format}
                </p>
              )}
              {upgrade.topics && (
                <p className="mt-2 font-body text-[14px] font-light text-ink-soft">
                  Темы: {upgrade.topics}
                </p>
              )}

              {upgrade.tiers && (
                <div className="mt-8">
                  <h3 className="font-display text-[20px] font-normal text-ink mb-4">Тарифы</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {upgrade.tiers.map((tier) => (
                      <div key={tier.name} className="border border-petal rounded-md p-6 hover:border-bloom transition-colors">
                        <p className="font-display text-[18px] font-normal text-ink">{tier.name}</p>
                        <p className="font-body text-[12px] font-normal text-stone mt-1">{tier.days}</p>
                        <p className="font-body text-[14px] font-light text-ink-soft mt-3">{tier.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Записаться */}
          <FadeIn>
            <div className="mt-12 text-center">
              <p className="font-body text-[15px] font-light text-stone mb-4">
                Запись на курс — через Telegram или WhatsApp
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all"
                >
                  Написать в Telegram
                </a>
                <a
                  href={contacts.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[14px] font-medium tracking-[0.4px] text-gold-hover border border-gold rounded-sm px-8 py-[13px] hover:bg-gold hover:text-white transition-all"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>

          {/* FAQ */}
          <FadeIn>
            <div className="mt-20">
              <p className="eyebrow mb-4">Вопросы</p>
              <h2
                className="heading-section mb-10"
                style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
              >
                Частые вопросы учеников
              </h2>
              <FAQ items={faqCourses} />
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
