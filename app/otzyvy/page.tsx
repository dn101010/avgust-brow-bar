import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Отзывы клиентов Avgust Brow Bar | Брови и ресницы Москва",
  description:
    "Реальные отзывы клиентов. Более 4000 оформленных бровей. Результаты и запись онлайн.",
};

export default function OtzyvyPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Отзывы" }]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary text-center">
              Отзывы клиентов
            </h1>
            <p className="mt-4 text-text-muted text-center text-lg max-w-2xl mx-auto">
              Более 4000 оформленных бровей. Вот что говорят наши клиенты.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <FadeIn key={review.id}>
                <TestimonialCard review={review} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Хотите такой же результат?"
        subtitle="Запишитесь на процедуру и убедитесь сами"
      />
    </>
  );
}
