import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";
import { contacts } from "@/data/contacts";

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

      <section className="py-16 lg:py-22 px-6">
        <div className="max-w-[640px] mx-auto">
          <FadeIn>
            <p className="eyebrow mb-4">Прайс</p>
            <h1
              className="heading-section"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Цены на услуги
            </h1>
          </FadeIn>

          <FadeIn>
            <h2 className="mt-12 font-display text-[22px] font-normal text-ink mb-4">
              Татьяна — брови и ламинирование
            </h2>
            <div className="bg-white rounded-md border border-petal overflow-hidden">
              {tatyana.map((s, i) => (
                <div
                  key={s.id}
                  className={`flex items-center justify-between px-6 py-5 ${i < tatyana.length - 1 ? "border-b border-linen" : ""}`}
                >
                  <div>
                    <p className="font-display text-[17px] font-normal text-ink">{s.name}</p>
                    <p className="font-body text-[12px] font-normal text-stone mt-1">{s.duration}</p>
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
            <div className="bg-white rounded-md border border-petal overflow-hidden">
              {maria.map((s, i) => (
                <div
                  key={s.id}
                  className={`flex items-center justify-between px-6 py-5 ${i < maria.length - 1 ? "border-b border-linen" : ""}`}
                >
                  <div>
                    <p className="font-display text-[17px] font-normal text-ink">{s.name}</p>
                    <p className="font-body text-[12px] font-normal text-stone mt-1">{s.duration}</p>
                  </div>
                  <p className="font-display text-[18px] font-light text-gold-hover whitespace-nowrap ml-4">
                    {s.price}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 text-center">
              <a
                href={contacts.yclients}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all"
              >
                Записаться онлайн
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
