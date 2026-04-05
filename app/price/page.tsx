import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Цены — Август, Москва",
  description:
    "Актуальный прайс: оформление бровей от 1800₽, ламинирование ресниц 4200₽, наращивание 3000₽.",
};

export default function PricePage() {
  const tatyana = services.filter((s) => s.master === "Татьяна");
  const maria = services.filter((s) => s.master === "Мария");

  return (
    <>
      <div className="max-w-[1020px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Цены" }]} />
      </div>

      <section className="py-[88px] px-6">
        <div className="text-center max-w-[520px] mx-auto mb-14">
          <FadeIn>
            <p className="eyebrow mb-[14px]">Прайс</p>
            <h1 className="heading-section mb-[14px]" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
              Цены на услуги
            </h1>
          </FadeIn>
        </div>

        <div className="max-w-[640px] mx-auto">
          <FadeIn>
            <h2 className="font-display text-[22px] font-normal text-ink mb-4">
              Татьяна — брови и ламинирование
            </h2>
            <div className="bg-white rounded-lg border border-petal overflow-hidden">
              {tatyana.map((s, i) => (
                <div
                  key={s.id}
                  className={`flex items-center justify-between px-6 py-5 ${i < tatyana.length - 1 ? "border-b border-linen" : ""}`}
                >
                  <div>
                    <p className="font-display text-[17px] font-normal text-ink">{s.name}</p>
                    <p className="text-[12px] font-normal text-stone mt-1">{s.duration}</p>
                  </div>
                  <p className="font-display text-[18px] font-light text-gold-hover whitespace-nowrap ml-4">
                    {s.price}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="mt-12 font-display text-[22px] font-normal text-ink mb-4">
              Мария — наращивание ресниц
            </h2>
            <div className="bg-white rounded-lg border border-petal overflow-hidden">
              {maria.map((s, i) => (
                <div
                  key={s.id}
                  className={`flex items-center justify-between px-6 py-5 ${i < maria.length - 1 ? "border-b border-linen" : ""}`}
                >
                  <div>
                    <p className="font-display text-[17px] font-normal text-ink">{s.name}</p>
                    <p className="text-[12px] font-normal text-stone mt-1">{s.duration}</p>
                  </div>
                  <p className="font-display text-[18px] font-light text-gold-hover whitespace-nowrap ml-4">
                    {s.price}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
