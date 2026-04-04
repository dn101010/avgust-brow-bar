import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeIn from "@/components/FadeIn";
import { blogPosts } from "@/data/faq";

export const metadata: Metadata = {
  title: "Блог о бровях и ресницах | Советы от Avgust Brow Bar",
  description:
    "Полезные статьи: уход за бровями, тренды, советы эксперта. Студия Avgust, Москва.",
};

export default function BlogPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Блог" }]} />
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary text-center">
              Блог
            </h1>
            <p className="mt-4 text-text-muted text-center text-lg max-w-2xl mx-auto">
              Полезные статьи об уходе за бровями и ресницами от мастера с опытом 4000+ работ
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const dateFormatted = new Date(post.date).toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              return (
                <FadeIn key={post.slug}>
                  <article className="bg-white rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                    <time className="text-text-muted text-xs" dateTime={post.date}>
                      {dateFormatted}
                    </time>
                    <h2 className="font-heading text-xl font-semibold text-primary mt-3">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-text-muted text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-6 inline-block text-accent hover:text-accent-hover font-medium text-sm transition-colors"
                    >
                      Читать далее
                    </Link>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
