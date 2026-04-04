import { contacts } from "@/data/contacts";

interface HeroProps {
  title: string;
  subtitle: string;
  showCta?: boolean;
}

export default function Hero({ title, subtitle, showCta = true }: HeroProps) {
  return (
    <section className="relative bg-primary min-h-[70vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-32">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed">
          {subtitle}
        </p>
        {showCta && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contacts.yclients}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Записаться онлайн
            </a>
            <a
              href={contacts.phonePrimaryHref}
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              {contacts.phonePrimary}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
