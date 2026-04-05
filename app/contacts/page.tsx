import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import { contacts, location } from "@/data/contacts";

export const metadata: Metadata = {
  title: "Контакты — Август, Фрунзенская наб. 30с5, Москва",
  description:
    "Адрес, как добраться, бесплатная парковка. 5 мин от м. Фрунзенская.",
};

export default function ContactsPage() {
  return (
    <>
      <div className="max-w-[1020px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Контакты" }]} />
      </div>

      <section className="py-16 lg:py-22 px-6">
        <div className="max-w-[1020px] mx-auto">
          <FadeIn>
            <p className="eyebrow mb-4">Контакты</p>
            <h1
              className="heading-section"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Как нас найти
            </h1>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-[20px] font-normal text-ink mb-3">
                    Адрес
                  </h2>
                  <p className="font-body text-[15px] font-light text-ink-soft">
                    {location.address}
                  </p>
                  <p className="font-body text-[13px] font-normal text-stone mt-1">
                    {location.floor}
                  </p>
                  <p className="font-body text-[13px] font-normal text-stone mt-1">
                    {location.landmark}
                  </p>
                  <p className="font-body text-[13px] font-normal text-stone mt-1">
                    м. {location.metro}, {location.metroWalk} пешком
                  </p>
                  <p className="font-body text-[13px] font-normal text-stone mt-1">
                    Парковка: {location.parking.toLowerCase()}
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-[20px] font-normal text-ink mb-3">
                    Часы работы
                  </h2>
                  <p className="font-body text-[15px] font-light text-ink-soft">
                    {location.hours}
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-[20px] font-normal text-ink mb-3">
                    Телефон
                  </h2>
                  <a
                    href={contacts.phonePrimaryHref}
                    className="font-body text-[15px] font-light text-ink-soft hover:text-gold transition-colors"
                  >
                    {contacts.phonePrimary}
                  </a>
                </div>

                <div>
                  <h2 className="font-display text-[20px] font-normal text-ink mb-3">
                    Email
                  </h2>
                  <a
                    href={`mailto:${contacts.email}`}
                    className="font-body text-[15px] font-light text-ink-soft hover:text-gold transition-colors"
                  >
                    {contacts.email}
                  </a>
                </div>

                <div>
                  <h2 className="font-display text-[20px] font-normal text-ink mb-3">
                    Мессенджеры
                  </h2>
                  <div className="flex gap-3">
                    <a
                      href={contacts.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[14px] font-medium tracking-[0.4px] text-gold-hover border border-gold rounded-sm px-6 py-[9px] hover:bg-gold hover:text-white transition-all"
                    >
                      Telegram
                    </a>
                    <a
                      href={contacts.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[14px] font-medium tracking-[0.4px] text-gold-hover border border-gold rounded-sm px-6 py-[9px] hover:bg-gold hover:text-white transition-all"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div>
                  <a
                    href={contacts.yclients}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all"
                  >
                    Записаться через YCLIENTS
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-md p-6 sm:p-8 border border-petal">
                <h2 className="font-display text-[20px] font-normal text-ink mb-6">
                  Написать нам
                </h2>
                <ContactForm />
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-12 rounded-md overflow-hidden border border-petal">
              <iframe
                src="https://yandex.ru/map-widget/v1/?pt=37.5780,55.7282&z=16&l=map"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Расположение студии Август"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
