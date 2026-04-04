"use client";

import Link from "next/link";
import { useState } from "react";
import { contacts } from "@/data/contacts";

const nav = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/price", label: "Цены" },
  { href: "/otzyvy", label: "Отзывы" },
  { href: "/about", label: "О мастере" },
  { href: "/contacts", label: "Контакты" },
  { href: "/blog", label: "Блог" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="font-heading text-2xl font-bold text-primary">
            Avgust
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-main hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={contacts.yclients}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Записаться
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-primary"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-text-main hover:text-primary transition-colors text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contacts.yclients}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg text-center text-sm font-medium transition-colors mt-4"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
