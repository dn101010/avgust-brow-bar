import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { brand, contacts } from "@/data/contacts";

export const metadata: Metadata = {
  title: "О мастере Татьяне | Эксперт по бровям | Avgust Brow Bar",
  description:
    "Татьяна — бровист с опытом 4000+ работ, призёр международного чемпионата. Знание химии и колористики.",
};

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: brand.owner,
    jobTitle: "Бровист-эксперт",
    worksFor: {
      "@type": "BeautySalon",
      name: brand.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "О мастере" }]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary">
              {brand.owner}
            </h1>
            <p className="mt-2 text-accent text-lg font-medium">
              Основатель Avgust Brow Bar
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 space-y-6 text-text-main text-lg leading-relaxed">
              <p>
                Я — Татьяна, бровист с опытом более 4000 оформленных бровей.
                Моя специализация — натуральный результат, который подчёркивает
                вашу индивидуальность, а не маскирует её.
              </p>
              <p>
                За плечами — более 10 повышений у топовых мастеров рынка: Kris Black,
                Евгения Устюгова, Анастасия Тихонова. Я — призёр международного
                чемпионата по оформлению бровей.
              </p>
              <p>
                Моё образование включает глубокое знание химии и колористики —
                я понимаю, как работают составы и красители на молекулярном уровне.
                Это позволяет подбирать идеальные решения для каждого клиента.
              </p>
              <p>
                В студии Avgust я создала пространство, где каждая деталь продумана
                для вашего комфорта: от ортопедической кушетки до зернового кофе.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-12">
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                Достижения и квалификация
              </h2>
              <ul className="space-y-4">
                {brand.credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C5A47E"
                      strokeWidth="2"
                      className="shrink-0 mt-0.5"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-text-main">{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-12">
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">
                Обучение
              </h2>
              <p className="text-text-main text-lg leading-relaxed">
                Помимо работы с клиентами, я обучаю начинающих мастеров.
                Подробнее о курсах —{" "}
                <a
                  href={contacts.coursesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover underline transition-colors"
                >
                  shubletovabrows.ru
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
