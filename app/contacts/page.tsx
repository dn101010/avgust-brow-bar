import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import { contacts, location } from "@/data/contacts";

export const metadata: Metadata = {
  title: "Контакты Avgust Brow Bar | Хамовники, м. Фрунзенская",
  description:
    "Адрес, как добраться, бесплатная парковка. 5 мин от м. Фрунзенская. Запись онлайн и по телефону.",
};

export default function ContactsPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Контакты" }]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary text-center">
              Контакты
            </h1>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-primary mb-3">
                    Адрес
                  </h2>
                  <p className="text-text-main">
                    {location.district}, {location.city}
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    м. {location.metro}, {location.metroWalk} пешком
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    {location.parking}
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-semibold text-primary mb-3">
                    Телефоны
                  </h2>
                  <div className="space-y-2">
                    <a
                      href={contacts.phonePrimaryHref}
                      className="block text-text-main hover:text-accent transition-colors font-medium"
                    >
                      {contacts.phonePrimary}
                    </a>
                    <a
                      href={contacts.phoneSecondaryHref}
                      className="block text-text-main hover:text-accent transition-colors font-medium"
                    >
                      {contacts.phoneSecondary}
                    </a>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-semibold text-primary mb-3">
                    Email
                  </h2>
                  <a
                    href={`mailto:${contacts.email}`}
                    className="text-text-main hover:text-accent transition-colors"
                  >
                    {contacts.email}
                  </a>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-semibold text-primary mb-3">
                    Мессенджеры
                  </h2>
                  <div className="flex gap-4">
                    <a
                      href={contacts.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
                    >
                      Telegram
                    </a>
                    <a
                      href={contacts.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-semibold text-primary mb-3">
                    Онлайн-запись
                  </h2>
                  <a
                    href={contacts.yclients}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
                  >
                    Записаться через YCLIENTS
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border">
                <h2 className="font-heading text-xl font-semibold text-primary mb-6">
                  Написать нам
                </h2>
                <ContactForm />
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-12 rounded-2xl overflow-hidden border border-border">
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
          </FadeIn>
        </div>
      </section>
    </>
  );
}
