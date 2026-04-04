import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { blogPosts } from "@/data/faq";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const dateFormatted = new Date(post.date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Блог", href: "/blog" },
            { label: post.title },
          ]}
        />
      </div>

      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <time className="text-text-muted text-sm" dateTime={post.date}>
              {dateFormatted}
            </time>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary mt-3">
              {post.title}
            </h1>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 prose prose-lg max-w-none text-text-main leading-relaxed [&_h2]:font-heading [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-primary [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2">
              <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />
            </div>
          </FadeIn>
        </div>
      </article>

      <CTABanner />
    </>
  );
}

function markdownToHtml(md: string): string {
  return md
    .trim()
    .split("\n\n")
    .map((block) => {
      block = block.trim();
      if (block.startsWith("### ")) return `<h3>${block.slice(4)}</h3>`;
      if (block.startsWith("## ")) return `<h2>${block.slice(3)}</h2>`;
      if (block.startsWith("- ")) {
        const items = block
          .split("\n")
          .filter((l) => l.startsWith("- "))
          .map((l) => `<li>${l.slice(2)}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }
      return `<p>${block.replace(/\n/g, " ")}</p>`;
    })
    .join("\n");
}
