import type { Review } from "@/data/reviews";

export default function TestimonialCard({ review }: { review: Review }) {
  const dateFormatted = new Date(review.date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#C5A47E"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-text-main text-sm leading-relaxed">{review.text}</p>
      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
        <div>
          <p className="font-medium text-primary text-sm">{review.name}</p>
          <p className="text-text-muted text-xs mt-0.5">{review.service}</p>
        </div>
        <time className="text-text-muted text-xs" dateTime={review.date}>
          {dateFormatted}
        </time>
      </div>
    </div>
  );
}
