import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeIn from "@/components/FadeIn";
import { contacts, location } from "@/data/contacts";

export const metadata: Metadata = {
  title: "Контакты — Август, Фрунзенская наб. 30с5, Москва",
  description:
    "Адрес, как добраться, часы работы 12:00-21:00. 5 мин от м. Фрунзенская. Бесплатная парковка.",
  openGraph: {
    title: "Контакты — Август, Фрунзенская наб. 30с5, Москва",
    description: "Адрес, как добраться, часы работы 12:00-21:00. 5 мин от м. Фрунзенская. Бесплатная парковка.",
    url: "https://avgustbrows.ru/contacts",
  },
  alternates: { canonical: "https://avgustbrows.ru/contacts" },
};

export default function ContactsPage() {
  return (
    <>
      <div className="max-w-[1020px] mx-auto px-6">
        <Breadcrumbs items={[{ label: "Контакты" }]} />
      </div>

      <section className="py-[88px] px-6">
        <div className="text-center max-w-[520px] mx-auto mb-14">
          <FadeIn>
            <p className="eyebrow mb-[14px]">Контакты</p>
            <h1 className="heading-section mb-[14px]" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>
              Как нас найти
            </h1>
          </FadeIn>
        </div>

        <div className="max-w-[1020px] mx-auto">
          <FadeIn>
            <div className="bg-white rounded-lg border border-petal p-8 sm:p-10 mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <div>
                  <h2 className="font-display text-[20px] font-normal text-ink mb-3">Адрес</h2>
                  <p className="text-[15px] font-light text-[#4A4440]">{location.address}</p>
                  <p className="text-[13px] font-normal text-stone mt-1">{location.floor}</p>
                  <p className="text-[13px] font-normal text-stone mt-1">{location.landmark}</p>
                  <p className="text-[13px] font-normal text-stone mt-1">м. {location.metro}, {location.metroWalk} пешком</p>
                  <p className="text-[13px] font-normal text-stone mt-1">Парковка: {location.parking.toLowerCase()}</p>
                </div>

                <div>
                  <h2 className="font-display text-[20px] font-normal text-ink mb-3">Часы работы</h2>
                  <p className="text-[15px] font-light text-[#4A4440]">{location.hours}</p>

                  <h2 className="font-display text-[20px] font-normal text-ink mb-3 mt-8">Телефон</h2>
                  <a href={contacts.phonePrimaryHref} className="text-[15px] font-light text-[#4A4440] hover:text-gold transition-colors">
                    {contacts.phonePrimary}
                  </a>

                  <h2 className="font-display text-[20px] font-normal text-ink mb-3 mt-8">Email</h2>
                  <a href={`mailto:${contacts.email}`} className="text-[15px] font-light text-[#4A4440] hover:text-gold transition-colors">
                    {contacts.email}
                  </a>
                </div>

                <div>
                  <h2 className="font-display text-[20px] font-normal text-ink mb-3">Мессенджеры</h2>
                  <div className="flex gap-3 mb-8">
                    <a
                      href={contacts.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-medium text-gold-hover border border-gold rounded-sm px-6 py-[9px] hover:bg-gold hover:text-white transition-all"
                    >
                      Telegram
                    </a>
                    <a
                      href={contacts.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-medium text-gold-hover border border-gold rounded-sm px-6 py-[9px] hover:bg-gold hover:text-white transition-all"
                    >
                      WhatsApp
                    </a>
                  </div>

                  <h2 className="font-display text-[20px] font-normal text-ink mb-3">Онлайн-запись</h2>
                  <a
                    href={contacts.yclients}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[14px] font-medium py-[13px] px-8 bg-gold text-white rounded-sm hover:bg-gold-hover hover:shadow-gold-glow transition-all"
                  >
                    Записаться через YCLIENTS
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-lg overflow-hidden border border-petal">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.582313%2C55.725103&z=16&pt=37.582313,55.725103,pm2rdm"
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
