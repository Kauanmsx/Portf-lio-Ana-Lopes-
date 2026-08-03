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
        <motion.svg viewBox="0 0 96 96" role="img" aria-label="Monograma floral AL">
          <motion.path
            className="brand-ring"
            d="M25 32C31 14 56 8 73 21C86 31 91 49 84 66"
            initial={animated ? { pathLength: 0, opacity: 0 } : false}
            animate={lineAnimation}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
          <motion.path
            className="brand-petal"
            d="M25 51C17 43 17 34 22 28C31 35 34 44 25 51Z"
            initial={animated ? { pathLength: 0, opacity: 0 } : false}
            animate={lineAnimation}
            transition={{ delay: 0.18, duration: 1.05, ease: "easeInOut" }}
          />
          <motion.path
            className="brand-petal"
            d="M34 49C26 39 28 29 36 23C44 33 44 43 34 49Z"
            initial={animated ? { pathLength: 0, opacity: 0 } : false}
            animate={lineAnimation}
            transition={{ delay: 0.28, duration: 1.05, ease: "easeInOut" }}
          />
          <motion.path
            className="brand-petal"
            d="M43 52C38 41 41 33 49 29C54 41 51 49 43 52Z"
            initial={animated ? { pathLength: 0, opacity: 0 } : false}
            animate={lineAnimation}
            transition={{ delay: 0.36, duration: 1.05, ease: "easeInOut" }}
          />
          <motion.path
            className="brand-stem"
            d="M17 63C28 59 37 56 48 45M32 58C25 56 19 57 13 62C20 67 27 67 32 58ZM42 53C44 45 49 39 55 36C56 45 52 52 42 53Z"
            initial={animated ? { pathLength: 0, opacity: 0 } : false}
            animate={lineAnimation}
            transition={{ delay: 0.42, duration: 1.05, ease: "easeInOut" }}
          />
          <motion.text
            x="45"
            y="58"
            textAnchor="middle"
            className="brand-initials brand-letter-a"
            initial={animated ? { opacity: 0, y: 4 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animated ? 0.75 : 0, duration: 0.45 }}
          >
            A
          </motion.text>
          <motion.text
            x="64"
            y="68"
            textAnchor="middle"
            className="brand-initials brand-letter-l"
            initial={animated ? { opacity: 0, y: 4 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: animated ? 0.82 : 0, duration: 0.45 }}
          >
            L
          </motion.text>
          <motion.circle
            className="brand-dot"
            cx="82"
            cy="63"
            r="2.6"
            initial={animated ? { scale: 0, opacity: 0 } : false}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: animated ? 1 : 0, duration: 0.3 }}
          />
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
