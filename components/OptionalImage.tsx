"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  aspectRatio?: string;
  radius?: string;
  placeholderText?: string;
  dark?: boolean;
}

export default function OptionalImage({
  src,
  alt,
  aspectRatio = "3/2",
  radius = "8px",
  placeholderText = "",
  dark = false,
}: Props) {
  const [failed, setFailed] = useState(false);

  const placeholderBg = dark
    ? "linear-gradient(135deg, rgba(197,164,126,0.15) 0%, rgba(197,164,126,0.05) 100%)"
    : "linear-gradient(135deg, #F3EDE4 0%, #E8DFD4 50%, #D4C4B0 100%)";

  return (
    <div
      style={{
        aspectRatio,
        borderRadius: radius,
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          style={{ objectFit: "cover" }}
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: placeholderBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="font-display text-[14px] italic text-stone opacity-50">
            {placeholderText}
          </span>
        </div>
      )}
    </div>
  );
}
