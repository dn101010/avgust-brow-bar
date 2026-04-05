import Link from "next/link";
import OptionalImage from "./OptionalImage";

interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
  duration: string;
  slug: string;
  image?: string;
}

export default function ServiceCard({ icon, name, description, duration, slug, image }: ServiceCardProps) {
  const imgSrc = image || `/images/services/${slug.replace(/-/g, "")}.jpg`;

  // Map slug to image filename per ФОТО-ИНСТРУКЦИЯ
  const imageMap: Record<string, string> = {
    "dolgovremennaya-ukladka": "/images/services/ukladka.jpg",
    "arhitektura-brovej": "/images/services/arhitektura.jpg",
    "okrashivanie-brovej": "/images/services/okrashivanie.jpg",
    "laminirovanie-resnic": "/images/services/laminirovanie.jpg",
    "muzhskoe-oformlenie": "/images/services/muzhskoe.jpg",
    "osvetlenie-brovej": "/images/services/osvetlenie.jpg",
    "combo-brovi-lami": "/images/services/kombo.jpg",
    "narashhivanie-resnic": "/images/services/narashivanie.jpg",
    "korrekciya-narashhivaniya": "/images/services/korrekciya.jpg",
    "snyatie-narashhivaniya": "/images/services/snyatie.jpg",
  };

  const resolvedImg = imageMap[slug] || imgSrc;

  return (
    <Link
      href={`/uslugi/${slug}`}
      className="group relative bg-white border border-petal rounded-lg overflow-hidden transition-all duration-[350ms] cursor-pointer hover:border-bloom hover:shadow-standard hover:-translate-y-[3px] block"
    >
      {/* Gold top line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] z-10" style={{ background: "linear-gradient(90deg, transparent, #C5A47E, transparent)" }} />

      {/* Photo */}
      <OptionalImage
        src={resolvedImg}
        alt={name}
        aspectRatio="3/2"
        radius="8px 8px 0 0"
        placeholderText="Фото скоро"
      />

      {/* Content */}
      <div className="p-7">
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
      </div>
    </Link>
  );
}
