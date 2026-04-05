import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Блог о бровях и ресницах — Август",
  description:
    "Полезные статьи об уходе за бровями и ресницами. Студия Август, Москва.",
};

export default function BlogPage() {
  return (
    <>
      <div className="max-w-[1020px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Блог" }]} />
      </div>

      <section className="py-16 lg:py-22 px-6">
        <div className="max-w-[1020px] mx-auto">
          <FadeIn>
            <p className="eyebrow mb-4">Блог</p>
            <h1
              className="heading-section"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Полезные статьи
            </h1>
            <p className="mt-4 font-body text-[16px] font-light text-stone max-w-[520px] leading-relaxed">
              Скоро здесь появятся статьи об уходе за бровями, трендах и советы от мастера.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-12 bg-white rounded-md border border-petal p-12 text-center">
              <p className="font-display text-[22px] font-light text-ink">
                Статьи готовятся
              </p>
              <p className="mt-3 font-body text-[14px] font-light text-stone">
                Подпишитесь на наш Telegram, чтобы не пропустить первую публикацию.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
