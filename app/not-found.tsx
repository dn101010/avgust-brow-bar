import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center px-6">
      <div className="max-w-[520px] mx-auto">
        <h1 className="font-display text-[64px] font-light text-ink">404</h1>
        <p className="mt-4 font-body text-[16px] font-light text-stone">
          Страница не найдена
        </p>
        <Link
          href="/"
          className="mt-8 inline-block font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-8 py-[13px] hover:shadow-gold-glow hover:-translate-y-px transition-all"
        >
          На главную
        </Link>
      </div>
    </section>
  );
}
