"use client";

import { siteConfig } from "@/src/config/site";

type AnimatedLogoProps = {
  compact?: boolean;
  animated?: boolean;
  light?: boolean;
};

export function AnimatedLogo({
  compact = false,
  animated = false,
  light = false,
}: AnimatedLogoProps) {
  return (
    <div
      className={`brand-logo ${compact ? "brand-logo-compact" : ""} ${
        animated ? "brand-logo-animated" : ""
      } ${light ? "brand-logo-light" : ""}`}
    >
      <div className="brand-mark" aria-hidden="true">
        <img src="/images/logo-mark.png" alt="" loading="eager" decoding="async" />
      </div>
      <div className="brand-copy">
        <strong>{siteConfig.name}</strong>
        {!compact ? (
          <>
            <span>{siteConfig.title}</span>
            <small>{siteConfig.crbm}</small>
          </>
        ) : null}
      </div>
    </div>
  );
}
