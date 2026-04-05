"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { contacts } from "@/data/contacts";

const nav = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/about", label: "О мастере" },
  { href: "/otzyvy", label: "Отзывы" },
  { href: "/courses", label: "Обучение" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] h-16 flex items-center justify-between px-6 md:px-8 bg-[rgba(250,247,242,0.92)] backdrop-blur-[16px] border-b border-[rgba(42,36,32,0.05)]">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Август"
          width={120}
          height={28}
          className="h-7 w-auto"
          priority
        />
      </Link>

      <nav className="hidden lg:flex items-center gap-7">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[13px] font-normal text-[#4A4440] hover:text-gold-hover transition-colors duration-300"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={contacts.yclients}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium py-[9px] px-6 border border-gold bg-transparent text-gold-hover rounded-sm hover:bg-gold hover:text-white transition-all duration-300"
        >
          Записаться
        </a>
      </nav>

      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden p-2 text-ink"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" />
          )}
        </svg>
      </button>

      {open && (
        <div className="fixed top-16 left-0 right-0 lg:hidden bg-cream border-t border-petal">
          <div className="px-6 py-5 space-y-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-[15px] font-normal text-[#4A4440] hover:text-gold-hover transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contacts.yclients}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-[14px] font-medium bg-gold hover:bg-gold-hover text-white rounded-sm px-6 py-[13px] transition-all mt-4"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
