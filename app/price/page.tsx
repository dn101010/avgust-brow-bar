import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { services } from "@/data/services";
import { contacts } from "@/data/contacts";

export const metadata: Metadata = {
  title: "Цены на оформление бровей и ресниц | Прайс Avgust Brow Bar",
  description:
    "Актуальный прайс-лист: оформление бровей, ламинирование ресниц, окрашивание. Хамовники, Москва.",
};

export default function PricePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Цены" }]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary text-center">
              Прайс-лист
            </h1>
            <p className="mt-4 text-text-muted text-center text-lg">
              Актуальные цены на услуги студии Avgust Brow Bar
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-12 bg-white rounded-2xl border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-bg-alt">
                    <th className="text-left px-6 py-4 font-heading font-semibold text-primary">
                      Услуга
                    </th>
                    <th className="text-center px-4 py-4 font-heading font-semibold text-primary">
                      Время
                    </th>
                    <th className="text-right px-6 py-4 font-heading font-semibold text-primary">
                      Цена
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, i) => (
                    <tr
                      key={service.id}
                      className={i < services.length - 1 ? "border-b border-border" : ""}
                    >
                      <td className="px-6 py-5">
                        <p className="font-medium text-primary text-sm">
                          {service.name}
                        </p>
                        <p className="text-text-muted text-xs mt-1">
                          {service.short}
                        </p>
                      </td>
                      <td className="text-center px-4 py-5 text-text-muted text-sm">
                        {service.duration}
                      </td>
                      <td className="text-right px-6 py-5 text-accent font-semibold text-sm">
                        {service.priceFrom}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-8 text-center">
              <p className="text-text-muted text-sm mb-6">
                Точную стоимость уточняйте при записи. Возможны комбо-процедуры.
              </p>
              <a
                href={contacts.yclients}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Записаться онлайн
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
