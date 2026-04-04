"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faq";

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-primary pr-4">{item.question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 text-accent transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-text-muted text-sm leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y-0">
      {items.map((item, i) => (
        <FaqRow key={i} item={item} />
      ))}
    </div>
  );
}
