"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import type { SiteImage } from "@/src/data/images";

type ImageWithFallbackProps = {
  image: SiteImage;
  className?: string;
  priority?: boolean;
  placeholderLabel?: string;
};

export function ImageWithFallback({
  image,
  className = "",
  priority = false,
  placeholderLabel,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);
  const showDevLabel = process.env.NODE_ENV === "development";
  const style = { "--image-fit": image.fit ?? "cover" } as CSSProperties;

  if (failed) {
    return (
      <div
        className={`image-fallback ${className}`}
        role="img"
        aria-label={image.alt}
        style={style}
      >
        <span className="fallback-monogram">AL</span>
        {showDevLabel ? (
          <small>{placeholderLabel ?? image.src.replace("/images/", "")}</small>
        ) : null}
      </div>
    );
  }

  return (
    <img
      className={className}
      src={image.src}
      alt={image.alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      style={{ objectFit: image.fit ?? "cover" }}
      onError={() => setFailed(true)}
    />
  );
}
