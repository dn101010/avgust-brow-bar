import { contacts } from "@/data/contacts";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Готовы преобразить свои брови?",
  subtitle = "Запишитесь онлайн или свяжитесь с нами — подберём удобное время",
}: CTABannerProps) {
  return (
    <section className="bg-accent/10 py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary">
          {title}
        </h2>
        <p className="mt-4 text-text-muted text-lg">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={contacts.yclients}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Записаться онлайн
          </a>
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
