import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import OptionalImage from "@/components/OptionalImage";
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
  const title = `${service.name} — ${service.price} — Август, Москва`;
  const description = `${service.description}. Запись в студию Август, Хамовники, 5 мин от м. Фрунзенская.`;
  const url = `https://avgustbrows.ru/uslugi/${params.slug}`;
  return {
    title,
    description,
    openGraph: { title, description, url },
    alternates: { canonical: url },
  };
}

const imageMap: Record<string, string> = {
  "dolgovremennaya-ukladka": "/images/services/ukladka.jpg",
  "arhitektura-brovej": "/images/services/arhitektura.jpg",
  "okrashivanie-brovej": "/images/services/okrashivanie.jpg",
  "laminirovanie-resnic": "/images/services/laminirovanie.jpg",
  "muzhskoe-oformlenie": "/images/services/muzhskoe.jpg",
  "osvetlenie-brovej": "/images/services/osvetlenie.jpg",
  "combo-brovi-lami": "/images/services/kombo.jpg",
  "narashhivanie-resnic": "/images/services/narashivanie.jpg",
  "korrekciya-narashhivaniya": "/images/services/korrekciya.jpg",
  "snyatie-narashhivaniya": "/images/services/snyatie.jpg",
};

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const imgSrc = imageMap[service.slug] || `/images/services/${service.slug}.jpg`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@type": "BeautySalon", name: "Август" },
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

      <section className="py-[88px] px-6">
        <div className="max-w-[1020px] mx-auto">
          {/* Hero photo */}
          <FadeIn>
            <div className="rounded-xl overflow-hidden shadow-soft mb-12">
              <OptionalImage
                src={imgSrc}
                alt={service.name}
                aspectRatio="16/9"
                radius="12px"
                placeholderText="Фото скоро"
              />
            </div>
          </FadeIn>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
            {/* Left: service info */}
            <FadeIn>
              <div>
                <p className="eyebrow mb-[14px]">Мастер {service.master}</p>
                <h1 className="heading-section mb-[14px]" style={{ fontSize: "clamp(28px, 3.5vw, 34px)" }}>
                  {service.name}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[13px] font-normal text-stone">{service.duration}</span>
                  <span className="text-[13px] text-stone">·</span>
                  <span className="font-display text-[24px] font-light text-gold-hover">{service.price}</span>
                </div>
                <a
                  href={contacts.yclients}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[14px] font-medium py-[13px] px-8 bg-gold text-white rounded-sm hover:bg-gold-hover hover:shadow-gold-glow transition-all"
                >
                  Записаться к {service.master === "Татьяна" ? "Татьяне" : "Марии"}
                </a>
              </div>
            </FadeIn>

            {/* Right: description + aftercare */}
            <FadeIn>
              <div>
                <p className="eyebrow mb-[14px]">О процедуре</p>
                <p className="text-[15px] font-light text-[#4A4440] leading-[1.7] mb-8">
                  {service.description}
                </p>

                {service.aftercare && (
                  <>
                    <p className="eyebrow mb-[14px]">Уход после процедуры</p>
                    <ul className="space-y-[10px]">
                      {service.aftercare.split(". ").filter(Boolean).map((tip, i) => (
                        <li key={i} className="flex items-start gap-[10px] text-[14px] font-light text-[#4A4440] leading-[1.45]">
                          <span className="shrink-0 w-[18px] h-[18px] flex items-center justify-center bg-[rgba(197,164,126,0.12)] rounded-full mt-[2px] text-gold-hover text-[10px]">✓</span>
                          <span>{tip.replace(/\.$/, "")}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
