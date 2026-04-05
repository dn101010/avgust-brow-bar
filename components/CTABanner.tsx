import { contacts } from "@/data/contacts";

export default function CTABanner() {
  return (
    <section
      className="relative py-[72px] px-6 text-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2e2520, #1f1b18)" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(197,164,126,0.08), transparent 60%)" }}
      />
      <div className="relative z-[1] max-w-[500px] mx-auto">
        <h2 className="font-display leading-[1.2] text-white mb-[14px]" style={{ fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 300 }}>
          Запишитесь на<br />удобное время
        </h2>
        <p className="text-[15px] font-light text-[rgba(255,255,255,0.45)] mb-7">
          Онлайн-запись 24/7. Бесплатный паркинг.
        </p>
        <a
          href={contacts.yclients}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[14px] font-medium py-[13px] px-8 bg-gold text-white rounded-sm hover:bg-gold-hover hover:shadow-gold-glow transition-all"
        >
          Выбрать время
        </a>
        <div className="flex justify-center gap-7 mt-7 flex-wrap">
          <span className="text-[13px] text-[rgba(255,255,255,0.35)]">
            м. Фрунзенская, 5 мин
          </span>
          <span className="text-[13px] text-[rgba(255,255,255,0.35)]">
            ☎ {contacts.phonePrimary}
          </span>
        </div>
      </div>
    </section>
  );
}
