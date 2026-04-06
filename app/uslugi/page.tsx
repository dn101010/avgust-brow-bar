import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import OptionalImage from "@/components/OptionalImage";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Услуги и цены — Август, Москва",
  description:
    "Долговременная укладка, архитектура, окрашивание бровей, ламинирование и наращивание ресниц. Хамовники, Москва.",
  openGraph: {
    title: "Услуги и цены — Август, Москва",
    description: "Долговременная укладка, архитектура, окрашивание бровей, ламинирование и наращивание ресниц. Хамовники, Москва.",
    url: "https://avgustbrows.ru/uslugi",
  },
  alternates: { canonical: "https://avgustbrows.ru/uslugi" },
};

export default function UslugiPage() {
  return (
    <>
      <div className="max-w-[1020px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Услуги" }]} />
      </div>

      <section className="py-[88px] px-6">
        <div className="text-center max-w-[520px] mx-auto mb-14">
          <FadeIn>
            <p className="eyebrow mb-[14px]">Услуги</p>
            <h1 className="heading-section mb-[14px]" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
              Все услуги студии
            </h1>
            <p className="text-[15px] font-light leading-[1.6] text-stone">
              Профессиональное оформление бровей и наращивание ресниц в Хамовниках. Запись к мастерам в Москве, 5 минут от метро Фрунзенская.
            </p>
          </FadeIn>
        </div>
        <div className="services-grid max-w-[1020px] mx-auto">
          {services.map((s) => (
            <FadeIn key={s.id}>
              <ServiceCard
                slug={s.slug}
                name={s.name}
                description={s.description}
                duration={s.duration}
              />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Результаты */}
      <section className="py-[88px] px-6 bg-warm-white">
        <div className="text-center max-w-[520px] mx-auto mb-14">
          <FadeIn>
            <p className="eyebrow mb-[14px]">Результаты</p>
            <h2 className="heading-section mb-[14px]" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
              Наши работы
            </h2>
          </FadeIn>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1020px] mx-auto">
          {Array.from({ length: 8 }, (_, i) => (
            <FadeIn key={i}>
              <OptionalImage
                src={`/images/portfolio/work-${String(i + 1).padStart(2, "0")}.jpg`}
                alt={`Работа ${i + 1}`}
                aspectRatio="1/1"
                radius="8px"
                placeholderText=""
              />
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
