import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h1 className="font-heading text-6xl font-bold text-primary">404</h1>
        <p className="mt-4 text-text-muted text-lg">
          Страница не найдена
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
        >
          На главную
        </Link>
      </div>
    </section>
  );
}
