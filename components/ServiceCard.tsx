import Link from "next/link";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className="group relative bg-white border border-petal rounded-md p-7 sm:p-9 hover:border-bloom hover:shadow-standard hover:-translate-y-[3px] transition-all block"
    >
      {/* Gold top line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(90deg, transparent, #C5A47E, transparent)" }} />

      {/* Icon */}
      <div className="w-11 h-11 rounded-md bg-gold-light flex items-center justify-center mb-5">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A47E" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        </svg>
      </div>

      <h3 className="font-display text-[20px] font-normal text-ink leading-[1.25]">
        {service.name}
      </h3>
      <p className="mt-3 font-body text-[14px] font-light text-stone leading-relaxed">
        {service.description}
      </p>

      {service.master !== "Татьяна" && (
        <p className="mt-2 font-body text-[12px] font-normal text-gold tracking-[0.3px]">
          Мастер {service.master}
        </p>
      )}

      <div className="mt-5 pt-4 border-t border-linen flex items-center justify-between">
        <span className="font-body text-[12px] font-normal text-stone tracking-[0.3px]">
          {service.duration}
        </span>
        <span className="font-body text-[14px] font-medium text-gold-hover tracking-[0.4px] group-hover:underline">
          {service.price} →
        </span>
      </div>
    </Link>
  );
}
