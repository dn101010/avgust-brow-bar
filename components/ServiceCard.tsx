import Link from "next/link";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg transition-shadow">
      <h3 className="font-heading text-xl font-semibold text-primary">
        {service.name}
      </h3>
      <p className="mt-3 text-text-muted text-sm leading-relaxed">
        {service.short}
      </p>
      <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
        <span>{service.duration}</span>
        <span className="text-accent font-medium">{service.priceFrom}</span>
      </div>
      <Link
        href={`/uslugi/${service.slug}`}
        className="mt-6 inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
      >
        Подробнее
      </Link>
    </div>
  );
}
