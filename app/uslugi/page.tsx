import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Услуги студии Avgust Brow Bar | Брови и ресницы Москва",
  description:
    "Все услуги: долговременная укладка, архитектура, окрашивание бровей, ламинирование ресниц, мужское оформление. Хамовники, Москва.",
};

export default function UslugiPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Услуги" }]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary text-center">
              Услуги
            </h1>
            <p className="mt-4 text-text-muted text-center text-lg max-w-2xl mx-auto">
              Профессиональный уход за бровями и ресницами. Мягкие составы, индивидуальный подход, комфортная атмосфера.
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

      <CTABanner />
    </>
  );
}
