import { trustItems } from "@/data/contacts";

export default function TrustBar() {
  return (
    <section className="bg-warm-white border-b border-petal py-11 px-6">
      <div className="max-w-[1020px] mx-auto flex flex-wrap justify-center gap-10">
        {trustItems.map((item, i) => (
          <div key={i} className="text-center">
            <p className="font-display text-[32px] font-light text-gold-hover leading-none">
              {item.number}
            </p>
            <p className="font-body text-[12px] font-normal text-stone mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
