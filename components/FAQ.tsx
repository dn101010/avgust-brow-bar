"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faq";

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-petal">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-[18px] font-normal text-ink pr-4">{item.question}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C5A47E"
          strokeWidth="1.5"
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 font-body text-[14px] font-light text-stone leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <FaqRow key={i} item={item} />
      ))}
    </div>
  );
}
