import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { services, getServiceBySlug } from "@/data/services";
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
    title: `${service.name} — ${service.price}`,
    description: `${service.description}. Запись в студию Август, Хамовники, 5 мин от м. Фрунзенская.`,
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
      name: "Август",
    },
    offers: {
      "@type": "Offer",
      price: service.price.replace(/[^\d]/g, ""),
      priceCurrency: "RUB",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="max-w-[1020px] mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: "Услуги", href: "/uslugi" },
            { label: service.name },
          ]}
        />
      </div>

      <section className="py-16 lg:py-22 px-6">
        <div className="max-w-[640px] mx-auto">
          {service.image && (
            <FadeIn>
              <div className="relative aspect-[16/9] rounded-md overflow-hidden mb-10">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          )}

          <FadeIn>
            <p className="eyebrow mb-4">
              Мастер {service.master}
            </p>
            <h1
              className="heading-section"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              {service.name}
            </h1>
            <div className="mt-6 flex items-center gap-6">
              <span className="font-body text-[13px] font-normal text-stone tracking-[0.3px]">
                {service.duration}
              </span>
              <span className="font-display text-[24px] font-light text-gold-hover">
                {service.price}
              </span>
            </div>
            <p className="mt-8 font-body text-[16px] font-light text-ink-soft leading-[1.65]">
              {service.description}
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <a
                href={contacts.yclients}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all"
              >
                Записаться к {service.master === "Татьяна" ? "Татьяне" : "Марии"}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
