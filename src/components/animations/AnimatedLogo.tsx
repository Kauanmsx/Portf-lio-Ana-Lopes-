"use client";

import { motion } from "framer-motion";
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
  const lineAnimation = animated
    ? {
        pathLength: [0, 1],
        opacity: [0.2, 1],
      }
    : { pathLength: 1, opacity: 1 };

  return (
    <div className={`brand-logo ${compact ? "brand-logo-compact" : ""} ${light ? "brand-logo-light" : ""}`}>
      <div className="brand-mark" aria-hidden="true">
        <motion.svg viewBox="0 0 86 86" role="img" aria-label="Monograma floral AL">
          <motion.path
            d="M13 55C25 49 31 39 35 22C40 39 47 50 62 58C48 60 39 66 31 78C29 66 23 59 13 55Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={animated ? { pathLength: 0, opacity: 0 } : false}
            animate={lineAnimation}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
          <motion.path
            d="M52 18C63 24 69 34 70 48C59 43 53 33 52 18Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            initial={animated ? { pathLength: 0, opacity: 0 } : false}
            animate={lineAnimation}
            transition={{ delay: 0.25, duration: 1.05, ease: "easeInOut" }}
          />
          <motion.text
            x="42"
            y="55"
            textAnchor="middle"
            className="brand-initials"
            initial={animated ? { opacity: 0, y: 4 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animated ? 0.75 : 0, duration: 0.45 }}
          >
            AL
          </motion.text>
        </motion.svg>
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
