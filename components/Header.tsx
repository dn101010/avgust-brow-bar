"use client";

import Link from "next/link";
import { useState } from "react";
import { contacts } from "@/data/contacts";

const nav = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/price", label: "Цены" },
  { href: "/about", label: "О мастерах" },
  { href: "/courses", label: "Обучение" },
  { href: "/otzyvy", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[rgba(250,247,242,0.92)] backdrop-blur-[16px] border-b border-[rgba(42,36,32,0.05)]">
      <div className="max-w-[1020px] mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-[20px] font-normal tracking-[3px] uppercase text-ink"
        >
          Август
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[13px] font-normal tracking-[0.4px] text-ink-soft hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={contacts.yclients}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block font-body text-[14px] font-medium tracking-[0.4px] text-gold-hover border border-gold rounded-sm px-6 py-[9px] hover:bg-gold hover:text-white transition-all"
        >
          Записаться
        </a>

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
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-petal">
          <div className="px-6 py-5 space-y-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-body text-[15px] font-normal text-ink-soft hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contacts.yclients}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white rounded-sm px-6 py-[13px] transition-colors mt-4"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
