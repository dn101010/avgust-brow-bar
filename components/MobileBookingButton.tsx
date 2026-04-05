"use client";

import { contacts } from "@/data/contacts";

export default function MobileBookingButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[rgba(250,247,242,0.95)] backdrop-blur-[16px] border-t border-petal p-3">
      <a
        href={contacts.yclients}
        target="_blank"
        rel="noopener noreferrer"
        className="block font-body text-[14px] font-medium tracking-[0.4px] bg-gold hover:bg-gold-hover text-white text-center rounded-sm px-6 py-[13px] transition-colors"
      >
        Записаться онлайн
      </a>
    </div>
  );
}
