"use client";

import { contacts } from "@/data/contacts";

export default function MobileBookingButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-sm border-t border-border p-3">
      <a
        href={contacts.yclients}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-accent hover:bg-accent-hover text-white text-center px-6 py-3.5 rounded-lg font-medium transition-colors"
      >
        Записаться онлайн
      </a>
    </div>
  );
}
