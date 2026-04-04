import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import FadeIn from "@/components/FadeIn";
import { services, getServiceBySlug } from "@/data/services";
import { faqGeneral } from "@/data/faq";
import { contacts } from "@/data/contacts";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.name} в Москве | Avgust Brow Bar`,
    description: `${service.short}. Запись в студию Avgust, Хамовники, 5 мин от м. Фрунзенская.`,
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "BeautySalon",
      name: "Avgust Brow Bar",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Услуги", href: "/uslugi" },
            { label: service.name },
          ]}
        />
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary">
              {service.name}
            </h1>
            <div className="mt-6 flex items-center gap-6 text-text-muted">
              <span>{service.duration}</span>
              <span className="text-accent font-semibold text-lg">
                {service.priceFrom}
              </span>
            </div>
            <p className="mt-8 text-text-main text-lg leading-relaxed">
              {service.description}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <a
                href={contacts.yclients}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Записаться на {service.name.toLowerCase()}
              </a>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-20">
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">
                Частые вопросы
              </h2>
              <FAQ items={faqGeneral.slice(0, 4)} />
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
