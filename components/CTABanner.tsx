import { contacts } from "@/data/contacts";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Готовы записаться?",
  subtitle = "Выберите удобное время онлайн или напишите в мессенджер",
}: CTABannerProps) {
  return (
    <section className="bg-ink py-22 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(197,164,126,0.10) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-[640px] mx-auto text-center relative z-10">
        <p className="eyebrow mb-5">Запись</p>
        <h2
          className="font-display font-light text-white leading-[1.15]"
          style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
        >
          {title}
        </h2>
        <p className="mt-4 font-body text-[16px] font-light text-[rgba(255,255,255,0.55)]">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={contacts.yclients}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all"
          >
            Выбрать время
          </a>
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[14px] font-medium tracking-[0.4px] text-[rgba(255,255,255,0.65)] border border-[rgba(255,255,255,0.18)] rounded-sm px-8 py-[13px] hover:border-[rgba(255,255,255,0.40)] hover:text-white transition-all"
          >
            Написать в Telegram
          </a>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center text-[rgba(255,255,255,0.40)] font-body text-[13px] font-light">
          <a href={contacts.phonePrimaryHref} className="hover:text-white transition-colors">
            {contacts.phonePrimary}
          </a>
          <a href={`mailto:${contacts.email}`} className="hover:text-white transition-colors">
            {contacts.email}
          </a>
        </div>
      </div>
    </section>
  );
}
