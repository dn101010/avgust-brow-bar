import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
  duration: string;
  slug: string;
}

export default function ServiceCard({ icon, name, description, duration, slug }: ServiceCardProps) {
  return (
    <Link
      href={`/uslugi/${slug}`}
      className="group relative bg-white border border-petal rounded-lg p-7 sm:p-[28px_28px_28px_28px] pt-9 transition-all duration-[350ms] cursor-pointer overflow-hidden hover:border-bloom hover:shadow-standard hover:-translate-y-[3px] block"
    >
      {/* Gold top line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms]" style={{ background: "linear-gradient(90deg, transparent, #C5A47E, transparent)" }} />

      <div className="w-11 h-11 flex items-center justify-center bg-[rgba(197,164,126,0.12)] rounded-lg mb-5 text-[20px] text-gold-hover">
        {icon}
      </div>

      <h3 className="font-display text-[20px] font-normal text-ink leading-[1.25] mb-[10px]">
        {name}
      </h3>
      <p className="text-[14px] font-light leading-[1.55] text-stone mb-[18px]">
        {description}
      </p>

      <div className="flex items-center justify-between pt-[18px] border-t border-linen">
        <span className="text-[12px] text-stone">{duration}</span>
        <span className="text-[13px] font-medium text-gold-hover">
          Подробнее →
        </span>
      </div>
    </Link>
  );
}
