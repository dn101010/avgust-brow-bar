import Link from "next/link";
import { domain } from "@/data/contacts";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: domain },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${domain}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="font-body text-[12px] font-normal text-stone py-4">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-gold transition-colors">
              Главная
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <span className="mx-1 text-petal">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-gold transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
