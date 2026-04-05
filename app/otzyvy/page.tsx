import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Отзывы клиентов — Август, Москва",
  description: "Реальные отзывы с Яндекс.Карт.",
};

export default function OtzyvyPage() {
  return (
    <>
      <div className="max-w-[1020px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Отзывы" }]} />
      </div>

      <section className="py-16 lg:py-22 px-6">
        <div className="max-w-[1020px] mx-auto">
          <FadeIn>
            <p className="eyebrow mb-4">Отзывы</p>
            <h1
              className="heading-section"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Что говорят клиенты
            </h1>
            <p className="mt-4 font-body text-[16px] font-light text-stone max-w-[520px]">
              Все отзывы — реальные, с Яндекс.Карт. Мы не пишем отзывы вручную.
            </p>
          </FadeIn>

          <FadeIn>
            {/* Яндекс.Карты виджет отзывов */}
            <div className="mt-10 bg-white border border-petal rounded-md overflow-hidden">
              {/*
                Для подключения виджета:
                1. Зарегистрируйте организацию в Яндекс.Бизнесе
                2. Перейдите на карточку организации в Яндекс.Картах
                3. Нажмите «Поделиться» → «Виджет с отзывами»
                4. Замените этот div на полученный iframe-код
              */}
              <div className="py-24 px-6 text-center">
                <p className="font-display text-[22px] font-light text-ink mb-4">
                  Виджет отзывов Яндекс.Карт
                </p>
                <p className="font-body text-[14px] font-light text-stone max-w-md mx-auto leading-relaxed">
                  Для подключения виджета зарегистрируйте организацию в Яндекс.Бизнесе,
                  затем вставьте iframe-код виджета с отзывами.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-8 text-center">
              <p className="font-body text-[14px] font-light text-stone mb-4">
                Хотите оставить отзыв? Нам будет очень приятно.
              </p>
              {/* Замените # на ссылку на организацию в Яндекс.Картах */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-[14px] font-medium text-gold-hover hover:underline"
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
