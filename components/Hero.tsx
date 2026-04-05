import { contacts } from "@/data/contacts";

export default function Hero() {
  return (
    <section className="relative bg-ink min-h-[85vh] flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(197,164,126,0.15) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 max-w-[640px] mx-auto px-6 py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[rgba(197,164,126,0.30)] rounded-full px-4 py-[5px] mb-8">
          <span className="w-[5px] h-[5px] rounded-full bg-gold" />
          <span className="font-body text-[11px] font-normal tracking-[2px] uppercase text-gold">
            Хамовники, Москва
          </span>
        </div>

        <h1 className="font-display font-light text-white leading-[1.10] tracking-[-0.5px]" style={{ fontSize: "clamp(38px, 5.5vw, 60px)" }}>
          Натуральная красота{" "}
          <em className="text-gold italic">бровей</em>
        </h1>

        <p className="mt-6 font-body text-[16px] font-light text-[rgba(255,255,255,0.55)] leading-relaxed max-w-md mx-auto">
          Профессиональное оформление бровей и ламинирование ресниц. 5000+ довольных клиентов.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={contacts.yclients}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all max-w-[260px] w-full sm:w-auto"
          >
            Записаться онлайн
          </a>
          <a
            href="/uslugi"
            className="font-body text-[14px] font-medium tracking-[0.4px] text-[rgba(255,255,255,0.65)] border border-[rgba(255,255,255,0.18)] rounded-sm px-8 py-[13px] hover:border-[rgba(255,255,255,0.40)] hover:text-white transition-all max-w-[260px] w-full sm:w-auto"
          >
            Услуги и цены
          </a>
        </div>
      </div>
    </section>
  );
}
