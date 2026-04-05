import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Услуги студии Август — Брови и ресницы Москва",
  description:
    "Все услуги: укладка, архитектура, окрашивание, ламинирование, наращивание ресниц, мужское оформление. Хамовники.",
};

export default function UslugiPage() {
  const tatyana = services.filter((s) => s.master === "Татьяна");
  const maria = services.filter((s) => s.master === "Мария");

  return (
    <>
      <div className="max-w-[1020px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Услуги" }]} />
      </div>

      <section className="py-16 lg:py-22 px-6">
        <div className="max-w-[1020px] mx-auto">
          <FadeIn>
            <p className="eyebrow mb-4">Услуги</p>
            <h1
              className="heading-section"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Все услуги студии
            </h1>
          </FadeIn>

          <FadeIn>
            <h2 className="mt-14 font-display text-[24px] font-light text-ink mb-6">
              Мастер Татьяна — брови и ламинирование
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tatyana.map((s) => (
              <FadeIn key={s.id}>
                <ServiceCard service={s} />
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <h2 className="mt-16 font-display text-[24px] font-light text-ink mb-6">
              Мастер Мария — наращивание ресниц
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {maria.map((s) => (
              <FadeIn key={s.id}>
                <ServiceCard service={s} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
