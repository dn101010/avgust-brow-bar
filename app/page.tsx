import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import { faqGeneral } from "@/data/faq";
import { brand, atmosphere, contacts } from "@/data/contacts";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Натуральные брови и ресницы в Хамовниках"
        subtitle="Профессиональное оформление бровей и ламинирование ресниц. 4000+ довольных клиентов, 5 минут от м. Фрунзенская."
      />

      {/* Преимущества */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center">
              Почему выбирают Avgust
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {brand.credentials.map((cred, i) => (
              <FadeIn key={i}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A47E" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-text-main font-medium text-sm">{cred}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-20 lg:py-28 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center">
              Услуги
            </h2>
            <p className="mt-4 text-text-muted text-center text-lg max-w-2xl mx-auto">
              Профессиональный уход за бровями и ресницами с использованием мягких составов
            </p>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <FadeIn key={service.id}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Атмосфера */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center">
              Атмосфера студии
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {atmosphere.map((item, i) => (
              <FadeIn key={i}>
                <div className="bg-white rounded-2xl p-6 border border-border text-center">
                  <p className="text-text-main text-sm">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 lg:py-28 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center">
              Отзывы клиентов
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <FadeIn key={review.id}>
                <TestimonialCard review={review} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
              Частые вопросы
            </h2>
          </FadeIn>
          <FadeIn>
            <FAQ items={faqGeneral} />
          </FadeIn>
        </div>
      </section>

      {/* Как добраться */}
      <section className="py-20 lg:py-28 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary text-center">
              Как добраться
            </h2>
            <p className="mt-4 text-text-muted text-center text-lg">
              Хамовники, 5 минут от м. Фрунзенская. Бесплатный паркинг.
            </p>
          </FadeIn>
          <div className="mt-8 rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://yandex.ru/map-widget/v1/?pt=37.5780,55.7282&z=16&l=map"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Расположение студии Avgust Brow Bar"
            />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center text-center">
            <a
              href={contacts.phonePrimaryHref}
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              {contacts.phonePrimary}
            </a>
            <a
              href={`mailto:${contacts.email}`}
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              {contacts.email}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqGeneral.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
