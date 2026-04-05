import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Отзывы клиентов — Август, Москва",
  description:
    "Реальные отзывы клиентов студии Август с Яндекс.Карт. Оформление бровей, ламинирование ресниц, Хамовники.",
};

export default function OtzyvyPage() {
  return (
    <>
      <div className="max-w-[1020px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Отзывы" }]} />
      </div>

      <section className="py-[88px] px-6">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center max-w-[520px] mx-auto mb-14">
            <FadeIn>
              <p className="eyebrow mb-[14px]">Отзывы</p>
              <h1
                className="heading-section mb-[14px]"
                style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
              >
                Что говорят клиенты
              </h1>
              <p className="text-[15px] font-light leading-[1.6] text-stone">
                Все отзывы — реальные, с Яндекс.Карт
              </p>
            </FadeIn>
          </div>

          {/* Яндекс.Карты виджет отзывов */}
          <FadeIn>
            <div className="relative w-full overflow-hidden rounded-lg" style={{ height: 800 }}>
              <iframe
                src="https://yandex.ru/maps-reviews-widget/104937461813?comments"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid #E8DFD4",
                  borderRadius: 8,
                  boxSizing: "border-box",
                }}
                title="Отзывы студии Август на Яндекс.Картах"
                loading="lazy"
              />
              <a
                href="https://yandex.ru/maps/org/avgust/104937461813/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-0 w-full text-center text-[10px] text-stone/50 hover:text-stone transition-colors"
                style={{ fontFamily: "YS Text, sans-serif" }}
              >
                Август на карте Москвы — Яндекс Карты
              </a>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 text-center">
              <p className="text-[14px] font-light text-stone mb-4">
                Хотите оставить отзыв? Нам будет очень приятно.
              </p>
              <a
                href="https://yandex.ru/maps/org/avgust/104937461813/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[14px] font-medium text-gold-hover hover:underline"
              >
                Оставить отзыв на Яндекс.Картах →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
