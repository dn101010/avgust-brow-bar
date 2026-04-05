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

const icons: Record<string, string> = {
  "dolgovremennaya-ukladka": "✦",
  "arhitektura-brovej": "◇",
  "okrashivanie-brovej": "◐",
  "laminirovanie-resnic": "◡",
  "muzhskoe-oformlenie": "■",
  "osvetlenie-brovej": "☼",
  "combo-brovi-lami": "✶",
  "narashhivanie-resnic": "❂",
  "korrekciya-narashhivaniya": "✔",
  "snyatie-narashhivaniya": "✕",
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
              Профессиональный уход за бровями и ресницами
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1020px] mx-auto">
          {services.map((s) => (
            <FadeIn key={s.id}>
              <ServiceCard
                icon={icons[s.slug] || "●"}
                slug={s.slug}
                name={s.name}
                description={s.description}
                duration={s.duration}
              />
            </FadeIn>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
