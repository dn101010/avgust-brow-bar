import Link from "next/link";
import Image from "next/image";
import { contacts, location } from "@/data/contacts";

export default function Footer() {
  return (
    <footer className="bg-ink pt-14 pb-9 px-6">
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-10 max-w-[1020px] mx-auto mb-10 pb-10 border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-[260px]">
          <Link href="/" className="block mb-3">
            <Image
              src="/logo-white.svg"
              alt="Август"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
          </Link>
          <p className="text-[13px] font-light text-[rgba(255,255,255,0.35)] leading-[1.55]">
            Студия бровей и ресниц в Хамовниках. Натуральная красота и профессиональный уход.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold tracking-[2px] uppercase text-[rgba(255,255,255,0.25)] mb-4">
            Услуги
          </h4>
          <Link href="/uslugi/dolgovremennaya-ukladka" className="block text-[13px] font-light text-[rgba(255,255,255,0.5)] hover:text-gold transition-colors mb-[10px]">Долговременная укладка</Link>
          <Link href="/uslugi/arhitektura-brovej" className="block text-[13px] font-light text-[rgba(255,255,255,0.5)] hover:text-gold transition-colors mb-[10px]">Архитектура бровей</Link>
          <Link href="/uslugi/okrashivanie-brovej" className="block text-[13px] font-light text-[rgba(255,255,255,0.5)] hover:text-gold transition-colors mb-[10px]">Окрашивание</Link>
          <Link href="/uslugi/laminirovanie-resnic" className="block text-[13px] font-light text-[rgba(255,255,255,0.5)] hover:text-gold transition-colors mb-[10px]">Ламинирование ресниц</Link>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold tracking-[2px] uppercase text-[rgba(255,255,255,0.25)] mb-4">
            Студия
          </h4>
          <Link href="/about" className="block text-[13px] font-light text-[rgba(255,255,255,0.5)] hover:text-gold transition-colors mb-[10px]">О мастере</Link>
          <Link href="/otzyvy" className="block text-[13px] font-light text-[rgba(255,255,255,0.5)] hover:text-gold transition-colors mb-[10px]">Отзывы</Link>
          <Link href="/blog" className="block text-[13px] font-light text-[rgba(255,255,255,0.5)] hover:text-gold transition-colors mb-[10px]">Блог</Link>
          <Link href="/courses" className="block text-[13px] font-light text-[rgba(255,255,255,0.5)] hover:text-gold transition-colors mb-[10px]">Обучение</Link>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold tracking-[2px] uppercase text-[rgba(255,255,255,0.25)] mb-4">
            Контакты
          </h4>
          <a href={contacts.phonePrimaryHref} className="block text-[13px] font-light text-[rgba(255,255,255,0.5)] hover:text-gold transition-colors mb-[10px]">{contacts.phonePrimary}</a>
          <a href={`mailto:${contacts.email}`} className="block text-[13px] font-light text-[rgba(255,255,255,0.5)] hover:text-gold transition-colors mb-[10px]">{contacts.email}</a>
          <a href={contacts.telegram} target="_blank" rel="noopener noreferrer" className="block text-[13px] font-light text-[rgba(255,255,255,0.5)] hover:text-gold transition-colors mb-[10px]">Telegram</a>
        </div>
      </div>
      <div className="max-w-[1020px] mx-auto flex justify-between items-center flex-wrap gap-3">
        <span className="text-[11px] font-light text-[rgba(255,255,255,0.2)]">
          {contacts.legal} ИНН {contacts.inn}
        </span>
        <div className="flex gap-3">
          <a href={contacts.telegram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-[rgba(255,255,255,0.08)] rounded-full text-[rgba(255,255,255,0.35)] text-[11px] hover:border-gold hover:text-gold transition-all">TG</a>
          <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-[rgba(255,255,255,0.08)] rounded-full text-[rgba(255,255,255,0.35)] text-[11px] hover:border-gold hover:text-gold transition-all">WA</a>
        </div>
      </div>
    </footer>
  );
}
