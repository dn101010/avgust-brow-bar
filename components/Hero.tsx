import { contacts } from "@/data/contacts";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #3a2f28 0%, #2a2420 30%, #1f1b18 60%, #2e2520 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(197,164,126,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(212,196,176,0.06) 0%, transparent 50%)",
        }}
      />
      <div className="relative z-[2] text-center max-w-[640px] px-6 animate-[fu_1s_ease-out_forwards] opacity-0 translate-y-5">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 py-[5px] px-4 border border-[rgba(197,164,126,0.3)] rounded-full text-[11px] tracking-[2px] uppercase text-gold mb-7">
          <span className="w-[5px] h-[5px] bg-gold rounded-full" />
          Хамовники, Москва
        </div>

        <h1 className="font-display text-white leading-[1.1] tracking-[-0.5px]" style={{ fontSize: "clamp(38px, 5.5vw, 60px)", fontWeight: 300 }}>
          Натуральная<br />красота <em className="italic text-gold">бровей</em>
        </h1>

        <p className="text-[16px] font-light leading-[1.65] text-[rgba(255,255,255,0.55)] max-w-[440px] mx-auto mt-[18px] mb-9">
          Студия Август — пространство, где забота о бровях и ресницах становится ритуалом. Мягкие составы, авторский кофе и тишина, когда вам нужна тишина.
        </p>

        <div className="flex justify-center gap-[14px] flex-wrap">
          <a
            href={contacts.yclients}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[14px] font-medium py-[13px] px-8 bg-gold text-white rounded-sm hover:bg-gold-hover hover:shadow-gold-glow transition-all max-w-[260px] w-full sm:w-auto text-center"
          >
            Записаться онлайн
          </a>
          <a
            href="/uslugi"
            className="inline-block text-[14px] font-normal py-[13px] px-8 bg-transparent text-[rgba(255,255,255,0.65)] border border-[rgba(255,255,255,0.18)] rounded-sm hover:border-[rgba(255,255,255,0.45)] hover:text-white transition-all max-w-[260px] w-full sm:w-auto text-center"
          >
            Услуги и цены
          </a>
        </div>
      </div>
    </section>
  );
}
